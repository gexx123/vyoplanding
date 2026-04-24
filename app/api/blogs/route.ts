import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderBy, getDoc } from 'firebase/firestore';
import slugify from 'slugify';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const blogsRef = collection(db, 'blogs');
    const q = query(blogsRef, orderBy('date', 'desc'));
    const snapshot = await getDocs(q);
    
    const blogs = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error reading blogs:', error);
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Generate robust SEO slug
    let baseSlug = slugify(body.title, { lower: true, strict: true, remove: /[*+~.()'"!:@]/g });
    let slug = baseSlug;
    
    // Check for duplicate slugs
    const blogsRef = collection(db, 'blogs');
    const snapshot = await getDocs(blogsRef);
    const existingSlugs = snapshot.docs.map(d => d.data().slug);
    
    let counter = 1;
    while (existingSlugs.includes(slug)) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
    
    const newBlog = {
      slug,
      title: body.title,
      category: body.category || 'Business Tips',
      excerpt: body.excerpt || '',
      content: body.content || '',
      author: body.author || 'Vyop Team',
      authorTitle: body.authorTitle || 'Founder, Vyop',
      focusKeyword: body.focusKeyword || '',
      secondaryKeywords: body.secondaryKeywords || '',
      metaTitle: body.metaTitle || body.title,
      metaDescription: body.metaDescription || body.excerpt,
      image: body.image || '',
      imageAltText: body.imageAltText || body.title,
      status: body.status || 'Published',
      date: new Date().toISOString(),
    };
    
    const docRef = await addDoc(blogsRef, newBlog);
    
    return NextResponse.json({ id: docRef.id, ...newBlog });
  } catch (error) {
    console.error('Error saving blog:', error);
    return NextResponse.json({ error: 'Failed to save blog' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    const docRef = doc(db, 'blogs', id);
    await deleteDoc(docRef);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const id = body.id;
    
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    const docRef = doc(db, 'blogs', id);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    const existingData = docSnap.data();

    const updatedBlog = {
      title: body.title !== undefined ? body.title : existingData.title,
      category: body.category !== undefined ? body.category : existingData.category,
      excerpt: body.excerpt !== undefined ? body.excerpt : existingData.excerpt,
      content: body.content !== undefined ? body.content : existingData.content,
      author: body.author !== undefined ? body.author : existingData.author,
      authorTitle: body.authorTitle !== undefined ? body.authorTitle : existingData.authorTitle,
      focusKeyword: body.focusKeyword !== undefined ? body.focusKeyword : existingData.focusKeyword,
      secondaryKeywords: body.secondaryKeywords !== undefined ? body.secondaryKeywords : existingData.secondaryKeywords,
      metaTitle: body.metaTitle !== undefined ? body.metaTitle : existingData.metaTitle,
      metaDescription: body.metaDescription !== undefined ? body.metaDescription : existingData.metaDescription,
      image: body.image !== undefined ? body.image : existingData.image,
      imageAltText: body.imageAltText !== undefined ? body.imageAltText : existingData.imageAltText,
      status: body.status !== undefined ? body.status : existingData.status,
    };

    await updateDoc(docRef, updatedBlog);
    
    return NextResponse.json({ id, ...existingData, ...updatedBlog });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}
