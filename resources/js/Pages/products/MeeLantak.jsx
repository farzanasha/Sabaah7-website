import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MeeLantak() {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `
                nav { background-color: #450a0a !important; } 
                nav a, nav button { color: #facc15 !important; }
                
                .title-3d-mee { 
                    color: white; 
                    -webkit-text-stroke: 1px #facc15; 
                    text-shadow: 4px 4px 0px #450a0a;
                }
            `}} />

            <Head title="Mee Lantak - Official" />
            
            <div className="relative min-h-screen w-full bg-[#1a0505] overflow-x-hidden font-sans">
                
                {/* 1. BACKGROUND IMAGE (Tanpa Overlay Hitam) */}
                <div 
                    className="fixed inset-0 z-0"
                    style={{ 
                        backgroundImage: "url('/images/products/background/mee.png')", 
                        backgroundSize: "cover", 
                        backgroundPosition: "center" 
                    }}
                />

                {/* 2. CONTENT AREA */}
                <div className="relative z-10">
                    
                    {/* Hero Section */}
                    <div className="pt-20 pb-2 flex flex-col items-center justify-center text-center px-6">
                        <motion.img 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            src="/images/logos/meelantak.png" 
                            className="w-48 md:w-64 object-contain mb-6 drop-shadow-xl" 
                            alt="Mee Lantak Logo" 
                        />
                        <h1 className="text-4xl md:text-7xl font-black title-3d-mee uppercase tracking-tighter leading-none">
                            MEE LANTAK
                        </h1>
                        <p className="mt-4 text-[#450a0a] bg-white/40 backdrop-blur-sm px-4 py-1.5 rounded-full font-black tracking-widest text-[11px] md:text-sm uppercase italic shadow-sm inline-block mx-auto">
                            Freshly Made • Bumiputera Quality • Makan Tambah Beb!
                        </p>
                    </div>

                    {/* TAB NAVIGATION */}
                    <div className="flex justify-center mt-6 mb-10 relative z-10 px-4">
                        <div className="bg-[#450a0a]/90 backdrop-blur-xl p-2 rounded-[2.5rem] border border-[#facc15]/30 shadow-2xl flex gap-2">
                            <button
                                onClick={() => setActiveTab('about')}
                                className={`flex items-center gap-3 px-8 py-3 rounded-full font-black text-xs md:text-sm transition-all duration-300 border ${
                                    activeTab === 'about'
                                        ? 'bg-white text-[#450a0a] border-white scale-105 shadow-xl'
                                        : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                                }`}
                            >
                                <span>🏠</span>
                                <span>ABOUT US</span>
                            </button>

                            <button
                                onClick={() => setActiveTab('products')}
                                className={`flex items-center gap-3 px-8 py-3 rounded-full font-black text-xs md:text-sm transition-all duration-300 border ${
                                    activeTab === 'products'
                                        ? 'bg-white text-[#450a0a] border-white scale-105 shadow-xl'
                                        : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                                }`}
                            >
                                <span>🎁</span>
                                <span>PACKAGES</span>
                            </button>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto px-6 pb-24">
                        <AnimatePresence mode="wait">
                            
                            {activeTab === 'about' && (
                                <motion.div 
                                    key="about-tab"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="space-y-10"
                                >
                                    {/* STORY SECTION */}
                                    <div className="bg-[#450a0a]/80 backdrop-blur-2xl rounded-[3rem] border border-[#facc15]/20 p-8 md:p-16 shadow-2xl">
                                        <div className="flex flex-col lg:flex-row gap-12">
                                            <div className="w-full lg:w-3/5 space-y-6">
                                                <h2 className="text-5xl font-black text-[#facc15] uppercase tracking-tighter leading-none">
                                                    THE <span className="text-white">LEGACY</span>
                                                </h2>
                                                <p className="text-white text-xl font-bold">
                                                    Founded by <span className="bg-[#facc15] text-[#450a0a] px-3 py-1 rounded-lg">Adzmi bin Talib</span>.
                                                </p>
                                                <p className="text-white font-medium leading-relaxed text-justify bg-white/5 p-6 rounded-2xl border-l-4 border-[#facc15]">
                                                    "Started on a small scale at a home in Gemas, before moving to Sabah. Today, we operate from our own dedicated noodle factory in Melaka."
                                                </p>
                                                <p className="text-white/70 text-sm leading-relaxed">
                                                    Mee Lantak is a business that produces yellow noodles, rice vermicelli (mee hun), and flat rice noodles (kuey teow), proudly made by Bumiputera Muslims.
                                                </p>
                                            </div>

                                            <div className="w-full lg:w-2/5 flex flex-col gap-4">
                                                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 text-center">
                                                    <p className="text-5xl font-black text-[#facc15]">EST.</p>
                                                    <p className="text-2xl font-black text-white mt-1 uppercase tracking-widest">Since 2006</p>
                                                </div>
                                                <div className="bg-[#facc15] p-8 rounded-[2.5rem] text-center shadow-xl">
                                                    <p className="text-[10px] uppercase font-black text-[#450a0a] tracking-widest mb-1">Status</p>
                                                    <p className="text-2xl font-black text-[#450a0a]">ACTIVE 🫡</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* VISION & MISSION */}
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="bg-[#facc15] p-10 rounded-[2.5rem] text-[#450a0a] shadow-2xl">
                                            <h3 className="text-[10px] font-black tracking-widest uppercase mb-4 opacity-70">The Vision</h3>
                                            <p className="text-2xl font-black leading-tight uppercase">Leading the staple food industry globally through superior quality.</p>
                                        </div>
                                        <div className="bg-[#450a0a]/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-[#facc15]/30 text-white shadow-2xl">
                                            <h3 className="text-[10px] font-black tracking-widest uppercase text-[#facc15] mb-4">The Mission</h3>
                                            <ul className="font-bold space-y-3 italic text-sm">
                                                <li>• Uncompromising Quality & hygiene.</li>
                                                <li>• Vendor Empowerment & pricing.</li>
                                                <li>• Efficient Logistics & delivery.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* LOCATE US */}
                                    <div className="bg-[#450a0a]/90 rounded-[3rem] border border-[#facc15]/30 overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                                        <div className="p-10 md:p-12 space-y-8 lg:w-1/2">
                                            <h2 className="text-3xl font-black text-[#facc15] uppercase tracking-tighter">Locate Us</h2>
                                            <div className="space-y-4">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-xl">📍</span>
                                                    <p className="text-white font-bold text-sm">Lot 2421, Jalan Pokok Tanjung, 78300 Masjid Tanah, Melaka.</p>
                                                </div>
                                                <div className="flex flex-wrap gap-6 text-white/80">
                                                    <div>
                                                        <p className="text-[10px] font-black text-[#facc15] uppercase tracking-widest">Operating Hours</p>
                                                        <p className="font-bold text-sm">9:00 AM – 6:00 PM</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black text-[#facc15] uppercase tracking-widest">Contact</p>
                                                        <p className="font-bold text-sm">Pn Zubaidah: +60 17-833 2301</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-[300px] lg:h-auto lg:w-1/2 bg-white relative min-h-[300px]">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.459487900455!2d102.09119047472718!3d2.3511790976283464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1ff6b3a5b9bb3%3A0xd28fb2d50d447f6!2sJalan%20Pokok%20Tanjung%2C%2078300%20Masjid%20Tanah%2C%20Melaka!5e0!3m2!1sen!2smy!4v1777362441778!5m2!1sen!2smy" className="absolute inset-0 w-full h-full border-0" allowFullScreen="" loading="lazy"></iframe>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'products' && (
                                <motion.div 
                                    key="products-tab"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="flex flex-col items-center justify-center py-20 text-center space-y-10"
                                >
                                    <div className="space-y-4">
                                        <div className="text-8xl animate-bounce">📦</div>
                                        <h2 className="text-6xl md:text-7xl font-black text-[#facc15] uppercase tracking-tighter italic drop-shadow-[0_2px_2px_rgba(69,10,10,1)]">
                                            Coming Soon
                                        </h2>
                                        <p className="text-white font-bold max-w-md mx-auto leading-relaxed">
                                            Our retail packages are currently in production. <br/>High-quality rations will be ready for duty soon.
                                        </p>
                                    </div>

                                    <motion.a 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="https://wa.me/60178332301?text=Hi%20Mee%20Lantak!%20I%20have%20an%20inquiry%20about%20your%20products." 
                                        target="_blank"
                                        className="bg-green-600 hover:bg-green-500 text-white font-black px-12 py-5 rounded-2xl flex items-center gap-4 shadow-xl transition-all uppercase tracking-widest text-lg"
                                    >
                                        <i className="fab fa-whatsapp text-2xl"></i>
                                        Wholesale Inquiry
                                    </motion.a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </>
    );
}

MeeLantak.layout = page => <AuthenticatedLayout children={page} />;