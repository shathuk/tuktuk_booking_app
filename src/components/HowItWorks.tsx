'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HowItWorksTimeline() {
  useEffect(() => {
    AOS.init({offset: -50, duration: 1000, once: true });
  }, []);

  const steps = [
    {
      title: 'Choose Destination',
      emoji: '📍',
      desc: 'Select your Sri Lankan attraction.',
    },
    {
      title: 'Book Your Ride',
      emoji: '📆',
      desc: 'Pick date and time. get confirmation.',
    },
    {
      title: 'Meet Your Driver',
      emoji: '🛺',
      desc: 'Your tuk-tuk arrives & ready to go.',
    },
    {
      title: 'Enjoy the Journey',
      emoji: '🌟',
      desc: 'Create memories with scenic rides!',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-black">How It <span className="text-yellow-500">Works</span></h2>
        <div className="relative border-l-4 border-yellow-400 pl-6 space-y-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
              data-aos="fade-right"
              data-aos-delay={index * 150}
            >
              <div className="absolute -left-6 top-1 text-3xl bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                {step.emoji}
              </div>
              <h3 className="text-xl font-semibold mb-1 text-black">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
