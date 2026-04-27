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
                    // CONTOH VIDEO YOUTUBE: Masukkan ID sahaja (Contoh: dQw4w9WgXcQ)
                    //{ type: "video", url: "dQw4w9WgXcQ" } 
                ]
            },
            {
                title: "Sabaah 7 Training : Food Handling Training",
                description: "Sesi latihan keselamatan makanan bagi memastikan kualiti terbaik.",
                media: [
                    { type: "video", url: "SgQjwssO7AY" }, 
                    //{ type: "image", url: "/images/gallery/training_group.jpg" }
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

            <div className="min-h-screen bg-gray-50 py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <header className="text-center mb-16">
                        <h1 className="text-5xl font-black text-[#8B0000] mb-4">GALLERY</h1>
                        <p className="text-gray-600 uppercase tracking-widest font-semibold">Our Journey & Events</p>
                        <div className="w-20 h-1.5 bg-[#8B0000] mx-auto mt-4 rounded-full"></div>
                    </header>

                    {/* TAB TAHUN */}
                    <div className="flex justify-center flex-wrap gap-3 mb-16">
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setActiveYear(year)}
                                className={`px-10 py-3 rounded-2xl font-bold transition-all duration-300 ${
                                    activeYear === year 
                                    ? 'bg-[#8B0000] text-white shadow-2xl -translate-y-1' 
                                    : 'bg-white text-gray-400 border border-gray-100 hover:border-[#8B0000] hover:text-[#8B0000]'
                                }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                   {/* CONTENT GALLERY */}
<div className="max-w-5xl mx-auto space-y-12 px-4 md:px-8"> {/* Tambah padding kiri kanan yang lebih responsif */}
    <AnimatePresence mode="wait">
        <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
        >
            {galleryData[activeYear]?.length > 0 ? (
                galleryData[activeYear].map((event, index) => (
                    <div key={index} className="mb-10">
                        {/* Header Event - Kita buat lebih 'airy' */}
                        <div className="border-l-4 border-[#8B0000] pl-5 py-1 mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase tracking-tight">
                                {event.title}
                            </h2>
                            <p className="text-gray-500 text-base md:text-lg mt-2 italic max-w-2xl">
                                "{event.description}"
                            </p>
                        </div>
                        
                        {/* Flexible Media Grid - Ditambah GAP yang lebih selesa */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> 
                            {event.media.map((item, mIndex) => (
                                <div 
                                    key={mIndex}
                                    className="relative overflow-hidden rounded-2xl shadow-md bg-black aspect-[4/3] w-full max-w-[400px] mx-auto" 
                                    /* max-w-[400px] & mx-auto supaya bila skrin kecil, gambar tak jadi gergasi */
                                >
                                    {item.type === 'image' ? (
                                        <img 
                                            src={item.url} 
                                            alt={event.title} 
                                            className="w-full h-full object-cover"
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
                                </div>
                            ))}
                        </div>
                        {/* Garisan pemisah yang lebih halus */}
                        <div className="mt-8 border-b border-gray-100"></div>
                    </div>
                ))
            ) : (
                <div className="text-center py-20 bg-white rounded-3xl shadow-inner border border-gray-50">
                    <p className="text-gray-400 text-xl font-medium">Tiada rekod acara ditemui.</p>
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