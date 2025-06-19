"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bannerClosed, setBannerClosed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/tours" },
    { name: "Destinations", href: "/destinations" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Promotional Banner */}
      {!bannerClosed && (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-gray-900 relative overflow-hidden">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap flex items-center">
                {[...Array(2)].map((_, i) => (
                  <span key={i} className="inline-flex items-center mx-8">
                    <span className="mr-2 animate-pulse">✨</span>
                    <span className="font-medium">
                      Low Season = Lower Prices! Score exclusive tuktuk deals now
                    </span>
                    <span className="mx-2 animate-bounce">🛺</span>
                    <span className="font-bold">LIMITED TIME ONLY!</span>
                  </span>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => setBannerClosed(true)}
              className="ml-4 p-1 rounded-full hover:bg-yellow-500/30 focus:outline-none transition-colors flex-shrink-0"
              aria-label="Close banner"
            >
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          
          <style jsx>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 25s linear infinite;
              display: inline-flex;
            }
          `}</style>
        </div>
      )}

      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 shadow-lg" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          {/* Mobile Header */}
          <div className="md:hidden flex justify-between items-center h-16 px-4">
            {/* Logo Area */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
                <span className="text-3xl transition-transform duration-300 group-hover:rotate-12 animate-bounce">🛺</span>
                <span className="ml-2 text-xl font-bold text-gray-800 relative">
                  TukTuk
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </span>
              </Link>
            </div>

            {/* Book Now Button - Floating */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link
                href="/booking"
                className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center"
              >
                <span className="text-sm">BOOK NOW</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 focus:outline-none"
              aria-expanded={menuOpen}
            >
              <div className="w-6 relative">
                <span className={`block absolute h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}></span>
                <span className={`block absolute h-0.5 w-6 bg-gray-700 transition duration-200 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block absolute h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}></span>
              </div>
            </button>
          </div>

          {/* Desktop Header */}
          <div className="hidden md:flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
            {/* Logo with Animation */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
                <span className="text-3xl transition-transform duration-500 group-hover:rotate-12">🛺</span>
                <span className="ml-2 text-2xl font-bold text-gray-800 relative">
                  TukTuk
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation with Animated Underline */}
            <div className="flex items-center space-x-2">
              <nav className="flex space-x-6">
                {navLinks.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    className={`relative px-1 py-2 font-medium text-gray-700 hover:text-yellow-600 transition-colors ${
                      pathname === href ? "text-yellow-500" : ""
                    }`}
                  >
                    {name}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 transition-all duration-300 ${
                      pathname === href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}></span>
                  </Link>
                ))}
              </nav>

              {/* Book Now Button with Icon */}
              <div className="ml-6">
                <Link
                  href="/booking"
                  className="relative px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center group"
                >
                  <span>Book Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu sliding from right */}
        <div
          className={`fixed inset-y-0 right-0 w-4/5 max-w-sm z-50 bg-white/95 shadow-xl transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-6 pt-2 pb-8 space-y-4">
            {navLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all ${
                  pathname === href
                    ? "bg-yellow-100 text-yellow-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/booking"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Overlay when menu is open */}
        <div
          className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } md:hidden`}
          onClick={() => setMenuOpen(false)}
        />
      </header>
    </>
  );
}