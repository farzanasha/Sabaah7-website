import { usePage, Link } from '@inertiajs/react';
import { useState } from 'react'; // Impor useState untuk kawal menu

export default function Navbar() {
    // State untuk mengawal pembukaan dan penutupan menu di skrin mudah alih
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fungsi untuk mengubah status state (buka/tutup)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-md transition-all duration-300">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

                {/* --- LOGO SABA7 --- */}
                <div className="flex items-center">
                    <img 
                        src="/images/logo.png" 
                        alt="Sabaah7 Logo"
                        className="h-10"
                    />
                </div>

                {/* --- BUTANG HAMBURGER (Hanya muncul di phone/skrin kecil) --- */}
                <div className="md:hidden flex items-center">
                    {/* Butang dengan event onClick */}
                    <button onClick={toggleMenu} className="outline-none mobile-menu-button">
                        {/* Ikon Hamburger (apabila menu ditutup) */}
                        {!isMenuOpen && (
                            <svg className="w-6 h-6 text-gray-800"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                        {/* Ikon 'X' (apabila menu dibuka) */}
                        {isMenuOpen && (
                            <svg className="w-6 h-6 text-gray-800"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        )}
                    </button>
                </div>

                {/* --- MENU PENUH (Responsif) --- */}
                {/* Penjelasan Class:
                    'md:flex': Di skrin desktop/tablet (min-width: 768px), paparkan flex.
                    'hidden': Secara lalai (di phone), menu ini disembunyikan.
                    
                    Penjelasan untuk Phone (Mobile Menu):
                    'absolute top-16 right-0': Letakkan menu di kedudukan absolute di atas dan kanan.
                    'w-full md:w-auto': Di phone (jika state 'isMenuOpen' benar), menu akan penuh lebar skrin.
                    'bg-white md:bg-transparent': Di phone, menu ada background putih. Di desktop, tiada background (untuk backdrop-blur navbar).
                    'shadow-lg md:shadow-none': Di phone, ada bayang-bayang. Di desktop, tiada.
                    'flex-col md:flex-row': Di phone, susun menu secara menegak. Di desktop, mendatar.
                    'items-center md:items-start': Di phone, menu berpusat. Di desktop, bermula dari kiri.
                    'gap-0 md:gap-6': Di phone, jarak pautan dikawal oleh padding. Di desktop, guna gap-6.
                    'p-6 md:p-0': Di phone, ada padding penuh. Di desktop, tiada padding.
                    'mt-0 md:mt-0': Di phone, menu muncul betul-betul di bawah navbar.
                */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center absolute top-16 right-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none p-6 md:p-0 md:static`}>
                    <div className="flex flex-col md:flex-row md:gap-6 w-full items-center">
                        <Link href="/" className="w-full text-center py-2 md:py-0 border-b md:border-b-0 hover:text-green-700 hover:bg-green-100 md:hover:bg-transparent rounded md:rounded-none">
                            Home
                        </Link>

                        <Link href="/about" className="w-full text-center py-2 md:py-0 border-b md:border-b-0 hover:text-green-700 hover:bg-green-100 md:hover:bg-transparent rounded md:rounded-none">
                            About
                        </Link>

                        <Link href="/businesses" className="w-full text-center py-2 md:py-0 border-b md:border-b-0 hover:text-green-700 hover:bg-green-100 md:hover:bg-transparent rounded md:rounded-none">
                            Businesses
                        </Link>

                        <Link href="/products" className="w-full text-center py-2 md:py-0 border-b md:border-b-0 hover:text-green-700 hover:bg-green-100 md:hover:bg-transparent rounded md:rounded-none">
                            Products
                        </Link>

                        <Link href="/contact" className="w-full text-center py-2 md:py-0 hover:text-green-700 hover:bg-green-100 md:hover:bg-transparent rounded md:rounded-none">
                            Contact
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    );
}