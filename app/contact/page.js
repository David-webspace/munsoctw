export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-300 rounded-2xl shadow-lg p-8 mb-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/events/spring-gala.jpg')] bg-cover bg-center pointer-events-none" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-extrabold text-white drop-shadow mb-2">Contact Us</h1>
          <p className="text-lg text-blue-100 font-medium drop-shadow mb-4">We&apos;d love to hear from you! Whether you have questions, suggestions, or want to get involved, reach out anytime.</p>
        </div>
      </div>
      <section className="bg-white rounded-xl border border-blue-100 shadow p-6 flex flex-col items-center">
        <div className="flex flex-col items-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-blue-500 mb-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91A2.25 2.25 0 012.25 6.993V6.75" />
          </svg>
          <h2 className="text-2xl font-bold text-blue-700 mb-1">Get in Touch</h2>
        </div>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>
            <span className="font-semibold text-blue-700">Email:</span> <a href="mailto:taipei@worldmun.org" className="text-blue-600 hover:underline">taipei@worldmun.org</a>
          </li>
          <li>
            <span className="font-semibold text-blue-700">Phone:</span> <a href="tel:+886972859487" className="text-blue-600 hover:underline">+886 972-859-487</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
