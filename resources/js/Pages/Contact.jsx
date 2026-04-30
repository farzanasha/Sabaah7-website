import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <div className="relative min-h-screen w-full bg-[#111] overflow-x-hidden">
            
            {/* 1. BACKGROUND IMAGE (FIXED) */}
            <div 
                className="fixed inset-0 z-0 opacity-50"
                style={{ 
                    backgroundImage: "url('/images/contact.jpg')", 
                    backgroundSize: "cover", 
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                {/* Overlay Gradient: Kita guna warna grey/gelap sikit kat bawah je untuk bagi teks putih nampak */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-[#111]"></div>
            </div>

            {/* 2. CONTENT AREA */}
            <div className="relative z-10 pb-20">
                
                {/* HERO SECTION */}
                <div className="h-[40vh] flex flex-col items-center justify-center text-white text-center px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }} 
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-red-500 font-black tracking-[0.3em] uppercase text-xs md:text-sm drop-shadow-md">Connect With Us</span>
                        <h1 className="text-5xl md:text-7xl font-black drop-shadow-2xl mt-2 tracking-tighter uppercase leading-none text-white">
                            CONTACT <span className="text-red-600">US</span>
                        </h1>
                        <div className="w-24 h-1.5 bg-red-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
                    </motion.div>
                </div>

                {/* CONTACT CONTENT */}
                <div className="py-10 px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                        
                        {/* LEFT SIDE: LIGHT GLASSMORPHISM (PUTIH/GREY LUTSINAR) */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/10 backdrop-blur-3xl p-10 md:p-12 rounded-[3.5rem] border border-white/20 shadow-2xl flex flex-col justify-between"
                        >
                            <div>
                                <h2 className="text-4xl font-black mb-12 text-white uppercase tracking-tighter leading-none">
                                    General <br/><span className="text-red-600 text-5xl font-black">Enquiries</span>
                                </h2>
                                
                                <div className="space-y-10 text-white">
                                    <div className="flex flex-col gap-2 group">
                                        <p className="font-bold text-red-500 uppercase tracking-widest text-[10px] flex items-center gap-2">
                                            <span>📞</span> Call or WhatsApp
                                        </p>
                                        <div className="space-y-2 text-lg font-bold">
                                            <a href="https://wa.me/601111190377?text=Hi Mr Dzulqarnain, I've got inquiry about Sabaah7" className="hover:text-red-400 transition cursor-default">+60 11-1119 0377 <span className="text-white/50 text-sm font-medium">(Dzulqarnain Adzmi)<br></br></span></a>
                                            <a href="https://wa.me/601165139295?text=Hi Mr Prabu, I've got inquiry about Sabaah7" className="hover:text-red-400 transition cursor-default">+60 11-6513 9295 <span className="text-white/50 text-sm font-medium">(Prabu Daymudoo)</span></a>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <p className="font-bold text-red-500 uppercase tracking-widest text-[10px] flex items-center gap-2">
                                            <span>📧</span> Corporate Email
                                        </p>
                                        <div className="space-y-2 text-lg font-bold">
                                            <a href="mailto:dzulqarnain.adzmi@sabaah7.com" className="block hover:text-red-400 transition underline decoration-red-600/30">dzulqarnain.adzmi@sabaah7.com</a>
                                            <a href="mailto:prabu.daymudoo@sabaah7.com" className="block hover:text-red-400 transition underline decoration-red-600/30">prabu.daymudoo@sabaah7.com</a>
                                        </div>
                                    </div>

                                    {/* <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
                                        <p className="font-bold text-white/40 uppercase tracking-widest text-[10px]">Follow Our Journey</p>
                                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/70 text-sm font-black uppercase tracking-tight">
                                            <a href="#" className="hover:text-red-500 transition-all">Facebook</a>
                                            <a href="#" className="hover:text-red-500 transition-all">Instagram</a>
                                            <a href="#" className="hover:text-red-500 transition-all">TikTok</a>
                                            <a href="#" className="hover:text-red-500 transition-all">LinkedIn</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT SIDE: LIGHT GLASSMORPHISM (PUTIH/GREY LUTSINAR) */}
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/10 backdrop-blur-3xl p-10 md:p-12 rounded-[3.5rem] border border-white/20 shadow-2xl flex flex-col"
                        >
                            <h3 className="text-3xl font-black mb-3 text-white uppercase tracking-tighter leading-none">
                                Our <span className="text-red-600">HQ</span> Location
                            </h3>
                            <p className="text-white/70 mb-8 text-sm leading-relaxed font-medium">
                                Sabaah7 Headquarters is based in Kuala Lumpur, managing our integrated ecosystem across Malaysia.
                            </p>
                            
                            <div className="w-full flex-grow min-h-[350px] rounded-[2.5rem] overflow-hidden border border-white/20 bg-white/5 shadow-inner relative">
                                <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15936.433833285915!2d101.70014295!3d3.06431985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc35661f059349%3A0x28054044f128c7f!2sCheras%2C%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1714234567890!5m2!1sen!2smy" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy"
                            ></iframe>
                                
                                <div className="absolute bottom-4 left-4 bg-red-600 text-white px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase flex items-center gap-2 z-10 shadow-lg">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                    Cheras, Kuala Lumpur
                                </div>
                            </div>

                            <a 
                                href="https://maps.google.com" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 bg-white text-black py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all text-center shadow-xl active:scale-95"
                            >
                                Open Exact Location in Google Maps
                            </a>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
}

Contact.layout = page => <AuthenticatedLayout children={page} />;