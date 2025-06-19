'use client';

import { useEffect, useState } from 'react';

type LoadingMessage = {
  text: string;
  min: number;
  max: number;
};

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // Smooth fade-out
          return 100;
        }
        return prev + (prev < 80 ? 4 : 1); // Faster early, slower near end
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  // Tuk-tuk loading messages with TypeScript type
  const loadingMessages: LoadingMessage[] = [
    { text: "Revving the engine... 🚀", min: 0, max: 30 },
    { text: "Your tuk-tuk is on the way! 🛺", min: 30, max: 70 },
    { text: "Avoiding traffic... 🚦", min: 70, max: 90 },
    { text: "Arrived! 🎉", min: 90, max: 100 },
  ];

  // Safely get message (fallback to first message if none found)
  const currentMessage = loadingMessages.find(
    (msg) => progress >= msg.min && progress <= msg.max
  ) || loadingMessages[0];

  // Tuk-tuk animation (right to center)
  const tukTukPosition = progress < 20 
    ? "translateX(100%)" 
    : progress < 80 
    ? `translateX(${100 - progress}%)` 
    : "translateX(0)";

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-[#FEFCE8] overflow-hidden">
      {/* Moving Tuk-Tuk */}
      <div className="relative w-full max-w-md h-24 flex justify-center">
        <div 
          className="text-6xl absolute top-0 transition-all duration-300 ease-out"
          style={{ 
            transform: tukTukPosition,
            filter: "drop-shadow(0 4px 8px rgba(254, 207, 0, 0.4))",
          }}
        >
          🛺
        </div>
        
        {/* Gradient Progress Bar */}
        <div className="absolute bottom-0 w-75 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-100 ease-out"
            style={{ 
              width: `${progress}%`,
              background: "linear-gradient(90deg, #FECF00 0%, #FF9A00 100%)",
              boxShadow: "0 2px 8px rgba(254, 207, 0, 0.5)"
            }}
          ></div>
        </div>
      </div>

      {/* Dynamic Message (now type-safe) */}
      <p className="text-lg font-medium text-gray-800 text-center px-4">
        {currentMessage.text}
      </p>

      {/* Percentage Indicator */}
      <span 
        className={`text-sm font-semibold ${
          progress >= 95 ? "animate-pulse text-[#FECF00]" : "text-gray-500"
        }`}
      >
        {progress}%
      </span>
    </div>
  );
}