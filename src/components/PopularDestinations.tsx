"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const destinations = [
  { 
    name: "Nuwara Eliya", 
    image: "/destinations/nuwaraeliya.jpg", 
    tag: "Hill Country",
    highlight: "Tea plantation tours",
    icon: "🍃"
  },
  { 
    name: "Ella", 
    image: "/destinations/ella.jpg", 
    tag: "Adventure Spot",
    highlight: "Nine Arch Bridge",
    icon: "🌉"
  },
  { 
    name: "Sigiriya", 
    image: "/destinations/sigiriya.jpg", 
    tag: "Ancient Fortress",
    highlight: "Lion Rock climb",
    icon: "🦁"
  },
  { 
    name: "Galle", 
    image: "/destinations/galle.jpg", 
    tag: "Colonial Beach Town",
    highlight: "Fort sunset views",
    icon: "🏰"
  },
  { 
    name: "Kandy", 
    image: "/destinations/kandy.jpg", 
    tag: "Cultural Capital",
    highlight: "Temple of the Tooth",
    icon: "🕌"
  },
  { 
    name: "Mirissa", 
    image: "/destinations/mirissa.jpg", 
    tag: "Whale Watching",
    highlight: "Dolphin sightings",
    icon: "🐬"
  },
  { 
    name: "Anuradhapura", 
    image: "/destinations/anuradhapura.jpg", 
    tag: "Ancient Kingdom",
    highlight: "Sacred Bodhi Tree",
    icon: "🌳"
  },
];

export default function PopularDestinationsCarousel() {
  const [isMounted, setIsMounted] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
      skipSnaps: true
    },
    isMounted ? [Autoplay({ delay: 4000, stopOnInteraction: false })] : []
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (emblaApi) emblaApi.destroy();
    };
  }, [emblaApi]);

  // SSR Fallback - Simple Grid
  if (!isMounted) {
    return (
      <section className="py-16 px-4 sm:px-2 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 relative">
            <span className="relative z-10">
              Explore Sri Lanka's <span className="text-yellow-500">Hidden Gems</span>
            </span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-400 rounded-full"></span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {destinations.slice(0, 4).map((place) => (
              <div key={place.name} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image 
                    src={place.image} 
                    alt={place.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <span className="absolute top-3 right-3 bg-white/90 text-lg p-2 rounded-full shadow">
                    {place.icon}
                  </span>
                </div>
                <div className="p-4 flex flex-col items-center gap-2 text-center">
                  <h3 className="text-lg font-bold text-gray-800">{place.name}</h3>
                  <p className="text-sm text-gray-600">{place.tag}</p>
                  <div className="mt-2 text-xs text-yellow-600 font-medium">
                    ✨ {place.highlight}
                  </div>
                  <a
                    href="/booking"
                    className="mt-2 inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full font-semibold shadow hover:shadow-md text-sm transition-all hover:scale-[1.02]"
                  >
                    Book Tour
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Client-side Carousel
  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-gray-100 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 relative">
          <span className="relative z-10 inline-block text-black">
            Must-Visit <span className="text-yellow-500">Destinations</span>
            <span className="absolute -bottom-1 left-0 right-0 h-1 bg-yellow-400 rounded-full"></span>
          </span>
        </h2>

        <div className="relative group">
          {/* Custom navigation arrows */}
          <button 
            onClick={scrollPrev}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous destination"
          >
            <div className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-yellow-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </div>
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              <div className="flex-shrink-0 w-[20px] sm:w-[40px]"></div>
              
              {destinations.map((place) => (
                <div 
                  key={place.name} 
                  className="flex-shrink-0 mx-2 min-w-[260px] sm:min-w-[280px] bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={place.image} 
                      alt={place.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <span className="absolute top-3 right-3 bg-white/90 text-xl p-2 rounded-full shadow">
                      {place.icon}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <h3 className="text-xl font-bold text-white">{place.name}</h3>
                      <p className="text-sm text-gray-200">{place.tag}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-sm text-yellow-600 font-medium mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                      <span>Must-see: {place.highlight}</span>
                    </div>
                    <a
                      href="/booking"
                      className="w-full inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-4 py-3 rounded-xl font-bold shadow hover:shadow-md text-sm transition-all"
                    >
                      Explore {place.name}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
              
              <div className="flex-shrink-0 w-[20px] sm:w-[40px]"></div>
            </div>
          </div>

          <button 
            onClick={scrollNext}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next destination"
          >
            <div className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-yellow-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${emblaApi?.selectedScrollSnap() === index ? 'bg-yellow-500 w-4' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}