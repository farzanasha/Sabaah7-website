import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function JuniorIceCream() {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `
                nav { background-color: #32CD32 !important; } 
                nav a, nav button { color: white !important; }
                
                .bg-fresh { background-color: #f7fee7; }
                
                /* Efek 3D Title */
                .title-3d { 
                    color: white; 
                    -webkit-text-stroke: 1.5px #15803d; 
                    text-shadow: 2px 2px 0px #15803d, 4px 4px 8px rgba(0,0,0,0.3);
                }

                /* Kotak Info Lime Transparent */
                .glass-card {
                    background-color: rgba(163, 230, 53, 0.15);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(132, 204, 22, 0.3);
                    border-radius: 2rem;
                    padding: 2rem;
                }

                /* 1. GRID UNTUK DESKTOP */
                .poster-grid {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 20px;
                    max-width: 1200px;
                    margin: 0 auto 50px;
                    padding: 0 20px;
                }

                /* 2. SAIZ POSTER (Desktop) */
                .poster-item {
                    flex: 1;
                    min-width: 250px;
                    max-width: 350px;
                    height: auto;
                    border-radius: 20px;
                    transition: all 0.3s ease;
                    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
                }

                .poster-item:hover {
                    transform: translateY(-10px) scale(1.05);
                }

                /* 3. KHAS UNTUK MOBILE */
                @media (max-width: 768px) {
                    .poster-grid {
                        flex-direction: column;
                        align-items: center;
                        gap: 30px;
                    }

                    .poster-item {
                        width: 70% !important;
                        max-width: 260px !important;
                        min-width: unset !important;
                        border-radius: 15px;
                    }
                }

                .benefit-img-container {
                    display: flex;
                    justify-content: center;
                    margin-top: 50px;
                    padding: 0 20px;
                }

                .benefit-img {
                    width: 100%;
                    max-width: 1100px;
                    height: auto;
                    border-radius: 30px;
                    filter: drop-shadow(0 15px 30px rgba(0,0,0,0.1));
                }

                @media (max-width: 768px) {
                    .benefit-img { border-radius: 20px; }
                }
            `}} />

            <Head title="Aiskrim Junior - Official" />
            
            <div className="bg-fresh min-h-screen pb-20">
                {/* Hero Section */}
                <div className="relative h-[400px] w-full overflow-hidden mb-10">
                    <img src="/images/headers/junior.png" className="w-full h-full object-cover" alt="Header" />
                    <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                        <motion.img 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            src="/images/logos/junior.png" 
                            className="w-32 h-32 md:w-44 md:h-44 object-contain mb-4 drop-shadow-xl" 
                            alt="Logo Aiskrim Junior" 
                        />
                        <h1 className="text-5xl md:text-7xl font-black title-3d uppercase tracking-wider text-center">
                            JUNIOR ICE CREAM
                        </h1>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-6">
{/* --- SEKSYEN UTAMA: ABOUT JUNIOR ICE CREAM --- */}
<div id="about" className="scroll-mt-24 mb-16">
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
    >
        <h2 className="text-4xl md:text-5xl font-black text-lime-900 uppercase tracking-tighter">
            About Junior Ice Cream
        </h2>
        <div className="w-24 h-1.5 bg-lime-500 mx-auto mt-4 rounded-full"></div>
    </motion.div>

    {/* 1. Background & History */}
    <motion.section 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card mb-8"
    >
        <h3 className="text-2xl font-bold text-lime-900 mb-3 flex items-center gap-2">
            📖 Background & History
        </h3>
        <p className="text-lime-800 leading-relaxed text-lg">
            Junior Ice Cream began as a family business dedicated to the quality and authentic 
            flavors of Malaysian ice cream. Using traditional recipes passed down through generations, we have grown from small-scale production into a trusted catering 
            supplier for various events throughout the local area.        
            </p>
    </motion.section>

    {/* 2. Vision, Mission & Objective */}
    <div id="businesses" className="grid md:grid-cols-3 gap-6 mb-8 scroll-mt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card">
            <h3 className="text-xl font-bold text-lime-900 mb-2">🎯 Vision</h3>
            <p className="text-lime-800 text-sm">                
            To become the community's premier ice cream brand,
            known for premium quality and unforgettable flavors.  
            </p>     
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card border-lime-400 bg-lime-500/10">
            <h3 className="text-xl font-bold text-lime-900 mb-2">🚀 Mission</h3>
            <p className="text-lime-800 text-sm">To produce clean, halal, and affordable ice cream 
                for all ages without compromising on taste. 
            </p> 
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card">
            <h3 className="text-xl font-bold text-lime-900 mb-2">📌 Objective</h3>
            <p className="text-lime-800 text-sm">To deliver joy through every scoop of ice cream and ensure 100% customer
                 satisfaction in every catering service we provide.</p>
        </motion.div>
    </div>

    {/* --- SEKSYEN INFO CAWANGAN (KL & IPOH) --- */}
    <div className="flex flex-col lg:flex-row gap-8 mb-16 items-stretch">
        
        {/* KIRI: MAKLUMAT HUBUNGAN (KL & IPOH) */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="lg:w-1/2 bg-lime-500/10 backdrop-blur-md border border-lime-200 rounded-[3rem] p-8 md:p-10 shadow-xl flex flex-col"
        >
            <h2 className="text-3xl font-black text-lime-900 mb-8 uppercase tracking-tight">OUR BRANCHES</h2>
            
{/* BAHAGIAN KL */}
<div className="pb-8 border-b border-lime-900/10">
    <h3 className="text-xl font-bold text-lime-700 mb-6 flex items-center gap-2">📍 Ampang, Selangor Branch</h3>
    
    <div className="space-y-5">
        {/* BARIS 1: OPERATING HOURS (Panjang, biar dia sorang) */}
        <div className="flex items-center gap-3">
            <span className="bg-white p-1.5 rounded-lg shadow-sm">⏰</span>
            <p className="text-lime-800 text-sm font-medium leading-tight">
                Operating Hours: Mon-Fri (9am-6pm), Sat (10am-4pm)
            </p>
        </div>

    <div className="flex items-center gap-3">
        <span className="bg-white p-1.5 rounded-lg shadow-sm">✉️</span>
        <p className="text-lime-800 text-sm font-medium leading-tight">
            dzulqarnain.adzmi@sabaah7.com
        </p>
    </div>
    
    {/* Bahagian Telefon (Ditetapkan lebar minimum) */}
    <div className="flex items-center gap-3">
        <span className="bg-white p-1.5 rounded-lg shadow-sm">📞</span>
        <p className="text-lime-800 text-sm font-medium leading-tight">
            +60 11-1119 0377
        </p>
    </div>


        {/* BARIS 3: SOCIAL MEDIA (Ikon Berjajar) */}
        <div className="flex flex-wrap gap-4 pt-2">
            <a 
                href="https://www.instagram.com/junioricecream_ampang" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/40 pr-3 rounded-full shadow-sm hover:bg-white/60 transition-colors cursor-pointer"
            >
                <span className="bg-white p-1.5 rounded-full flex items-center justify-center w-8 h-8 shadow-sm">
                    <i className="fa-brands fa-instagram text-pink-600"></i>
                </span>
                <p className="text-lime-900 text-[10px] font-bold">@junioricecream_ampang</p>
            </a>

            {/* FB */}
            <a 
                href="https://www.facebook.com/nama_facebook_anda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/40 pr-3 rounded-full shadow-sm hover:bg-white/60 transition-colors cursor-pointer"
            >
                <span className="bg-white p-1.5 rounded-full flex items-center justify-center w-8 h-8 shadow-sm">
                    <i className="fa-brands fa-facebook text-blue-600"></i>
                </span>
                <p className="text-lime-900 text-[10px] font-bold">Facebook</p>
            </a>

            {/* TIKTOK */}
            <a 
                href="https://www.tiktok.com/@junioricecream_ampang" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/40 pr-3 rounded-full shadow-sm hover:bg-white/60 transition-colors cursor-pointer"
            >
                <span className="bg-white p-1.5 rounded-full flex items-center justify-center w-8 h-8 shadow-sm">
                    <i className="fa-brands fa-tiktok text-black"></i>
                </span>
                <p className="text-lime-900 text-[10px] font-bold">@junioricecream_ampang</p>
            </a>
        </div>
    </div>
    </div>

            {/* BAHAGIAN IPOH */}
            <div className="pt-8">
                <h3 className="text-xl font-bold text-lime-700 mb-4 flex items-center gap-2">📍 Ipoh, Perak Branch</h3>
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="bg-white p-1.5 rounded-lg shadow-sm">⏰ </span>
                        <p className="text-lime-800 text-sm font-medium">Operating Hours:Mon-Fri (9am-6pm), Sat (10am-4pm)</p>
                    </div>
                        <div className="flex items-center gap-3">
        <span className="bg-white p-1.5 rounded-lg shadow-sm">✉️</span>
        <p className="text-lime-800 text-sm font-medium leading-tight">
            dzulqarnain.adzmi@sabaah7.com
        </p>
    </div>
    
    {/* Bahagian Telefon (Ditetapkan lebar minimum) */}
    <div className="flex items-center gap-3">
        <span className="bg-white p-1.5 rounded-lg shadow-sm">📞</span>
        <p className="text-lime-800 text-sm font-medium leading-tight">
            +60 11-1119 0377
        </p>
    </div>

        {/* BARIS 3: SOCIAL MEDIA (Ikon Berjajar) */}
        <div className="flex flex-wrap gap-4 pt-2">
            {/* IG */}
            <a 
                href="https://www.instagram.com/junioricecream_ipoh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/40 pr-3 rounded-full shadow-sm hover:bg-white/60 transition-colors cursor-pointer"
            >
                <span className="bg-white p-1.5 rounded-full flex items-center justify-center w-8 h-8 shadow-sm">
                    <i className="fa-brands fa-instagram text-pink-600"></i>
                </span>
                <p className="text-lime-900 text-[10px] font-bold">@junioricecream_ipoh</p>
            </a>

            {/* FB */}
            <a 
                href="https://www.facebook.com/nama_facebook_anda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/40 pr-3 rounded-full shadow-sm hover:bg-white/60 transition-colors cursor-pointer"
            >
                <span className="bg-white p-1.5 rounded-full flex items-center justify-center w-8 h-8 shadow-sm">
                    <i className="fa-brands fa-facebook text-blue-600"></i>
                </span>
                <p className="text-lime-900 text-[10px] font-bold">Facebook</p>
            </a>

            {/* TIKTOK */}
            <a 
                href="https://www.tiktok.com/@junioricecream_ipoh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/40 pr-3 rounded-full shadow-sm hover:bg-white/60 transition-colors cursor-pointer"
            >
                <span className="bg-white p-1.5 rounded-full flex items-center justify-center w-8 h-8 shadow-sm">
                    <i className="fa-brands fa-tiktok text-black"></i>
                </span>
                <p className="text-lime-900 text-[10px] font-bold">TikTok</p>
            </a>
        </div>
                                        
                </div>
                
            </div>

            
        </motion.div>

        {/* KANAN: ALAMAT & MAPS (ATAS KL, BAWAH IPOH) */}
        <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="lg:w-1/2 bg-lime-500/10 backdrop-blur-md border border-lime-200 rounded-[3rem] p-6 shadow-xl flex flex-col gap-6"
        >
            {/* MAPS KL (ATAS) */}
            
            <div className="flex-1 flex flex-col">
                <h2 className="text-3xl font-black text-lime-900 mb-8 uppercase tracking-tight">📍 lOCATED US</h2>
                <p className="text-lime-900 font-bold text-sm mb-2 px-2">KL HQ: Kg. Baru, 50300 Kuala Lumpur</p>
                <div className="flex-1 min-h-[200px] bg-white/50 rounded-[2rem] overflow-hidden border border-lime-200 relative shadow-inner">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=..." 
                        className="absolute top-0 left-0 w-full h-full border-0"
                        allowFullScreen="" loading="lazy"
                    ></iframe>
                    <div className="absolute top-3 left-3 bg-lime-900 text-white text-[9px] font-bold py-1 px-3 rounded-full z-10">KL BRANCH</div>
                </div>
            </div>

            {/* MAPS IPOH (BAWAH) */}
            <div className="flex-1 flex flex-col">
                <p className="text-lime-900 font-bold text-sm mb-2 px-2">IPOH: Bulatan Sultan Azlan Shah, Meru Raya</p>
                <div className="flex-1 min-h-[200px] bg-white/50 rounded-[2rem] overflow-hidden border border-lime-200 relative shadow-inner">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5794133175277!2d101.07943979999999!3d4.6688218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ca93d5c3b7dc69%3A0xce40de9a0f76d945!2sBulatan%20Sultan%20Azlan%20Shah!5e0!3m2!1sen!2smy!4v1777275765298!5m2!1sen!2smy" 
                        className="absolute top-0 left-0 w-full h-full border-0"
                        allowFullScreen="" loading="lazy"
                    ></iframe>
                    <div className="absolute top-3 left-3 bg-blue-900 text-white text-[9px] font-bold py-1 px-3 rounded-full z-10">IPOH BRANCH</div>
                </div>
            </div>
        </motion.div>
    </div>
</div>

                    {/* ID PRODUCTS: Tajuk Pakej */}
                    <div id="products" className="text-center mb-10 scroll-mt-24">
                        <h2 className="text-4xl font-black text-lime-900 uppercase">Our Packages</h2>
                        <div className="w-24 h-1 bg-lime-500 mx-auto mt-2"></div>
                    </div>

                    {/* 3 Poster Sebaris */}
                    <div className="poster-grid mb-16">
                        <motion.img initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} src="/images/products/pakeja.png" className="poster-item" alt="Pakej A" />
                        <motion.img initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} src="/images/products/pakejb.jpg" className="poster-item" alt="Pakej B" />
                        <motion.img initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} src="/images/products/pakejc.png" className="poster-item" alt="Pakej C" />
                    </div>
                    
                    {/* Benefit Image Section */}
                    <div className="benefit-img-container">
                        <motion.img 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            src="/images/products/benefit.png" 
                            alt="Kelebihan Pembelian Pakej Aiskrim Junior"
                            className="benefit-img"
                        />
                    </div>
                    
                    {/* Call to Action */}
                    <div className="text-center mt-16 mb-20">
                        <a 
                            href="https://wa.me/601111190377?text=Hi,%20saya%20berminat%20nak%20order%20Junior%20Icecream" 
                            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transition-all hover:scale-110 active:scale-95"
                        >
                            ORDER NOW VIA WHATSAPP
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

JuniorIceCream.layout = page => <AuthenticatedLayout children={page} />;