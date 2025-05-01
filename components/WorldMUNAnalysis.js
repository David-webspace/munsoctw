"use client";
import { useEffect, useState } from 'react';

const stats = [
  { value: 30, label: 'visited cities', duration: 1000 },
  { value: 30000, label: 'accumulated participants', duration: 1200 },
  { value: 110, label: 'countries joined', duration: 1000 },
];

function AnimatedNumber({ target, duration }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplay(Math.floor(progress * (target - start) + start));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(target);
      }
    };
    requestAnimationFrame(step);
    // eslint-disable-next-line
  }, [target, duration]);

  // Format with commas if needed
  return target >= 1000 ? display.toLocaleString() : display;
}

export default function WorldMUNAnalysis() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 mb-14 mt-10">
      <h2 className="text-3xl font-extrabold text-blue-800 mb-2 text-center">Harvard WorldMUN</h2>
      <p className="text-lg text-blue-700 mb-8 text-center max-w-2xl mx-auto">
        Dubbed “the Olympics of Model UN”, WorldMUN is the world’s most internationally-renowned MUN conference.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow p-6 border border-blue-100 min-w-[160px]">
            <span className="text-4xl font-extrabold text-blue-700 mb-2">
              <AnimatedNumber target={stat.value} duration={stat.duration} />
              {stat.value === 30000 ? '+' : ''}
            </span>
            <span className="text-base text-blue-900 font-medium">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
