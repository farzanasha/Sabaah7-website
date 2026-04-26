import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';

export default function Products() {
    return (
        <div className="min-h-screen">
            {/* HERO */}
            <div
                className="relative h-[40vh] flex items-center justify-center text-white text-center"
                style={{
                    backgroundImage: "url('/images/product.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold">OUR PRODUCTS</h1>
                    <p className="mt-2 text-lg">Explore Sabaah7 Business Ecosystem</p>
                </div>
            </div>

            {/* CONTENT */}
            <div className="py-16 px-6">
                <div className="max-w-6xl mx-auto space-y-20">

                    {/* ================= FOOD & BEVERAGE ================= */}
                    <div>
                        <h2 className="text-3xl font-bold text-center mb-10 text-white">
                            🍽️ Food & Beverage
                        </h2>
                        <div className="grid grid-cols-2 gap-6 justify-center max-w-lg mx-auto">
                            {/* AISKRIM JUNIOR */}
                            <Link href="/aiskrim-junior" className="group">
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/20 text-center flex flex-col items-center">
                                    <img src="/images/logos/junior.png" className="h-24 object-contain" />
                                    <p className="mt-3 font-bold text-white text-sm md:text-base">Aiskrim Junior</p>
                                </div>
                            </Link>

                            {/* WARUNG SOJA */}
                            <Link href="/warung-soja" className="group">
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/20 text-center flex flex-col items-center">
                                    <img src="/images/logos/soja.png" className="h-24 object-contain" />
                                    <p className="mt-3 font-bold text-white text-sm md:text-base">Warung Soja</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* ================= STAPLE FOOD ================= */}
                    <div>
                        <h2 className="text-3xl font-bold text-center mb-10 text-white">
                            🍜 Staple Food & Noodle Products
                        </h2>
                        <div className="flex justify-center">
                            <Link href="/mee-lantak" className="group w-48">
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/20 text-center flex flex-col items-center">
                                    <img src="/images/logos/meelantak.png" className="h-24 object-contain" />
                                    <p className="mt-3 font-bold text-white text-sm md:text-base">Mee Lantak</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* ================= INTEGRATED SERVICES ================= */}
                    <div>
                        <h2 className="text-3xl font-bold text-center mb-10 text-white">
                            🧵 Integrated Services
                        </h2>
                        <div className="flex justify-center">
                            <Link href="/kecil-molek" className="group w-48">
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/20 text-center flex flex-col items-center">
                                    <img src="/images/logos/kecil.png" className="h-24 object-contain" />
                                    <p className="mt-3 font-bold text-white text-sm md:text-base">Kecil Molek</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

Products.layout = page => <AuthenticatedLayout children={page} />;