import Link from 'next/link';
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative shadow-inner p-8 md:p-10 mt-16"
      style={{
        background: 'linear-gradient(90deg, #e0e7ff 0%, #c7d2fe 100%)',
        borderTop: '2px solid #a5b4fc',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center gap-3 mb-10 md:mb-0 w-full md:w-auto justify-center md:justify-start">
          <div className="bg-white/70 rounded-xl shadow-lg p-2 flex items-center justify-center" style={{height: '70px', width: 'auto'}}>
            <img
              src="https://live.staticflickr.com/65535/54016266739_ec8b1260ed_h.jpg"
              alt="MUN Society Taiwan Logo"
              className="h-12 md:h-14" style={{maxWidth: '260px', height: 'auto', border: 'none', borderRadius: 8, objectFit: 'contain'}}
            />
          </div>
          <span className="text-2xl font-extrabold tracking-wide mt-2" style={{ color: '#3730a3', letterSpacing: '0.02em' }}>
            MUN Society Taiwan
          </span>
          <div className="flex items-center justify-center space-x-5 mt-2">
            <a
              href="https://www.instagram.com/munsoc.tw/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:text-pink-500 text-blue-900"
              aria-label="Instagram"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://www.facebook.com/munsocietytaiwan/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:text-blue-700 text-blue-900"
              aria-label="Facebook"
            >
              <FaFacebook size={32} />
            </a>
          </div>
        </div>
        {/* Sitemap */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-16 w-full md:w-auto justify-between md:justify-start text-center md:text-left">
          <div className="mb-6 sm:mb-0">
            <h3 className="mb-2 text-lg font-semibold text-blue-900 tracking-wide">About</h3>
            <ul className="space-y-1 text-base">
              <li><Link href="/about#what-is-mun" className="text-blue-700 hover:text-blue-900 transition-colors">What is MUN</Link></li>
              <li><Link href="/about#what-we-do" className="text-blue-700 hover:text-blue-900 transition-colors">What We Do</Link></li>
              <li><Link href="/about#meet-the-team" className="text-blue-700 hover:text-blue-900 transition-colors">Meet the Team</Link></li>
            </ul>
          </div>
          <div className="mb-6 sm:mb-0">
            <h3 className="mb-2 text-lg font-semibold text-blue-900 tracking-wide">Events</h3>
            <ul className="space-y-1 text-base">
              <li><Link href="/events" className="text-blue-700 hover:text-blue-900 transition-colors">Events Overview</Link></li>
              <li><Link href="/events#our-organizing-experiences" className="text-blue-700 hover:text-blue-900 transition-colors">Our Organizing Experiences</Link></li>
              <li><Link href="/events#upcoming-events" className="text-blue-700 hover:text-blue-900 transition-colors">Upcoming Events</Link></li>
              <li><Link href="/events#previous-event-reviews" className="text-blue-700 hover:text-blue-900 transition-colors">Previous Event Reviews</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-blue-900 tracking-wide">Contact</h3>
            <ul className="space-y-1 text-base">
              <li><Link href="/contact" className="text-blue-700 hover:text-blue-900 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="my-8 border-t border-blue-200 w-full"></div>
      {/* Copyright */}
      <div className="block text-center text-xs text-blue-900 opacity-80 tracking-wide">
        &copy; {new Date().getFullYear()} MUN Society Taiwan. All rights reserved.
      </div>
    </footer>
  );
}
