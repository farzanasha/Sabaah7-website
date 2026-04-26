import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function About() {
    return (
        <div>
            {/* TOP HERO SECTION */}
            <div
                className="relative h-[40vh] flex items-center justify-center text-white text-center"
                style={{
                    backgroundImage: "url('/images/about.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay tambahan untuk gambar hero (boleh dikekalkan atau dibuang jika layout dah cukup gelap) */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* TITLE */}
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold">ABOUT US</h1>
                    <p className="mt-2 text-lg text-gray-200">Get to know Sabaah7</p>
                </div>
            </div>

            {/* CONTENT SECTION */}
            {/* KEMASKINI: Tukar 'bg-white' kepada 'bg-transparent' */}
            <div className="bg-transparent py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Tukar text-black/gray-600 kepada text-white/gray-300 supaya nampak atas background gelap */}
                    <h2 className="text-3xl font-bold mb-6 text-white">
                        Who We Are
                    </h2>

                    <p className="text-gray-300 leading-relaxed text-lg">
                        Sabaah7 is a headquarters company managing multiple business operations
                        including food services, agriculture, tailoring, and livestock.
                        Our mission is to develop sustainable businesses under one strong brand
                        while supporting local community growth.
                    </p>

                    <p className="text-gray-300 leading-relaxed mt-6 text-lg">
                        We focus on building structured business systems, improving operations,
                        and creating long-term value across all subsidiaries under Sabaah7.
                    </p>

                </div>
            </div>
        </div>
    );
}

About.layout = page => <AuthenticatedLayout children={page} />;