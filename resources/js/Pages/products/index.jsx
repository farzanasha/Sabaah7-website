import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Index() {
    // Data produk mengikut kategori
    const categories = [
        {
            title: '🍽️ Food & Beverage',
            products: [
                { name: 'Aiskrim Junior', logo: '/images/logos/junior.png', href: '/products/junior' },
                { name: 'Warung Soja', logo: '/images/logos/soja.png', href: '/products/soja' },
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
                { name: 'Kecil Molek', logo: '/images/logos/kecil.png', href: '/products/kecil-molek' },
            ]
        }
    ];

    return (
        <div className="min-h-screen">
            {/* HERO */}
            <div className="relative h-[40vh] flex items-center justify-center text-white text-center"
                style={{ backgroundImage: "url('/images/product.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold">OUR PRODUCTS</h1>
                    <p className="mt-2 text-lg">Explore Sabaah7 Products</p>
                </div>
            </div>

            {/* CONTENT */}
            <div className="py-16 px-6">
                <div className="max-w-6xl mx-auto space-y-20">
                    {categories.map((category, sIndex) => (
                        <motion.div 
                            key={sIndex}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-center mb-10 text-white">{category.title}</h2>
                            <div className="flex flex-wrap gap-6 justify-center">
                                
                                {category.products.map((product, pIndex) => (
                                    <Link key={pIndex} href={product.href} className="group w-48">
                                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition-all hover:-translate-y-2 flex flex-col items-center justify-center h-48">
                                            <img 
                                                src={product.logo} 
                                                className="h-24 object-contain mb-3" 
                                                alt={product.name} 
                                            />
                                            <p className="font-bold text-white text-sm md:text-base">{product.name}</p>
                                        </div>
                                    </Link>
                                ))}

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

Index.layout = page => <AuthenticatedLayout children={page} />;