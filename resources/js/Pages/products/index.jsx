import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Index() {
    const categories = [
        {
            title: '🍽️ Food & Beverage',
            products: [
                { name: 'Junior Ice Cream', logo: '/images/logos/junior.png', href: '/products/junior' },
                { name: 'Warong Soja', logo: '/images/logos/soja.png', href: '/products/soja' },
            ]
        },
        {
            title: '🍜 Staple Food',
            products: [
                { name: 'Mee Lantak', logo: '/images/logos/meelantak.png', href: '/products/meelantak' },
            ]
        },
        {
            title: '🧵 Integrated Services',
            products: [
                { name: 'Kecik Molek Tailor', logo: '/images/logos/kecil.png', href: '/products/kecil-molek' },
            ]
        }
    ];

    return (
        <div className="relative min-h-screen w-full bg-black">
            
            {/* 1. BACKGROUND DENGAN BLUR */}
            <div 
                className="fixed inset-0 z-0"
                style={{ 
                    backgroundImage: "url('/images/product.png')", 
                    backgroundSize: "cover", 
                    backgroundPosition: "center" 
                }}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
            </div>

            {/* 2. CONTENT AREA */}
            <div className="relative z-10">
                
                {/* HERO SECTION */}
                <div className="h-[35vh] flex flex-col items-center justify-center text-white text-center px-6">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <h1 className="text-4xl md:text-7xl font-black drop-shadow-2xl tracking-tighter uppercase leading-none">
                            <span className="text-red-600">Our</span> Products
                        </h1>
                        <p className="mt-3 text-lg opacity-90 font-medium">Explore the excellence of Sabaah7 brands</p>
                        <div className="w-16 h-1.5 bg-red-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
                    </motion.div>
                </div>

                {/* MAIN GLASS PANEL (Balut Semua Content) */}
                <div className="max-w-6xl mx-auto px-4 pb-24">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/[0.03] backdrop-blur-3xl rounded-[3.5rem] border border-white/10 p-8 md:p-16 shadow-2xl"
                    >
                        <div className="space-y-20">
                            {categories.map((category, sIndex) => (
                                <section key={sIndex}>
                                    {/* Tajuk Kategori - DIPERBAIKI UNTUK MOBILE */}
                                    <div className="flex flex-col items-center mb-10 text-center w-full overflow-hidden">
                                        <h2 className="text-sm md:text-2xl font-black text-white uppercase tracking-[0.15em] md:tracking-[0.3em] whitespace-nowrap px-4">
                                            {category.title}
                                        </h2>
                                        <div className="h-1 w-12 bg-red-600 mt-2 rounded-full"></div>
                                    </div>

                                    <div className="flex flex-wrap gap-6 justify-center">
                                        {category.products.map((product, pIndex) => (
                                            <Link key={pIndex} href={product.href} className="group">
                                                <div className="bg-white/[0.05] hover:bg-red-600/10 backdrop-blur-md p-6 rounded-[2.5rem] border border-white/10 w-48 h-56 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:border-red-600/50 group-hover:-translate-y-2">
                                                    <img 
                                                        src={product.logo} 
                                                        className="h-24 object-contain mb-4 transition-transform group-hover:scale-110 drop-shadow-2xl" 
                                                        alt={product.name} 
                                                    />
                                                    <p className="font-bold text-white text-xs uppercase tracking-widest group-hover:text-red-500">
                                                        {product.name}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

Index.layout = page => <AuthenticatedLayout children={page} />;