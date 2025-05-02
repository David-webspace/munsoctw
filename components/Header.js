"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow p-0 z-40 relative" style={{ background: 'var(--primary)' }}>
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold" style={{ color: 'var(--accent)' }}>
          <img
            src="https://live.staticflickr.com/65535/54016266739_ec8b1260ed_h.jpg"
            alt="MUN Society Taiwan Logo"
            style={{maxWidth: '240px', height: '100px', border: 'none', borderRadius: 0, objectFit: 'contain'}} />
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
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
        {/* Hamburger menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-12 h-12 relative z-50 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-7 h-0.5 bg-blue-900 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-blue-900 my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-blue-900 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Mobile menu overlay */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        >
          <nav className="flex flex-col mt-24 gap-6 px-8">
            <Link href="/about" className="text-lg font-semibold text-blue-900" onClick={() => setMenuOpen(false)}>About</Link>
            <div className="flex flex-col gap-1 ml-3">
              <Link href="/about#what-is-mun" className="text-sm text-blue-700" onClick={() => setMenuOpen(false)}>What is MUN</Link>
              <Link href="/about#what-we-do" className="text-sm text-blue-700" onClick={() => setMenuOpen(false)}>What We Do</Link>
              <Link href="/about#meet-the-team" className="text-sm text-blue-700" onClick={() => setMenuOpen(false)}>Meet the Team</Link>
            </div>
            <Link href="/news" className="text-lg font-semibold text-blue-900" onClick={() => setMenuOpen(false)}>News</Link>
            <Link href="/events" className="text-lg font-semibold text-blue-900" onClick={() => setMenuOpen(false)}>Events</Link>
            <div className="flex flex-col gap-1 ml-3">
              <Link href="/events/experiences" className="text-sm text-blue-700" onClick={() => setMenuOpen(false)}>Our Organization Experiences</Link>
              <Link href="/events/upcoming" className="text-sm text-blue-700" onClick={() => setMenuOpen(false)}>Upcoming Events</Link>
              <Link href="/events/reviews" className="text-sm text-blue-700" onClick={() => setMenuOpen(false)}>Previous Event Reviews</Link>
            </div>
            <Link href="/contact" className="text-lg font-semibold text-blue-900" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
        {/* Overlay for closing menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </div>
      <style>{`
        .group:hover .group-hover\\:flex { display: flex !important; }
      `}</style>
    </header>
  );
}
