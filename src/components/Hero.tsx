'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null); // Added proper type

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollPosition = window.pageYOffset;
        bgRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out"
        style={{ 
          backgroundImage: "url('/banner.jpg')",
          backgroundColor: 'black',
          willChange: 'transform'
        }}
      >
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-2">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg text-white">
          Explore Sri Lanka with Your Private Tuk-Tuk
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-white/90 drop-shadow">
          Trusted drivers, affordable rides, unforgettable memories.
        </p>
        <a
          href="/booking"
          className="border-b border-l border-3 border-white bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Explore Now
        </a>
      </div>

    </section>
  );
}