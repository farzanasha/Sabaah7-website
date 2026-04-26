import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { motion } from 'framer-motion';

export default function ProductDetail({ data }) {
    // Jika data belum sampai, jangan render apa-apa untuk elak error
    if (!data) return null;

    // Setting animasi yang konsisten untuk digunakan semula
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 }, // Trigger bila 30% elemen masuk skrin
        transition: { duration: 0.8, ease: "easeOut" }
    };

    return (
        <div className="pb-20">
            {/* HERO HEADER */}
            <div 
                className="relative h-[50vh] flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: `url('${data.heroImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 px-6">
                    <motion.img 
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        src={data.logo} 
                        className="h-32 mx-auto mb-4 drop-shadow-2xl"
                    />
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold uppercase tracking-widest"
                    >
                        {data.name}
                    </motion.h1>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-16 space-y-20">
                
                {/* LATAR BELAKANG */}
                <motion.div 
                    {...fadeInUp}
                    className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl"
                >
                    <h2 className="text-3xl font-bold text-white mb-6 border-b border-red-700 pb-2 inline-block">Latar Belakang</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">{data.description}</p>
                </motion.div>

                {/* VISI & MISI */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* VISI */}
                    <motion.div 
                        {...fadeInUp}
                        className="bg-red-900/20 p-8 rounded-3xl border border-red-700/30"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">🎯 Visi</h3>
                        <p className="text-gray-300">{data.vision}</p>
                    </motion.div>

                    {/* MISI */}
                    <motion.div 
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.2 }} // Delay sikit supaya nampak flow
                        className="bg-red-900/20 p-8 rounded-3xl border border-red-700/30"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">🚀 Misi</h3>
                        <p className="text-gray-300">{data.mission}</p>
                    </motion.div>
                </div>

                {/* PAKEJ PRODUK */}
                <div>
                    <motion.h2 
                        {...fadeInUp}
                        className="text-3xl font-bold text-center text-white mb-12"
                    >
                        Pakej & Produk Kami
                    </motion.h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.packages.map((item, index) => (
                            <motion.div 
                                key={index} 
                                {...fadeInUp}
                                transition={{ ...fadeInUp.transition, delay: index * 0.1 }} // Muncul satu per satu
                                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group shadow-lg"
                            >
                                <div className="h-56 bg-gray-800 overflow-hidden">
                                    <img 
                                        src={item.image} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        alt={item.title}
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                                    <p className="text-red-400 font-bold text-lg">{item.price}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* WHATSAPP BUTTON */}
                <motion.div 
                    {...fadeInUp}
                    className="flex justify-center pt-10"
                >
                    <a 
                        href={`https://wa.me/${data.whatsappNumber}?text=Saya berminat dengan produk ${data.name}`}
                        target="_blank"
                        className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg transition-all flex items-center gap-3 active:scale-95"
                    >
                        ORDER NOW VIA WHATSAPP
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

ProductDetail.layout = page => <AuthenticatedLayout children={page} />;