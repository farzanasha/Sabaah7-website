import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
    const [activeYear, setActiveYear] = useState('2026');

    // DATA GALLERY (Anda boleh tambah/ubah di sini nanti)
    const galleryData = {
        '2026': [
            {
                title: "Junior Ice Cream Event : Ali & Siti Wedding",
                type: "image", 
                src: "/images/gallery/wedding1.jpg", // Pastikan gambar ada di folder public
                description: "Majlis perkahwinan meriah dengan hidangan aiskrim premium."
            },
            {
                title: "Sabaah 7 Training : Food Handling Training",
                type: "video",
                src: "/videos/gallery/training1.mp4", // Pastikan video ada di folder public
                description: "Sesi latihan keselamatan makanan bagi memastikan kualiti terbaik."
            }
        ],
        '2025': [
            {
                title: "Corporate Event: Annual Dinner 2025",
                type: "image",
                src: "/images/gallery/event2025.jpg",
                description: "Menyediakan servis aiskrim untuk 500 tetamu korporat."
            }
        ],
        '2024': [
            {
                title: "Back to School Program",
                type: "image",
                src: "/images/gallery/charity2024.jpg",
                description: "Program CSR memberi aiskrim percuma kepada pelajar sekolah."
            }
        ]
    };

    const years = ['2026', '2025', '2024'];

    return (
        <AuthenticatedLayout>
            <Head title="Gallery - Sabaah7" />

            <div className="min-h-screen bg-gray-50 py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <header className="text-center mb-16">
                        <h1 className="text-5xl font-black text-[#8B0000] mb-4">GALLERY</h1>
                        <p className="text-gray-600 uppercase tracking-widest">Our Journey & Events</p>
                        <div className="w-20 h-1 bg-[#8B0000] mx-auto mt-4"></div>
                    </header>

                    {/* TAB TAHUN */}
                    <div className="flex justify-center gap-3 mb-16">
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setActiveYear(year)}
                                className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                                    activeYear === year 
                                    ? 'bg-[#8B0000] text-white shadow-xl -translate-y-1' 
                                    : 'bg-white text-gray-400 border border-gray-200 hover:border-[#8B0000] hover:text-[#8B0000]'
                                }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    {/* CONTENT GALLERY */}
                    <div className="space-y-20">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeYear}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                {galleryData[activeYear]?.length > 0 ? (
                                    galleryData[activeYear].map((event, index) => (
                                        <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                                            {/* Header Event */}
                                            <div className="p-8 bg-gradient-to-r from-[#8B0000] to-red-800 text-white">
                                                <h2 className="text-2xl md:text-3xl font-bold">{event.title}</h2>
                                            </div>
                                            
                                            {/* Media Container */}
                                            <div className="p-2">
                                                {event.type === 'image' ? (
                                                    <img 
                                                        src={event.src} 
                                                        alt={event.title} 
                                                        className="w-full h-auto rounded-2xl object-cover"
                                                    />
                                                ) : (
                                                    <video controls className="w-full rounded-2xl">
                                                        <source src={event.src} type="video/mp4" />
                                                        Browser anda tidak menyokong video.
                                                    </video>
                                                )}
                                            </div>

                                            {/* Description */}
                                            <div className="p-8 bg-white">
                                                <p className="text-gray-600 text-lg leading-relaxed italic">
                                                    "{event.description}"
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-20">
                                        <p className="text-gray-400 text-xl">Tiada rekod buat masa ini.</p>
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