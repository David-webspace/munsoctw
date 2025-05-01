"use client";
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { EventItemDetail, EventDefaultDetail } from '@/components/events/EventItemDetail';

export default function EventDetailClient({event, otherEvents}) {
  const currentPath = usePathname();

  // Date filter state (default: show all)
  const [dateFilter, setDateFilter] = useState('all');

  // Type filter state
  const allTypes = Array.from(new Set(otherEvents.map(e => e.type).filter(Boolean)));
  const [typeFilter, setTypeFilter] = useState('all');

  // Sort state
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' (latest first) or 'asc'

  // Search state
  const [searchTerm, setSearchTerm] = useState('');

  // Helper: parse date string to timestamp (YYYY/MM/DD or YYYY-MM-DD)
  function parseDate(str) {
    if (!str) return 0;
    // Accepts 'YYYY/MM/DD', 'YYYY-MM-DD', or 'MM/DD/YYYY'
    const parts = str.includes('/') ? str.split('/') : str.split('-');
    if (parts[0].length === 4) {
      // YYYY/MM/DD or YYYY-MM-DD
      return new Date(parts[0], parts[1] - 1, parts[2]).getTime();
    } else {
      // MM/DD/YYYY
      return new Date(parts[2], parts[0] - 1, parts[1]).getTime();
    }
  }

  // Date range options (can be customized)
  const dateOptions = [
    { value: 'all', label: 'All Dates' },
    { value: 'past_month', label: 'Past Month' },
    { value: 'past_2_months', label: 'Past 2 Months' },
    { value: 'past_5_months', label: 'Past 5 Months' }
  ];

  // Compute filtered and sorted events
  const now = Date.now();
  let filteredEvents = otherEvents;
  if (dateFilter !== 'all') {
    filteredEvents = otherEvents.filter(e => {
      const eventTime = parseDate(e.time || e.date);
      if (dateFilter === 'past_month') {
        return eventTime > now - 30 * 24 * 60 * 60 * 1000;
      } else if (dateFilter === 'past_2_months') {
        return eventTime > now - 2 * 30 * 24 * 60 * 60 * 1000;
      } else if (dateFilter === 'past_5_months') {
        return eventTime > now - 5 * 30 * 24 * 60 * 60 * 1000;
      }
      return true;
    });
  }
  // Filter by type
  if (typeFilter !== 'all') {
    filteredEvents = filteredEvents.filter(e => e.type === typeFilter);
  }
  // Filter by search term
  if (searchTerm.trim() !== '') {
    const lower = searchTerm.toLowerCase();
    filteredEvents = filteredEvents.filter(e =>
      (e.event || e.name || '').toLowerCase().includes(lower) ||
      (e.description || '').toLowerCase().includes(lower) ||
      (e.location || '').toLowerCase().includes(lower)
    );
  }

  // Always sort a new array, never mutate the filteredEvents in-place
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const aTime = parseDate(a.time || a.date);
    const bTime = parseDate(b.time || b.date);
    return sortOrder === 'desc' ? bTime - aTime : aTime - bTime;
  });

  return (
    <main className="max-w-5xl mx-auto p-8">
      <Link href="/events" className="text-blue-600 hover:underline mb-6 inline-block">← Back to Events</Link>
      { currentPath === '/events' ? (
        <EventDefaultDetail event={event} />
      ) : (
        <EventItemDetail event={event} />
      )}

      {/* You Can Also Check Out... */}
      {sortedEvents.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold text-blue-700 mb-4">You Can Also Check Out...</h2>
          <div className="mb-6 flex flex-wrap gap-4 items-center">
            <label htmlFor="date-filter" className="font-medium text-sm text-gray-700">Filter by Date:</label>
            <select
              id="date-filter"
              value={dateFilter}
              onChange={e => setDateFilter(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              {dateOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            {/* Type filter */}
            <label htmlFor="type-filter" className="font-medium text-sm text-gray-700 ml-4">Type:</label>
            <select
              id="type-filter"
              value={typeFilter}
              onChange={e => setTypeFilter(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="all">All Types</option>
              {allTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <label htmlFor="sort-order" className="font-medium text-sm text-gray-700 ml-4">Sort:</label>
            <select
              id="sort-order"
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="desc">Latest First</option>
              <option value="asc">Oldest First</option>
            </select>
            {/* Search box with magnifier icon */}
            <div className="relative ml-4" style={{ minWidth: 180 }}>
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 text-sm pl-8 w-full"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedEvents.map(e => {
              let desc = e.description || `Discover more about ${e.event || e.name}.`;
              let linesArr = desc.split('\n');
              let preview;
              if (linesArr.length >= 3) {
                preview = linesArr.slice(0, 3).join(' ');
              } else {
                let sentences = desc.match(/[^.!?\n]+[.!?\n]+/g) || [desc];
                preview = sentences.slice(0, 3).join(' ');
                if (preview.length > 180) preview = preview.slice(0, 180) + '...';
              }
              return (
                <Link key={e.id} href={`/events/${e.id}`} className="block bg-blue-50 rounded-lg p-4 shadow hover:bg-blue-100 transition relative">
                  {/* Type tag */}
                  {e.type && (
                    <span
                      className={
                        `absolute top-2 right-2 text-xs font-semibold px-2 py-0.5 rounded-full z-10 ` +
                        (e.type === 'Briefing Session'
                          ? 'bg-yellow-200 text-yellow-900 border border-yellow-300'
                          : 'bg-blue-200 text-blue-800')
                      }
                    >
                      {e.type}
                    </span>
                  )}
                  <img src={e.img} alt={e.event || e.name} className="w-full h-32 object-cover rounded border border-blue-100 mb-2" />
                  {e.isUpcoming && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">Upcoming</span>
                  )}
                  <h3 className="text-lg font-semibold text-blue-800">{e.event || e.name}</h3>
                  <p className="text-gray-500 text-xs mb-1">{e.time || e.date}</p>
                  <p className="text-gray-600 text-xs" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{preview}</p>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </main>
  );
}
