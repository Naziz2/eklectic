
import { useState, useEffect } from 'react';
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              eklectic
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-gray-700 hover:text-primary transition-colors">Projects</a>
            <Button asChild variant="outline">
              <Link to="/order">Order Now</Link>
            </Button>
            <Button asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Projects</a>
              <Link to="/order" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Order Now</Link>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
