import news from '../../../data/news';
import NewsDetailClient from './NewsDetailClient';

export default function NewsDetailPage({ params }) {
  // Find the news item by id
  const thisNews = news.find(n => n.id === params.id);

  if (!thisNews) {
    return (
      <main className="max-w-2xl mx-auto p-8">
        <h1 className="text-2xl font-bold text-red-700 mb-4">News Not Found</h1>
        <a href="/news" className="text-blue-600 hover:underline">Back to News</a>
      </main>
    );
  }

  // Gather other news items for suggestions
  const otherNews = news.filter(n => n.id !== params.id);

  return <NewsDetailClient news={thisNews} otherNews={otherNews} />;
}

export async function generateStaticParams() {
  return news.map(n => ({ id: n.id }));
}