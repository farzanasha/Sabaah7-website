import { router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Home() {
    return (
        <div>
            {/* HERO SECTION */}
            <div
                className="relative h-[90vh] flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: "url('/images/hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* CONTENT */}
                <div className="relative z-10 px-6 flex flex-col items-center">

    {/* LOGO */}
    <img 
        src="/images/logo.png"
        alt="Sabaah7 Logo"
        className="h-30 mb-0"
    />

  {/* TITLE */}
   <h1 className="text-1xl font-bold text-black">
    Intergrated Global Ecosystem
</h1>

    {/* SUBTITLE */}
    <p className="mt-4 text-xl">
        Headquarters Managing 7 Pillar of Businesses
    </p>

    {/* BUTTON */}
   <button 
    onClick={() => router.visit('/businesses')}
    className="mt-6 px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 text-white"
>
    Explore Businesses
</button>

</div>

            </div>

            {/* ABOUT SECTION */}
            <div className="py-16 px-6 text-center">
                <h2 className="text-3xl font-bold">One Vision, Seven Pillars</h2>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                    Sabaah7 is a diversified company that manages seven core business pillars across multiple industries, including agriculture, services, food production, manufacturing, training, and community development. It is built as an integrated business ecosystem that supports sustainable growth and entrepreneurship. Through these divisions, Sabaah7 aims to expand its impact in both business and community development.
                </p>
            </div>

            {/* BUSINESS GRID */}
<div className="py-10 flex justify-center">

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 place-items-center max-w-5xl w-full">

        {/* Junior Ice Cream */}
        <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:-translate-y-2">
            <img 
                src="/images/logos/junior.png" 
                className="h-40 md:h-44 object-contain transition-transform duration-300 group-hover:scale-110"
                alt="Junior Ice Cream"
            />
            <p className="mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition">
                Aiskrim Junior
            </p>
        </div>

        {/* Warung Soja */}
        <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:-translate-y-2">
            <img 
                src="/images/logos/soja.png" 
                className="h-40 md:h-44 object-contain transition-transform duration-300 group-hover:scale-110"
                alt="Warung Soja"
            />
            <p className="mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition">
                Warung Soja
            </p>
        </div>

        {/* Kecil Molek Tailoring */}
        <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:-translate-y-2">
            <img 
                src="/images/logos/kecil.png" 
                className="h-40 md:h-44 object-contain transition-transform duration-300 group-hover:scale-110"
                alt="Kecil Molek Tailoring"
            />
            <p className="mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition">
                Kecil Molek Tailoring
            </p>
        </div>

        {/* Mee Lantak */}
        <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:-translate-y-2">
            <img 
                src="/images/logos/meelantak.png" 
                className="h-40 md:h-44 object-contain transition-transform duration-300 group-hover:scale-110"
                alt="Mee Lantak"
            />
            <p className="mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition">
                Mee Lantak
            </p>
        </div>

    </div>

</div>

        </div>
    );
}
Home.layout = page => <AuthenticatedLayout children={page} />;