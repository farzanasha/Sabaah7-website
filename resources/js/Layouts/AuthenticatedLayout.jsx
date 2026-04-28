// resources/js/Layouts/AuthenticatedLayout.jsx

import Navbar from '@/Components/Navbar';
import ScrollToTop from '@/Components/ScrollToTop';

export default function AuthenticatedLayout({ children }) {
    return (
        <div className="min-h-screen bg-white text-white relative">
            
            {/* 1. OVERLAY HITAM SOLID (Gelap Sepenuhnya) */}
<div className="fixed inset-0 bg-black z-0 pointer-events-none"></div>
            {/* 2. KESAN JARING / DOT MATRIX (Efek Timbul)
               - Kita guna background-image dengan radial-gradient untuk buat bintik halus.
               - 'bg-[length:4px_4px]' mengawal saiz jaring (kecil = halus).
            */}
            

            {/* NAVBAR */}
            <div className="relative z-20">
                <Navbar />
            </div>

            {/* CONTENT UTAMA */}
            <main className="relative z-10 pt-20">
                {children}
            </main>
            
            {/* SCROLL TO TOP */}
            <ScrollToTop />

            {/* FOOTER */}
            <footer className="relative z-10 bg-[#121212] py-10 mt-10 border-t border-white/5 text-center">
                <p className="text-sm opacity-60">
                    © 2026 Sabaah7. All rights reserved.
                </p>
            </footer>


        </div>
    );
}