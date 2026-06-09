"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formStatus, setFormStatus] = useState(null); // 'loading', 'success', 'error'
  const [errors, setErrors] = useState({});
  const nameInputRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus("loading");
    
    // Simulate submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const focusForm = (e) => {
    e.preventDefault();
    if (nameInputRef.current) {
      nameInputRef.current.focus();
      const offset = 120;
      const elementPosition = nameInputRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const contactCards = [
    {
      title: "Address",
      content: "Riverbank Road, Kitulgala, Sri Lanka",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25g-7.5-6.375 7.5-6.375 7.5 6.375 7.5 6.375z" />
        </svg>
      ),
    },
    {
      title: "Phone",
      content: "+94 36 225 7890",
      href: "tel:+94362257890",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.944-6.94l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      title: "Mobile",
      content: "+94 77 123 4567",
      href: "tel:+94771234567",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
    {
      title: "Email",
      content: "info@riversideparadiseresort.com",
      href: "mailto:info@riversideparadiseresort.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      q: "What is check-in time?",
      a: "Our standard check-in time starts at 2:00 PM. Early check-in can be requested and is subject to room availability.",
    },
    {
      q: "What is check-out time?",
      a: "Our standard check-out time is 12:00 PM (noon). Late check-out can be requested and is subject to availability and extra fees.",
    },
    {
      q: "Is Wi-Fi available?",
      a: "Yes, free high-speed fiber Wi-Fi is available to all guests in all guest rooms, villas, and resort public spaces.",
    },
    {
      q: "Do you provide airport transfers?",
      a: "Yes, we provide luxury airport pickups and drop-offs. It is included in the premium Luxury Retreat, and is available for an additional fee for all other packages.",
    },
    {
      q: "Are pets allowed?",
      a: "Unfortunately, pets are not allowed at the resort to preserve the tranquility and natural fauna of the local environment.",
    },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: "FB" },
    { name: "Instagram", href: "#", icon: "IG" },
    { name: "YouTube", href: "#", icon: "YT" },
    { name: "TikTok", href: "#", icon: "TK" },
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
              <span className="text-golden-sand font-semibold">Contact Us</span>
            </nav>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 text-wrap-balance">
              Contact Us
            </h1>
            <p className="font-sans text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto text-wrap-pretty font-light">
              We are here to help you plan your perfect stay.
            </p>
          </div>
        </section>

        {/* CONTACT INFORMATION CARDS */}
        <section className="py-16 bg-white border-b border-black/[0.02]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-bg-warm p-8 rounded-2xl border border-river-blue/5 hover:border-river-blue/20 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-river-blue/5 flex items-center justify-center mb-5 group-hover:bg-river-blue group-hover:text-white text-river-blue transition-all duration-300 shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-text-dark mb-2">{card.title}</h3>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="font-sans text-text-dark/75 text-sm hover:text-river-blue break-all transition-colors duration-300"
                    >
                      {card.content}
                    </a>
                  ) : (
                    <span className="font-sans text-text-dark/75 text-sm">{card.content}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section className="py-24 bg-bg-warm">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-river-blue/5">
              <h2 className="font-serif text-3xl font-bold text-text-dark mb-2 text-center">
                Send a Message
              </h2>
              <p className="font-sans text-text-dark/60 text-sm sm:text-base text-center mb-10 max-w-md mx-auto">
                Fill out the form below and our customer relations team will get back to you shortly.
              </p>

              {formStatus === "success" ? (
                <div className="p-8 bg-tropical-green/5 border border-tropical-green/20 rounded-xl text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-tropical-green/10 text-tropical-green flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-text-dark">Message Sent Successfully</h3>
                  <p className="font-sans text-text-dark/75 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out! We have received your message and will respond to your inquiry within 12 hours.
                  </p>
                  <button
                    onClick={() => setFormStatus(null)}
                    className="px-6 py-2.5 bg-river-blue text-white rounded-full font-sans font-medium text-xs tracking-wide hover:bg-river-blue-dark transition-all duration-300 focus:outline-none"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-wider text-text-dark/60 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        ref={nameInputRef}
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Sarah Johnson"
                        className={`p-3.5 rounded-lg border bg-bg-warm focus:outline-none focus:ring-1 transition-all duration-300 text-sm text-text-dark font-sans placeholder-text-dark/30 ${
                          errors.fullName ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-black/10 focus:border-river-blue focus:ring-river-blue"
                        }`}
                      />
                      {errors.fullName && <span className="text-red-500 text-xs font-sans mt-1.5">{errors.fullName}</span>}
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-text-dark/60 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="sarah@example.com"
                        className={`p-3.5 rounded-lg border bg-bg-warm focus:outline-none focus:ring-1 transition-all duration-300 text-sm text-text-dark font-sans placeholder-text-dark/30 ${
                          errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-black/10 focus:border-river-blue focus:ring-river-blue"
                        }`}
                      />
                      {errors.email && <span className="text-red-500 text-xs font-sans mt-1.5">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-text-dark/60 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+94 77 123 4567"
                        className={`p-3.5 rounded-lg border bg-bg-warm focus:outline-none focus:ring-1 transition-all duration-300 text-sm text-text-dark font-sans placeholder-text-dark/30 ${
                          errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-black/10 focus:border-river-blue focus:ring-river-blue"
                        }`}
                      />
                      {errors.phone && <span className="text-red-500 text-xs font-sans mt-1.5">{errors.phone}</span>}
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-text-dark/60 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Villa Reservations / Adventure Activities"
                        className={`p-3.5 rounded-lg border bg-bg-warm focus:outline-none focus:ring-1 transition-all duration-300 text-sm text-text-dark font-sans placeholder-text-dark/30 ${
                          errors.subject ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-black/10 focus:border-river-blue focus:ring-river-blue"
                        }`}
                      />
                      {errors.subject && <span className="text-red-500 text-xs font-sans mt-1.5">{errors.subject}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-text-dark/60 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your holiday plans or details..."
                      className={`p-3.5 rounded-lg border bg-bg-warm focus:outline-none focus:ring-1 transition-all duration-300 text-sm text-text-dark font-sans placeholder-text-dark/30 resize-none ${
                        errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-black/10 focus:border-river-blue focus:ring-river-blue"
                      }`}
                    />
                    {errors.message && <span className="text-red-500 text-xs font-sans mt-1.5">{errors.message}</span>}
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={formStatus === "loading"}
                      className="w-full py-4 bg-river-blue text-white rounded-full font-sans font-medium text-sm tracking-wide text-center hover:bg-river-blue-dark transition-all duration-300 focus:outline-none disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {formStatus === "loading" ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* LOCATION SECTION (PREMIUM VECTOR MAP PLACEHOLDER) */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-river-blue font-sans font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
              Where to Find Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark tracking-tight mb-4">
              Our Location
            </h2>
            <p className="font-sans text-text-dark/60 text-sm sm:text-base mb-12 max-w-lg mx-auto leading-relaxed">
              Find us in the beautiful surroundings of Kitulgala, Sri Lanka. Nestled along the Kelani River.
            </p>

            {/* Vector Map Placeholder Container */}
            <div className="w-full max-w-4xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden border border-river-blue/15 shadow-md bg-gradient-to-br from-bg-warm to-white relative flex items-center justify-center p-6 select-none group">
              {/* Map SVG Pattern */}
              <svg className="absolute inset-0 w-full h-full text-river-blue/5" xmlns="http://www.w3.org/2000/svg">
                {/* Simulated contour lines */}
                <path d="M-50,150 Q150,50 350,120 T750,80 T1150,150" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M-50,250 Q100,200 300,280 T800,200 T1150,220" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M-50,350 Q120,380 400,340 T900,320 T1150,380" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                
                {/* Simulated River Path (Kelani River) */}
                <path d="M-20,180 C200,160 350,250 500,220 C650,190 800,280 1100,240" fill="none" stroke="#0e7490" strokeWidth="6" className="opacity-20" />
                <path d="M-20,180 C200,160 350,250 500,220 C650,190 800,280 1100,240" fill="none" stroke="#0e7490" strokeWidth="2" className="opacity-40" />
                
                {/* Tropical forest clusters (Simulated trees) */}
                <circle cx="200" cy="100" r="15" fill="none" stroke="#15803d" strokeWidth="1" className="opacity-25" />
                <circle cx="220" cy="115" r="10" fill="none" stroke="#15803d" strokeWidth="1" className="opacity-25" />
                <circle cx="850" cy="140" r="18" fill="none" stroke="#15803d" strokeWidth="1" className="opacity-25" />
                <circle cx="750" cy="300" r="22" fill="none" stroke="#15803d" strokeWidth="1" className="opacity-25" />
              </svg>

              {/* Glowing Location Marker Pin */}
              <div className="absolute top-[48%] left-[45%] flex flex-col items-center z-10 transition-transform duration-300 group-hover:scale-105">
                <span className="flex h-5 w-5 relative mb-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-golden-sand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-river-blue items-center justify-center">
                    <span className="h-2.5 w-2.5 rounded-full bg-golden-sand"></span>
                  </span>
                </span>
                
                <div className="bg-text-dark text-white text-[11px] font-sans font-medium px-3.5 py-1.5 rounded-full shadow-lg border border-white/10 flex flex-col items-center">
                  <span className="font-serif font-bold text-golden-sand text-xs leading-none mb-0.5">RiverSide Paradise</span>
                  <span className="text-white/60 text-[9px] uppercase tracking-widest font-mono">Kitulgala</span>
                </div>
              </div>

              {/* Map grid scale marker */}
              <div className="absolute bottom-4 left-6 bg-white/80 backdrop-blur-sm border border-black/5 rounded px-2.5 py-1 text-[10px] text-text-dark/50 font-mono">
                Kelani River Topography | Scale 1:20,000
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-24 bg-bg-warm border-y border-black/[0.03]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-tropical-green font-sans font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
                Information Guide
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Accordion list */}
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

        {/* SOCIAL MEDIA SECTION */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="text-river-blue font-sans font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
              Join Our Community
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark tracking-tight mb-4">
              Follow Our Journey
            </h2>
            <p className="font-sans text-text-dark/65 text-sm sm:text-base mb-12 max-w-md mx-auto leading-relaxed">
              Tag your holiday moments using #RiversideParadise to be featured on our social pages.
            </p>

            <div className="flex justify-center gap-6">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-16 h-16 rounded-full border border-river-blue/15 hover:border-river-blue hover:bg-river-blue hover:text-white text-river-blue flex flex-col items-center justify-center transition-all duration-300 shadow-sm font-sans font-bold text-xs"
                >
                  <span className="text-xs uppercase tracking-widest">{social.icon}</span>
                  <span className="text-[7px] text-text-dark/45 uppercase mt-0.5 group-hover:text-white/80">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-20 bg-bg-warm border-t border-black/[0.03]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark tracking-tight">
              Need Help Planning Your Stay?
            </h2>
            <p className="font-sans text-text-dark/70 text-base max-w-lg mx-auto leading-relaxed">
              Connect directly with our luxury reservations coordinators in Sri Lanka to schedule custom retreats, wedding venues, or transport.
            </p>
            <div className="pt-2">
              <a
                href="#contact-form"
                onClick={focusForm}
                className="inline-block px-8 py-3.5 bg-river-blue text-white font-sans font-medium text-base rounded-full hover:bg-river-blue-dark hover:shadow-md transition-all duration-300"
              >
                Contact Reservations Team
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
