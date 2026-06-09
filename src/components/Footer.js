"use client";

export default function Footer() {
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

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11C4.483 20.455 12 20.455 12 20.455s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.2 1.02 1.13 2.42 1.83 3.91 2.06v3.82c-1.88-.06-3.71-.81-5.12-2.09-.12-.11-.23-.22-.33-.34v7.38c.01 2.41-.95 4.74-2.67 6.44-1.82 1.76-4.32 2.61-6.84 2.33-2.91-.3-5.5-2.26-6.44-5.04C-.5 15.69.19 12.02 2.37 9.87c1.78-1.72 4.26-2.43 6.69-1.92v3.9c-1.18-.32-2.45-.06-3.41.69-.96.76-1.45 1.99-1.31 3.2.14 1.34.98 2.5 2.17 3.12 1.22.61 2.74.52 3.86-.25.75-.52 1.19-1.37 1.21-2.29.04-3.09.02-6.18.03-9.27-.03-2.33.15-4.66.51-6.93z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-footer-dark text-white/80 pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Logo & Description */}
          <div className="space-y-4">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "#home")}
              className="flex flex-col group w-fit"
            >
              <span className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-golden-sand transition-colors duration-300">
                RiverSide
              </span>
              <span className="text-xs tracking-[0.2em] uppercase font-medium text-golden-sand -mt-1">
                Paradise Resort
              </span>
            </a>
            <p className="text-sm leading-relaxed text-white/60 pt-2 max-w-[280px]">
              Where Nature Meets Comfort Along Sri Lanka's Beautiful Riverbanks.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-white text-base tracking-wider uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Packages", href: "#packages" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-sm hover:text-golden-sand transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-white text-base tracking-wider uppercase mb-6">
              Contact Us
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-golden-sand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/70 leading-relaxed">
                  Riverbank Road, Kitulgala, Sri Lanka
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-golden-sand flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+94362257890" className="text-white/70 hover:text-golden-sand transition-colors duration-300">
                  +94 36 225 7890
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-golden-sand flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@riversideparadiseresort.com" className="text-white/70 hover:text-golden-sand transition-colors duration-300">
                  info@riversideparadiseresort.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h4 className="font-sans font-semibold text-white text-base tracking-wider uppercase mb-6">
              Follow Us
            </h4>
            <p className="text-sm text-white/50 mb-4 leading-relaxed">
              Connect with us on social media for resort updates and exclusive offers.
            </p>
            <div className="flex items-center gap-3.5 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-golden-sand hover:text-white flex items-center justify-center transition-all duration-300 text-white/70 shadow-sm"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright section */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
          <p>© 2026 RiverSide Paradise Resort. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-golden-sand transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-golden-sand transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
