import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <div className="min-h-screen">
            {/* HERO SECTION */}
            <div className="relative h-[40vh] flex items-center justify-center text-white text-center"
                style={{ backgroundImage: "url('/images/contact.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10">
                    <h1 className="text-5xl font-bold drop-shadow-lg">CONTACT US</h1>
                    <p className="mt-2 text-lg opacity-90">Get in touch with Sabaah7</p>
                </motion.div>
            </div>

            <div className="py-16 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* LEFT SIDE: CONTACT INFORMATION */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/20 shadow-xl"
                    >
                        <h2 className="text-4xl font-bold mb-10 text-white">Contact Information</h2>
                        
                        <div className="space-y-8 text-gray-200">
                            {/* PHONE */}
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-white flex items-center gap-3 text-xl">
                                    <span className="text-pink-500">📞</span> Phone
                                </p>
                                <div className="pl-9 space-y-1 opacity-90 text-lg">
                                    <p>+60 11-1119 0377 (Encik Dzulqarnain Adzmi)</p>
                                    <p>+60 11-6513 9295 (Encik Prabu Daymudoo)</p>
                                </div>
                            </div>

                            {/* EMAIL */}
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-white flex items-center gap-3 text-xl">
                                    <span className="text-blue-400">📧</span> Email
                                </p>
                                <div className="pl-9 space-y-1 opacity-90 text-lg">
                                    <p className="hover:text-blue-300 transition cursor-pointer">dzulqarnain.adzmi@sabaah7.com</p>
                                    <p className="hover:text-blue-300 transition cursor-pointer">prabu.daymudoo@sabaah7.com</p>
                                </div>
                            </div>

                            {/* ADDRESS */}
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-white flex items-center gap-3 text-xl">
                                    <span className="text-pink-500">📍</span> Address
                                </p>
                                <div className="pl-9">
                                    <a 
                                        href="https://maps.google.com" 
                                        target="_blank" 
                                        className="text-red-400 hover:text-red-300 underline transition text-lg font-medium"
                                    >
                                        Open Location in Google Maps
                                    </a>
                                </div>
                            </div>

                            {/* SOCIAL MEDIA */}
                            <div className="pt-8 border-t border-white/10">
                                <h3 className="font-bold text-white mb-4 text-xl">Social Media</h3>
                                <div className="flex gap-6 text-gray-300 text-lg">
                                    <a href="#" className="hover:text-white transition-all hover:scale-110">Facebook</a>
                                    <a href="#" className="hover:text-white transition-all hover:scale-110">Instagram</a>
                                    <a href="#" className="hover:text-white transition-all hover:scale-110">TikTok</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: MAP PREVIEW */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/20 shadow-xl flex flex-col"
                    >
                        <h3 className="text-3xl font-bold mb-6 text-white">Our Headquarters</h3>
                        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                            Sabaah7 HQ is located in Malaysia and manages multiple business operations including food, agriculture, tailoring, and livestock.
                        </p>
                        
                        <div className="w-full flex-grow min-h-[350px] rounded-3xl overflow-hidden border border-white/10 bg-black/20 shadow-inner">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15935.123456789!2d101.68!3d3.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDgnMTQuNCJOIDEwMcKwNDAnNDguMCJF!5e0!3m2!1sen!2smy!4v1234567890" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) opacity(0.8)' }} 
                                allowFullScreen="" 
                                loading="lazy"
                            ></iframe>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

Contact.layout = page => <AuthenticatedLayout children={page} />;