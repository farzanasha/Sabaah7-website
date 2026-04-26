import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { motion } from 'framer-motion';

export default function Businesses() {
    const businessList = [
        { title: "Agri-Business & Livestock", icon: "agri.png", active: false, subs: [] },
        { title: "Integrated Services", icon: "services.png", active: true, subs: [{ name: "Kecil Molek Tailoring", id: "kecil" }] },
        { title: "Staple Food & Noodle Products", icon: "noodles.png", active: true, subs: [{ name: "Mee Lantak", id: "meelantak" }] },
        { title: "Food & Beverage", icon: "food.png", active: true, subs: [{ name: "Aiskrim Junior", id: "junior" }, { name: "Warung Soja", id: "soja" }] },
        { title: "Food Manufacturing & Processing", icon: "factory.png", active: false, subs: [] },
        { title: "Training & Business Academy", icon: "academy.png", active: false, subs: [] },
        { title: "Community Impact", icon: "community.png", active: false, subs: [] },
    ];

    const branchDetails = [
        { 
            id: 'junior', 
            title: '🍦 Aiskrim Junior Branches', 
            location: 'HQ & Main Branch, Selangor / Kuala Lumpur', 
            phone: '+60 11-1119 0377' 
        },
        { 
            id: 'soja', 
            title: '🥣 Warung Soja Branches', 
            location: 'Jalan BK 5, Bandar Kinrara, Puchong, Selangor.', 
            phone: '+60 11-xxxx xxxx' 
        },
        { 
            id: 'kecil', 
            title: '🧵 Kecil Molek Tailoring', 
            location: 'Butik & Bengkel Jahitan, Selangor.', 
            phone: '+60 11-xxxx xxxx' 
        },
        { 
            id: 'meelantak', 
            title: '🍜 Mee Lantak Products', 
            location: 'Pusat Edaran & Jualan, Selangor.', 
            phone: '+60 11-xxxx xxxx' 
        },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="pb-20">
            {/* HERO SECTION */}
            <div className="relative h-[40vh] flex items-center justify-center text-white text-center"
                style={{ backgroundImage: "url('/images/business.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold drop-shadow-lg">OUR BUSINESSES</h1>
                    <p className="mt-2 text-lg opacity-90">7 Core Pillars Under Sabaah7</p>
                </div>
            </div>

            {/* GRID SECTION (PILLARS) */}
            <div className="py-16 px-6">
                {/* 1. Tukar grid kepada flex + justify-center supaya baris bawah duduk tengah */}
                <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center">
                    {businessList.map((biz, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            /* 2. Tambah flex col + justify-center pada container utama kad */
                            className="group relative p-6 w-full max-w-[260px] h-[220px] bg-red-200 rounded-3xl border border-red-300 shadow-md overflow-hidden flex flex-col items-center justify-center"
                        >
                            {/* KANDUNGAN DEPAN (Icon & Tajuk) - Dipaksa ke tengah */}
                            <div className="group-hover:opacity-0 transition-opacity duration-300 text-center flex flex-col items-center justify-center w-full h-full">
                                <img 
                                    src={`/images/icons/${biz.icon}`} 
                                    className="h-16 w-16 object-contain mb-4" 
                                    alt={biz.title} 
                                />
                                <h3 className="font-bold text-red-950 text-base leading-tight">
                                    {biz.title}
                                </h3>
                            </div>

                            {/* KANDUNGAN HOVER */}
                            <div className="absolute inset-0 bg-red-800 flex flex-col items-center justify-center p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                {biz.active ? (
                                    <div className="space-y-2 w-full text-center flex flex-col items-center justify-center">
                                        <p className="text-white text-xs font-bold mb-1 border-b border-red-400 pb-1 w-full uppercase">Select Business:</p>
                                        <div className="w-full flex flex-col gap-2">
                                            {biz.subs.map((sub, i) => (
                                                <button 
                                                    key={i} 
                                                    onClick={() => scrollToSection(sub.id)} 
                                                    className="w-full py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg transition active:scale-95"
                                                >
                                                    {sub.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center text-white font-black text-lg tracking-widest leading-none">
                                        <p>COMING</p>
                                        <p className="text-red-300">SOON</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* DETAILS SECTION (BRANCHES) */}
            <div className="max-w-5xl mx-auto px-6 space-y-16">
                {branchDetails.map((branch) => (
                    <section id={branch.id} key={branch.id} className="scroll-mt-24">
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-red-700/50 pb-2">
                                {branch.title}
                            </h2>
                            
                            <div className="p-5 bg-white/5 rounded-2xl border border-white/5 text-gray-300">
                                <p className="font-bold text-white mb-1">Main Office / Branch</p>
                                <p className="text-sm leading-relaxed">{branch.location}</p>
                                <p className="text-red-400 font-bold mt-3 flex items-center gap-2">
                                    <span>📞</span> {branch.phone}
                                </p>
                            </div>
                        </motion.div>
                    </section>
                ))}
            </div>
        </div>
    );
}

Businesses.layout = page => <AuthenticatedLayout children={page} />;