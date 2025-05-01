"use client";
import Link from 'next/link';
import news from '../data/news';
import previousEventsData from '../data/previousEvents';
import Banner from '../components/Banner';
import WorldMUNAnalysis from '../components/WorldMUNAnalysis';
import { useState } from 'react';

function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl font-extrabold text-blue-700 mb-6 tracking-tight flex items-center gap-3">
      <span className="inline-block w-1 h-7 bg-blue-500 rounded-full mr-2" />
      {children}
    </h2>
  );
}

function HomepageHighlights() {
  return (
    <section className="max-w-5xl mx-auto my-12">
      <div className="">
        <div className="bg-white/70 rounded-xl border border-blue-100 shadow p-6 w-full flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Bringing People to the World</h2>
          <div className='mb-4'>
            <h3 className="text-lg font-semibold text-blue-700 mb-0.5">Where tomorrow’s leaders are shaped today</h3>
            <p className="text-gray-700 text-base mt-1">Through Model United Nations (MUN), delegates gain the courage, knowledge, vision, ambition, and compassion necessary to make a difference in the world.</p>
          </div>
          <div className='mb-4'>
            <h3 className="text-lg font-semibold text-blue-700 mb-0.5">Local Interconnectivity, Global Affinity.</h3>
            <p className="text-gray-700 text-base mt-1">MUN Society Taiwan (MST) aims to bring Taiwanese delegates to the world. We foster friendship, facilitate mutual growth, and inspire students to reach for the stars.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsSection () {
  return (
    <section className="mb-14">
      <SectionTitle>Latest News</SectionTitle>
      <div className="grid gap-6 sm:grid-cols-2">
        {news.map(item => (
          <div key={item.id} className="rounded-xl bg-white shadow-md hover:shadow-lg transition flex flex-col overflow-hidden border border-blue-100">
            <Link href={`/news/${item.id}`}>
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-blue-800 mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs mb-2">{item.date}</p>
                <p className="text-gray-700 flex-1">{item.summary}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function ComingEventSection ({comingEventsData}) {
  return (
    <section className="mb-14">
    <SectionTitle>Coming Events</SectionTitle>
    {comingEventsData.length === 0 ? (
      <p className="text-gray-400">No upcoming events at the moment.</p>
    ) : (
      <div className="grid gap-8 sm:grid-cols-2">
        {comingEventsData.map(event => (
          <div key={event.id} className="cursor-pointer">
            <Link href={`/events/${event.id}`}>
              <div className="bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col h-full hover:shadow-xl transition group overflow-hidden">
                <div className="relative">
                  <img src={event.img} alt={event.event} className="w-full h-48 object-cover" />
                  {/* Type tag */}
                  {event.type && (
                    <span className={
                      `absolute top-2 left-2 px-2 py-0.5 text-xs font-semibold rounded-full z-10 ` +
                      (event.type === 'Briefing Session'
                        ? 'bg-yellow-200 text-yellow-900 border border-yellow-300'
                        : 'bg-blue-200 text-blue-800')
                    }>
                      {event.type}
                    </span>
                  )}
                </div>
                <div className="flex-1 flex flex-col p-4">
                  <div className="flex items-center text-gray-500 text-xs mb-1">
                    <span className="truncate">{event.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-blue-800 mb-1 group-hover:underline line-clamp-2 min-h-[2.5em]">{event.event}</h3>
                  <p className="text-gray-400 text-xs mb-2">{event.time}</p>
                  <p
                    className="text-gray-700 text-sm mb-2 line-clamp-3 flex-1"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxHeight: '6.5em',
                      lineHeight: '1.6em',
                    }}
                    title={event.description}
                  >
                    {event.description}
                  </p>
                  <div className="mt-auto pt-2">
                    <span className="inline-block text-blue-600 hover:underline font-semibold text-sm">View Details</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    )}
  </section>
  );
}

function PreviousEventSection ({previousEventsData}) {
  const [modalEvent, setModalEvent] = useState(null);

  // Helper to parse event time for sorting
  function parseEventTime(event) {
    // Try to parse YYYY/MM/DD, YYYY-MM-DD, or range like 03/10/2024-03/15/2024
    const timeStr = event.time || event.date;
    if (!timeStr) return 0;
    // If range, take the first date
    const firstDate = timeStr.split('-')[0].trim();
    const parts = firstDate.includes('/') ? firstDate.split('/') : firstDate.split('-');
    if (parts[0].length === 4) {
      // YYYY/MM/DD or YYYY-MM-DD
      return new Date(parts[0], parts[1] - 1, parts[2]).getTime();
    } else {
      // MM/DD/YYYY
      return new Date(parts[2], parts[0] - 1, parts[1]).getTime();
    }
  }
  return (
    <section>
        <div className="flex items-center">
          <SectionTitle>Conferences</SectionTitle>
          {/* <Link href="/events#previous-events" className="ml-3 text-blue-600 hover:underline font-semibold text-base mb-2">View more conferences</Link> */}
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {previousEventsData
            .slice()
            .sort((a, b) => parseEventTime(b) - parseEventTime(a))
            .slice(0, 8)
            .map(event => (
            <div key={event.id} className="bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col h-full hover:shadow-xl transition cursor-pointer group overflow-hidden">
              <Link href={`/events/${event.id}`} className="flex flex-col h-full">
                <div className="relative">
                  <img src={event.img} alt={event.event} className="w-full h-48 object-cover" />
                  {/* Type tag */}
                  {event.type && (
                    <span className={
                      `absolute top-2 left-2 px-2 py-0.5 text-xs font-semibold rounded-full z-10 ` +
                      (event.type === 'Briefing Session'
                        ? 'bg-yellow-200 text-yellow-900 border border-yellow-300'
                        : 'bg-blue-200 text-blue-800')
                    }>
                      {event.type}
                    </span>
                  )}
                </div>
                <div className="flex-1 flex flex-col p-4">
                  <div className="flex items-center text-gray-500 text-xs mb-1">
                    <span className="truncate">{event.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-blue-800 mb-1 group-hover:underline line-clamp-2 min-h-[2.5em]">{event.event}</h3>
                  <p className="text-gray-400 text-xs mb-2">{event.time}</p>
                  <p
                    className="text-gray-700 text-sm mb-2 line-clamp-3 flex-1"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxHeight: '6.5em',
                      lineHeight: '1.6em',
                    }}
                    title={event.description}
                  >
                    {event.description}
                  </p>
                  <div className="mt-auto pt-2">
                    <span className="inline-block text-blue-600 hover:underline font-semibold text-sm">View Details</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          <Link href="/events" className="ml-3 text-blue-600 hover:underline font-semibold text-base mb-2">View more conferences</Link>
        </div>
        {/* Modal for full description */}
        {modalEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative">
              <button
                onClick={() => setModalEvent(null)}
                className="absolute top-2 right-2 text-gray-400 hover:text-blue-600 text-2xl font-bold"
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="text-xl font-bold text-blue-800 mb-4">{modalEvent.event}</h3>
              <div className="text-gray-700 whitespace-pre-line">{modalEvent.description}</div>
            </div>
          </div>
        )}
      </section>
  )
}

export default function HomePage() {
  // Separate coming and previous events by date
  const today = new Date().toISOString().split('T')[0];
  const comingEvents = previousEventsData.filter(e => e.date >= today)
    .slice()
    .sort((a, b) => parseEventTime(b) - parseEventTime(a))
    .slice(0, 2);

  // Helper to parse event time for sorting
  function parseEventTime(event) {
    // Try to parse YYYY/MM/DD, YYYY-MM-DD, or range like 03/10/2024-03/15/2024
    const timeStr = event.time || event.date;
    if (!timeStr) return 0;
    // If range, take the first date
    const firstDate = timeStr.split('-')[0].trim();
    const parts = firstDate.includes('/') ? firstDate.split('/') : firstDate.split('-');
    if (parts[0].length === 4) {
      // YYYY/MM/DD or YYYY-MM-DD
      return new Date(parts[0], parts[1] - 1, parts[2]).getTime();
    } else {
      // MM/DD/YYYY
      return new Date(parts[2], parts[0] - 1, parts[1]).getTime();
    }
  }

  return (
    <main className="max-w-6xl mx-auto p-6 sm:p-10">
      <Banner />
      <WorldMUNAnalysis />
      <HomepageHighlights />

      {/* News Section */}
      <NewsSection />

      {/* Coming Events */}
      <ComingEventSection comingEventsData={comingEvents} />

      {/* Previous Events Review (detailed) */}
      <PreviousEventSection previousEventsData={previousEventsData} />
    </main>
  );
}
