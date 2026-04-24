import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import slugify from 'slugify';

const DATA_PATH = path.join(process.cwd(), 'data', 'blogs.json');
const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');

export async function GET() {
  try {
    const data = await fs.readFile(DATA_PATH, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading blogs:', error);
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const excerpt = formData.get('excerpt') as string;
    const content = formData.get('content') as string || '';
    const author = formData.get('author') as string || 'Vyop Team';
    const metaTitle = formData.get('metaTitle') as string;
    const metaDescription = formData.get('metaDescription') as string;
    const imageFile = formData.get('image') as File | null;
    
    let imageUrl = '';
    
    if (imageFile && imageFile.size > 0) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `${Date.now()}-${imageFile.name.replace(/\s+/g, '-')}`;
      const filepath = path.join(UPLOAD_DIR, filename);
      await fs.writeFile(filepath, buffer);
      imageUrl = `/uploads/${filename}`;
    }

    const data = await fs.readFile(DATA_PATH, 'utf8');
    const blogs = JSON.parse(data);
    
    // Generate robust SEO slug
    let baseSlug = slugify(title, { lower: true, strict: true, remove: /[*+~.()'"!:@]/g });
    let slug = baseSlug;
    let counter = 1;
    while (blogs.some((b: any) => b.slug === slug)) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
    
    const blogWithId = {
      id: Date.now(),
      slug,
      title,
      category,
      excerpt,
      content,
      author,
      metaTitle,
      metaDescription,
      image: imageUrl,
      date: new Date().toISOString(), // Use ISO string for accurate SEO lastmod parsing
    };
    
    blogs.unshift(blogWithId);
    await fs.writeFile(DATA_PATH, JSON.stringify(blogs, null, 2));
    
    return NextResponse.json(blogWithId);
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

    const data = await fs.readFile(DATA_PATH, 'utf8');
    let blogs = JSON.parse(data);
    
    blogs = blogs.filter((b: any) => b.id !== parseInt(id));
    await fs.writeFile(DATA_PATH, JSON.stringify(blogs, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const formData = await request.formData();
    const id = formData.get('id') as string;
    
    const data = await fs.readFile(DATA_PATH, 'utf8');
    let blogs = JSON.parse(data);
    const index = blogs.findIndex((b: any) => b.id === parseInt(id));
    
    if (index === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    const imageFile = formData.get('image') as File | null;
    let imageUrl = blogs[index].image;

    if (imageFile && imageFile.size > 0) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `${Date.now()}-${imageFile.name.replace(/\s+/g, '-')}`;
      const filepath = path.join(UPLOAD_DIR, filename);
      await fs.writeFile(filepath, buffer);
      imageUrl = `/uploads/${filename}`;
    }

    // If title changed, we don't necessarily want to change the slug as it breaks SEO.
    // For now, keep the existing slug. If needed, we can add a 'custom slug' field later.

    blogs[index] = {
      ...blogs[index],
      title: formData.get('title') as string,
      category: formData.get('category') as string,
      excerpt: formData.get('excerpt') as string,
      content: formData.get('content') as string || blogs[index].content,
      author: formData.get('author') as string || blogs[index].author,
      metaTitle: formData.get('metaTitle') as string,
      metaDescription: formData.get('metaDescription') as string,
      image: imageUrl,
    };

    await fs.writeFile(DATA_PATH, JSON.stringify(blogs, null, 2));
    return NextResponse.json(blogs[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}
