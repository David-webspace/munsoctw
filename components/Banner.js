export default function Banner() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-300 py-14 px-6 rounded-2xl mb-12 shadow-lg overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 opacity-20 bg-[url('/events/spring-gala.jpg')] bg-cover bg-center pointer-events-none" />
      <div className="relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow mb-3">Welcome to MUN Society Taiwan</h2>
        <p className="text-lg sm:text-2xl text-blue-100 font-medium drop-shadow">Empowering youth through Model United Nations, diplomacy, and leadership events.</p>
      </div>
    </section>
  );
}
