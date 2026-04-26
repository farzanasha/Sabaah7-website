import { router, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Home() {
    return (
        /* KEMASKINI: pb-20 ditukar ke pb-0 supaya tidak menolak footer ke bawah terlalu jauh */
        <div className="pb-0">
            {/* ================= HERO SECTION ================= */}
            <div
                className="relative h-[90vh] flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: "url('/images/hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 px-6 flex flex-col items-center">
                    <img 
                        src="/images/logo.png"
                        alt="Sabaah7 Logo"
                        className="h-32 md:h-40 mb-4"
                    />

                    <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
                        Integrated Global Ecosystem
                    </h1>

                    <p className="mt-4 text-xl text-gray-100 max-w-xl">
                        Headquarters Managing 7 Pillar of Businesses
                    </p>

                    <button 
                        onClick={() => router.visit('/businesses')}
                        className="mt-8 px-8 py-3 bg-red-800 hover:bg-red-950 transition-all rounded-full shadow-lg text-white font-semibold"
                    >
                        Explore Businesses
                    </button>
                </div>
            </div>

            {/* ================= ABOUT SECTION ================= */}
            {/* KEMASKINI: pb-0 digunakan untuk merapatkan dengan seksyen bawah */}
            <div className="pt-20 pb-0 px-6 flex justify-center">
                <div className="max-w-4xl w-full p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        One Vision, Seven Pillars
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-300">
                        Sabaah7 is a diversified company that manages seven core business pillars across multiple industries, including agriculture, services, food production, manufacturing, training, and community development. It is built as an integrated business ecosystem that supports sustainable growth and entrepreneurship. Through these divisions, Sabaah7 aims to expand its impact in both business and community development.
                    </p>
                </div>
            </div>

            {/* ================= BUSINESS GRID ================= */}
            {/* KEMASKINI: pt-2 supaya logo naik rapat dengan perenggan teks di atas */}
            <div className="pt-2 pb-20 px-6 flex justify-center">
                <div className="max-w-6xl w-full p-6 md:p-10">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 place-items-center">

                        {/* Junior Ice Cream */}
                        <Link href="/aiskrim-junior" className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:-translate-y-3 text-center">
                            <img 
                                src="/images/logos/junior.png" 
                                className="h-32 md:h-44 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-2xl"
                                alt="Junior Ice Cream"
                            />
                            <p className="mt-6 text-lg font-medium text-white opacity-80 group-hover:opacity-100 transition">
                                Aiskrim Junior
                            </p>
                        </Link>

                        {/* Warung Soja */}
                        <Link href="/warung-soja" className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:-translate-y-3 text-center">
                            <img 
                                src="/images/logos/soja.png" 
                                className="h-32 md:h-44 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-2xl"
                                alt="Warung Soja"
                            />
                            <p className="mt-6 text-lg font-medium text-white opacity-80 group-hover:opacity-100 transition">
                                Warung Soja
                            </p>
                        </Link>

                        {/* Kecil Molek */}
                        <Link href="/kecil-molek" className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:-translate-y-3 text-center">
                            <img 
                                src="/images/logos/kecil.png" 
                                className="h-32 md:h-44 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-2xl"
                                alt="Kecil Molek"
                            />
                            <p className="mt-6 text-lg font-medium text-white opacity-80 group-hover:opacity-100 transition">
                                Kecil Molek
                            </p>
                        </Link>

                        {/* Mee Lantak */}
                        <Link href="/mee-lantak" className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:-translate-y-3 text-center">
                            <img 
                                src="/images/logos/meelantak.png" 
                                className="h-32 md:h-44 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-2xl"
                                alt="Mee Lantak"
                            />
                            <p className="mt-6 text-lg font-medium text-white opacity-80 group-hover:opacity-100 transition">
                                Mee Lantak
                            </p>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

Home.layout = page => <AuthenticatedLayout children={page} />;