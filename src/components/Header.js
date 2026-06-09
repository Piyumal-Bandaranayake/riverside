"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Sticky header transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for tracking active sections (only active on home page)
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["home", "about", "highlights", "packages", "testimonials", "cta"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === "highlights") {
            setActiveSection("about");
          } else if (id === "testimonials" || id === "cta") {
            setActiveSection("contact");
          } else {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "About", href: "/about", id: "about" },
    { name: "Packages", href: "/packages", id: "packages" },
    { name: "Contact", href: "/contact", id: "contact" },
  ];

  const handleNavClick = (e, link) => {
    if (pathname === "/") {
      // On home page, intercept clicks to do smooth scrolling
      if (link.href === "/" || link.href.startsWith("/#")) {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const targetId = link.id;
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80; // height of sticky header
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    } else {
      // On other pages, let it navigate normally but close mobile menu
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled || pathname !== "/"
          ? "bg-white/95 backdrop-blur-md shadow-md py-4 text-text-dark border-b border-black/[0.04]"
          : "bg-transparent py-6 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, { href: "/", id: "home" })}
          className="flex flex-col group"
        >
          <span
            className={`font-serif text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled || pathname !== "/" ? "text-river-blue" : "text-white"
            }`}
          >
            RiverSide
          </span>
          <span
            className={`text-xs tracking-[0.2em] uppercase font-medium -mt-1 transition-colors duration-300 ${
              isScrolled || pathname !== "/" ? "text-tropical-green" : "text-golden-sand"
            }`}
          >
            Paradise Resort
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || (pathname === "/" && activeSection === link.id);

            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`font-sans font-medium text-sm tracking-wide transition-all duration-300 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 ${
                  isScrolled || pathname !== "/"
                    ? `text-text-dark/80 hover:text-river-blue after:bg-river-blue ${
                        isActive ? "text-river-blue after:scale-x-100" : ""
                      }`
                    : `text-white/80 hover:text-white after:bg-golden-sand ${
                        isActive ? "text-white after:scale-x-100" : ""
                      }`
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className={`px-6 py-2.5 rounded-full font-sans font-medium text-sm tracking-wide transition-all duration-300 shadow-sm ${
              isScrolled || pathname !== "/"
                ? "bg-river-blue text-white hover:bg-river-blue-dark hover:shadow-md"
                : "bg-white text-river-blue hover:bg-golden-sand hover:text-white hover:shadow-lg"
            }`}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-between w-6 h-4 z-50 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span
            className={`h-[2px] w-full rounded-sm transition-all duration-300 origin-left ${
              isMobileMenuOpen
                ? "rotate-45 translate-x-[2px] -translate-y-[1px]"
                : ""
            } ${isScrolled || isMobileMenuOpen || pathname !== "/" ? "bg-text-dark" : "bg-white"}`}
          />
          <span
            className={`h-[2px] w-full rounded-sm transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            } ${isScrolled || isMobileMenuOpen || pathname !== "/" ? "bg-text-dark" : "bg-white"}`}
          />
          <span
            className={`h-[2px] w-full rounded-sm transition-all duration-300 origin-left ${
              isMobileMenuOpen
                ? "-rotate-45 translate-x-[2px] translate-y-[1px]"
                : ""
            } ${isScrolled || isMobileMenuOpen || pathname !== "/" ? "bg-text-dark" : "bg-white"}`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 w-full h-screen bg-bg-warm z-40 flex flex-col justify-center px-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`font-serif text-3xl font-bold tracking-tight transition-colors duration-300 ${
                  isActive ? "text-river-blue" : "text-text-dark/70 hover:text-river-blue"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-6">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block px-8 py-3.5 bg-river-blue text-white rounded-full font-sans font-medium text-base tracking-wide shadow-md hover:bg-river-blue-dark transition-all duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
