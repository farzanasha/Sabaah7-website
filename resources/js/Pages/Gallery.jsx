import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react'; // Tambah useEffect
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
    const [galleryData, setGalleryData] = useState({});
    const [activeYear, setActiveYear] = useState('2026');
    const [loading, setLoading] = useState(true);
    // state unutk klik keluar full image
    const [selectedImg, setSelectedImg] = useState(null);

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwz1K0opvn8n_Xpg4ejzLEb3MKGoGMpCg2KNBeC6EuS-58qEdG9ojoCKvRV1VbrOXnMxA/exec";


    useEffect(() => {
        // Dalam useEffect Gallery.jsx
            const fetchData = async () => {
                try {
                    // TAMBAH ?action=getGallery kat hujung URL
                    const response = await fetch(SCRIPT_URL + "?action=getGallery");
                    const data = await response.json();
                    setGalleryData(data);
                    
                    const availableYears = Object.keys(data).sort().reverse();
                    if (availableYears.length > 0) setActiveYear(availableYears[0]);
                } catch (error) {
                    console.error("Error loading gallery:", error);
                } finally {
                    setLoading(false);
                }
            };
        fetchData();
    }, []);

    const years = Object.keys(galleryData).sort().reverse();

    return (
        <>
            <Head title="Gallery - Sabaah7" />

            <div className="relative min-h-screen w-full bg-black overflow-x-hidden">
                {/* BACKGROUND IMAGE (FIXED) */}
                <div 
                    className="fixed inset-0 z-0"
                    style={{ 
                        backgroundImage: "url('/images/gallery/background.png')", 
                        backgroundSize: "cover", 
                        backgroundPosition: "center" 
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black"></div>
                </div>

                <div className="relative z-10 py-10 md:py-14 px-6 max-w-6xl mx-auto">
                    <header className="text-center mb-10">
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-1 tracking-tighter">GALLERY</h1>
                            <p className="text-gray-300 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold opacity-80">Our Dynamic Journey</p>
                            <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
                        </motion.div>
                    </header>

                    {/* TAB TAHUN (Dinamik dari Sheet) */}
                    <div className="flex justify-center flex-wrap gap-3 mb-10">
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setActiveYear(year)}
                                className={`px-8 py-2.5 rounded-xl font-black transition-all duration-300 uppercase tracking-widest text-[10px] ${
                                    activeYear === year 
                                    ? 'bg-red-600 text-white shadow-lg -translate-y-1' 
                                    : 'bg-white/10 text-white/60 border border-white/10 hover:border-white/30 backdrop-blur-md'
                                }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    {/* MAIN CONTENT PANEL */}
                    <div className="max-w-5xl mx-auto">
                        {loading ? (
                            <div className="text-center py-20 text-white font-bold animate-pulse">LOADING GALLERY...</div>
                        ) : (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeYear}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    className="bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] border border-white/10 p-8 md:p-14 shadow-2xl"
                                >
                                    {galleryData[activeYear]?.map((event, index) => (
                                        <div key={index} className="mb-20 last:mb-0">
                                            <div className="border-l-4 border-red-600 pl-6 mb-10">
                                                <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-none">{event.title}</h2>
                                                <p className="text-white text-sm md:text-base mt-3 italic max-w-2xl font-medium opacity-90">"{event.description}"</p>
                                            </div>
                                            
                                            {/* Media Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> 
                                        {event.media.map((item, mIndex) => (
                                            <motion.div 
                                                key={mIndex} 
                                                whileHover={{ scale: 1.03 }} 
                                                // TAMBAH onClick kat bawah ni
                                                onClick={() => item.type === 'image' && setSelectedImg(item.url)}
                                                // TAMBAH cursor-pointer supaya user tahu boleh klik
                                                className={`relative overflow-hidden rounded-[2rem] shadow-2xl bg-black/40 aspect-[4/3] w-full border border-white/5 group ${item.type === 'image' ? 'cursor-pointer' : ''}`}
                                            >
                                                {item.type === 'image' ? (
                                                    <img 
                                                        src={item.url} 
                                                        alt="" 
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                                    />
                                                ) : (
                                                    <iframe 
                                                        className="w-full h-full" 
                                                        src={`https://www.youtube.com/embed/${item.url}`} 
                                                        frameBorder="0" 
                                                        allowFullScreen
                                                    ></iframe>
                                                )}

                                                {/* Overlay sikit bila hover supaya nampak "clickable" */}
                                                {item.type === 'image' && (
                                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <span className="text-white text-xs font-black uppercase tracking-widest bg-red-600/80 px-4 py-2 rounded-full backdrop-blur-sm">
                                                            View Full Screen
                                                        </span>
                                                    </div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </div>
                </div>
{/* ============================================================ */}
            {/* FULL IMAGE MODAL (LIGHTBOX) */}
            {/* ============================================================ */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)} // KLIK MANA-MANA UNTUK CLOSE
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl max-h-full flex items-center justify-center"
                        >
                            <img 
                                src={selectedImg} 
                                alt="Full Preview" 
                                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
                            />
                            
                            {/* Button Close */}
                            <button 
                                onClick={() => setSelectedImg(null)}
                                className="absolute -top-12 right-0 md:-right-12 text-white/50 hover:text-white transition-colors"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            </div>
        </>
    );
}

Gallery.layout = page => <AuthenticatedLayout children={page} />;