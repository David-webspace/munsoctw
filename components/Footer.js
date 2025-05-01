export default function Footer() {
  return (
    <footer className="shadow-inner p-6 mt-12" style={{ background: 'var(--primary)' }}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2 mb-8 md:mb-0">
          <img src="https://live.staticflickr.com/65535/54016266739_ec8b1260ed_h.jpg" alt="MUN Society Taiwan Logo" className="h-10" style={{maxWidth: '120px', height: '40px', border: 'none', borderRadius: 0, objectFit: 'contain'}} />
          <span className="text-xl font-bold" style={{ color: 'var(--accent)' }}>MUN Society Taiwan</span>
        </div>
        {/* Sitemap */}
        <div className="flex flex-wrap gap-12 w-full md:w-auto justify-center md:justify-start">
          <div>
            <h3 className="mb-2 text-base" style={{ color: 'var(--accent)', fontWeight: 600 }}>About</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="/about#what-is-mun" style={{ color: 'var(--secondary)' }}>What is MUN</a></li>
              <li><a href="/about#what-we-do" style={{ color: 'var(--secondary)' }}>What We Do</a></li>
              <li><a href="/about#meet-the-team" style={{ color: 'var(--secondary)' }}>Meet the Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-base" style={{ color: 'var(--accent)', fontWeight: 600 }}>Events</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="/events" style={{ color: 'var(--secondary)' }}>Events Overview</a></li>
              <li><a href="/events#our-organizing-experiences" style={{ color: 'var(--secondary)' }}>Our Organizing Experiences</a></li>
              <li><a href="/events#upcoming-events" style={{ color: 'var(--secondary)' }}>Upcoming Events</a></li>
              <li><a href="/events#previous-event-reviews" style={{ color: 'var(--secondary)' }}>Previous Event Reviews</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-base" style={{ color: 'var(--accent)', fontWeight: 600 }}>Contact</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="/contact" style={{ color: 'var(--secondary)' }}>Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
