'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    name: 'Sara D.',
    city: 'Colombo',
    comment: 'Our tuk-tuk driver was so friendly and helpful! Best way to explore Sri Lanka.',
    avatar: '/avatars/sara.png',
  },
  {
    name: 'James P.',
    city: 'Kandy',
    comment: 'Easy to book, affordable, and a super fun ride! Highly recommended.',
    avatar: '/avatars/james.jpg',
  },
  {
    name: 'Liyana R.',
    city: 'Galle',
    comment: 'I loved how clean and on-time everything was. 5 stars!',
    avatar: '/avatars/liyana.jpg',
  },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({offset: -100, duration : 800, once: true });
  }, []);

  return (
    <section style={{ backgroundColor: "#FEFCE8" }}  className="py-16 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-black">What Our <span className="text-yellow-500">Riders Say</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="w-16 h-16 mx-auto mb-4 text-black">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-full h-full object-cover rounded-full text-black"
                />
              </div>
              <p className="italic text-gray-700 mb-2">“{t.comment}”</p>
              <div className="text-yellow-400 text-lg mb-3">⭐ ⭐ ⭐ ⭐ ⭐</div>
              <h4 className="font-semibold text-black">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
