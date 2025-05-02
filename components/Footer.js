import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="shadow-inner p-6 mt-12" style={{ background: 'var(--primary)' }}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2 mb-8 md:mb-0 w-full md:w-auto justify-center md:justify-start">
          <img src="https://live.staticflickr.com/65535/54016266739_ec8b1260ed_h.jpg" alt="MUN Society Taiwan Logo" className="h-10" style={{maxWidth: '120px', height: '40px', border: 'none', borderRadius: 0, objectFit: 'contain'}} />
          <span className="text-xl font-bold" style={{ color: 'var(--accent)' }}>MUN Society Taiwan</span>
        </div>
        {/* Sitemap */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-12 w-full md:w-auto justify-center md:justify-start text-center md:text-left">
          <div className="mb-6 sm:mb-0">
            <h3 className="mb-2 text-base" style={{ color: 'var(--accent)', fontWeight: 600 }}>About</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/about#what-is-mun" style={{ color: 'var(--secondary)' }}>What is MUN</Link></li>
              <li><Link href="/about#what-we-do" style={{ color: 'var(--secondary)' }}>What We Do</Link></li>
              <li><Link href="/about#meet-the-team" style={{ color: 'var(--secondary)' }}>Meet the Team</Link></li>
            </ul>
          </div>
          <div className="mb-6 sm:mb-0">
            <h3 className="mb-2 text-base" style={{ color: 'var(--accent)', fontWeight: 600 }}>Events</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/events" style={{ color: 'var(--secondary)' }}>Events Overview</Link></li>
              <li><Link href="/events#our-organizing-experiences" style={{ color: 'var(--secondary)' }}>Our Organizing Experiences</Link></li>
              <li><Link href="/events#upcoming-events" style={{ color: 'var(--secondary)' }}>Upcoming Events</Link></li>
              <li><Link href="/events#previous-event-reviews" style={{ color: 'var(--secondary)' }}>Previous Event Reviews</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-base" style={{ color: 'var(--accent)', fontWeight: 600 }}>Contact</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/contact" style={{ color: 'var(--secondary)' }}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile copyright */}
      <div className="block md:hidden text-center mt-8 text-xs text-blue-900 opacity-70">
        &copy; {new Date().getFullYear()} MUN Society Taiwan. All rights reserved.
      </div>
    </footer>
  );
}
