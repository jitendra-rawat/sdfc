"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute w-full top-0 bg-transparent py-4 z-50">
      <div className="container mx-auto max-w-7xl flex justify-between items-center px-4">
        {/* Left Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white font-semibold text-lg">
            Home
          </Link>
          <Link href="/fix-match" className="text-white font-semibold text-lg">
            Play a Match
          </Link>
          <Link href="/donate" className="text-white font-semibold text-lg">
            Donate
          </Link>
        </div>

        {/* Logo */}
        <div>
          <Link href="/">
            <Image className='z-50' src="/logo.png" width={200} height={150} alt="SDFC Logo" />
          </Link>
        </div>

        {/* Right Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/club-members" className="text-white font-semibold text-lg">
            Club Members
          </Link>
          <Link href="/gallery" className="text-white font-semibold text-lg">
            Gallery
          </Link>
          <Link href="/contact" className="text-white font-semibold text-lg">
            Contact
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black text-white py-4 px-4"
        >
          <Link href="/" className="block py-2" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/fix-match" className="block py-2" onClick={toggleMenu}>
            Play a Match
          </Link>
          <Link href="/donate" className="block py-2" onClick={toggleMenu}>
            Donate
          </Link>
          <Link href="/club-members" className="block py-2" onClick={toggleMenu}>
            Club Members
          </Link>
          <Link href="/gallery" className="block py-2" onClick={toggleMenu}>
            Gallery
          </Link>
          <Link href="/contact" className="block py-2" onClick={toggleMenu}>
            Contact
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
