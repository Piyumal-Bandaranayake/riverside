"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Home() {
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const highlights = [
    {
      title: "Riverside Villas",
      desc: "Luxury accommodations with stunning river views.",
      icon: (
        <svg className="w-8 h-8 text-river-blue" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
    },
    {
      title: "Adventure Activities",
      desc: "Kayaking, cycling, and nature excursions.",
      icon: (
        <svg className="w-8 h-8 text-river-blue" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l.406.34c.15.127.325.223.515.283l.847.266a1.875 1.875 0 011.052 2.036l-.141.564a1.875 1.875 0 00.321 1.616l.805.966c.228.274.56.435.91.435h.539c.211 0 .416-.059.594-.17l.523-.327M12.75 3.03a9 9 0 109.195 9.47M12.75 3.03v3.196m0 0a4.992 4.992 0 013.742 4.786m-3.742-4.786L19.5 9.75M9.619 8.984a3 3 0 01-.778-1.397l-.047-.19a3 3 0 00-.778-1.397L7.2 5.2M9.619 8.984L7.2 11.4M9.619 8.984H4.921M4.921 8.984a9 9 0 001.992 6.84" />
        </svg>
      ),
    },
    {
      title: "Fine Dining",
      desc: "Authentic Sri Lankan and international cuisine.",
      icon: (
        <svg className="w-8 h-8 text-river-blue" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      title: "Spa & Wellness",
      desc: "Relaxing treatments and wellness experiences.",
      icon: (
        <svg className="w-8 h-8 text-river-blue" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
    },
  ];

  const packages = [
    {
      id: "weekend",
      title: "Weekend Escape",
      price: "120",
      desc: "Recharge your energy with a quiet, peaceful weekend retreat next to the flowing river.",
      image: "/a0.jpg",
      gradient: "from-[#0E7490]/20 to-[#15803D]/20",
    },
    {
      id: "honeymoon",
      title: "Honeymoon Paradise",
      price: "500",
      desc: "A romantic riverside getaway with private candlelit dining and plunge pool luxury.",
      image: "/a2.jpg",
      gradient: "from-[#F59E0B]/20 to-[#0E7490]/20",
    },
    {
      id: "family",
      title: "Family Adventure",
      price: "350",
      desc: "Bond with your family over white water rafting, nature trail walks, and outdoor games.",
      image: "/a1.jpg",
      gradient: "from-[#15803D]/20 to-[#F59E0B]/20",
    },
  ];

  return (
    <>
      <Header />

      <main className="w-full overflow-x-hidden">
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative min-h-screen w-full flex items-center justify-center pt-20 pb-12 bg-[#0E2938] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.45)), url('/t3.jpg')",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col items-start text-left relative z-10 animate-fade-in">
            {/* Small text / Eyebrow */}
            <span className="text-golden-sand font-sans font-semibold text-sm sm:text-base tracking-[0.25em] uppercase mb-4 opacity-90">
              Welcome to Sri Lanka's Riverside Paradise
            </span>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15] max-w-4xl text-wrap-pretty mb-6">
              Experience Luxury Along Nature's Riverbanks
            </h1>

            {/* Description */}
            <p className="font-sans text-white/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-10 text-wrap-pretty font-light">
              Escape to a peaceful riverside retreat surrounded by lush greenery, breathtaking views, and authentic Sri Lankan hospitality.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start w-full mb-16">
              <a
                href="#packages"
                onClick={(e) => handleSmoothScroll(e, "#packages")}
                className="px-8 py-3.5 bg-golden-sand text-text-dark font-sans font-medium text-base rounded-full hover:bg-golden-sand-light hover:shadow-lg transition-all duration-300 text-center"
              >
                Explore Packages
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-transparent text-white border-2 border-white/80 font-sans font-medium text-base rounded-full hover:bg-white hover:text-river-blue hover:border-white transition-all duration-300 text-center"
              >
                Book Your Stay
              </Link>
            </div>

            {/* Floating Statistics Card */}
            <div className="w-full max-w-3xl glass-panel-dark rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white shadow-xl animate-slide-up">
              <div className="flex flex-col items-center border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-golden-sand">5000+</span>
                <span className="text-white/70 text-xs sm:text-sm font-sans tracking-wider uppercase mt-1">
                  Happy Guests
                </span>
              </div>
              <div className="flex flex-col items-center border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-golden-sand">150</span>
                <span className="text-white/70 text-xs sm:text-sm font-sans tracking-wider uppercase mt-1">
                  Luxury Rooms
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-golden-sand">8 Years</span>
                <span className="text-white/70 text-xs sm:text-sm font-sans tracking-wider uppercase mt-1">
                  Experience
                </span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce-down cursor-pointer z-10">
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "#about")}
              aria-label="Scroll down"
            >
              <svg className="w-6 h-6 text-white/70 hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </section>

        {/* ABOUT PREVIEW SECTION */}
        <section id="about" className="py-24 sm:py-32 bg-bg-warm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image with Frame Effect */}
              <div className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-river-blue/10">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage: "url('/t2.jpg')",
                    backgroundColor: "#115e72"
                  }}
                  role="img"
                  aria-label="Scenic view of RiverSide Paradise Resort at Kitulgala, Sri Lanka"
                />
              </div>

              {/* Right Column: Context Content */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-river-blue font-sans font-semibold text-sm sm:text-base tracking-[0.2em] uppercase">
                  Discover Our Sanctuary
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark tracking-tight text-wrap-balance">
                  Discover RiverSide Paradise Resort
                </h2>
                <p className="font-sans text-text-dark/80 text-base sm:text-lg leading-relaxed text-wrap-pretty">
                  RiverSide Paradise Resort offers a unique combination of comfort, adventure, and nature. Located on the beautiful riverbanks of Kitulgala, Sri Lanka, we provide unforgettable experiences for travelers seeking relaxation and excitement.
                </p>
                <div className="pt-4">
                  <Link
                    href="/about"
                    className="inline-block px-7 py-3 bg-river-blue text-white rounded-full font-sans font-medium text-sm tracking-wide shadow-sm hover:bg-river-blue-dark hover:shadow-md transition-all duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESORT HIGHLIGHTS */}
        <section id="highlights" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-tropical-green font-sans font-semibold text-sm sm:text-base tracking-[0.2em] uppercase mb-3 block">
              Unique Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark tracking-tight mb-16">
              Why Choose Us
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col h-full bg-bg-warm p-8 rounded-2xl border border-river-blue/5 hover:border-river-blue/20 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group"
                >
                  <div className="w-14 h-14 rounded-full bg-river-blue/5 flex items-center justify-center mb-6 group-hover:bg-river-blue group-hover:text-white text-river-blue transition-colors duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-text-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-text-dark/70 text-sm leading-relaxed mt-auto">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PACKAGES PREVIEW */}
        <section id="packages" className="py-24 sm:py-32 bg-bg-warm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-river-blue font-sans font-semibold text-sm sm:text-base tracking-[0.2em] uppercase mb-3 block">
              Exclusive Offers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark tracking-tight mb-16">
              Our Popular Packages
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full border border-black/[0.03]"
                >
                  {/* Package Image Area */}
                  <div className="relative aspect-[4/3] bg-river-blue/5 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${pkg.gradient} mix-blend-multiply`}
                    />
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                      style={{
                        backgroundImage: `url('${pkg.image}')`,
                        backgroundColor: "#1e3a8a"
                      }}
                      role="img"
                      aria-label={pkg.title}
                    />
                    {/* Price Tag */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-md">
                      <span className="text-xs text-text-dark/70 font-sans tracking-wide">From </span>
                      <span className="font-serif font-bold text-river-blue">USD {pkg.price}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <h3 className="font-serif text-2xl font-bold text-text-dark mb-3">
                      {pkg.title}
                    </h3>
                    <p className="font-sans text-text-dark/70 text-sm leading-relaxed mb-6">
                      {pkg.desc}
                    </p>
                    <Link
                      href="/packages"
                      className="w-full mt-auto py-3 bg-river-blue text-white rounded-full font-sans font-medium text-sm tracking-wide text-center hover:bg-river-blue-dark hover:shadow-md transition-all duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-tropical-green font-sans font-semibold text-sm sm:text-base tracking-[0.2em] uppercase mb-3 block">
              Guest Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark tracking-tight mb-12">
              What Our Guests Say
            </h2>

            <TestimonialCarousel />
          </div>
        </section>

        {/* CALL TO ACTION SECTION */}
        <section
          id="cta"
          className="relative py-28 sm:py-36 w-full flex items-center justify-center bg-[#071317] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(10, 17, 24, 0.65), rgba(10, 17, 24, 0.55)), url('/t1.jpg')",
          }}
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Ready for Your Dream Getaway?
            </h2>
            <p className="font-sans text-white/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Book your stay today and experience the beauty of Sri Lanka's finest riverside resort.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-golden-sand text-text-dark font-sans font-medium text-base rounded-full hover:bg-golden-sand-light hover:shadow-lg transition-all duration-300 text-center"
            >
              Reserve Your Stay
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
