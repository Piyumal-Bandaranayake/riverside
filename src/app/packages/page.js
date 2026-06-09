"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Reusable Image Placeholder
function ImagePlaceholder({ label, aspect = "aspect-video" }) {
  return (
    <div className={`w-full ${aspect} bg-gradient-to-br from-river-blue/5 to-tropical-green/5 border border-dashed border-river-blue/20 flex flex-col items-center justify-center p-6 text-center shadow-inner relative overflow-hidden group`}>
      <div className="absolute inset-0 bg-[radial-gradient(#0E7490_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
      <svg className="w-8 h-8 text-river-blue/40 group-hover:text-river-blue/60 group-hover:scale-110 transition-all duration-300 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      <span className="font-sans font-medium text-text-dark/60 text-xs tracking-wider uppercase mb-0.5">
        {label}
      </span>
      <span className="text-[9px] text-text-dark/40 font-mono">
        Placeholder Container
      </span>
    </div>
  );
}

export default function Packages() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const packages = [
    {
      title: "Weekend Escape",
      price: "120",
      duration: "2 Days / 1 Night",
      features: [
        "Deluxe river-view room",
        "Breakfast and dinner included",
        "Complimentary welcome drink",
        "Guided river boat ride",
      ],
      tag: null,
      placeholder: "Weekend Escape Room",
      image: "/a0.jpg",
    },
    {
      title: "Family Adventure",
      price: "350",
      duration: "3 Days / 2 Nights",
      features: [
        "Spacious Family suite",
        "All daily meals included",
        "Guided tropical nature walk",
        "Kelani River kayaking experience",
        "Traditional cultural dance show",
      ],
      tag: null,
      placeholder: "Family Suite & Rafting",
      image: "/a1.jpg",
    },
    {
      title: "Honeymoon Paradise",
      price: "500",
      duration: "3 Days / 2 Nights",
      features: [
        "Private luxury river villa",
        "Romantic candlelit dinner setup",
        "Couples signature spa treatment",
        "Sunset scenic river cruise",
      ],
      tag: "Most Popular",
      placeholder: "Honeymoon Villa & Sunset",
      image: "/a2.jpg",
    },
    {
      title: "Luxury Retreat",
      price: "800",
      duration: "4 Days / 3 Nights",
      features: [
        "Premium villa with plunge pool",
        "All-inclusive gourmet dining",
        "Daily wellness spa treatments",
        "Private guided river safari",
        "Complimentary airport transfer",
      ],
      tag: "Premium",
      placeholder: "Luxury Plunge Pool Villa",
      image: "/a4.jpg",
    },
  ];

  const bookingSteps = [
    {
      step: "01",
      title: "Choose Package",
      desc: "Select the perfect holiday package that aligns with your travel goals.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Submit Reservation",
      desc: "Enter your contact details and preferred check-in dates in our online form.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Confirm Booking",
      desc: "Our reservation desk coordinates with you to finalize and secure your booking.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Enjoy Your Stay",
      desc: "Welcome to Kitulgala, relax along the riverbanks with pristine service.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      q: "What is included in each package?",
      a: "Each package covers premium accommodations (varying by villas/rooms), specific board plans (e.g., breakfast & dinner for Weekend Escape, all meals for Family Adventure, all-inclusive gourmet for Luxury Retreat), a welcome drink, and designated adventure/wellness activities outlined in the description.",
    },
    {
      q: "Are airport transfers available?",
      a: "Yes, airport transfers can be arranged for any package. It is included complimentary in our premium 'Luxury Retreat' package. For other packages, transfers are available upon request for an additional service fee.",
    },
    {
      q: "Can packages be customized?",
      a: "Absolutely. We are happy to tailor activities, lengthen stays, or accommodate specific dining options (such as gluten-free or vegan meals). Please specify any custom requirements in the reservation inquiry form on the contact page.",
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept all major credit cards (Visa, MasterCard, American Express), secure bank transfers, and standard international payment gateways. Details will be provided by our reservation desk during final confirmation.",
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
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-xs font-sans tracking-widest uppercase text-white/60 mb-4">
              <Link href="/" className="hover:text-golden-sand transition-colors duration-300">Home</Link>
              <span>/</span>
              <span className="text-golden-sand font-semibold">Packages</span>
            </nav>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 text-wrap-balance">
              Our Resort Packages
            </h1>
            <p className="font-sans text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto text-wrap-pretty font-light">
              Choose the perfect getaway experience for your next vacation.
            </p>
          </div>
        </section>

        {/* PACKAGE CARDS SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="bg-bg-warm rounded-2xl border border-river-blue/5 hover:border-river-blue/20 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full overflow-hidden relative"
                >
                  {/* Badges */}
                  {pkg.tag && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`text-[10px] uppercase font-semibold tracking-wider px-3 py-1 rounded-full text-white shadow-sm ${
                        pkg.tag === "Most Popular" ? "bg-golden-sand" : "bg-tropical-green"
                      }`}>
                        {pkg.tag}
                      </span>
                    </div>
                  )}

                  {/* Image or Placeholder */}
                  {pkg.image ? (
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-river-blue/10">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder label={pkg.placeholder} aspect="aspect-[4/3]" />
                  )}

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs text-text-dark/50 font-sans tracking-wide mb-1">{pkg.duration}</span>
                    <h3 className="font-serif text-xl font-bold text-text-dark mb-4">{pkg.title}</h3>
                    
                    {/* Features checklist */}
                    <ul className="space-y-2.5 mb-8 text-sm text-text-dark/75 flex-1">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <svg className="w-4 h-4 text-tropical-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price and Action Button */}
                    <div className="border-t border-black/5 pt-5 mt-auto">
                      <div className="flex items-baseline justify-between mb-4">
                        <span className="text-xs text-text-dark/40 font-sans uppercase tracking-wider">Per Stay</span>
                        <div className="text-right">
                          <span className="text-xs font-sans text-text-dark/60">From </span>
                          <span className="font-serif text-2xl font-bold text-river-blue">USD {pkg.price}</span>
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="block w-full py-2.5 bg-river-blue text-white rounded-full font-sans font-medium text-xs tracking-wide text-center hover:bg-river-blue-dark transition-all duration-300 shadow-sm"
                      >
                        Reserve Package
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PACKAGE COMPARISON TABLE */}
        <section className="py-20 bg-bg-warm border-y border-black/[0.03]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-river-blue font-sans font-semibold text-sm tracking-[0.2em] uppercase mb-2 block">
                At a Glance
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark tracking-tight">
                Compare Packages
              </h2>
            </div>

            {/* Responsive Table Wrapper */}
            <div className="bg-white rounded-2xl shadow-sm border border-river-blue/5 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-river-blue text-white text-xs sm:text-sm font-sans font-semibold tracking-wider uppercase border-b border-river-blue-dark">
                      <th className="py-4 px-6">Package</th>
                      <th className="py-4 px-6">Accommodation</th>
                      <th className="py-4 px-6">Meals</th>
                      <th className="py-4 px-6">Excursions</th>
                      <th className="py-4 px-6">Spa</th>
                      <th className="py-4 px-6">Transfers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5 font-sans text-sm text-text-dark/85">
                    <tr>
                      <td className="py-4.5 px-6 font-serif font-bold text-text-dark">Weekend Escape</td>
                      <td className="py-4.5 px-6">Deluxe River Room</td>
                      <td className="py-4.5 px-6">Half Board (2 meals)</td>
                      <td className="py-4.5 px-6">River Boat Ride</td>
                      <td className="py-4.5 px-6 text-text-dark/40">—</td>
                      <td className="py-4.5 px-6 text-text-dark/40">—</td>
                    </tr>
                    <tr className="bg-bg-warm/30">
                      <td className="py-4.5 px-6 font-serif font-bold text-text-dark">Family Adventure</td>
                      <td className="py-4.5 px-6">Family Suite</td>
                      <td className="py-4.5 px-6">Full Board (3 meals)</td>
                      <td className="py-4.5 px-6">Walk, Kayak, Show</td>
                      <td className="py-4.5 px-6 text-text-dark/40">—</td>
                      <td className="py-4.5 px-6 text-text-dark/40">—</td>
                    </tr>
                    <tr>
                      <td className="py-4.5 px-6 font-serif font-bold text-text-dark">Honeymoon Paradise</td>
                      <td className="py-4.5 px-6">Luxury River Villa</td>
                      <td className="py-4.5 px-6">Romantic Half Board</td>
                      <td className="py-4.5 px-6">Scenic Sunset Cruise</td>
                      <td className="py-4.5 px-6 text-tropical-green font-medium">Couples Spa</td>
                      <td className="py-4.5 px-6 text-text-dark/40">—</td>
                    </tr>
                    <tr className="bg-bg-warm/30">
                      <td className="py-4.5 px-6 font-serif font-bold text-text-dark">Luxury Retreat</td>
                      <td className="py-4.5 px-6">Plunge Pool Villa</td>
                      <td className="py-4.5 px-6">All-Inclusive (Gourmet)</td>
                      <td className="py-4.5 px-6">Private River Safari</td>
                      <td className="py-4.5 px-6 text-tropical-green font-medium">Daily Spa</td>
                      <td className="py-4.5 px-6 text-tropical-green font-medium">Airport Pickup</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* BOOKING PROCESS SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-tropical-green font-sans font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
              How It Works
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark tracking-tight mb-20">
              Your Booking Journey
            </h2>

            {/* Steps Container */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {bookingSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center relative group">
                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-river-blue flex items-center justify-center shadow-md mb-6 relative z-10 group-hover:scale-105 group-hover:bg-river-blue-dark transition-all duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Step Number Tag */}
                  <span className="text-xs font-mono font-bold text-golden-sand tracking-widest mb-2">
                    STEP {step.step}
                  </span>
                  
                  <h3 className="font-serif text-lg font-bold text-text-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-text-dark/70 text-sm leading-relaxed max-w-[220px]">
                    {step.desc}
                  </p>
                </div>
              ))}
              
              {/* Connecting Lines for Desktop */}
              <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-river-blue/15 z-0 pointer-events-none" />
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 bg-bg-warm border-t border-black/[0.03]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-river-blue font-sans font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
                Got Questions?
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-sm border border-river-blue/5 overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-6 text-left flex items-center justify-between font-serif font-bold text-text-dark text-base sm:text-lg hover:text-river-blue focus:outline-none transition-colors duration-300 gap-4"
                    >
                      <span>{faq.q}</span>
                      <span className={`w-6 h-6 rounded-full bg-river-blue/5 text-river-blue flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    
                    <div
                      className={`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? "max-h-[300px] border-t border-black/5 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                      }`}
                    >
                      <p className="p-6 font-sans text-text-dark/75 text-sm sm:text-base leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SPECIAL OFFER BANNER */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-[#0E7490] to-[#15803D] text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-6 relative z-10">
            <span className="text-golden-sand font-sans font-semibold text-xs tracking-[0.25em] uppercase px-3.5 py-1.5 rounded-full bg-white/10 w-fit mx-auto">
              Limited Time Summer Offer
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Book Before July 31 and Receive 15% Off
            </h2>
            <p className="font-sans text-white/85 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Lock in your booking today and experience the serene waters and adventures of Kitulgala at a reduced price.
            </p>
            <div className="pt-3">
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 bg-golden-sand text-text-dark font-sans font-medium text-base rounded-full hover:bg-golden-sand-light hover:shadow-lg transition-all duration-300"
              >
                Reserve Now
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
