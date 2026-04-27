import { router, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="pb-10">
            {/* HERO SECTION */}
            <div
                className="relative h-[90vh] flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: "url('/images/hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 px-6 flex flex-col items-center"
                >
                    <img src="/images/logo.png" alt="Sabaah7 Logo" className="h-32 md:h-40 mb-4" />
                    <h1 className="text-2xl md:text-4xl font-bold drop-shadow-lg">Integrated Global Ecosystem</h1>
                    <p className="mt-4 text-xl text-gray-100 max-w-xl">Headquarters Managing 7 Pillar of Businesses</p>
                    <button 
                        onClick={() => router.visit('/businesses')}
                        className="mt-8 px-8 py-3 bg-red-800 hover:bg-red-950 transition-all rounded-full shadow-lg text-white font-semibold"
                    >
                        Explore Businesses
                    </button>
                </motion.div>
            </div>

            {/* CONTENT BOX */}
            <div className="py-20 px-6 flex justify-center">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl w-full bg-white/5 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl"
                >
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">One Vision, Seven Pillars</h2>
                        <p className="text-lg leading-relaxed text-gray-300">Sabaah7 is a diversified company that manages seven core business pillars across multiple industries, including agriculture, services, food production, manufacturing, training, and community development. It is built as an integrated business ecosystem that supports sustainable growth and entrepreneurship. Through these divisions, Sabaah7 aims to expand its impact in both business and community development.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 place-items-center">
                        {[
                            { name: "Junior Ice Cream", logo: "junior.png", href: "/products/junior" },
                            { name: "Warung Soja", logo: "soja.png", href: "/products/soja" },
                            { name: "Kecil Molek", logo: "kecil.png", href: "/products/kecil-molek" },
                            { name: "Mee Lantak", logo: "meelantak.png", href: "/products/mee-lantak" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                            >
                                <Link href={item.href} className="flex flex-col items-center group text-center">
                                    <img src={`/images/logos/${item.logo}`} className="h-28 md:h-36 object-contain transition-transform group-hover:scale-110 drop-shadow-2xl" />
                                    <p className="mt-6 text-lg font-medium text-white opacity-80 group-hover:opacity-100">{item.name}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
Home.layout = page => <AuthenticatedLayout children={page} />;