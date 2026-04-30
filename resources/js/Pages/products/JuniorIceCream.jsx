import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react'; 
import { useState, useEffect } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';

export default function JuniorIceCream() {
    const { auth } = usePage().props; // Untuk check Admin (Delete button)
    // 1. STATE UNTUK CONTROL TAB
    const [activeTab, setActiveTab] = useState('about');

    // --- STATE UNTUK REVIEW ---
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newReview, setNewReview] = useState({ name: '', email: '', rating: 5, comment: '' });
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwz1K0opvn8n_Xpg4ejzLEb3MKGoGMpCg2KNBeC6EuS-58qEdG9ojoCKvRV1VbrOXnMxA/exec'; // Pastikan ganti dengan URL Apps Script baru

    // 1. Fungsi Tarik Data dari Sheets
    const fetchReviews = async () => {
        setLoading(true);
        try {
            const res = await fetch(SCRIPT_URL + '?page=JuniorReviews');
            const data = await res.json();
            setReviews(data);
        } catch (err) { console.error("Error fetch:", err); }
        setLoading(false);
    };

    useEffect(() => { fetchReviews(); }, []);

    // 2. Fungsi Hantar Review
    const handleSubmitReview = async (e) => {
        e.preventDefault();
        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify({
                     ...newReview, 
                     type: 'review',
                     sheetName: 'JuniorReviews' 
                    })
            });
            alert("Terima kasih! Review anda telah dihantar.");
            setNewReview({ name: '', email: '', rating: 5, comment: '' });
            setTimeout(() => fetchReviews(), 2000); // Tunggu kejap baru refresh
        } catch (err) { console.error("Error post:", err); }
    };

    // 3. Fungsi Delete (Admin Only)
    const handleDeleteReview = async (rowId) => {
        if (!confirm("Padam review ini dari Google Sheets?")) return;
        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify({ 
                    action: "delete", 
                    rowId: rowId,
                    sheetName: 'JuniorReviews'
                 })
            });
            fetchReviews();
        } catch (err) { console.error("Error delete:", err); }
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `
                nav { background-color: #32CD32 !important; } 
                nav a, nav button { color: white !important; }
                
                .title-3d { 
                    color: white; 
                    -webkit-text-stroke: 2px #15803d; 
                    text-shadow: 4px 4px 0px #15803d, 6px 6px 12px rgba(0,0,0,0.4);
                }

                .glass-card-solid {
                    background-color: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(163, 230, 53, 0.5);
                    border-radius: 2.5rem;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.1);
                }

                .poster-item {
                    border-radius: 20px;
                    transition: all 0.3s ease;
                    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
                }
            `}} />

            <Head title="Aiskrim Junior - Official" />
            
            <div className="relative min-h-screen w-full bg-white overflow-hidden">
                
                {/* 1. BACKGROUND IMAGE (FIXED) */}
                <div 
                    className="fixed inset-0 z-0"
                    style={{ 
                        backgroundImage: "url('/images/headers/junior.png')", 
                        backgroundSize: "cover", 
                        backgroundPosition: "center" 
                    }}
                >
                    <div className="absolute inset-0 bg-white/20"></div>
                </div>

                {/* 2. CONTENT AREA */}
                <div className="relative z-10">
                    
                    {/* Hero Section */}
                    <div className="h-[40vh] flex flex-col items-center justify-center text-center px-6">
                        <motion.img 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            src="/images/logos/junior.png" 
                            className="w-28 h-28 md:w-36 md:h-36 object-contain mb-4 drop-shadow-xl" 
                            alt="Logo" 
                        />
                        <h1 className="text-4xl md:text-6xl font-black title-3d uppercase tracking-wider leading-none text-center">
                            JUNIOR ICE CREAM
                        </h1>
                    </div>

                    {/* TAB NAVIGATION */}
                    <div className="flex justify-center mb-10 px-6">
                        <div className="bg-white/90 backdrop-blur-md p-2 rounded-[2rem] border border-lime-200 shadow-xl flex gap-2">
                            <button 
                                onClick={() => setActiveTab('about')}
                                className={`px-8 py-3 rounded-full font-black text-xs md:text-sm uppercase tracking-widest transition-all ${
                                    activeTab === 'about' 
                                    ? 'bg-lime-600 text-white shadow-lg' 
                                    : 'text-lime-800 hover:bg-lime-100'
                                }`}
                            >
                                🍦 About Brand
                            </button>
                            <button 
                                onClick={() => setActiveTab('products')}
                                className={`px-8 py-3 rounded-full font-black text-xs md:text-sm uppercase tracking-widest transition-all ${
                                    activeTab === 'products' 
                                    ? 'bg-lime-600 text-white shadow-lg' 
                                    : 'text-lime-800 hover:bg-lime-100'
                                }`}
                            >
                                🎁 Packages
                            </button>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto px-6 pb-10">
                        <AnimatePresence mode="wait">
                            {/* TAB 1: ABOUT & LOCATIONS */}
                            {activeTab === 'about' && (
                                <motion.div 
                                    key="about-tab"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8"
                                >
                                 {/* 1. OUR STORY BOX - FIXED NO OVERLAP */}
                                    <div className="bg-lime-600/20 backdrop-blur-2xl rounded-[3.5rem] border border-lime-400/30 p-8 md:p-16 shadow-2xl overflow-hidden relative">
                                        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-start">
                                            
                                            {/* TEXT CONTENT (KIRI) */}
                                            <div className="w-full lg:w-3/5 space-y-6">
                                                <div>
                                                    <h2 className="text-5xl font-black text-lime-900 uppercase tracking-tighter leading-none mb-2">
                                                        OUR <span className="text-lime-600 drop-shadow-sm">STORY</span>
                                                    </h2>
                                                    <p className="text-lime-950 text-xl font-black leading-tight">
                                                        Founded in <span className="bg-lime-400 px-2 py-0.5 rounded-lg shadow-sm">2018</span> by Jainal Arifin.
                                                    </p>
                                                </div>

                                                <div className="space-y-4">
                                                    <p className="text-lime-900 font-bold leading-relaxed text-lg italic opacity-90 border-l-4 border-lime-500 pl-4 bg-white/10 p-4 rounded-r-2xl">
                                                        "Junior Ice Cream specializes in selling 100% homemade ice cream. We do not source from any outside suppliers."
                                                    </p>
                                                    <p className="text-lime-800 text-sm font-medium leading-relaxed">
                                                        The founder brings 25 years of extensive experience in the F&B industry. All processing and storage are done meticulously at home to guarantee quality.
                                                    </p>
                                                    <p className="text-lime-800 text-sm font-medium leading-relaxed">
                                                        Besides our booths, our products are marketed through catering services for various events such as weddings, birthdays, sports days, and office functions.
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            {/* STATS CARDS (KANAN) */}
                                            <div className="w-full lg:w-2/5 flex flex-col gap-4">
                                                <div className="bg-lime-900/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-lime-400/20 text-center shadow-lg">
                                                    <p className="text-5xl font-black text-lime-700">25Y</p>
                                                    <p className="text-[10px] uppercase font-black text-lime-900 tracking-[0.2em] mt-1">F&B Mastery</p>
                                                </div>
                                                <div className="bg-lime-600 p-8 rounded-[2.5rem] shadow-xl text-center">
                                                    <p className="text-5xl font-black text-white">100%</p>
                                                    <p className="text-[10px] uppercase font-black text-white/80 tracking-[0.2em] mt-1">Pure Homemade</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    
                                    {/* VISION & MISSION */}
                                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                                        <div className="bg-lime-600/80 backdrop-blur-xl p-10 rounded-[3rem] border border-lime-400/30 shadow-2xl text-white flex flex-col justify-center">
                                            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-lime-200 mb-2 leading-none">The Vision</p>
                                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter leading-tight text-white">Market Leader</h3>
                                            <p className="font-bold text-lg leading-relaxed opacity-90">Aspiring to be on par with existing ice cream brands in the market.</p>
                                        </div>

                                        <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[3rem] border border-lime-200 shadow-2xl flex flex-col justify-center">
                                            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-lime-600 mb-2 leading-none">The Mission</p>
                                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter leading-tight text-lime-900">Cultivate Growth</h3>
                                            <p className="font-bold text-lg leading-relaxed text-lime-800">Aiming to expand the business and cultivate young entrepreneurs.</p>
                                        </div>
                                    </div>

                                    {/* STRATEGIC OBJECTIVES */}
                                    <div className="bg-lime-900/10 backdrop-blur-2xl p-12 md:p-16 rounded-[4rem] border border-lime-400/20 shadow-xl">
                                        <h3 className="text-2xl font-black text-lime-900 mb-12 uppercase tracking-widest text-center">Strategic Objectives</h3>
                                        <div className="grid md:grid-cols-3 gap-12">
                                            {[
                                                { icon: "🤝", title: "Friendly", desc: "Treating everyone equally regardless of age, race, or religion, with a special priority for children." },
                                                { icon: "✅", title: "JAKIM Halal", desc: "Utilizing ingredients sourced from items that bear the Halal logo verified by JAKIM." },
                                                { icon: "🧼", title: "Cleanliness", desc: "Processing and preparation according to 100% SOPs to maintain absolute hygiene." }
                                            ].map((item, i) => (
                                                <div key={i} className="flex flex-col items-center text-center group">
                                                    <div className="w-20 h-20 bg-white/40 rounded-[2rem] flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:scale-110 group-hover:bg-lime-400 transition-all duration-300">
                                                        {item.icon}
                                                    </div>
                                                    <h4 className="font-black text-lime-950 uppercase text-sm mb-3 tracking-tighter">{item.title}</h4>
                                                    <p className="text-xs text-lime-900 font-bold leading-relaxed opacity-80">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* BRANCHES - DOUBLE HUB EDITION */}
                                    <div className="bg-lime-600/10 backdrop-blur-3xl rounded-[4rem] border border-lime-400/30 p-8 md:p-12 shadow-2xl">
                                        <div className="text-center mb-12">
                                            <h2 className="text-4xl font-black text-lime-900 uppercase tracking-tighter">Locate Our Hubs</h2>
                                            <div className="w-20 h-1.5 bg-lime-500 mx-auto mt-4 rounded-full"></div>
                                        </div>

                                        <div className="grid lg:grid-cols-2 gap-10">
                                            {/* AMPANG BRANCH */}
                                            <motion.div whileHover={{ y: -5 }} className="bg-white/40 p-6 rounded-[3rem] border border-white/60 shadow-xl space-y-5">
                                                <div className="flex justify-between items-start px-2">
                                                    <div>
                                                        <div className="bg-lime-600 text-white px-5 py-1.5 rounded-full inline-block font-black text-[10px] tracking-widest shadow-md">AMPANG BRANCH</div>
                                                        <h3 className="text-xl font-black text-lime-900 mt-3 uppercase">Ampang, Selangor</h3>
                                                    </div>
                                                    <span className="text-3xl">📍</span>
                                                </div>
                                                <div className="h-[250px] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-inner relative group">
                                                    <iframe 
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15934.894383186253!2d101.7500!3d3.1500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc364654b732e7%3A0xf63989c922579b2!2sAmpang%20Jaya%2C%20Selangor!5e0!3m2!1sen!2smy!4v1714240000000!5m2!1sen!2smy" 
                                                        className="absolute inset-0 w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-500" 
                                                        allowFullScreen="" loading="lazy"
                                                    ></iframe>
                                                </div>

                                                <div className="px-2 space-y-4">
                                                    {/* Section Telefon */}
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center text-lime-700">
                                                            <i className="fas fa-phone-alt text-xs"></i>
                                                        </div>
                                                        <div className="space-y-0.5">
                                                            <p className="text-[10px] font-black text-lime-800 uppercase tracking-widest leading-none">Contact En Dzul</p>
                                                            <p className="text-sm font-bold text-lime-900 leading-none">+60 11-1119 0377</p>
                                                        </div>
                                                    </div>

                                                    {/* Section Emel */}
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center text-lime-700">
                                                            <i className="fas fa-envelope text-xs"></i>
                                                        </div>
                                                        <div className="space-y-0.5">
                                                            <p className="text-[10px] font-black text-lime-800 uppercase tracking-widest leading-none">Email Address</p>
                                                            <p className="text-sm font-bold text-lime-900 leading-none">dzulqarnainadzmi@sabaah7.com</p>
                                                        </div>
                                                    </div>

                                                    <div className="border-t border-lime-200/50 w-full pt-4">
                                                        <div className="flex flex-wrap gap-3 items-center">
                                                            
                                                            {/* Instagram Badge */}
                                                            <a 
                                                                href="https://instagram.com/junioricecream_ampang" 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="flex items-center space-x-2 bg-white/80 hover:bg-white px-3 py-1.5 rounded-full shadow-sm border border-lime-100 transition-all duration-300 hover:scale-105 group"
                                                            >
                                                                <i 
                                                                    className="fab fa-instagram text-xl" 
                                                                    style={{
                                                                        background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                                                                        WebkitBackgroundClip: "text",
                                                                        WebkitTextFillColor: "transparent",
                                                                        display: "inline-block"
                                                                    }}
                                                                ></i>
                                                                <span className="text-xs font-bold text-lime-900">@junioricecream_ampang</span>
                                                            </a>

                                                            {/* TikTok Badge */}
                                                            <a 
                                                                href="https://tiktok.com/@junioricecream_ampang" 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="flex items-center space-x-2 bg-white/80 hover:bg-white px-3 py-1.5 rounded-full shadow-sm border border-lime-100 transition-all duration-300 hover:scale-105"
                                                            >
                                                                <i className="fab fa-tiktok text-lg text-black"></i>
                                                                <span className="text-xs font-bold text-lime-900">@junioricecream_ampang</span>
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>                                               
                                       
                                            </motion.div>

                                            {/* IPOH BRANCH */}
                                            <motion.div whileHover={{ y: -5 }} className="bg-white/40 p-6 rounded-[3rem] border border-white/60 shadow-xl space-y-5">
                                                <div className="flex justify-between items-start px-2">
                                                    <div>
                                                        <div className="bg-lime-600 text-white px-5 py-1.5 rounded-full inline-block font-black text-[10px] tracking-widest shadow-md">AMPANG BRANCH</div>
                                                        <h3 className="text-xl font-black text-lime-900 mt-3 uppercase">Ipoh, Selangor</h3>
                                                    </div>
                                                    <span className="text-3xl">📍</span>
                                                </div>
                                                <div className="h-[250px] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-inner relative group">
                                                    <iframe 
                                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15906.417858009137!2d101.0748!3d4.6644!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ca93d5c3b7dc69%3A0xce40de9a0f76d945!2sBulatan%20Sultan%20Azlan%20Shah!5e0!3m2!1sen!2smy!4v1777359074604!5m2!1sen!2smy" 
                                                        className="absolute inset-0 w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-500" 
                                                        allowFullScreen="" loading="lazy"
                                                    ></iframe>
                                                </div>

                                                <div className="px-2 space-y-4">
                                                    {/* Section Telefon */}
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center text-lime-700">
                                                            <i className="fas fa-phone-alt text-xs"></i>
                                                        </div>
                                                        <div className="space-y-0.5">
                                                            <p className="text-[10px] font-black text-lime-800 uppercase tracking-widest leading-none">Contact En Jainal</p>
                                                            <p className="text-sm font-bold text-lime-900 leading-none">+60 16-966 9824</p>
                                                        </div>
                                                    </div>

                                                    {/* Section Emel */}
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center text-lime-700">
                                                            <i className="fas fa-envelope text-xs"></i>
                                                        </div>
                                                        <div className="space-y-0.5">
                                                            <p className="text-[10px] font-black text-lime-800 uppercase tracking-widest leading-none">Email Address</p>
                                                            <p className="text-sm font-bold text-lime-900 leading-none">jainal1407@gmail.com</p>
                                                        </div>
                                                    </div>

                                                    <div className="border-t border-lime-200/50 w-full pt-4">
                                                        <div className="flex flex-wrap gap-3 items-center">
                                                            
                                                            {/* Instagram Badge */}
                                                            <a 
                                                                href="https://instagram.com/junioricecream_ipoh" 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="flex items-center space-x-2 bg-white/80 hover:bg-white px-3 py-1.5 rounded-full shadow-sm border border-lime-100 transition-all duration-300 hover:scale-105 group"
                                                            >
                                                                <i 
                                                                    className="fab fa-instagram text-xl" 
                                                                    style={{
                                                                        background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                                                                        WebkitBackgroundClip: "text",
                                                                        WebkitTextFillColor: "transparent",
                                                                        display: "inline-block"
                                                                    }}
                                                                ></i>
                                                                <span className="text-xs font-bold text-lime-900">@junioricecream_ipoh</span>
                                                            </a>

                                                            {/* TikTok Badge */}
                                                            <a 
                                                                href="https://tiktok.com/@junioricecreamipoh" 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="flex items-center space-x-2 bg-white/80 hover:bg-white px-3 py-1.5 rounded-full shadow-sm border border-lime-100 transition-all duration-300 hover:scale-105"
                                                            >
                                                                <i className="fab fa-tiktok text-lg text-black"></i>
                                                                <span className="text-xs font-bold text-lime-900">@junioricecreamipoh</span>
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>                                               
                                       
                                            </motion.div>                                                                                
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* TAB 2: PRODUCTS & PACKAGES */}
                            {activeTab === 'products' && (
                                <motion.div 
                                    key="products-tab"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-12"
                                >
                                    <div className="text-center">
                                        <h2 className="text-5xl font-black text-lime-900 uppercase tracking-tighter drop-shadow-sm">Event Packages</h2>
                                        <div className="w-32 h-2 bg-lime-500 mx-auto mt-4 rounded-full"></div>
                                    </div>

                                    <div className="flex flex-wrap justify-center gap-10">
                                        {['pakeja.png', 'pakejb.jpg', 'pakejc.png'].map((img, i) => (
                                            <motion.img 
                                                key={i}
                                                whileHover={{ y: -10, rotate: 2 }}
                                                src={`/images/products/${img}`} 
                                                className="poster-item w-full max-w-[300px] shadow-2xl border-8 border-white" 
                                                alt="Package" 
                                            />
                                        ))}
                                    </div>

                                    <div className="flex justify-center">
                                        <img src="/images/products/benefit.png" className="w-full max-w-5xl rounded-[3rem] shadow-2xl border-[12px] border-white" alt="Benefits" />
                                    </div>

                                    <div className="text-center pt-10">
                                        <motion.a 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href="https://wa.me/601111190377" 
                                            className="inline-block bg-lime-600 hover:bg-lime-700 text-white font-black py-6 px-16 rounded-[2rem] text-2xl shadow-xl transition-all uppercase tracking-widest"
                                        >
                                            Book Now 🍦
                                        </motion.a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Divider Minimalis */}
                    <div className="max-w-6xl mx-auto px-6 mt-0">
                        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-lime-400 to-transparent shadow-[0_0_15px_rgba(163,230,53,0.5)]"></div>
                    </div>                  
                    {/* ============================================================ */}
                    {/* SECTION TESTIMONY & REVIEW - WRAPPED VERSION */}
                    {/* ============================================================ */}
                    <div className="max-w-6xl mx-auto px-6 pb-24 mt-10">
                        {/* KOTAK BESAR YANG BALUT SEMUA (Title + Grid) */}
                        <div className="bg-lime-600/10 backdrop-blur-3xl rounded-[4rem] border border-lime-400/30 p-8 md:p-16 shadow-2xl">
                            
                            {/* TITLE AREA (Dah dalam kotak) */}
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-black text-lime-900 uppercase tracking-tighter">Reviews and Testimony</h2>
                                <div className="w-20 h-1.5 bg-lime-500 mx-auto mt-4 rounded-full"></div>
                            </div>

                            {/* GRID AREA (Form & List) */}
                            <div className="grid lg:grid-cols-3 gap-12">
                                
                                {/* FORM SIDE */}
                                <div className="lg:col-span-1">
                                    <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[3rem] border border-lime-200 shadow-xl sticky top-24">
                                        <h3 className="text-xl font-black text-lime-900 mb-6 uppercase tracking-tight">Leave a Review</h3>
                                        <form onSubmit={handleSubmitReview} className="space-y-4">
                                            <input type="text" placeholder="Your Name" required className="w-full bg-lime-600/70 border-lime-200 rounded-2xl p-4 text-sm font-bold shadow-inner focus:ring-lime-500" 
                                                value={newReview.name} onChange={e => setNewReview({...newReview, name: e.target.value})} />
                                            
                                            <select className="w-full bg-lime-600/70 border-lime-200 rounded-2xl p-4 text-sm font-bold shadow-inner"
                                                value={newReview.rating} onChange={e => setNewReview({...newReview, rating: e.target.value})}>
                                                <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
                                                <option value="4">⭐⭐⭐⭐ (Great)</option>
                                                <option value="3">⭐⭐⭐ (Average)</option>
                                                <option value="2">⭐⭐ (Poor)</option>
                                                <option value="1">⭐ (Terrible)</option>
                                            </select>

                                            <textarea placeholder="Tell us about your experience..." required rows="4" className="w-full bg-lime-600/70 border-lime-200 rounded-2xl p-4 text-sm font-bold shadow-inner resize-none"
                                                value={newReview.comment} onChange={e => setNewReview({...newReview, comment: e.target.value})}></textarea>
                                            
                                            <button type="submit" className="w-full bg-lime-600 hover:bg-lime-700 text-white font-black py-4 rounded-2xl shadow-xl transition-all uppercase tracking-widest text-xs">
                                                Post Testimony 🍦
                                            </button>
                                        </form>
                                    </div>
                                </div>

                                {/* DISPLAY SIDE */}
                                <div className="lg:col-span-2 space-y-6">
                                    {loading ? (
                                        <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-lime-600"></div></div>
                                    ) : reviews.length > 0 ? (
                                        reviews.map((rev) => (
                                            <motion.div key={rev.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/60 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white shadow-lg relative group overflow-hidden">
                                                <div className="flex justify-between items-start relative z-10">
                                                    <div>
                                                        <div className="flex text-amber-400 mb-2">{"★".repeat(rev.rating)}</div>
                                                        <h4 className="font-black text-lime-900 uppercase text-sm tracking-tight">{rev.name}</h4>
                                                        <p className="text-[10px] text-lime-700 font-black uppercase mt-1 opacity-70">{new Date(rev.date).toLocaleDateString()}</p>
                                                    </div>
                                                    {auth.user && (
                                                        <button onClick={() => handleDeleteReview(rev.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all shadow-lg">
                                                            Delete
                                                        </button>
                                                    )}
                                                </div>
                                                <p className="mt-4 text-lime-900 font-bold leading-relaxed italic text-sm md:text-base relative z-10">"{rev.comment}"</p>
                                                <div className="absolute -right-4 -bottom-4 text-lime-500/10 text-8xl font-black italic select-none">"</div>
                                            </motion.div>
                                        ))
                                    ) : (
                                        /* KOTAK NO REVIEWS YANG LEBIH KEMAS */
                                        <div className="flex items-center justify-center h-full min-h-[300px] bg-white/30 rounded-[3rem] border-2 border-dashed border-lime-200">
                                            <p className="text-lime-600 font-black uppercase tracking-widest text-xs text-center px-10">
                                                No reviews yet. <br/><span className="opacity-60">Be the first to share your experience!</span>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

JuniorIceCream.layout = page => <AuthenticatedLayout children={page} />;