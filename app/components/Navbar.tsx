"use client";

import Link from "next/link";
import { Button } from "./ui/Button";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 md:py-6 px-4 md:px-0 relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Finech logo" className="h-6 w-6 md:h-7 md:w-7" />
          <span className="font-bold text-xl md:text-2xl tracking-tight text-white">finech</span>
        </div>

        {/* Nav links - Centered (Hidden on mobile) */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-5 text-white text-sm absolute left-1/2 transform -translate-x-1/2">
          <li><Link href="" className="hover:opacity-80">Home</Link></li>
          <li><Link href="" className="hover:opacity-80">Solutions</Link></li>
          <li><Link href="" className="hover:opacity-80">Integrations</Link></li>
          <li><Link href="" className="hover:opacity-80">Pricing</Link></li>
          <li><Link href="" className="hover:opacity-80">Resources</Link></li>
        </ul>

        {/* Actions - Right aligned */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href="/login"
            className="hidden lg:block text-xs md:text-sm text-white hover:opacity-80"
          >
            Login
          </Link>
          <div className="hidden sm:block">
            <Button text="Get Started" icon={ArrowUpRight} />
          </div>
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-white p-2 hover:opacity-80 transition-opacity"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-zinc-900 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              className="text-white p-2 hover:opacity-80"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu items */}
          <ul className="flex flex-col gap-6 px-8 py-4 text-white">
            <li>
              <Link href="" className="text-lg hover:text-[#0B71DA] transition-colors" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="" className="text-lg hover:text-[#0B71DA] transition-colors" onClick={closeMenu}>
                Solutions
              </Link>
            </li>
            <li>
              <Link href="" className="text-lg hover:text-[#0B71DA] transition-colors" onClick={closeMenu}>
                Integrations
              </Link>
            </li>
            <li>
              <Link href="" className="text-lg hover:text-[#0B71DA] transition-colors" onClick={closeMenu}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="" className="text-lg hover:text-[#0B71DA] transition-colors" onClick={closeMenu}>
                Resources
              </Link>
            </li>
            <li className="pt-4 border-t border-gray-700">
              <Link href="/login" className="text-lg hover:text-[#0B71DA] transition-colors" onClick={closeMenu}>
                Login
              </Link>
            </li>
          </ul>

          {/* Get Started button in mobile menu */}
          <div className="px-8 mt-auto mb-8">
            <Link href="" onClick={closeMenu}>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#0B71DA] text-white text-sm rounded-xl hover:bg-[#0960b8] transition-colors">
                Get Started
                <ArrowUpRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}