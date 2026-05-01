import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

export default function Businesses() {
    // 1. Load Google Maps API
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCZjrjhlcP78qVdUDQElcQWDkAmKOPyCVw"
    });

    // Koordinat Cawangan
    const locations = [
        { id: 1, name: "Junior Ice Cream (Ipoh)", pos: { lat: 4.6644, lng: 101.0748 } },
        { id: 2, name: "Junior Ice Cream (Ampang)", pos: { lat: 3.1491, lng: 101.7618 } },
        { id: 3, name: "Warung Soja (Masjid Tanah)", pos: { lat: 2.3500, lng: 102.1000 } },
        { id: 4, name: "Kecik Molek (Masjid Tanah)", pos: { lat: 2.4500, lng: 102.1000 } },
        { id: 5, name: "Mee Lantak (Durian Tunggal)", pos: { lat: 2.3120, lng: 102.2800 } },
    ];

    const mapOptions = {
        styles: [
            { "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }] },
            { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
            { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#c9c9c9" }] }
        ],
        disableDefaultUI: true,
    };

    const businessList = [
        { title: "Agri-Business & Livestock", icon: "agri.png", active: false, subs: [] },
        { title: "Integrated Services", icon: "services.png", active: true, subs: [{ name: "kecik MOLEK Tailoring", link: "/products/kecil-molek" }] },
        { title: "Staple Food", icon: "noodles.png", active: true, subs: [{ name: "Mee Lantak", link: "/products/meelantak" }] },
        { title: "Food & Beverage", icon: "food.png", active: true, subs: [
            { name: "Junior Ice Cream", link: "/products/junior" }, 
            { name: "Warung Soja", link: "/products/soja" }
        ]},
        { title: "Food Manufacturing & Processing", icon: "factory.png", active: false, subs: [] },
        { title: "Training & Business Academy", icon: "academy.png", active: false, subs: [] },
        { title: "Community Impact", icon: "community.png", active: false, subs: [] },
    ];

    return (
        <div className="relative min-h-screen w-full bg-black">
            
            {/* 1. FULL BACKGROUND IMAGE (FIXED) */}
            <div 
                className="fixed inset-0 z-0"
                style={{ 
                    backgroundImage: "url('/images/business.jpg')", 
                    backgroundSize: "cover", 
                    backgroundPosition: "center" 
                }}
            >
                {/* Overlay untuk mudahkan pembacaan teks */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
            </div>

            {/* 2. CONTENT AREA */}
            <div className="relative z-10">
                
                {/* HERO SECTION */}
                <div className="h-[40vh] flex flex-col items-center justify-center text-white text-center px-4">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black drop-shadow-lg tracking-tighter uppercase leading-none">
                            Our 7 Business <span className="text-red-600">Pillars</span>
                        </h1>
                        <p className="mt-3 text-lg opacity-90 font-medium">Strategic Operations Across Malaysia</p>
                        <div className="w-20 h-1.5 bg-red-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
                    </motion.div>
                </div>

                {/* GRID SECTION (PILLARS) */}
                <div className="py-12 px-6">
                    <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center">
                        {businessList.map((biz, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-6 w-full max-w-[260px] h-[220px] bg-red-200 rounded-[2.5rem] border border-red-300 shadow-md overflow-hidden flex flex-col items-center justify-center"
                            >
                                <div className="group-hover:opacity-0 transition-opacity duration-300 text-center flex flex-col items-center justify-center w-full h-full text-red-950">
                                    <img src={`/images/icons/${biz.icon}`} className="h-16 w-16 object-contain mb-4" alt={biz.title} />
                                    <h3 className="font-bold text-sm leading-tight uppercase tracking-tighter">{biz.title}</h3>
                                </div>

                                <div className="absolute inset-0 bg-red-800 flex flex-col items-center justify-center p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    {biz.active ? (
                                        <div className="space-y-2 w-full text-center">
                                            <p className="text-white text-[10px] font-bold mb-1 border-b border-red-400 pb-1 w-full uppercase tracking-widest">View Products:</p>
                                            <div className="w-full flex flex-col gap-2">
                                                {biz.subs.map((sub, i) => (
                                                    <Link 
                                                        key={i} 
                                                        href={sub.link} 
                                                        className="w-full py-2 bg-white/10 hover:bg-white text-white hover:text-red-800 text-xs font-black rounded-xl transition active:scale-95 flex items-center justify-center gap-2"
                                                    >
                                                        {sub.name} <span>→</span>
                                                    </Link>
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

                {/* MAP SECTION */}
                <div className="max-w-6xl mx-auto px-6 mb-24">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[3.5rem] overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col lg:flex-row items-stretch min-h-[600px]">
                            {/* MAP CONTAINER */}
                            <div className="w-full lg:w-2/3 h-[400px] lg:h-auto bg-slate-900 relative p-4">
                                {isLoaded ? (
                                    <GoogleMap
                                        mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '2.5rem' }}
                                        center={{ lat: 3.8, lng: 102.2 }} 
                                        zoom={7}
                                        options={mapOptions}
                                    >
                                        {locations.map(loc => (
                                            <MarkerF key={loc.id} position={loc.pos} title={loc.name} />
                                        ))}
                                    </GoogleMap>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-white animate-pulse font-black tracking-widest">
                                        Loading Map...
                                    </div>
                                )}
                                <div className="absolute top-8 left-8 bg-red-600 text-white px-5 py-2 rounded-full text-[10px] font-black tracking-widest shadow-2xl z-10 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                    STRATEGIC NETWORK
                                </div>
                            </div>

                            {/* INFO PANEL */}
                            <div className="lg:w-1/3 p-10 flex flex-col justify-center border-l border-white/5">
                                <h2 className="text-4xl font-black text-white mb-2 uppercase tracking-tighter leading-none">
                                    OUR <br/><span className="text-red-600 text-5xl">PRESENCE</span>
                                </h2>
                                
                                <div className="mt-8 space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                    <div className="group">
                                        <p className="text-red-500 font-black text-[12px] tracking-widest mb-1 uppercase">Headquarters</p>
                                        <p className="text-white font-bold text-sm uppercase">Sabaah7 HQ</p>
                                        <p className="text-gray-300 text-xs mt-1">Cheras, Kuala Lumpur</p>
                                        <hr className="border-t border-white/10 my-4" />
                                    </div>

                                    <div className="group">
                                        <p className="text-red-500 font-black text-[12px] tracking-widest mb-1 uppercase">Food & Beverage</p>
                                        <p className="text-white font-bold text-sm uppercase">Junior Ice Cream</p>
                                        <p className="text-gray-300 text-xs mt-1"> Ipoh, Perak (HQ) & Ampang, Selangor</p>
                                        <p className="text-white font-bold text-sm uppercase mt-4">Warung Sajo</p>
                                        <p className="text-gray-300 text-xs mt-1">Masjid Tanah, Melaka</p>
                                        <hr className="border-t border-white/10 my-4" />
                                    </div>

                                    <div className="group">
                                        <p className="text-red-500 font-black text-[12px] tracking-widest mb-1 uppercase">Services & Products</p>
                                        <p className="text-white font-bold text-sm uppercase">Kecik Molek Tailor</p>
                                        <p className="text-gray-300 text-xs mt-1">Masjid Tanah, Melaka</p>
                                        <p className="text-white font-bold text-sm uppercase mt-4">Mee Lantak</p>
                                        <p className="text-gray-300 text-xs mt-1">Masjid Tanah, Melaka</p>
                                    </div>
                                </div>

                                <Link href="/products" className="mt-10 bg-white text-black py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all text-center shadow-xl">
                                    See Products
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

Businesses.layout = page => <AuthenticatedLayout children={page} />;