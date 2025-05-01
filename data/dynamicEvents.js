import previousEvents from './previousEvents';
import upcomingEvents from './upcomingEvents';

// Helper to parse date string to timestamp
function parseDate(str) {
  if (!str) return 0;
  const parts = str.includes('/') ? str.split('/') : str.split('-');
  if (parts[0].length === 4) {
    return new Date(parts[0], parts[1] - 1, parts[2]).getTime();
  } else {
    return new Date(parts[2], parts[0] - 1, parts[1]).getTime();
  }
}

const now = Date.now();

// If an event has endDate, use it; otherwise, use time or date
const dynamicPreviousEvents = [
  ...previousEvents,
  ...upcomingEvents.filter(e => parseDate(e.endDate || e.time || e.date) < now)
];

const dynamicUpcomingEvents = upcomingEvents.filter(e => parseDate(e.endDate || e.time || e.date) >= now);

export { dynamicPreviousEvents, dynamicUpcomingEvents };
