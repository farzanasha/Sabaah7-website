import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react'; 
import { useState, useEffect } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';

export default function KecikMolek() {
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
            const res = await fetch(SCRIPT_URL + '?page=KecikMolekReviews');
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
                     sheetName: 'KecikMolekReviews' 
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
                    sheetName: 'KecikMolekReviews'
                 })
            });
            fetchReviews();
        } catch (err) { console.error("Error delete:", err); }
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `
                nav { background-color: #4a0e1c !important; } 
                nav a, nav button { color: #d1d5db !important; }
                
                .title-3d-kecik { 
                    color: white; 
                    -webkit-text-stroke: 1px #d1d5db; 
                    text-shadow: 4px 4px 0px #2d050d;
                }
            `}} />

            <Head title="Kecik Molek Tailor - Fine Craftsmanship" />
            
            <div className="relative min-h-screen w-full bg-[#1a0505] overflow-x-hidden font-sans">
                
                {/* 1. BACKGROUND IMAGE */}
                <div 
                    className="fixed inset-0 z-0"
                    style={{ 
                        backgroundImage: "url('/images/products/background/kecil.png')", 
                        backgroundSize: "cover", 
                        backgroundPosition: "center" 
                    }}
                />

                {/* 2. CONTENT AREA */}
                <div className="relative z-10 mt-[-1px]">
                    
                    {/* Hero Section */}
                    <div className="pt-20 pb-2 flex flex-col items-center justify-center text-center px-6">
                        <motion.img 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            src="/images/logos/kecil.png" 
                            className="w-48 md:w-64 object-contain mb-6 drop-shadow-2xl" 
                            alt="Kecik Molek Logo" 
                        />
                        <h1 className="text-4xl md:text-7xl font-black title-3d-kecik uppercase tracking-tighter leading-none">
                            KECIK MOLEK
                        </h1>
                        <p className="mt-4 text-[#4a0e1c] bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full font-black tracking-widest text-[11px] md:text-sm uppercase italic shadow-sm inline-block mx-auto">
                            Seutas Harapan, Sepasang Impian
                        </p>
                    </div>

                    {/* TAB NAVIGATION */}
                    <div className="flex justify-center mt-6 mb-10 relative z-10 px-4">
                        <div className="bg-[#4a0e1c]/90 backdrop-blur-xl p-2 rounded-[2.5rem] border border-white/20 shadow-2xl flex gap-2">
                            <button
                                onClick={() => setActiveTab('about')}
                                className={`flex items-center gap-3 px-8 py-3 rounded-full font-black text-xs md:text-sm transition-all duration-300 border ${
                                    activeTab === 'about'
                                        ? 'bg-white text-[#4a0e1c] border-white scale-105 shadow-xl'
                                        : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                                }`}
                            >
                                <span>🏠</span>
                                <span>ABOUT US</span>
                            </button>

                            <button
                                onClick={() => setActiveTab('services')}
                                className={`flex items-center gap-3 px-8 py-3 rounded-full font-black text-xs md:text-sm transition-all duration-300 border ${
                                    activeTab === 'services'
                                        ? 'bg-white text-[#4a0e1c] border-white scale-105 shadow-xl'
                                        : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                                }`}
                            >
                                <span>🪡</span>
                                <span>SERVICES</span>
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
                                    exit={{ opacity: 0, y: -20 }}
                                    className="space-y-10"
                                >
                                    {/* STORY SECTION */}
                                    <div className="bg-[#4a0e1c]/80 backdrop-blur-2xl rounded-[3rem] border border-white/20 p-8 md:p-16 shadow-2xl">
                                        <div className="flex flex-col lg:flex-row gap-12">
                                            <div className="w-full lg:w-3/5 space-y-6">
                                                <h2 className="text-5xl font-black text-white uppercase tracking-tighter leading-none">
                                                    THE <span className="text-gray-300">CRAFT</span>
                                                </h2>
                                                <p className="text-white text-xl font-bold">
                                                    Inspiration By: <span className="bg-white text-[#4a0e1c] px-2 py-0.5 rounded-lg">Siti Aminah</span>.
                                                </p>
                                                <p className="text-white font-medium leading-relaxed text-justify bg-black/20 p-6 rounded-2xl border-l-4 border-white">
                                                    "Kecik Molek is a business providing tailoring and alteration services for both women's and men's clothing. The business came into existence after the founder gained years of experience working for others."
                                                </p>
                                                <p className="text-white/70 text-sm leading-relaxed text-justify">
                                                    Today, Kecik Molek operates independently, possessing its own sewing machines and managing its own orders. The operation originally started in Negeri Sembilan and has now relocated to Melaka.
                                                </p>
                                            </div>

                                            <div className="w-full lg:w-2/5 flex flex-col gap-4">
                                                <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/10 text-center">
                                                    <p className="text-5xl font-black text-white">EST.</p>
                                                    <p className="text-2xl font-black text-gray-300 mt-1 uppercase tracking-widest italic">Since 2016</p>
                                                </div>
                                                <div className="bg-white p-8 rounded-[2.5rem] text-center shadow-xl">
                                                    <p className="text-[10px] uppercase font-black text-[#4a0e1c] tracking-widest mb-1">SSM Registered</p>
                                                    <p className="text-2xl font-black text-[#4a0e1c]">2026 ✅</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* VISION & MISSION */}
                                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                                        <div className="bg-white p-10 rounded-[3rem] border border-white shadow-2xl flex flex-col justify-center">
                                            <div className="mb-6">
                                                <p className="text-[10px] font-black tracking-[0.4em] uppercase text-[#4a0e1c] opacity-60 mb-2">The Vision</p>
                                                <h3 className="text-3xl font-black text-[#4a0e1c] uppercase tracking-tighter">Global Boutique</h3>
                                                <div className="w-12 h-1 bg-[#4a0e1c] mt-2 rounded-full"></div>
                                            </div>
                                            <p className="text-[#4a0e1c] text-lg md:text-xl font-bold leading-relaxed italic">
                                                "To become a premier tailoring boutique that democratizes high-quality fashion through fine, fast, and affordable craftsmanship for a global audience."
                                            </p>
                                        </div>

                                        <div className="bg-[#4a0e1c]/80 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20 text-white shadow-2xl flex flex-col justify-center">
                                            <div className="mb-8">
                                                <p className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-300 mb-2">Our Mission</p>
                                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">3 Core Pillars</h3>
                                                <div className="w-12 h-1 bg-white mt-2 rounded-full"></div>
                                            </div>

                                            <div className="space-y-6">
                                                <div className="flex gap-4">
                                                    <span className="text-[#d1d5db] font-black text-xl italic opacity-50">01</span>
                                                    <div className="space-y-1">
                                                        <p className="text-white font-black text-sm uppercase tracking-widest">Craftsmanship Precision</p>
                                                        <p className="text-gray-300 text-[11px] leading-tight opacity-80">Meticulous technical aspects in every inch of stitching.</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-4">
                                                    <span className="text-[#d1d5db] font-black text-xl italic opacity-50">02</span>
                                                    <div className="space-y-1">
                                                        <p className="text-white font-black text-sm uppercase tracking-widest">Fashion Inclusivity</p>
                                                        <p className="text-gray-300 text-[11px] leading-tight opacity-80">Bridging the gap between luxury wear and everyday clothing.</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-4">
                                                    <span className="text-[#d1d5db] font-black text-xl italic opacity-50">03</span>
                                                    <div className="space-y-1">
                                                        <p className="text-white font-black text-sm uppercase tracking-widest">Operational Efficiency</p>
                                                        <p className="text-gray-300 text-[11px] leading-tight opacity-80">Fast production without compromising the final quality.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* STRATEGIC OBJECTIVES */}
                                    <div className="bg-white/5 backdrop-blur-2xl p-10 md:p-16 rounded-[4rem] border border-white/10 shadow-xl text-white">
                                        <h3 className="text-2xl font-black text-white mb-12 uppercase tracking-widest text-center">Strategic Objectives</h3>
                                        <div className="grid md:grid-cols-3 gap-12">
                                            <div className="space-y-4 text-center">
                                                <div className="text-4xl">📈</div>
                                                <p className="text-sm font-medium leading-relaxed opacity-80 italic">
                                                    "Expanding service reach from individual customers to corporate contracts and large-scale uniform supply."
                                                </p>
                                            </div>
                                            <div className="space-y-4 text-center">
                                                <div className="text-4xl">🎯</div>
                                                <p className="text-sm font-medium leading-relaxed opacity-80 italic">
                                                    "Achieving a 'zero-defect' standard in every tailored unit through strict quality control processes."
                                                </p>
                                            </div>
                                            <div className="space-y-4 text-center">
                                                <div className="text-4xl">📱</div>
                                                <p className="text-sm font-medium leading-relaxed opacity-80 italic">
                                                    "Introducing a digital ordering system to facilitate access for customers from various locations."
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CONTACT INFO & MAP - FULL VERSION WITH SOCIALS */}
                                    <div className="bg-[#4a0e1c]/90 rounded-[3rem] border border-white/20 overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                                        <div className="p-10 md:p-12 space-y-8 lg:w-1/2">
                                            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Visit the Studio</h2>
                                            <div className="space-y-6">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-xl">📍</span>
                                                    <p className="text-white font-bold text-sm italic">Lot 2421, Jalan Pokok Tanjung, 78300 Masjid Tanah, Melaka.</p>
                                                </div>
                                                
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-1">
                                                        <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Operating Hours</p>
                                                        <p className="text-white font-bold text-sm">9:00 AM – 6:00 PM</p>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Contact (PIC)</p>
                                                        <p className="text-white font-bold text-sm">Pn Siti Aminah</p>
                                                    </div>
                                                </div>

                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Email Address</p>
                                                    <p className="text-white font-bold text-sm break-all">aminahadzmi.sabaah7@gmail.com</p>
                                                </div>

                                                {/* SOCIAL MEDIA BUTTONS - ADDED BACK HERE */}
                                                <div className="flex flex-wrap gap-3 pt-4">
                                                            <a 
                                                                href="https://www.facebook.com/profile.php?id=61589143647179" 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="flex items-center space-x-2 bg-white/80 hover:bg-white px-3 py-1.5 rounded-full shadow-sm border border-lime-100 transition-all duration-300 hover:scale-105 group"
                                                            >
                                                                <i className="fab fa-facebook text-xl" 
                                                                    style={{
                                                                        color: "#1877F2", // Biru rasmi Facebook
                                                                        display: "inline-block"
                                                                    }}
                                                                    ></i>
                                                                <span className="text-xs font-bold text-black">Kecik Molek</span>
                                                            </a>

                                                    <a 
                                                        href="https://instagram.com/kecik.molek_situkangjahit" 
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
                                                                <span className="text-xs font-bold text-black">@kecikmolek</span>
                                                    </a>

                                                    <a 
                                                        href="https://tiktok.com/@kecikmolek_situkangjahit" 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="flex items-center space-x-2 bg-white/80 hover:bg-white px-3 py-1.5 rounded-full shadow-sm border border-lime-100 transition-all duration-300 hover:scale-105"
                                                            >
                                                                <i className="fab fa-tiktok text-lg text-black"></i>
                                                                <span className="text-xs font-bold text-black">@kecikmolek</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-[350px] lg:h-auto lg:w-1/2 bg-white relative min-h-[350px]">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.459487900455!2d102.09119047472718!3d2.3511790976283464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1ff6b3a5b9bb3%3A0xd28fb2d50d447f6!2sJalan%20Pokok%20Tanjung%2C%2078300%20Masjid%20Tanah%2C%20Melaka!5e0!3m2!1sen!2smy!4v1777362441778!5m2!1sen!2smy" className="absolute inset-0 w-full h-full border-0" allowFullScreen="" loading="lazy"></iframe>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'services' && (
                                <motion.div 
                                    key="services-tab"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="flex flex-col items-center justify-center py-20 text-center space-y-10"
                                >
                                    <div className="space-y-4">
                                        <div className="text-8xl animate-bounce">🪡</div>
                                        <h2 className="text-6xl md:text-7xl font-black text-white uppercase tracking-tighter italic drop-shadow-[0_2px_2px_rgba(74,14,28,1)]">
                                            Coming Soon
                                        </h2>
                                        <p className="text-white font-bold max-w-md mx-auto leading-relaxed opacity-80">
                                            Our stitching studio is preparing new slots. <br/>Fine tailoring services will be available soon.
                                        </p>
                                    </div>

                                    <motion.a 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="https://wa.me/601111127295?text=Hi%20Siti%20Aminah!%20I%20have%20an%20inquiry%20about%20Kecik%20Molek%20tailoring%20services." 
                                        target="_blank"
                                        className="bg-green-600 hover:bg-green-500 text-white font-black px-12 py-5 rounded-2xl flex items-center gap-4 shadow-xl transition-all uppercase tracking-widest text-lg"
                                    >
                                        <i className="fab fa-whatsapp text-2xl"></i>
                                        Inquiry via Siti Aminah
                                    </motion.a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

{/* Divider Minimalis - TEMA KECIL MOLEK (KUNING/EMAS/HITAM) */}
<div className="max-w-6xl mx-auto px-6 mt-0">
    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_15px_rgba(251,191,36,0.5)]"></div>
</div>                  

{/* ============================================================ */}
{/* SECTION TESTIMONY & REVIEW - KECIL MOLEK AUTHENTIC VERSION */}
{/* ============================================================ */}
<div className="max-w-6xl mx-auto px-6 pb-24 mt-10">
    {/* KOTAK BESAR (Tukar kepada Dark/Amber theme) */}
    <div className="bg-amber-50/10 backdrop-blur-3xl rounded-[4rem] border border-amber-500/20 p-8 md:p-16 shadow-2xl">
        
        {/* TITLE AREA */}
        <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-amber-500 uppercase tracking-tighter">Reviews and Testimony</h2>
            <div className="w-20 h-1.5 bg-amber-500 mx-auto mt-4 rounded-full shadow-lg"></div>
        </div>

        {/* GRID AREA */}
        <div className="grid lg:grid-cols-3 gap-12">
            
            {/* FORM SIDE */}
            <div className="lg:col-span-1">
                <div className="bg-white/90 backdrop-blur-xl p-8 rounded-[3rem] border border-amber-200 shadow-xl sticky top-24">
                    <h3 className="text-xl font-black text-amber-900 mb-6 uppercase tracking-tight">Leave a Review</h3>
                    <form onSubmit={handleSubmitReview} className="space-y-4">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            required 
                            className="w-full bg-amber-50 border-amber-100 rounded-2xl p-4 text-sm font-bold shadow-inner focus:ring-amber-500 text-black placeholder:text-gray-400" 
                            value={newReview.name} 
                            onChange={e => setNewReview({...newReview, name: e.target.value})} 
                        />
                        
                        <select 
                            className="w-full bg-amber-50 border-amber-100 rounded-2xl p-4 text-sm font-bold shadow-inner text-black"
                            value={newReview.rating} 
                            onChange={e => setNewReview({...newReview, rating: e.target.value})}
                        >
                            <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
                            <option value="4">⭐⭐⭐⭐ (Great)</option>
                            <option value="3">⭐⭐⭐ (Average)</option>
                            <option value="2">⭐⭐ (Poor)</option>
                            <option value="1">⭐ (Terrible)</option>
                        </select>

                        <textarea 
                            placeholder="Share your experience..." 
                            required 
                            rows="4" 
                            className="w-full bg-amber-50 border-amber-100 rounded-2xl p-4 text-sm font-bold shadow-inner resize-none text-black placeholder:text-gray-400"
                            value={newReview.comment} 
                            onChange={e => setNewReview({...newReview, comment: e.target.value})}
                        ></textarea>
                        
                        <button 
                            type="submit" 
                            className="w-full bg-black hover:bg-amber-600 text-white font-black py-4 rounded-2xl shadow-xl transition-all uppercase tracking-widest text-xs"
                        >
                            Submit Review ✨
                        </button>
                    </form>
                </div>
            </div>

            {/* DISPLAY SIDE */}
            <div className="lg:col-span-2 space-y-6">
                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-amber-500"></div>
                    </div>
                ) : reviews.length > 0 ? (
                    reviews.map((rev) => (
                        <motion.div 
                            key={rev.id} 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/20 shadow-lg relative group overflow-hidden"
                        >
                            <div className="flex justify-between items-start relative z-10">
                                <div>
                                    <div className="flex text-amber-400 mb-2">{"★".repeat(rev.rating)}</div>
                                    <h4 className="font-black text-amber-700 uppercase text-sm tracking-tight">{rev.name}</h4>
                                    <p className="text-[10px] text-amber-100/50 font-black uppercase mt-1">
                                        {new Date(rev.date).toLocaleDateString()}
                                    </p>
                                </div>
                                {auth.user && (
                                    <button 
                                        onClick={() => handleDeleteReview(rev.id)} 
                                        className="bg-red-500/80 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all"
                                    >
                                        Delete
                                    </button>
                                )}
                            </div>
                            <p className="mt-4 text-white font-medium leading-relaxed italic text-sm md:text-base relative z-10">
                                "{rev.comment}"
                            </p>
                            <div className="absolute -right-4 -bottom-4 text-amber-500/10 text-8xl font-black italic select-none">"</div>
                        </motion.div>
                    ))
                ) : (
                    <div className="flex items-center justify-center h-full min-h-[300px] bg-black/20 rounded-[3rem] border-2 border-dashed border-amber-500/30">
                        <p className="text-amber-500 font-black uppercase tracking-widest text-xs text-center px-10">
                            No Reviews Yet. <br/>
                            <span className="opacity-60 text-amber-200">Be the first one to share your Feedback!</span>
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

KecikMolek.layout = page => <AuthenticatedLayout children={page} />;