"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import LogoComponent from "../logo/Logo";

const MainFooter: React.FC = () => {
  return (
    <footer className="bg-orange-500 text-white pt-12 pb-8 md:pt-20">
      <div className="container mx-auto px-4 md:px-6 md:max-w-7xl lg:container">
        <div className="flex flex-col lg:flex-row justify-between flex-wrap lg:gap-20 gap-10  md:gap-12 mb-8 md:mb-10">
          {/* Brand Column */}
          <div className="space-y-4 md:space-y-6">
            <LogoComponent path="/logo/logo-2.png" />
            <p className="text-white lg:text-sm text-base leading-relaxed max-w-xs mt-5">
              Ayadi brings the warmth and generosity of modern Saudi hospitality
              to your home, effortless, beautiful, and full of care.
            </p>
            <div className="flex gap-6 md:gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-6 md:mb-8">
              Quick Links
            </h3>
            <ul className="space-y-3 md:space-y-4 lg:text-sm text-base text-white">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/build-your-menu"
                  className="hover:text-white transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-6 md:mb-8">
              Contact
            </h3>
            <ul className="space-y-3 md:space-y-4 lg:text-sm text-base text-white">
              <li>+966 55 225 0081</li>
              <li>
                <a
                  href="mailto:info@ayadicatering.com"
                  className="hover:text-white transition-colors"
                >
                  info@ayadicatering.com
                </a>
              </li>
              <li>Jeddah, Saudi Arabia</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/50 pt-6 lg:text-sm text-base text-center">
          <p className="text-white text-xs tracking-wider uppercase">
            © 2024 - {new Date().getFullYear()} Ayadi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
