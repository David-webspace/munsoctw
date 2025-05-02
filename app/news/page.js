import news from '../../data/news';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-8">News</h1>
      <div className="grid gap-8 sm:grid-cols-2">
        {news.map(item => (
          <div key={item.id} className="rounded-xl bg-white shadow-md hover:shadow-lg transition flex flex-col overflow-hidden border border-blue-100">
            <Link href={`/news/${item.id}`}>
              <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-lg font-bold text-blue-800 mb-1">{item.title}</h2>
                <p className="text-gray-400 text-xs mb-2">{item.date}</p>
                <p className="text-gray-700 flex-1">{item.summary}</p>
                <span className="inline-block mt-3 text-blue-600 hover:underline font-semibold">Read More</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  // Combine both previous and upcoming events
  // const allEvents = [...dynamicPreviousEvents, ...dynamicUpcomingEvents];
  // return allEvents.map(event => ({ id: event.id }));
  return [];
}
