'use client';

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGlobe,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-yellow-400 via-yellow-300 to-yellow-100 text-gray-900 pt-16 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-extrabold flex items-center gap-2 mb-3">
            🛺 TukTukGo
          </h2>
          <p className="text-sm opacity-90 leading-relaxed">
            Discover Sri Lanka with ease. Book your tuk-tuk and explore hidden gems with trusted local drivers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm font-medium">
            <li><a href="#" className="hover:text-white transition">🏠 Home</a></li>
            <li><a href="#about" className="hover:text-white transition">👋 About Us</a></li>
            <li><a href="#book" className="hover:text-white transition">🛺 Book Now</a></li>
            <li><a href="#faq" className="hover:text-white transition">❓ FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-sm space-y-2 font-medium">
            <li>📍 Colombo, Sri Lanka</li>
            <li>📞 +94 77 123 4567</li>
            <li>📧 hello@tuktukgo.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex gap-4 text-xl text-gray-800">
            <a href="#" className="hover:text-blue-700 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-600 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-700 transition"><FaGlobe /></a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 pt-6 border-t border-yellow-200 text-center text-sm text-gray-800 font-medium">
        © {new Date().getFullYear()} TukTukGo. All rights reserved.
      </div>
    </footer>
  );
}
