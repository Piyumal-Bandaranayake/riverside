"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Reusable Premium Image Placeholder Component
function ImagePlaceholder({ label, aspect = "aspect-video", rounded = "rounded-2xl" }) {
  return (
    <div className={`w-full ${aspect} ${rounded} bg-gradient-to-br from-river-blue/5 to-tropical-green/5 border border-dashed border-river-blue/20 flex flex-col items-center justify-center p-6 text-center shadow-inner relative overflow-hidden group`}>
      <div className="absolute inset-0 bg-[radial-gradient(#0E7490_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
      <div className="absolute w-40 h-40 rounded-full bg-river-blue/5 blur-3xl -top-10 -left-10" />
      <div className="absolute w-40 h-40 rounded-full bg-tropical-green/5 blur-3xl -bottom-10 -right-10" />
      
      <svg className="w-10 h-10 text-river-blue/40 group-hover:text-river-blue/60 group-hover:scale-110 transition-all duration-300 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      <span className="font-sans font-medium text-text-dark/60 text-xs tracking-wider uppercase mb-1">
        {label}
      </span>
      <span className="text-[10px] text-text-dark/40 font-mono">
        Placeholder Container
      </span>
    </div>
  );
}

// Interactive Animated Counter
function StatCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end) || end === 0) {
      setCount(target);
      return;
    }
    const totalMiliseconds = duration;
    const incrementTime = 30;
    const totalSteps = totalMiliseconds / incrementTime;
    const incrementValue = end / totalSteps;

    const timer = setInterval(() => {
      start += incrementValue;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
}

export default function About() {
  const coreValues = [
    {
      title: "Excellence",
      desc: "We hold ourselves to the highest standards of service, ensuring every detail is meticulously crafted.",
      icon: (
        <svg className="w-6 h-6 text-river-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Hospitality",
      desc: "Delivering genuine Sri Lankan warmth and personalized attention to create lasting memories.",
      icon: (
        <svg className="w-6 h-6 text-river-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
    },
    {
      title: "Sustainability",
      desc: "Operating responsibly by protecting local waterways and using eco-friendly materials.",
      icon: (
        <svg className="w-6 h-6 text-river-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Integrity",
      desc: "We run our business with complete honesty, safety focus, and transparency in all guest policies.",
      icon: (
        <svg className="w-6 h-6 text-river-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Community",
      desc: "Empowering Kitulgala residents through fair employment and supporting local suppliers.",
      icon: (
        <svg className="w-6 h-6 text-river-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Environmental Responsibility",
      desc: "Preserving the Kelani River basin biodiversity and running strict waste-minimization programs.",
      icon: (
        <svg className="w-6 h-6 text-river-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
  ];

  const team = [
    {
      name: "Rohan de Silva",
      position: "Resort Manager",
      desc: "Bringing over 15 years of luxury resort management experience across Southeast Asia and Sri Lanka.",
      image: "/rohan.png",
    },
    {
      name: "Priya Fernando",
      position: "Guest Relations Manager",
      desc: "Dedicated to crafting personalized stays and ensuring every guest experiences true Sri Lankan hospitality.",
      image: "/priya.png",
    },
    {
      name: "Chef Lalith Bandara",
      position: "Executive Chef",
      desc: "Master of authentic Sri Lankan culinary arts and international fusion dining, focusing on locally-sourced ingredients.",
      image: "/chef.png",
    },
    {
      name: "Suresh Perera",
      position: "Activities Coordinator",
      desc: "An avid outdoor explorer and certified naturalist, guiding kayaking and trekking excursions through Kitulgala's forests.",
      image: "/suresh.png",
    },
  ];

  return (
    <>
      <Header />

      <main className="w-full pt-20">
        
        {/* HERO SECTION WITH BREADCRUMB */}
        <section
          className="relative w-full py-20 sm:py-28 bg-[#0E2938] bg-cover bg-center bg-no-repeat border-b border-black/[0.03] animate-fade-in"
          style={{
            backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.55)), url('/t1.jpg')",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
            {/* Breadcrumbs */}
            <nav className="flex items-center justify-center gap-2 text-xs font-sans tracking-widest uppercase text-white/60 mb-4">
              <Link href="/" className="hover:text-golden-sand transition-colors duration-300">Home</Link>
              <span>/</span>
              <span className="text-golden-sand font-semibold">About Us</span>
            </nav>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 text-wrap-balance">
              About RiverSide Paradise Resort
            </h1>
            <p className="font-sans text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto text-wrap-pretty font-light">
              Learn about our story, values, and commitment to providing unforgettable hospitality experiences.
            </p>
          </div>
        </section>

        {/* OUR STORY SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Side: Large image */}
              <div className="lg:col-span-6">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-black/5 bg-river-blue/10 group">
                  <img
                    src="/t1.jpg"
                    alt="RiverSide Paradise Resort Story"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Side: Our Story text */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-river-blue font-sans font-semibold text-sm tracking-[0.2em] uppercase">
                  Our Beginnings
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark tracking-tight">
                  Our Story
                </h2>
                <p className="font-sans text-text-dark/80 text-base leading-relaxed text-wrap-pretty">
                  Founded in 2018, RiverSide Paradise Resort was created to provide travelers with a unique blend of luxury, comfort, and nature. Located along the beautiful riverbanks of Kitulgala, Sri Lanka, the resort offers a peaceful retreat away from city life while delivering world-class hospitality.
                </p>
                <p className="font-sans text-text-dark/70 text-sm leading-relaxed text-wrap-pretty">
                  What started as a boutique eco-lodge has evolved into a premier luxury tropical destination. We are proud to serve travelers from around the world, introducing them to the raw beauty of Sri Lankan waterways, ancient rainforests, and local hospitality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION SECTION */}
        <section className="py-20 bg-bg-warm border-y border-black/[0.03]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Mission Card */}
              <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-river-blue/5 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-river-blue/5 text-river-blue flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-text-dark mb-4">Our Mission</h3>
                  <p className="font-sans text-text-dark/70 text-base leading-relaxed">
                    To provide world-class hospitality experiences while promoting sustainable tourism and environmental conservation.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-river-blue/5 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-tropical-green/5 text-tropical-green flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-text-dark mb-4">Our Vision</h3>
                  <p className="font-sans text-text-dark/70 text-base leading-relaxed">
                    To become Sri Lanka's most loved riverside resort known for exceptional service and unforgettable guest experiences.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CORE VALUES SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-tropical-green font-sans font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
              What Guides Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark tracking-tight mb-16">
              Our Core Values
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-bg-warm p-8 rounded-2xl border border-river-blue/5 hover:border-river-blue/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-river-blue/5 flex items-center justify-center mb-5 group-hover:bg-river-blue group-hover:text-white text-river-blue transition-colors duration-300">
                    {val.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-text-dark mb-2.5">{val.title}</h3>
                  <p className="font-sans text-text-dark/70 text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATISTICS COUNTERS SECTION */}
        <section className="py-16 sm:py-20 bg-river-blue text-white shadow-inner">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-golden-sand">
                  <StatCounter target="5000" suffix="+" />
                </span>
                <span className="text-white/70 text-xs sm:text-sm font-sans tracking-wider uppercase mt-2">
                  Happy Guests
                </span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-golden-sand">
                  <StatCounter target="150" suffix="+" />
                </span>
                <span className="text-white/70 text-xs sm:text-sm font-sans tracking-wider uppercase mt-2">
                  Luxury Rooms
                </span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-golden-sand">
                  <StatCounter target="8" suffix="+" />
                </span>
                <span className="text-white/70 text-xs sm:text-sm font-sans tracking-wider uppercase mt-2">
                  Years Experience
                </span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-golden-sand">
                  <StatCounter target="98" suffix="%" />
                </span>
                <span className="text-white/70 text-xs sm:text-sm font-sans tracking-wider uppercase mt-2">
                  Guest Satisfaction
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-24 bg-bg-warm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-river-blue font-sans font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
              Meet Our Team
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark tracking-tight mb-16">
              Our Hospitality Experts
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-black/[0.02] flex flex-col h-full"
                >
                  {/* Circular Image */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 flex-shrink-0 border border-river-blue/10 bg-river-blue/5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  <div className="text-center flex-1 flex flex-col">
                    <h3 className="font-serif text-lg font-bold text-text-dark mb-1">
                      {member.name}
                    </h3>
                    <p className="font-sans text-xs text-tropical-green tracking-wide uppercase font-semibold mb-4">
                      {member.position}
                    </p>
                    <p className="font-sans text-text-dark/70 text-sm leading-relaxed mt-auto">
                      {member.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-20 bg-white border-t border-black/[0.03]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark tracking-tight">
              Ready to Experience RiverSide Paradise?
            </h2>
            <p className="font-sans text-text-dark/70 text-base max-w-lg mx-auto">
              Browse our rooms, river excursions, and custom holiday plans to find the perfect choice for your getaway.
            </p>
            <div className="pt-2">
              <Link
                href="/packages"
                className="inline-block px-8 py-3.5 bg-golden-sand text-text-dark font-sans font-medium text-base rounded-full hover:bg-golden-sand-light hover:shadow-md transition-all duration-300"
              >
                View Packages
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
