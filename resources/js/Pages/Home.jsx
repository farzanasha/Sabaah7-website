import { router, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black">
            
            {/* 1. FULL BACKGROUND IMAGE (FIXED) */}
            <div 
                className="fixed inset-0 z-0"
                style={{ 
                    backgroundImage: "url('/images/hero.jpg')", 
                    backgroundSize: "cover", 
                    backgroundPosition: "center" 
                }}
            >
                {/* Overlay: Gelap sikit supaya kandungan depan senang dibaca */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>
            </div>

            {/* 2. CONTENT AREA */}
            <div className="relative z-10">
                
                {/* HERO SECTION */}
                <div className="h-[80vh] flex items-center justify-center text-center text-white px-6">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center"
                    >
                        <img src="/images/logo.png" alt="Sabaah7 Logo" className="h-32 md:h-44 mb-6 drop-shadow-2xl" />
                        <h1 className="text-3xl md:text-5xl font-black drop-shadow-lg uppercase tracking-tighter leading-none">
                            Integrated Global <span className="text-red-600">Ecosystem</span>
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl ">
                            Intergret business solution | Supply and operation
                        </p>
                        
                        
                        <button 
                            onClick={() => router.visit('/businesses')}
                            className="mt-10 px-10 py-4 bg-red-700 hover:bg-red-800 transition-all rounded-2xl shadow-2xl text-white font-black uppercase text-xs tracking-widest active:scale-95"
                        >
                            Explore Businesses
                        </button>
                    </motion.div>
                </div>

                {/* CONTENT BOX (GLASSMORPHISM) */}
                <div className="py-15 px-6 flex justify-center -mt-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-6xl w-full bg-black/40 backdrop-blur-2xl p-10 md:p-16 rounded-[4rem] border border-white/10 shadow-2xl"
                    >
                        <div className="max-w-4xl mx-auto text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
                                One Vision, <span className="text-red-600">Seven Pillars</span>
                            </h2>
                            <p className="text-lg text-justify leading-relaxed text-gray-200 font-medium opacity-90">
        <span className="font-bold text-white">Sabaah7</span> is a diversified holding company managing 
        <span className="text-red-500 font-bold"> 7 strategic pillars</span> across multiple industries. We build an integrated ecosystem designed for sustainable growth, entrepreneurship, and community empowerment.
    </p> <br/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:text-base text-left font-bold text-gray-300 mb-3">
        <div className="flex items-justiy gap-2"> <span className="text-red-600">01.</span> Agri-business & Livestock </div>
        <div className="flex items-center gap-2"> <span className="text-red-600">02.</span> Integrated Services </div>
        <div className="flex items-center gap-2"> <span className="text-red-600">03.</span> Food & Beverages Solutions </div>
        <div className="flex items-center gap-2"> <span className="text-red-600">04.</span> Staple Food Supply</div>
        <div className="flex items-center gap-2"> <span className="text-red-600">05.</span> Food Manufacturing & Processing </div>
        <div className="flex items-center gap-2"> <span className="text-red-600">06.</span> Training & Business Academy </div>
        <div className="flex items-center gap-2"> <span className="text-red-600">07.</span> Community & Humanitarian Impact </div>
    </div>

</div>

                        {/* LOGO GRID */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 place-items-center">
                            {[
                                { name: "Junior Ice Cream", logo: "junior.png", href: "/products/junior" },
                                { name: "Warung Soja", logo: "soja.png", href: "/products/soja" },
                                { name: "Kecik Molek", logo: "kecil.png", href: "/products/kecil-molek" },
                                { name: "Mee Lantak", logo: "meelantak.png", href: "/products/meelantak" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <Link href={item.href} className="flex flex-col items-center group text-center">
                                        <div className="relative">
                                            <img 
                                                src={`/images/logos/${item.logo}`} 
                                                className="h-28 md:h-36 object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]" 
                                            />
                                        </div>
                                        <p className="mt-6 text-sm font-black uppercase tracking-widest text-white opacity-60 group-hover:opacity-100 group-hover:text-red-500 transition-all">
                                            {item.name}
                                        </p>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

Home.layout = page => <AuthenticatedLayout children={page} />;