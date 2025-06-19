'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WhyUs() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const features = [
    {
      title: 'Trusted Drivers',
      description: 'All our drivers are verified, friendly, and knowledgeable.',
      emoji: '🧑‍✈️',
      color: 'bg-blue-100',
      icon: '👑'
    },
    {
      title: 'Affordable Prices',
      description: 'Transparent pricing with no hidden fees.',
      emoji: '💰',
      color: 'bg-green-100',
      icon: '💸'
    },
    {
      title: 'Local Experience',
      description: 'Discover hidden gems only locals know.',
      emoji: '📍',
      color: 'bg-purple-100',
      icon: '🗝️'
    },
    {
      title: 'Flexible Booking',
      description: 'Easy scheduling and instant confirmation.',
      emoji: '📆',
      color: 'bg-orange-100',
      icon: '⏱️'
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-32 h-32 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900">
          Why Choose <span className="text-yellow-500">TukTuk Safari</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`transform transition-all duration-500 hover:scale-105 ${feature.color} rounded-3xl shadow-lg overflow-hidden`}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div className="p-6 flex items-start space-x-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-md">
                    {feature.emoji}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-sm">
                    {feature.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <div className="mt-4">
                    <span className="inline-block w-12 h-1 bg-yellow-400 rounded-full"></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating tuk-tuk animation */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="inline-block text-6xl animate-bounce">
            🛺
          </div>
          <p className="mt-4 text-gray-500 font-medium">
            Ready for an unforgettable adventure?
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}