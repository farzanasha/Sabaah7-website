import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="relative min-h-screen w-full bg-black">
            {/* 1. BACKGROUND IMAGE & LIGHTER OVERLAY */}
            <div 
                className="fixed inset-0 z-0"
                style={{ 
                    backgroundImage: "url('/images/about.jpg')", 
                    backgroundSize: "cover", 
                    backgroundPosition: "center" 
                }}
            >
                {/* Overlay dikurangkan kepekatan (opacity) supaya gambar lebih cerah */}
                <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>
            </div>

            {/* 2. CONTENT AREA */}
            <div className="relative z-10">
                
{/* HERO SECTION - Ketinggian dikecilkan & Padding dirapatkan */}
<div className="h-[40vh] md:h-[45vh] flex flex-col items-center justify-center text-white text-center px-6 relative z-10">
    <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="mt-10 md:mt-16" // Tambah margin top sikit supaya tak rapat sangat dengan Navbar
    >
        <span className="text-red-500 font-black tracking-[0.3em] uppercase text-[9px] md:text-[11px] drop-shadow-md">
            Corporate Profile
        </span>
        
        <h1 className="text-6xl md:text-8xl font-black drop-shadow-2xl mt-1 tracking-tighter uppercase leading-none">
            SABAAH <span className="text-red-600">7</span>
        </h1>
        
        <div className="w-20 h-1.5 bg-red-600 mx-auto mt-3 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
    </motion.div>
</div>

{/* CONTENT AREA - Rapatkan margin top supaya content bawah naik lebih tinggi */}
<div className="max-w-6xl mx-auto px-6 pb-24 -mt-6 md:-mt-10 relative z-20 space-y-12">
    {/* BOX 1: PHILOSOPHY... */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-black/40 backdrop-blur-xl p-8 md:p-16 rounded-[3rem] border border-white/20 shadow-2xl"
                    >
                        <div className="grid lg:grid-cols-2 gap-12 items-center text-left">
                            <div>
                                <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight border-l-4 border-red-600 pl-4 leading-none drop-shadow-lg">
                                    Background & <br/><span className="text-red-600">Philosophy</span>
                                </h2>
                                {/* Teks ditukar ke putih berseri (text-white) */}
                                <p className="text-white leading-relaxed mb-6 text-sm md:text-base font-medium drop-shadow-sm">
                                    Sabaah 7 was established based on the <span className="text-white font-bold border-b border-red-600/50">"7 Strategic Pillars"</span> idea: Staple Foods, Services, Agriculture & Livestock, F&B, Training & Development, Humanitarian efforts, and Manufacturing.
                                </p>
                                <div className="bg-white/10 p-6 rounded-3xl border border-white/10 italic text-white text-xs md:text-sm leading-relaxed backdrop-blur-sm">
                                    "The name <span className="font-bold text-red-400">Sabaah</span> carries two meanings: <span className="font-bold italic text-white underline decoration-red-600/50">Seven</span> and <span className="font-bold italic text-white underline decoration-red-600/50">Morning</span>. It reflects our aspiration to build from the ground up until our dreams are achieved."
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="p-6 bg-red-600/20 rounded-3xl border border-red-600/30 shadow-inner">
                                    <p className="text-red-400 font-bold uppercase text-[10px] tracking-widest mb-2">The Founder</p>
                                    <p className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-md">Muhammad Dzulqarnain bin Adzmi</p>
                                </div>
                                <div className="p-6 bg-black/40 rounded-3xl border border-white/10">
                                    <p className="text-red-400 font-bold uppercase text-[10px] tracking-widest mb-2">Our Vision</p>
                                    {/* Teks ditukar ke putih */}
                                    <p className="text-white text-xs md:text-sm leading-relaxed font-medium">
                                        To be a global leader in securing national food security by strengthening domestic supply chains and serving as a regionally trusted "One-Stop Service Centre".
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* BOX 2: MISSION GRID */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { t: "One-Stop Service Centre", d: "Highly accessible platform for various services (laptop repairs, electrical, painting, etc.) solving multiple problems in one place." },
                            { t: "Integrated Ecosystem Excellence", d: "Optimizing business pillars from production to operations to guarantee a sustainable supply of high-quality foods." },
                            { t: "Social Well-being", d: "Efficient cost management to ensure food products remain affordable for the people, especially the B40 group." },
                            { t: "Community Empowerment", d: "Elevating living standards through strategic training, entrepreneurial opportunities, and humanitarian initiatives." }
                        ].map((m, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-black/60 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 hover:border-red-600/60 transition-all group shadow-xl"
                            >
                                <h3 className="text-red-500 font-black mb-3 uppercase text-[9px] tracking-[0.2em]">{`Mission 0${i+1}`}</h3>
                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors leading-tight drop-shadow-sm">{m.t}</h4>
                                {/* Teks ditukar ke putih pudar sikit (white/90) supaya nampak beza tajuk dan isi */}
                                <p className="text-white/90 text-xs leading-relaxed font-medium">{m.d}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* BOX 3: OPERATING INFO */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-black/50 backdrop-blur-xl p-10 rounded-[3rem] border border-red-700/40 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl"
                    >
                        <div className="text-center md:text-left">
                            <h3 className="text-white font-black text-2xl uppercase tracking-tighter drop-shadow-md">Operating Info</h3>
                            <p className="text-red-500 text-[10px] mt-1 italic tracking-widest uppercase font-bold drop-shadow-sm">Kuala Lumpur Headquarters</p>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-end gap-10 text-center md:text-right">
                            <div>
                                <p className="text-red-500 font-black text-[9px] uppercase tracking-widest mb-1">Address</p>
                                <p className="text-white text-sm font-bold leading-none drop-shadow-sm">Cheras, KL</p>
                            </div>
                            <div>
                                <p className="text-red-500 font-black text-[9px] uppercase tracking-widest mb-1">Hours</p>
                                <p className="text-white text-sm font-bold leading-none drop-shadow-sm">9AM – 6PM</p>
                            </div>
                            <div>
                                <p className="text-red-500 font-black text-[9px] uppercase tracking-widest mb-1">Contact</p>
                                <p className="text-white text-sm font-bold leading-none drop-shadow-sm">+6011 6222 0061</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

About.layout = page => <AuthenticatedLayout children={page} />;