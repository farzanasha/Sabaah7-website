// resources/js/Components/Navbar.jsx

import { usePage, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        /* 1. KEMASKINI WARNA: 
           Guna 'bg-[#8B0000]' (Dark Red/Maroon) atau 'bg-red-900'.
           Saya syorkan guna HEX code #8B0000 untuk dapatkan warna Maroon yang solid.
        */
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#8B0000] backdrop-blur-md shadow-md transition-all duration-300">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

                {/* --- LOGO --- */}
                <div className="flex items-center">
                    <img 
                        src="/images/logo.png" 
                        alt="Sabaah7 Logo"
                        className="h-10" 
                        /* 2. KEMASKINI LOGO: Buang 'brightness-0 invert' untuk kembali ke warna asal */
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
                {/* Kekalkan bg-black/70 untuk dropdown mobile yang anda suka tadi */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center absolute top-16 right-0 w-full md:w-auto bg-black/70 backdrop-blur-lg md:bg-transparent shadow-lg md:shadow-none p-6 md:p-0 md:static`}>
                    <div className="flex flex-col md:flex-row md:gap-6 w-full items-center">
                        
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 md:py-0 border-b border-white/10 md:border-b-0 text-white hover:text-red-300 transition font-medium">
                            Home
                        </Link>

                        <Link href="/about" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 md:py-0 border-b border-white/10 md:border-b-0 text-white hover:text-red-300 transition font-medium">
                            About
                        </Link>

                        <Link href="/businesses" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 md:py-0 border-b border-white/10 md:border-b-0 text-white hover:text-red-300 transition font-medium">
                            Businesses
                        </Link>

                        <Link href="/products" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 md:py-0 border-b border-white/10 md:border-b-0 text-white hover:text-red-300 transition font-medium">
                            Products
                        </Link>

                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 md:py-0 text-white hover:text-red-300 transition font-medium">
                            Contact
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    );
}