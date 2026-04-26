import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div>
            <div className="relative h-[40vh] flex items-center justify-center text-white text-center"
                style={{ backgroundImage: "url('/images/about.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative z-10">
                    <h1 className="text-5xl font-bold drop-shadow-lg">ABOUT US</h1>
                    <p className="mt-2 text-lg text-gray-200">Get to know Sabaah7</p>
                </motion.div>
            </div>

            <div className="py-20 px-6 flex justify-center">
                <motion.div 
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl w-full bg-white/5 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Who We Are</h2>
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>Sabaah7 is a headquarters company managing multiple business operations including food services, agriculture, tailoring, and livestock. Our mission is to develop sustainable businesses under one strong brand while supporting local community growth.</p>
                        <p>We focus on building structured business systems, improving operations, and creating long-term value across all subsidiaries under Sabaah7.</p>
                    </div>

                    <div className="mt-10 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
                        {['Vision', 'Mission', 'Impact'].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 + (i * 0.2) }}>
                                <p className="font-bold text-white mb-1">{item}</p>
                                <p>{item === 'Vision' ? 'Global Integrated Ecosystem' : item === 'Mission' ? 'Sustainable Growth' : 'Community Empowerment'}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
About.layout = page => <AuthenticatedLayout children={page} />;