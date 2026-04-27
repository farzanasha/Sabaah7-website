import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
    const [activeYear, setActiveYear] = useState('2026');

    const galleryData = {
        '2026': [
            {
                title: "Junior Ice Cream Event : Ali & Siti Wedding",
                description: "Majlis perkahwinan meriah dengan hidangan aiskrim premium pelbagai perisa.",
                media: [
                    { type: "image", url: "/images/gallery/wedding1-1.png" },
                    { type: "image", url: "/images/gallery/wedding1-2.png" },
                    { type: "image", url: "/images/gallery/wedding1-3.png" },
                ]
            },
            {
                title: "Sabaah 7 Training : Food Handling Training",
                description: "Sesi latihan keselamatan makanan bagi memastikan kualiti terbaik.",
                media: [
                    { type: "video", url: "SgQjwssO7AY" }, 
                ]
            }
        ],
        '2025': [
            {
                title: "Corporate Event: Annual Dinner 2025",
                description: "Menyediakan servis aiskrim untuk 500 tetamu korporat.",
                media: [
                    { type: "image", url: "/images/gallery/event2025.jpg" }
                ]
            }
        ]
    };

    const years = ['2026', '2025', '2024'];

    return (
        <AuthenticatedLayout>
            <Head title="Gallery - Sabaah7" />

            <div className="relative min-h-screen w-full bg-black overflow-hidden">
                {/* 1. BACKGROUND IMAGE (FIXED) */}
                <div 
                    className="fixed inset-0 z-0"
                    style={{ 
                        backgroundImage: "url('/images/gallery/background.png')", 
                        backgroundSize: "cover", 
                        backgroundPosition: "center" 
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* 2. CONTENT AREA */}
                <div className="relative z-10 py-10 md:py-14 px-6 max-w-6xl mx-auto">
                    
                    <header className="text-center mb-10">
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-1 tracking-tighter drop-shadow-2xl">
                                GALLERY
                            </h1>
                            <p className="text-gray-300 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold opacity-80">
                                Our Journey & Events
                            </p>
                            <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
                        </motion.div>
                    </header>

                    {/* TAB TAHUN */}
                    <div className="flex justify-center flex-wrap gap-3 mb-10">
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setActiveYear(year)}
                                className={`px-8 py-2.5 rounded-xl font-black transition-all duration-300 uppercase tracking-widest text-[10px] ${
                                    activeYear === year 
                                    ? 'bg-red-600 text-white shadow-lg -translate-y-1' 
                                    : 'bg-white/10 text-white/60 border border-white/10 hover:border-white/30 hover:text-white backdrop-blur-md'
                                }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    {/* MAIN CONTENT PANEL */}
                    <div className="max-w-5xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeYear}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] border border-white/10 p-8 md:p-14 shadow-2xl"
                            >
                                {galleryData[activeYear]?.length > 0 ? (
                                    galleryData[activeYear].map((event, index) => (
                                        <div key={index} className="mb-20 last:mb-0">
                                            
                                            {/* Header Event */}
                                            <div className="border-l-4 border-red-600 pl-6 mb-10">
                                                <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-none">
                                                    {event.title}
                                                </h2>
                                                {/* Deskripsi ditukar ke PUTIH */}
                                                <p className="text-white text-sm md:text-base mt-3 italic max-w-2xl font-medium opacity-90">
                                                    "{event.description}"
                                                </p>
                                            </div>
                                            
                                            {/* Media Grid */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> 
                                                {event.media.map((item, mIndex) => (
                                                    <motion.div 
                                                        key={mIndex}
                                                        whileHover={{ scale: 1.03 }}
                                                        className="relative overflow-hidden rounded-[2rem] shadow-2xl bg-black/40 aspect-[4/3] w-full border border-white/5 group" 
                                                    >
                                                        {item.type === 'image' ? (
                                                            <img 
                                                                src={item.url} 
                                                                alt={event.title} 
                                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                                loading="lazy"
                                                            />
                                                        ) : (
                                                            <iframe
                                                                className="w-full h-full"
                                                                src={`https://www.youtube.com/embed/${item.url}`}
                                                                title="YouTube video player"
                                                                frameBorder="0"
                                                                allowFullScreen
                                                            ></iframe>
                                                        )}
                                                        <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                            
                                            {index !== galleryData[activeYear].length - 1 && (
                                                <div className="mt-16 h-[1px] w-full bg-gradient-to-r from-red-600/30 to-transparent"></div>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-20">
                                        <p className="text-white/30 text-xl font-black uppercase tracking-widest">No Events Found</p>
                                        <div className="mt-2 text-red-600/50 text-xs uppercase font-bold tracking-tighter">Stay tuned for future updates</div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

Gallery.layout = page => <AuthenticatedLayout children={page} />;