

'use client'
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-coach-dark-text">
          CoachFunnel
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-coach-dark-text hover:text-coach-green transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="text-coach-dark-text hover:text-coach-green transition-colors">
            Benefits
          </a>
          <a href="#testimonials" className="text-coach-dark-text hover:text-coach-green transition-colors">
            Testimonials
          </a>
          <a href="#about" className="text-coach-dark-text hover:text-coach-green transition-colors">
            About
          </a>
          <Button 
            className="bg-[#C0E247] text-black hover:bg-[#C0E247]/90 transition-all rounded-none" 
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book a Call
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-coach-dark-text" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="text-coach-dark-text hover:text-coach-green transition-colors px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="text-coach-dark-text hover:text-coach-green transition-colors px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#testimonials" 
              className="text-coach-dark-text hover:text-coach-green transition-colors px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#about" 
              className="text-coach-dark-text hover:text-coach-green transition-colors px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <Button 
              className="bg-[#f8df60] text-black hover:bg-[#f8df60]/90 transition-all w-full rounded-none" 
              onClick={() => {
                document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
            >
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
