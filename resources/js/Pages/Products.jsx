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
                    <p className="mt-2 text-lg">
                        Explore Sabaah7 Business Ecosystem
                    </p>
                </div>
            </div>

            {/* CONTENT */}
            <div className="bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto space-y-20">

                    {/* ================= FOOD & BEVERAGE ================= */}
<div>
    <h2 className="text-3xl font-bold text-center mb-10">
        🍽️ Food & Beverage
    </h2>

    {/* Tukar justify-items-center kepada justify-center */}
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-center max-w-2xl mx-auto">

        {/* AISKRIM JUNIOR */}
        <Link href="/aiskrim-junior" className="group text-center">
            <div className="transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-105">
                <img 
                    src="/images/logos/junior.png" 
                    className="h-28 mx-auto" 
                />
            </div>
            <p className="mt-3 font-semibold text-gray-700">
                Aiskrim Junior
            </p>
        </Link>

        {/* WARUNG SOJA */}
        <Link href="/warung-soja" className="group text-center">
            <div className="transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-105">
                <img 
                    src="/images/logos/soja.png" 
                    className="h-28 mx-auto" 
                />
            </div>
            <p className="mt-3 font-semibold text-gray-700">
                Warung Soja
            </p>
        </Link>

    </div>
</div>

                    {/* ================= STAPLE FOOD ================= */}
                    <div>
                        <h2 className="text-3xl font-bold text-center mb-10">
                            🍜 Staple Food & Noodle Products
                        </h2>
                        <div className="flex justify-center">
                            <Link href="/mee-lantak" className="group text-center">
                                <div className="transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-105">
                                    <img 
                                        src="/images/logos/meelantak.png" 
                                        alt="Mee Lantak" 
                                        className="h-32 mx-auto" 
                                    />
                                </div>
                                <p className="mt-3 font-semibold text-gray-700">Mee Lantak</p>
                            </Link>
                        </div>
                    </div>

                    {/* ================= INTEGRATED SERVICES ================= */}
                    <div>
                        <h2 className="text-3xl font-bold text-center mb-10">
                            🧵 Integrated Services
                        </h2>
                        <div className="flex justify-center">
                            <Link href="/kecil-molek" className="group text-center">
                                <div className="transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-105">
                                    <img 
                                        src="/images/logos/kecil.png" 
                                        alt="Kecil Molek" 
                                        className="h-32 mx-auto" 
                                    />
                                </div>
                                <p className="mt-3 font-semibold text-gray-700">Kecil Molek Tailoring</p>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div> // Tag penutup yang sebelum ini hilang
    );
}

Products.layout = page => <AuthenticatedLayout children={page} />;