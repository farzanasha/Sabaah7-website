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
                    {/* ID ABOUT: Latar Belakang */}
                    <motion.section 
                        id="about" 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card mb-10 text-center scroll-mt-24"
                    >
                        <h2 className="text-3xl font-bold text-lime-900 mb-4">About Junior Ice Cream</h2>
                        <p className="text-lime-800 leading-relaxed text-lg">
                            Aiskrim Junior bermula sebagai perniagaan keluarga yang mementingkan kualiti dan rasa asli aiskrim Malaysia. Kami membawa kegembiraan ke setiap majlis anda.
                        </p>
                    </motion.section>

                    {/* ID BUSINESSES: Visi & Misi */}
                    <div id="businesses" className="grid md:grid-cols-2 gap-8 mb-16 scroll-mt-24">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card">
                            <h3 className="text-2xl font-bold text-lime-900 mb-2">🎯 Visi</h3>
                            <p className="text-lime-800">Menjadi jenama aiskrim pilihan utama komuniti dengan kualiti premium.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card">
                            <h3 className="text-2xl font-bold text-lime-900 mb-2">🚀 Misi</h3>
                            <p className="text-lime-800">Menghasilkan aiskrim yang bersih, halal, dan mampu milik untuk semua lapisan umur.</p>
                        </motion.div>
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