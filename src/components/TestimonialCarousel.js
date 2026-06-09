"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export default function TestimonialCarousel() {
  const testimonials = [
    {
      quote: "An unforgettable experience with amazing scenery and exceptional service.",
      author: "Sarah Johnson",
      country: "United Kingdom",
      rating: 5,
    },
    {
      quote: "Perfect destination for a relaxing family vacation.",
      author: "Michael Perera",
      country: "Sri Lanka",
      rating: 5,
    },
    {
      quote: "The river-view villa exceeded all our expectations.",
      author: "Emma Rodriguez",
      country: "Spain",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef();

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [isAnimating, testimonials.length]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [isAnimating, testimonials.length]);

  const handleSelect = (index) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // match transition duration

    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Autoplay functionality
  useEffect(() => {
    autoPlayRef.current = handleNext;
  });

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-12 py-8">
      {/* Decorative Quote Icon */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-river-blue/5 pointer-events-none">
        <svg className="w-24 h-24 sm:w-32 sm:h-32 fill-currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Testimonial Card Container */}
      <div className="relative overflow-hidden min-h-[220px] sm:min-h-[180px] flex items-center justify-center">
        {testimonials.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isActive
                  ? "opacity-100 scale-100 translate-x-0 relative z-10"
                  : "opacity-0 scale-95 translate-x-4 pointer-events-none absolute"
              }`}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(item.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-golden-sand fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote Review */}
              <p className="font-serif italic text-lg sm:text-2xl text-text-dark/95 leading-relaxed max-w-2xl px-4 mb-6">
                "{item.quote}"
              </p>

              {/* Author & Country */}
              <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 text-sm font-sans">
                <span className="font-semibold text-text-dark">{item.author}</span>
                <span className="hidden sm:inline text-text-dark/45">—</span>
                <span className="text-tropical-green font-medium tracking-wide">
                  {item.country}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border border-river-blue/15 hover:border-river-blue hover:bg-river-blue hover:text-white transition-all duration-300 text-river-blue/70 cursor-pointer shadow-sm focus:outline-none"
        aria-label="Previous review"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border border-river-blue/15 hover:border-river-blue hover:bg-river-blue hover:text-white transition-all duration-300 text-river-blue/70 cursor-pointer shadow-sm focus:outline-none"
        aria-label="Next review"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2.5 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-8 bg-river-blue" : "w-2.5 bg-river-blue/20 hover:bg-river-blue/45"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
