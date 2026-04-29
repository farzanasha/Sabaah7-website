import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Membership() {
    // 1. Simpan data dalam state
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', address: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault(); // Stop page dari refresh
        
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz-s9Grvj7VaRK3_JCRItJ1r4hCIbuO2kavsQF1YKSDszgNjjuB2lUWBgsU0_8Hvuiu/exec'; // Pastikan ganti dengan URL Apps Script baru

        try {
            // Hantar ke Google Sheets
            await fetch(SCRIPT_URL , {
                method: 'POST',
                mode: 'no-cors', 
                body: JSON.stringify({
                    ...formData,
                    sheetName: 'Membership'
                })
            });

            // 2. Buka WhatsApp
            const waText = `New Team Application! 🍦\n\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}`;
            window.open(`https://wa.me/601111190377?text=${encodeURIComponent(waText)}`, '_blank');
            
            alert('Application recorded! WhatsApp will open now.');
            
            // Reset form lepas submit
            setFormData({ name: '', email: '', phone: '', address: '' });

        } catch (error) {
            console.error("Error!", error);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="relative min-h-screen w-full bg-black overflow-x-hidden">
            <Head title="Team Program - Sabaah7" />
            
            <div 
                className="fixed inset-0 z-0 opacity-40"
                style={{ 
                    backgroundImage: "url('/images/membership2.png')", 
                    backgroundSize: "cover", 
                    backgroundPosition: "center" 
                }}
            >
                {/* <div className="absolute inset-0 bg-gradient-to-b 
                from-black via-transparent to-black"></div> */}
            </div>

            <div className="relative z-10 py-16 px-6">
                
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-red-600 font-black tracking-[0.4em] uppercase text-xs">Join Our Empire</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mt-2 tracking-tighter uppercase leading-none">
                            JOIN OUR <span className="text-red-600">GROWING </span> FAMILY
                        </h1>
                        <p className="mt-6 text-gray-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                            Unlock exclusive wholesale pricing and start your business journey with the Sabaah7 ecosystem today.
                        </p>
                        <div className="w-24 h-1.5 bg-red-600 mx-auto mt-8 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)]"></div>
                    </motion.div>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { title: "Exclusive Team Rates", desc: "Enjoy significantly higher profit margins compared to standard retail buyers.", icon: "💰" },
                                { title: "Marketing & Support", desc: "You are not alone. Our expert marketing team provides the tools and training you need.", icon: "🚀" },
                                { title: "High-Demand Brands", desc: "Leverage established names like Junior Ice Cream & Mee Lantak that customers already love.", icon: "🔥" }
                            ].map((item, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-md p-6 rounded-[2rem] border border-white/10 flex gap-6 group hover:bg-red-600/5 transition-all duration-300">
                                    <div className="text-4xl bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl shadow-inner">{item.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-white font-black uppercase text-lg tracking-tight group-hover:text-red-500 transition-colors">{item.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-red-950/30 p-8 rounded-[2.5rem] border border-red-600/20 backdrop-blur-sm">
                            <h4 className="text-red-500 font-black mb-2 uppercase text-xs tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                                Privacy Assurance
                            </h4>
                            <p className="text-gray-400 text-xs leading-relaxed font-medium">
                                We value your security. This form only collects basic contact information. We **DO NOT** share your information with 3rd party.
                            </p>
                        </div>
                    </motion.div>

                    {/* --- KEMASKINI BORANG DI SINI --- */}
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/[0.07] backdrop-blur-3xl p-8 md:p-12 rounded-[3.5rem] border border-white/20 shadow-2xl">
                        <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Apply <span className="text-red-600">Now</span></h2>
                        <p className="text-gray-400 text-sm mb-8 font-medium">Fill in your details and our team will contact you shortly.</p>
                        
                        {/* 3. SAMBUNGKAN handleSubmit DI SINI */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="group">
                                <label className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] ml-4 mb-2 block group-focus-within:text-red-500 transition-colors">Full Name</label>
                                <input 
                                    required
                                    type="text" 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    placeholder="e.g. Adam Smith" 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all outline-none placeholder:text-gray-700 font-medium" 
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group">
                                    <label className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] ml-4 mb-2 block group-focus-within:text-red-500 transition-colors">Email Address</label>
                                    <input 
                                        required
                                        type="email" 
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        placeholder="name@example.com" 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-red-600 transition-all outline-none placeholder:text-gray-700 font-medium" 
                                    />
                                </div>
                                <div className="group">
                                    <label className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] ml-4 mb-2 block group-focus-within:text-red-500 transition-colors">Phone (WhatsApp)</label>
                                    <input 
                                        required
                                        type="text" 
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        placeholder="+6012-345 6789" 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-red-600 transition-all outline-none placeholder:text-gray-700 font-medium" 
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] ml-4 mb-2 block group-focus-within:text-red-500 transition-colors">Residential Address</label>
                                <textarea 
                                    required
                                    rows="3" 
                                    value={formData.address}
                                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                                    placeholder="Your full address..." 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-red-600 transition-all outline-none resize-none placeholder:text-gray-700 font-medium"
                                ></textarea>
                            </div>

                            {/* 4. TUKAR BUTTON JADI type="submit" */}
                            <motion.button 
                                type="submit"
                                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-sm shadow-xl shadow-red-600/10 mt-4 transition-all"
                            >
                                Submit Application
                            </motion.button>
                            
                            <p className="text-center text-[10px] text-gray-600 uppercase font-black tracking-widest mt-6">
                                A Sabaah7 representative will reach out within 24 hours.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

Membership.layout = page => <AuthenticatedLayout children={page} />;