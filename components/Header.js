"use client";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="shadow p-0 z-40 relative" style={{ background: 'var(--primary)' }}>
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold" style={{ color: 'var(--accent)' }}>
          <img
            src="https://live.staticflickr.com/65535/54016266739_ec8b1260ed_h.jpg"
            alt="MUN Society Taiwan Logo"
            // className="h-20"
            style={{maxWidth: '240px', height: '100px', border: 'none', borderRadius: 0, objectFit: 'contain'}} />
        </Link>
        <nav className="flex items-center gap-2">
          <div className="relative group">
            <Link href="/about" className="mx-2 inline-block" style={{ color: 'var(--accent)' }}>About</Link>
            <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col border border-blue-100 rounded shadow z-50 min-w-[220px] w-56 bg-white">
              <Link href="/about#what-is-mun" className="px-4 py-2 hover:bg-blue-50" style={{ color: 'var(--primary)' }}>What is MUN</Link>
              <Link href="/about#what-we-do" className="px-4 py-2 hover:bg-blue-50" style={{ color: 'var(--primary)' }}>What We Do</Link>
              <Link href="/about#meet-the-team" className="px-4 py-2 hover:bg-blue-50" style={{ color: 'var(--primary)' }}>Meet the Team</Link>
            </div>
          </div>
          <Link href="/news" className="mx-2" style={{ color: 'var(--accent)' }}>News</Link>
          <div className="relative group">
            <Link href="/events" className="mx-2 inline-block" style={{ color: 'var(--accent)' }}>Events</Link>
            <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col border border-blue-100 rounded shadow z-50 min-w-[220px] w-56 bg-white">
              <Link href="/events/experiences" className="px-4 py-2 hover:bg-blue-50" style={{ color: 'var(--primary)' }}>Our Organization Experiences</Link>
              <Link href="/events/upcoming" className="px-4 py-2 hover:bg-blue-50" style={{ color: 'var(--primary)' }}>Upcoming Events</Link>
              <Link href="/events/reviews" className="px-4 py-2 hover:bg-blue-50" style={{ color: 'var(--primary)' }}>Previous Event Reviews</Link>
            </div>
          </div>
          <Link href="/contact" className="mx-2" style={{ color: 'var(--accent)' }}>Contact</Link>
        </nav>
      </div>
      <style>{`
        .group:hover .group-hover\\:flex { display: flex !important; }
      `}</style>
    </header>
  );
}
