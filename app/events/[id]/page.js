import { dynamicPreviousEvents, dynamicUpcomingEvents } from '../../../data/dynamicEvents';
import EventDetailClient from './EventDetailClient';

export default function EventDetailPage({ params }) {
  // Find event in both previous and upcoming events
  const event = dynamicPreviousEvents.find(e => e.id === params.id) || dynamicUpcomingEvents.find(e => e.id === params.id);

  if (!event) {
    return (
      <main className="max-w-2xl mx-auto p-8">
        <h1 className="text-2xl font-bold text-red-700 mb-4">Event Not Found</h1>
        <a href="/events" className="text-blue-600 hover:underline">Back to Events</a>
      </main>
    );
  }

  // Precompute upcoming event IDs for SSR hydration safety
  const upcomingIds = new Set(dynamicUpcomingEvents.map(e => e.id));

  // Gather other events for "You Can Also Check Out..." and add isUpcoming flag
  const otherEvents = [...dynamicPreviousEvents, ...dynamicUpcomingEvents]
    .filter(e => e.id !== params.id)
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
