import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { motion } from 'framer-motion';

export default function Businesses() {
    const businessList = [
        { title: "Agri-Business & Livestock", icon: "agri.png", active: false, subs: [] },
        { title: "Integrated Services", icon: "services.png", active: true, subs: [{ name: "Kecil Molek Tailoring", id: "kecil" }] },
        { title: "Staple Food & Noodle Products", icon: "noodles.png", active: true, subs: [{ name: "Mee Lantak", id: "meelantak" }] },
        { title: "Food & Beverage", icon: "food.png", active: true, subs: [{ name: "Junior Ice Cream", id: "junior" }, { name: "Warung Soja", id: "soja" }] },
        { title: "Food Manufacturing & Processing", icon: "factory.png", active: false, subs: [] },
        { title: "Training & Business Academy", icon: "academy.png", active: false, subs: [] },
        { title: "Community Impact", icon: "community.png", active: false, subs: [] },
    ];

    const branchDetails = [
        { 
            id: 'junior', 
            title: '🍦 Junior Ice Cream Branches', 
            branches: [
                { 
                    name: 'HQ & Main Branch (Ipoh)', 
                    address: 'Bulatan Sultan Azlan Shah, Meru Raya, 30020 Ipoh, Perak.', 
                    phone: '+60 11-6513 9295' 
                },
                { 
                    name: 'Ampang Branch', 
                    address: 'Kg. Baru Ampang, 68000 Ampang, Selangor.', 
                    phone: '+60 11-1119 0377' 
                }
            ]
        },
        { 
            id: 'soja', 
            title: '🥣 Warung Soja Branches', 
            branches: [
                { 
                    name: 'Main Branch', 
                    address: 'Jalan BK 5, Bandar Kinrara, Puchong, Selangor.', 
                    phone: '+60 11-xxxx xxxx' 
                }
            ]
        },
        { 
            id: 'kecil', 
            title: '🧵 Kecil Molek Tailoring', 
            branches: [
                { 
                    name: 'Butik & Bengkel', 
                    address: 'Butik & Bengkel Jahitan, Selangor.', 
                    phone: '+60 11-xxxx xxxx' 
                }
            ]
        },
        { 
            id: 'meelantak', 
            title: '🍜 Mee Lantak Products', 
            branches: [
                { 
                    name: 'Distribution Center', 
                    address: 'Pusat Edaran & Jualan, Selangor.', 
                    phone: '+60 11-xxxx xxxx' 
                }
            ]
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
                <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center">
                    {businessList.map((biz, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-6 w-full max-w-[260px] h-[220px] bg-red-200 rounded-3xl border border-red-300 shadow-md overflow-hidden flex flex-col items-center justify-center"
                        >
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
                {branchDetails.map((group) => (
                    <section id={group.id} key={group.id} className="scroll-mt-24">
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-red-700/50 pb-2">
                                {group.title}
                            </h2>
                            
                            <div className="grid md:grid-cols-2 gap-4"> 
                                {group.branches.map((branch, idx) => (
                                    <div key={idx} className="p-5 bg-white/5 rounded-2xl border border-white/5 text-gray-300">
                                        <p className="font-bold text-white mb-1 uppercase text-xs text-red-400">
                                            {branch.name}
                                        </p>
                                        <p className="text-sm leading-relaxed min-h-[40px]">
                                            {branch.address}
                                        </p>
                                        <p className="text-white font-bold mt-3 flex items-center gap-2">
                                            <span className="text-red-500">📞</span> {branch.phone}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </section>
                ))}
            </div>
        </div>
    );
}

Businesses.layout = page => <AuthenticatedLayout children={page} />;