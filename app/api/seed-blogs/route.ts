import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';

const initialBlogs = [
  {
    slug: 'voice-billing-app-india',
    title: 'Why Voice Billing is the Future for Kirana Stores in India',
    metaTitle: 'Voice Billing App India | Future of Kirana Stores',
    metaDescription: 'Discover why traditional accounting software is failing Indian retailers and how voice-powered billing apps are changing the game.',
    focusKeyword: 'voice billing app India',
    secondaryKeywords: 'kirana store billing, AI accountant',
    category: 'Technology',
    author: 'Vyop Team',
    authorTitle: 'Product',
    date: new Date().toISOString(),
    status: 'Published',
    excerpt: 'Typing takes too long when you have a line of customers. Voice billing allows you to speak items and generate bills instantly.',
    image: '/og-image.png',
    views: 0,
    content: `
      <h2>The Problem with Traditional Billing Software</h2>
      <p>For years, Indian shopkeepers have been forced to adapt to complex accounting software like Tally or Vyapar. These tools require a keyboard, a mouse, and significant data entry time. When your shop is crowded, spending 2 minutes typing out "3 packets of Parle-G and 1kg Sugar" is simply not feasible.</p>
      
      <h2>Enter Voice AI</h2>
      <p>Voice is the most natural interface for humans. A <strong>voice billing app</strong> allows a retailer to speak exactly as they would to a customer. By utilizing advanced Natural Language Processing (NLP), apps like Vyop can extract the item names, quantities, and prices instantly.</p>

      <h3>Benefits of Voice Billing</h3>
      <ul>
        <li><strong>Speed:</strong> Create a bill in 10 seconds instead of 2 minutes.</li>
        <li><strong>Zero Training:</strong> No need to teach staff how to navigate complex menus. If they can speak, they can bill.</li>
        <li><strong>Accuracy:</strong> AI reduces manual typing errors during rush hours.</li>
      </ul>

      <p>The future of retail in India isn't a bigger keyboard; it's no keyboard at all. Experience the revolution with Vyop today.</p>
    `
  },
  {
    slug: 'vyapar-vs-khatabook-alternative',
    title: 'Vyapar vs Khatabook: Why You Might Need a Voice Alternative',
    metaTitle: 'Vyapar vs Khatabook Alternative | Voice AI Billing',
    metaDescription: 'Comparing Vyapar and Khatabook? See why neither might be the right fit for a fast-paced retail counter and why voice AI is the best alternative.',
    focusKeyword: 'Vyapar vs Khatabook',
    secondaryKeywords: 'billing app alternative, udhar khata',
    category: 'Comparison',
    author: 'Vyop Team',
    authorTitle: 'Growth',
    date: new Date(Date.now() - 86400000).toISOString(),
    status: 'Published',
    excerpt: 'Vyapar is great for desktop accounting. Khatabook is great for udhar. But what if you need both, at the speed of voice?',
    image: '/og-image.png',
    views: 0,
    content: `
      <h2>The Legacy Titans</h2>
      <p>When looking for a digital solution for a shop, two names usually come up: <strong>Vyapar</strong> and <strong>Khatabook</strong>. Both have paved the way for digital adoption in India, but they serve very different purposes.</p>
      
      <h3>Vyapar: The Desktop Heavyweight</h3>
      <p>Vyapar is a robust GST billing software. It's excellent if you have a dedicated counter, a PC, and an operator. However, it can be overwhelming for a single shop owner who uses a mobile phone.</p>

      <h3>Khatabook: The Udhar King</h3>
      <p>Khatabook revolutionized the digital ledger. It made tracking debt incredibly easy. But as a full-fledged billing and inventory POS, it lacks the speed required for fast-moving consumer goods (FMCG).</p>

      <h2>The Voice Alternative: Vyop</h2>
      <p>What if you didn't have to choose between deep features and simplicity? Vyop combines the robust GST billing of Vyapar with the simple ledger tracking of Khatabook, wrapped in a voice-first interface. You just speak, and the app does the rest.</p>
    `
  },
  {
    slug: 'kirana-store-gst-rules-2026',
    title: 'Do Kirana Stores Need GST Registration in 2026?',
    metaTitle: 'Kirana Store GST Rules 2026 | Registration Limits',
    metaDescription: 'A complete guide to GST rules for Kirana stores in 2026. Learn about turnover limits, composition schemes, and how to generate non-GST bills.',
    focusKeyword: 'kirana store GST',
    secondaryKeywords: 'GST rules 2026, non-GST bill',
    category: 'Business Guide',
    author: 'Vyop Team',
    authorTitle: 'Tax Expert',
    date: new Date(Date.now() - 172800000).toISOString(),
    status: 'Published',
    excerpt: 'Confused about whether your small retail shop needs a GST number? We break down the latest turnover limits and composition schemes.',
    image: '/og-image.png',
    views: 0,
    content: `
      <h2>The 40 Lakh Limit</h2>
      <p>For most states in India, if your Kirana store deals exclusively in the sale of goods, you are exempt from GST registration until your annual turnover crosses ₹40 Lakhs. For special category states, this limit is ₹20 Lakhs.</p>
      
      <h2>What if you cross the limit?</h2>
      <p>If your turnover exceeds the limit, you have two options:</p>
      <ol>
        <li><strong>Regular Scheme:</strong> You charge GST to your customers and claim Input Tax Credit (ITC) on your purchases.</li>
        <li><strong>Composition Scheme:</strong> Designed for small businesses, you pay a flat 1% tax on your turnover but cannot claim ITC or charge GST on your bills.</li>
      </ol>

      <h2>Billing without GST</h2>
      <p>If you are under the limit or using the composition scheme, you must issue a "Bill of Supply" rather than a "Tax Invoice". Vyop automatically handles this distinction. When setting up your profile, simply mark your business as unregistered, and Vyop will generate legally compliant non-GST bills instantly via voice.</p>
    `
  }
];

export async function GET() {
  try {
    const promises = initialBlogs.map(async (blog) => {
      const docRef = doc(db, 'blogs', blog.slug);
      await setDoc(docRef, blog);
    });

    await Promise.all(promises);

    return NextResponse.json({ success: true, message: 'Seeded 3 blogs successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
