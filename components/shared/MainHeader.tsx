"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import LogoComponent from "../logo/Logo";
import { Button } from "../ui/button";

const MainHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/faq", label: "FAQ" },
  ];

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="backdrop-blur-lg bg-[#F2EEE6]/80 py-2 px-6 md:px-12 lg:px-20 sticky top-0 z-40 border-b border-orange-100 ">
        <div className="lg:container md:max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <LogoComponent path="/logo/logo.png" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors duration-200 pb-1 border-b-2 ${
                  isActiveRoute(item.href)
                    ? "text-primary border-primary"
                    : "text-gray-600 border-b border-transparent  hover:text-black hover:border-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center border border-green-500 rounded-full px-3 py-1  cursor-pointer hover:border-gray-400 transition-colors">
              <span className="font-bold text-sm mr-2 text-gray-700">AR</span>
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                <svg viewBox="0 0 60 30" className="w-full h-full object-cover">
                  <rect
                    fill="#012169"
                    width="60"
                    height="30"
                    className="w-20 h-20"
                  />
                  <path
                    d="M0,0 L60,30 M60,0 L0,30"
                    stroke="#fff"
                    strokeWidth="6"
                  />
                  <path
                    d="M0,0 L60,30 M60,0 L0,30"
                    stroke="#C8102E"
                    strokeWidth="4"
                  />
                  <path
                    d="M30,0 L30,30 M0,15 L60,15"
                    stroke="#fff"
                    strokeWidth="10"
                  />
                  <path
                    d="M30,0 L30,30 M0,15 L60,15"
                    stroke="#C8102E"
                    strokeWidth="6"
                  />
                </svg>
              </div>
            </div>

            {/* CTA Button */}
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-5 rounded-sm font-medium transition-colors duration-200 shadow-sm">
              Whatsapp <FaWhatsapp size={24} />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 focus:outline-none hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay with Blur */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-30 md:hidden transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <Link
            href="/"
            className="text-2xl font-bold tracking-widest text-black uppercase"
            style={{ fontFamily: "Tinos, serif" }}
          >
            Ayadi
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-900 hover:text-amber-700 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Navigation */}
        <nav className="flex flex-col p-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                isActiveRoute(item.href)
                  ? "bg-amber-50 text-amber-700 border-l-4 border-amber-700"
                  : "text-gray-600 hover:text-black hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Drawer Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-white">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center border border-gray-300 rounded-full px-3 py-4 justify-center">
              <span className="font-bold text-sm mr-2">AR</span>
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                <svg viewBox="0 0 60 30" className="w-full h-full object-cover">
                  <rect fill="#012169" width="60" height="30" />
                  <path
                    d="M0,0 L60,30 M60,0 L0,30"
                    stroke="#fff"
                    strokeWidth="6"
                  />
                  <path
                    d="M0,0 L60,30 M60,0 L0,30"
                    stroke="#C8102E"
                    strokeWidth="4"
                  />
                  <path
                    d="M30,0 L30,30 M0,15 L60,15"
                    stroke="#fff"
                    strokeWidth="10"
                  />
                  <path
                    d="M30,0 L30,30 M0,15 L60,15"
                    stroke="#C8102E"
                    strokeWidth="6"
                  />
                </svg>
              </div>
            </div>
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2.5 rounded-sm font-medium transition-colors duration-200 w-full">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
