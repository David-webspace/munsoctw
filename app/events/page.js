import { dynamicPreviousEvents, dynamicUpcomingEvents } from '../../data/dynamicEvents';
import EventDetailClient from './[id]/EventDetailClient';

export default function EventsPage() {
  // Find the latest event (e.g., the first in upcoming, or fallback to previous)
  const event = dynamicUpcomingEvents[0] || dynamicPreviousEvents[3];

  if (!event) {
    return (
      <main className="max-w-2xl mx-auto p-8">
        <h1 className="text-2xl font-bold text-red-700 mb-4">Event Not Found</h1>
        <a href="/" className="text-blue-600 hover:underline">Back to Home</a>
      </main>
    );
  }

  // Precompute upcoming event IDs for SSR hydration safety
  const upcomingIds = new Set(dynamicUpcomingEvents.map(e => e.id));

  // Gather other events for "You Can Also Check Out..." and add isUpcoming flag
  const otherEvents = [...dynamicPreviousEvents, ...dynamicUpcomingEvents]
    .filter(e => e.id !== event?.id)
    .map(e => ({
      ...e,
      isUpcoming: upcomingIds.has(e.id)
    }));

  return <EventDetailClient event={event} otherEvents={otherEvents} />;
}

export async function generateStaticParams() {
  // Combine both previous and upcoming events
  const allEvents = [...dynamicPreviousEvents, ...dynamicUpcomingEvents];
  return allEvents.map(event => ({ id: event.id }));
}
