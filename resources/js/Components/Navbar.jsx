// resources/js/Components/Navbar.jsx

import { usePage, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#8B0000] backdrop-blur-md shadow-md transition-all duration-300">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

                {/* --- LOGO --- */}
                <div className="flex items-center">
                    <img 
                        src="/images/logo.png" 
                        alt="Sabaah7 Logo"
                        className="h-10 transition-transform hover:scale-105" 
                    />
                </div>

                {/* --- HAMBURGER BUTTON (Mobile) --- */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* --- MENU PENUH & DROPDOWN --- */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center absolute top-16 right-0 w-full md:w-auto bg-gray-500/90 md:bg-transparent shadow-lg md:shadow-none p-6 md:p-0 md:static`}>
                    <div className="flex flex-col md:flex-row md:gap-6 w-full items-center">
                        
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 md:py-0 border-b border-white/10 md:border-b-0 text-white hover:text-red-200 transition font-bold uppercase text-xs tracking-widest">
                            Home
                        </Link>

                        <Link href="/about" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 md:py-0 border-b border-white/10 md:border-b-0 text-white hover:text-red-200 transition font-bold uppercase text-xs tracking-widest">
                            About
                        </Link>

                        <Link href="/businesses" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 md:py-0 border-b border-white/10 md:border-b-0 text-white hover:text-red-200 transition font-bold uppercase text-xs tracking-widest">
                            Businesses
                        </Link>

                        <Link href="/products" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 md:py-0 border-b border-white/10 md:border-b-0 text-white hover:text-red-200 transition font-bold uppercase text-xs tracking-widest">
                            Products
                        </Link>

                        {/* --- LINK MEMBERSHIP BARU --- */}
                        <Link href="/membership" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 md:py-0 border-b border-white/10 md:border-b-0 text-white hover:text-red-200 transition font-bold uppercase text-xs tracking-widest">
                            Membership
                        </Link>

                        <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 md:py-0 border-b border-white/10 md:border-b-0 text-white hover:text-red-200 transition font-bold uppercase text-xs tracking-widest">
                            Gallery
                        </Link>

                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 md:py-0 text-white hover:text-red-200 transition font-bold uppercase text-xs tracking-widest">
                            Contact
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    );
}