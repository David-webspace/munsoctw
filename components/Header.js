"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";

const MOBILE_MENUS = [
  {
    label: 'About',
    key: 'about',
    submenu: [
      { label: 'What is MUN', href: '/about#what-is-mun' },
      { label: 'What We Do', href: '/about#what-we-do' },
      { label: 'Meet the Team', href: '/about#meet-the-team' },
    ],
  },
  {
    label: 'News',
    key: 'news',
    href: '/news',
  },
  {
    label: 'Events',
    key: 'events',
    submenu: [
      { label: 'Our Organization Experiences', href: '/events/experiences' },
      { label: 'Upcoming Events', href: '/events/upcoming' },
      { label: 'Previous Event Reviews', href: '/events/reviews' },
    ],
  },
  {
    label: 'Contact',
    key: 'contact',
    href: '/contact',
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedKey, setExpandedKey] = useState(null); // for accordion submenu

  // Helper to reset menu state
  const closeMenu = () => {
    setMenuOpen(false);
    setExpandedKey(null);
  };

  return (
    <header className="shadow p-0 z-40 relative" style={{ background: 'var(--primary)' }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between w-full py-2 relative">
        {/* Logo centered on mobile, left on desktop */}
        <div className="w-full rounded-xl md:w-auto flex justify-center md:justify-start items-center">
          <Link href="/" className="text-xl font-bold" style={{ color: 'var(--accent)' }}>
            <img
              src="https://live.staticflickr.com/65535/54016266739_ec8b1260ed_h.jpg"
              alt="MUN Society Taiwan Logo"
              style={{
                height: 'auto',
                border: 'none',
                borderRadius: 8,
                objectFit: 'contain',
                width: '260px',
                [`@media (max-width: 768px)`]: { width: '80vw' },
              }}
            />
          </Link>
        </div>
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
        {/* Hamburger menu button - absolutely positioned top-right on mobile */}
        <button
          className="md:hidden absolute top-4 right-4 flex flex-col justify-center items-center w-12 h-12 z-50 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setExpandedKey(null);
          }}
        >
          <span className={`block w-7 h-0.5 bg-blue-900 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-blue-900 my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-blue-900 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Mobile menu overlay */}
        <div
          className={`fixed top-0 right-0 h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden ${window.innerWidth < 425 ? 'w-full' : 'w-64'}`}
        >
          <nav className="flex flex-col mt-24 gap-2 px-8">
            {MOBILE_MENUS.map(item => (
              <div key={item.key}>
                <button
                  className="w-full text-lg font-semibold text-blue-900 text-left hover:text-blue-700 transition-colors flex items-center justify-between py-2"
                  style={{ outline: 'none' }}
                  onClick={() => {
                    if (item.submenu) {
                      setExpandedKey(expandedKey === item.key ? null : item.key);
                    } else if (item.href) {
                      closeMenu();
                      window.location.href = item.href;
                    }
                  }}
                >
                  {item.label}
                  {item.submenu && (
                    <span className={`ml-2 transition-transform ${expandedKey === item.key ? 'rotate-90' : ''}`}><FaAngleDown /></span>
                  )}
                </button>
                {/* Submenu accordion */}
                {item.submenu && expandedKey === item.key && (
                  <div className="flex flex-col gap-1 pl-4 pb-2">
                    {item.submenu.map(sub => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="text-base text-blue-700 font-medium hover:text-blue-900 transition-colors py-1"
                        onClick={closeMenu}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        {/* Overlay for closing menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
            onClick={() => closeMenu()}
          ></div>
        )}
      </div>
      <style>{`
        .group:hover .group-hover\\:flex { display: flex !important; }
      `}</style>
    </header>
  );
}
