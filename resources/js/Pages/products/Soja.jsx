import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react'; // Ditambah usePage di sini
import { useState, useEffect } from 'react'; // Digabungkan import useState & useEffect
import { motion, AnimatePresence } from 'framer-motion';

export default function Soja() {
    // 1. STATE UNTUK CONTROL TAB
    const { auth } = usePage().props; // Untuk check Admin (Delete button)
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
            const res = await fetch(SCRIPT_URL + '?page=WarungSojaReviews');
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
                     sheetName: 'WarungSojaReviews' 
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
                    sheetName: 'WarungSojaReviews'
                 })
            });
            fetchReviews();
        } catch (err) { console.error("Error delete:", err); }
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `
                nav { background-color: #1a2a3a !important; } 
                nav a, nav button { color: #e5ba73 !important; }
                
                .title-3d-soja { 
                    color: white; 
                    -webkit-text-stroke: 1px #e5ba73; 
                    text-shadow: 4px 4px 0px #1a110a, 6px 6px 15px rgba(0,0,0,0.5);
                }

                .glass-card-soja {
                    background-color: rgba(26, 42, 58, 0.9);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(229, 186, 115, 0.3);
                    border-radius: 2.5rem;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
                }

                .poster-item {
                    border-radius: 20px;
                    transition: all 0.3s ease;
                    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
                }
            `}} />

            <Head title="Warong Soja - Official" />
            
            <div className="relative min-h-screen w-full bg-[#1a110a] overflow-hidden">
                
                {/* 1. BACKGROUND IMAGE (FIXED) */}
                <div 
                    className="fixed inset-0 z-0"
                    style={{ 
                        backgroundImage: "url('/images/products/background/soja.png')", 
                        backgroundSize: "cover", 
                        backgroundPosition: "center" 
                    }}
                >
                    {/* OVERLAY HITAM DISINI - Ditingkatkan ke black/70 untuk readability */}
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
                </div>

                {/* 2. CONTENT AREA */}
                <div className="relative z-10">
                    
                    {/* Hero Section */}
                    <div className="h-[40vh] flex flex-col items-center justify-center text-center px-6 pt-10">
                        <motion.img 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            src="/images/logos/soja.png" 
                            className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4 drop-shadow-2xl" 
                            alt="Warong Soja Logo" 
                        />
                        <h1 className="text-4xl md:text-6xl font-black title-3d-soja uppercase tracking-tighter leading-none text-center">
                            WARONG SOJA
                        </h1>
                        <p className="mt-2 text-[#e5ba73] font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase">Authentic Flavor • Soldier's Legacy</p>
                    </div>

                    {/* TAB NAVIGATION */}
                    <div className="flex justify-center gap-2 mt-10 mb-6 relative z-10">
                        
                        <div className="bg-[#1a2a3a]/90 backdrop-blur-md p-2 rounded-[2rem] border border-[#e5ba73]/30 shadow-xl flex gap-2">
                            <button
                                onClick={() => setActiveTab('about')}
                                className={`flex items-center gap-2 px-8 py-3 rounded-full font-black text-sm transition-all duration-300 shadow-xl border ${
                                    activeTab === 'about'
                                        ? 'bg-white text-black border-white scale-105 shadow-[0_0_25px_rgba(255,255,255,0.4)]'
                                        : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                                }`}
                            >
                                <span className="text-lg">🏠</span>
                                <span className={activeTab === 'about' ? 'text-[#1a2a3a]' : 'text-white'}>ABOUT US</span>
                            </button>

                            {/* TAB: PACKAGES */}
                            <button
                                onClick={() => setActiveTab('products')}
                                className={`flex items-center gap-2 px-8 py-3 rounded-full font-black text-sm transition-all duration-300 shadow-xl border ${
                                    activeTab === 'products'
                                        ? 'bg-white text-black border-white scale-105 shadow-[0_0_25px_rgba(255,255,255,0.4)]'
                                        : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                                }`}
                            >
                                <span className="text-lg">🎁</span>
                                <span className={activeTab === 'products' ? 'text-[#1a2a3a]' : 'text-white'}>PACKAGES</span>
                            </button>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto px-6 pb-24">
                        <AnimatePresence mode="wait">
                            
                            {activeTab === 'about' && (
                                <motion.div 
                                    key="about-tab"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8"
                                >
                                    {/* OUR STORY BOX */}
                                    <div className="bg-[#1a2a3a]/40 backdrop-blur-2xl rounded-[3.5rem] border border-[#e5ba73]/20 p-8 md:p-16 shadow-2xl overflow-hidden relative">
                                        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-start">
                                            
                                            {/* TEXT CONTENT (KIRI) */}
                                            <div className="w-full lg:w-3/5 space-y-6">
                                                <div>
                                                    <h2 className="text-5xl font-black text-[#e5ba73] uppercase tracking-tighter leading-none mb-2">
                                                        OUR <span className="text-white drop-shadow-sm">STORY</span>
                                                    </h2>
                                                    <p className="text-white text-xl font-black leading-tight">
                                                        Inspired by <span className="bg-[#e5ba73] text-[#1a110a] px-2 py-0.5 rounded-lg shadow-sm">Nora binti Hasri</span>.
                                                    </p>
                                                </div>

                                                <div className="space-y-4">
                                                    <p className="text-white font-bold leading-relaxed text-lg italic opacity-90 border-l-4 border-[#e5ba73] pl-4 bg-white/5 p-4 rounded-r-2xl text-justify">
                                                        "Warung Soja was inspired by the story of a housewife who tirelessly prepared food for her army soldier husband, ensuring he stayed healthy and energetic to serve the country."
                                                    </p>
                                                    <p className="text-white/80 text-sm font-medium leading-relaxed text-justify">
                                                        The name "Soja" is the classic local pronunciation of "soldier". Driven by her passion for cooking and inspired by her father, who was also a warung vendor, she decided to open her own warung.
                                                    </p>
                                                    <p className="text-white/80 text-sm font-medium leading-relaxed text-justify">
                                                        Our identity features a soldier's mess tin and palm oil fronds, representing our original establishment within a palm oil estate in Melaka.
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            {/* STATS CARDS (KANAN) */}
                                            <div className="w-full lg:w-2/5 flex flex-col gap-4">
                                                <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 text-center shadow-lg">
                                                    <p className="text-5xl font-black text-[#e5ba73]">EST.</p>
                                                    <p className="text-3xl font-black text-white mt-1">2026</p>
                                                </div>
                                                <div className="bg-[#e5ba73] p-8 rounded-[2.5rem] shadow-xl text-center">
                                                    <p className="text-[10px] uppercase font-black text-[#1a110a] tracking-[0.2em] mb-1">Inspiration</p>
                                                    <p className="text-2xl font-black text-[#1a110a]">NORA HASRI</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    
                                    {/* VISION & MISSION */}
                                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                                        <div className="bg-[#e5ba73]/90 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20 shadow-2xl text-[#1a110a] flex flex-col justify-center">
                                            <p className="text-[10px] font-black tracking-[0.4em] uppercase opacity-70 mb-2 leading-none">The Vision</p>
                                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter leading-tight">Global Leader</h3>
                                            <p className="font-bold text-lg leading-relaxed">Transforming local heritage dishes into an internationally recognized healthy dietary lifestyle.</p>
                                        </div>

                                        <div className="bg-[#1a2a3a]/80 backdrop-blur-xl p-10 rounded-[3rem] border border-[#e5ba73]/30 shadow-2xl flex flex-col justify-center text-white">
                                            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-[#e5ba73] mb-2 leading-none">The Mission</p>
                                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter leading-tight text-[#e5ba73]">Service & Fairness</h3>
                                            <ul className="text-sm font-bold space-y-2 opacity-90">
                                                <li>• Culinary Excellence with premium ingredients.</li>
                                                <li>• Economic Fairness with competitive pricing.</li>
                                                <li>• Service Integrity for superior experience.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* STRATEGIC OBJECTIVES */}
                                    <div className="bg-white/5 backdrop-blur-2xl p-12 md:p-16 rounded-[4rem] border border-white/10 shadow-xl text-white">
                                        <h3 className="text-2xl font-black text-[#e5ba73] mb-12 uppercase tracking-widest text-center">Strategic Objectives</h3>
                                        <div className="grid md:grid-cols-3 gap-12">
                                            {[
                                                { icon: "🌐", title: "Expansion", desc: "Building a strong supply chain to support overseas market expansion by 2028." },
                                                { icon: "📜", title: "Certification", desc: "Obtaining global food quality certification (HACCP/ISO) for food safety standards." },
                                                { icon: "🥗", title: "Awareness", desc: "Increasing awareness of healthy eating through low-calorie local menu innovations." }
                                            ].map((item, i) => (
                                                <div key={i} className="flex flex-col items-center text-center group">
                                                    <div className="w-20 h-20 bg-[#1a2a3a] rounded-[2rem] border border-[#e5ba73]/30 flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:scale-110 group-hover:bg-[#e5ba73] transition-all duration-300">
                                                        {item.icon}
                                                    </div>
                                                    <h4 className="font-black text-[#e5ba73] uppercase text-sm mb-3 tracking-tighter">{item.title}</h4>
                                                    <p className="text-xs text-white/70 font-medium leading-relaxed italic">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* OPERATING INFO & MAP */}
<div className="bg-[#1a2a3a]/90 backdrop-blur-3xl rounded-[4rem] border border-[#e5ba73]/30 overflow-hidden shadow-2xl">
    <div className="grid lg:grid-cols-2">
        {/* INFO KIRI */}
        <div className="p-8 md:p-12 space-y-8">
            <div>
                <h2 className="text-4xl font-black text-[#e5ba73] uppercase tracking-tighter">Locate Us</h2>
                <div className="w-20 h-1.5 bg-[#e5ba73] mt-4 rounded-full"></div>
            </div>

            <div className="space-y-6">
                {/* ALAMAT */}
                <div className="flex items-start space-x-4">
                    <i className="fas fa-map-marker-alt text-2xl text-[#e5ba73] mt-1"></i>
                    <p className="text-white/80 text-sm font-bold leading-relaxed italic">
                        Lot 2421, Jalan Pokok Tanjung, Batu 19 Kg Londang, 78300 Masjid Tanah, Melaka.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* OPERATING HOURS */}
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-clock text-[#e5ba73]"></i>
                            <p className="text-[10px] font-black text-[#e5ba73] uppercase tracking-widest">Operating Hours</p>
                        </div>
                        <p className="text-white font-bold text-sm pl-6">7:00 AM – 12:00 PM</p>
                    </div>

                    {/* CONTACT PIC */}
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-phone-alt text-[#e5ba73]"></i>
                            <p className="text-[10px] font-black text-[#e5ba73] uppercase tracking-widest">Contact PIC</p>
                        </div>
                        <p className="text-white font-bold text-sm pl-6">Pn Zubaidah (+60 17-833 2301)</p>
                    </div>
                </div>

                {/* EMEL - DITAMBAH DI SINI */}
                <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-envelope text-[#e5ba73]"></i>
                        <p className="text-[10px] font-black text-[#e5ba73] uppercase tracking-widest">Email Address</p>
                    </div>
                    <p className="text-white font-bold text-sm pl-6 break-all">zubaidahadzmi.sabaah7@gmail.com</p>
                </div>

                {/* SOSIAL MEDIA BUTTONS */}
                <div className="flex flex-wrap gap-3 pt-4">
                    <a 
                        href="https://www.facebook.com/people/Warong-Soja/" 
                        target="_blank" 
                        className="flex items-center gap-2 bg-white/5 hover:bg-[#e5ba73] text-[#e5ba73] hover:text-[#1a110a] px-4 py-2 rounded-full border border-[#e5ba73]/30 text-[10px] md:text-xs font-black transition-all group"
                    >
                        <i className="fab fa-facebook-f"></i>
                        <span>Warong Soja</span>
                    </a>

                    <a 
                        href="https://instagram.com/warongsoja" 
                        target="_blank" 
                        className="flex items-center gap-2 bg-white/5 hover:bg-[#e5ba73] text-[#e5ba73] hover:text-[#1a110a] px-4 py-2 rounded-full border border-[#e5ba73]/30 text-[10px] md:text-xs font-black transition-all group"
                    >
                        <i className="fab fa-instagram"></i>
                        <span>@warongsoja</span>
                    </a>

                    <a 
                        href="https://tiktok.com/@warongsoja" 
                        target="_blank" 
                        className="flex items-center gap-2 bg-white/5 hover:bg-[#e5ba73] text-[#e5ba73] hover:text-[#1a110a] px-4 py-2 rounded-full border border-[#e5ba73]/30 text-[10px] md:text-xs font-black transition-all group"
                    >
                        <i className="fab fa-tiktok"></i>
                        <span>@warongsoja</span>
                    </a>
                </div>
            </div>
        </div>

                {/* MAP EMBEDDED - Force Height on Mobile */}
        <div className="w-full h-[400px] lg:h-auto min-h-[400px] lg:min-h-full bg-white border-t lg:border-t-0 lg:border-l border-white/10 relative">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.459487900455!2d102.09119047472718!3d2.3511790976283464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1ff6b3a5b9bb3%3A0xd28fb2d50d447f6!2sJalan%20Pokok%20Tanjung%2C%2078300%20Masjid%20Tanah%2C%20Melaka!5e0!3m2!1sen!2smy!4v1777362441778!5m2!1sen!2smy"
                className="absolute inset-0 w-full h-full border-0" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
</div>
                                </motion.div>
                            )}

{activeTab === 'products' && (
    <motion.div 
        key="products-tab"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="space-y-8 pt-0 pb-12"
    >
        {/* CSS UNTUK TEXTURE KARPET BUTANG */}
        <style dangerouslySetInnerHTML={{ __html: `
            .btn-texture-carpet {
                background-color: #c2a371; /* Dark Cream */
                background-image: url("https://www.transparenttextures.com/patterns/felt.png"); /* Carpet/Fabric Texture */
                box-shadow: inset 0 0 15px rgba(0,0,0,0.1), 0 8px 15px rgba(0,0,0,0.3);
                border: 1px solid rgba(255,255,255,0.1);
                transition: all 0.3s ease;
            }
            .btn-texture-carpet:hover {
                filter: brightness(1.1);
                transform: translateY(-2px);
                box-shadow: inset 0 0 10px rgba(0,0,0,0.05), 0 12px 25px rgba(0,0,0,0.4);
            }
        `}} />

        {/* TOP HEADER - MISSION STATUS */}
        <div className="text-center space-y-4">
            <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-xl animate-pulse">
                ⚠️ Limited Stock Mission
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#e5ba73] uppercase tracking-tighter italic">
                Our Rations
            </h2>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto font-medium">
                Supply is limited. The mission will be terminated immediately once rations are depleted. 🫡
            </p>
        </div>

        {/* SECTION 1: NASI LEMAK WARONG SOJA */}
        <div className="space-y-8">
            <div className="flex items-center gap-4 px-4">
                <h3 className="text-3xl font-black text-white uppercase tracking-tight">🍱 Nasi Lemak Series</h3>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#e5ba73] to-transparent"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 px-4">
                {[
                    { rank: "PREBET", name: "REGULAR", price: "3.00", img: "nlp.png", desc: "Coconut milk rice, sambal, half boiled egg, cucumber, peanuts & anchovies." },
                    { rank: "KOPERAL", name: "EGG SPECIAL", price: "4.00", img: "nlk.png", desc: "Coconut milk rice, sambal, half boiled egg, cucumber, peanuts & anchovies + fried egg." },
                    { rank: "SARJAN", name: "FRIED CHICKEN", price: "7.00", img: "nls.png", desc: "Coconut milk rice, sambal, half boiled egg, cucumber, peanuts & anchovies + crispy fried chicken." }
                ].map((item, i) => (
                    <motion.div key={i} whileHover={{ y: -10 }} className="glass-card-soja overflow-hidden flex flex-col h-full group border-white/5">
                        <div className="relative h-56 overflow-hidden">
                            <img src={`/images/products/soja/${item.img}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={item.rank} />
                            <div className="absolute top-4 right-4 bg-[#e5ba73] text-[#1a110a] px-3 py-1 rounded-lg font-black text-sm shadow-lg">
                                RM {item.price}
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a110a] to-transparent h-20"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-1 space-y-4">
                            <div>
                                <p className="text-[#e5ba73] font-black text-xs tracking-widest uppercase">RANK: {item.rank}</p>
                                <h4 className="text-white font-black text-2xl leading-tight uppercase">{item.name}</h4>
                            </div>
                            <p className="text-white/50 text-xs leading-relaxed italic flex-1">{item.desc}</p>
                            <div className="pt-2">
                                <p className="text-[11px] text-white/30 font-bold uppercase tracking-widest mb-3">+ FREE ROSE SYRUP</p>
                                <a 
                                    href="https://forms.gle/otbDXsVFPSJxhMwh7" 
                                    target="_blank" 
                                    className="btn-texture-carpet w-full text-[#1a2a3a] py-3.5 px-6 rounded-xl font-black text-[12.5px] uppercase tracking-wider transition-all flex items-center justify-center gap-3 group/btn"
                                >
                                    <span>ORDER NOW</span>
                                    <i className="fas fa-chevron-right text-[9px] transition-transform group-hover/btn:translate-x-1"></i>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* SECTION 2: MEE KARI WARONG SOJA */}
        <div className="space-y-8 pt-10">
            <div className="flex items-center gap-4 px-4 text-right">
                <div className="flex-1 h-[1px] bg-gradient-to-l from-[#e5ba73] to-transparent"></div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight">🍜 Curry Mee Series</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 px-4">
                {[
                    { rank: "PREBET", name: "REGULAR", price: "5.50", img: "mkp.jpg", desc: "Chicken, tofu, fish cake, fish balls, half egg, and mustard greens." },
                    { rank: "KOPRAL", name: "COCKLES", price: "7.00", img: "mkk.jpg", desc: "Chicken, tofu, fish cake, fish balls, half egg, and mustard greens + fresh cockles." },
                    { rank: "SARJAN", name: "PRAWNS", price: "7.50", img: "mks.jpg", desc: "Chicken, tofu, fish cake, fish balls, half egg, and mustard greens + premium prawns." }
                ].map((item, i) => (
                    <motion.div key={i} whileHover={{ y: -10 }} className="glass-card-soja overflow-hidden flex flex-col h-full group border-white/5">
                        <div className="relative h-56 overflow-hidden">
                            <img src={`/images/products/soja/${item.img}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={item.rank} />
                            <div className="absolute top-4 right-4 bg-[#e5ba73] text-[#1a110a] px-3 py-1 rounded-lg font-black text-sm shadow-lg">
                                RM {item.price}
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a110a] to-transparent h-20"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-1 space-y-4">
                            <div>
                                <p className="text-[#e5ba73] font-black text-xs tracking-widest uppercase">RANK: {item.rank}</p>
                                <h4 className="text-white font-black text-2xl leading-tight uppercase">{item.name}</h4>
                            </div>
                            <p className="text-white/50 text-xs leading-relaxed italic flex-1">{item.desc}</p>
                            <div className="pt-2">
                                <p className="text-[11px] text-white/30 font-bold uppercase tracking-widest mb-3">+ FREE ROSE SYRUP</p>
                                <a 
                                    href="https://forms.gle/otbDXsVFPSJxhMwh7" 
                                    target="_blank" 
                                    className="btn-texture-carpet w-full text-[#1a2a3a] py-3.5 px-6 rounded-xl font-black text-[12.5px] uppercase tracking-wider transition-all flex items-center justify-center gap-3 group/btn"
                                >
                                    <span>ORDER NOW</span>
                                    <i className="fas fa-chevron-right text-[9px] transition-transform group-hover/btn:translate-x-1"></i>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* FINAL CALL TO ACTION */}
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 pt-10 pb-20">
            <div className="h-[1px] w-full bg-white/10"></div>
            <p className="text-[#e5ba73] font-black text-xl md:text-2xl uppercase italic tracking-widest">
                "Report to duty for your breakfast, soldier!"
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                
                <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/60178332301" 
                    target="_blank"
                    className="w-full md:w-auto bg-green-600 hover:bg-green-500 text-white font-black px-12 py-5 rounded-2xl shadow-2xl transition-all uppercase tracking-widest text-lg flex items-center justify-center gap-3"
                >
                    <i className="fab fa-whatsapp text-2xl"></i>
                    Contact Zubaidah
                </motion.a>
            </div>
        </div>
    </motion.div>
)}
                        </AnimatePresence>
                    </div>

{/* Divider Minimalis - TEMA EARTH TONE (MOCHA/GOLD) */}
<div className="max-w-6xl mx-auto px-6 mt-0">
    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#b5a642]/50 to-transparent"></div>
</div>                  

{/* ============================================================ */}
{/* SECTION TESTIMONY & REVIEW - WARUNG SOJA EARTH THEME */}
{/* ============================================================ */}
<div className="max-w-6xl mx-auto px-6 pb-24 mt-10">
    {/* KOTAK BESAR (Warna Coklat Mocha ikut gambar Strategic Objectives) */}
    <div className="bg-[#3d332d] rounded-[4rem] border border-white/5 p-8 md:p-16 shadow-2xl">
        
        {/* TITLE AREA (Warna Emas ikut gambar) */}
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#d4b982] uppercase tracking-[0.2em]">
                Reviews and Testimony
            </h2>
            <div className="w-16 h-1 bg-[#d4b982] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* GRID AREA */}
        <div className="grid lg:grid-cols-3 gap-12">
            
            {/* FORM SIDE */}
            <div className="lg:col-span-1">
                <div className="bg-[#2a2420] p-8 rounded-[3rem] border border-white/5 shadow-2xl sticky top-24">
                    <h3 className="text-lg font-black text-[#d4b982] mb-6 uppercase tracking-widest">Post Review</h3>
                    <form onSubmit={handleSubmitReview} className="space-y-4">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            required 
                            className="w-full bg-[#1a1614] border-none rounded-2xl p-4 text-sm font-bold text-white placeholder:text-gray-600 focus:ring-1 focus:ring-[#d4b982]" 
                            value={newReview.name} 
                            onChange={e => setNewReview({...newReview, name: e.target.value})} 
                        />
                        
                        <select 
                            className="w-full bg-[#1a1614] border-none rounded-2xl p-4 text-sm font-bold text-white focus:ring-1 focus:ring-[#d4b982]"
                            value={newReview.rating} 
                            onChange={e => setNewReview({...newReview, rating: e.target.value})}
                        >
                            <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
                            <option value="4">⭐⭐⭐⭐ (Great)</option>
                            <option value="3">⭐⭐⭐ (Good)</option>
                            <option value="2">⭐⭐ (Average)</option>
                            <option value="1">⭐ (Poor)</option>
                        </select>

                        <textarea 
                            placeholder="Write your experience..." 
                            required 
                            rows="4" 
                            className="w-full bg-[#1a1614] border-none rounded-2xl p-4 text-sm font-bold text-white placeholder:text-gray-600 focus:ring-1 focus:ring-[#d4b982] resize-none"
                            value={newReview.comment} 
                            onChange={e => setNewReview({...newReview, comment: e.target.value})}
                        ></textarea>
                        
                        <button 
                            type="submit" 
                            className="w-full bg-[#d4b982] hover:bg-[#c4a972] text-[#1a1614] font-black py-4 rounded-2xl shadow-xl transition-all uppercase tracking-[0.2em] text-xs"
                        >
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>

            {/* DISPLAY SIDE */}
            <div className="lg:col-span-2 space-y-6">
                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#d4b982]"></div>
                    </div>
                ) : reviews.length > 0 ? (
                    reviews.map((rev) => (
                        <motion.div 
                            key={rev.id} 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            className="bg-[#2a2420]/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/5 relative group"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-1">
                                    <div className="flex text-[#d4b982] text-xs">{"★".repeat(rev.rating)}</div>
                                    <h4 className="font-black text-white uppercase text-sm tracking-widest">{rev.name}</h4>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase">
                                        {new Date(rev.date).toLocaleDateString()}
                                    </p>
                                </div>
                                {auth.user && (
                                    <button 
                                        onClick={() => handleDeleteReview(rev.id)} 
                                        className="text-red-500/50 hover:text-red-500 p-2 transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                    </button>
                                )}
                            </div>
                            <p className="mt-4 text-gray-300 font-medium leading-relaxed italic text-sm md:text-base">
                                "{rev.comment}"
                            </p>
                        </motion.div>
                    ))
                ) : (
                    <div className="flex items-center justify-center h-full min-h-[300px] bg-white/5 rounded-[3rem] border-2 border-dashed border-white/10">
                        <p className="text-gray-500 font-black uppercase tracking-widest text-[10px] text-center px-10 leading-relaxed">
                            No reviews yet. <br/>
                            <span className="text-[#d4b982]">Be the first to share your experience!</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    </div>
</div>

                    {/* END SECTION */}

                </div>
            </div>
        </>
    );
}

Soja.layout = page => <AuthenticatedLayout children={page} />;