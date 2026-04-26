import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Businesses() {
    const businessList = [
        { title: "Agri-Business & Livestock", icon: "agri.png", desc: "Coming Soon" },
        { title: "Integrated Services", icon: "services.png", desc: "Kecil Molek Tailoring" },
        { title: "Staple Food & Noodle Products", icon: "noodles.png", desc: "Mee Lantak" },
        { title: "Food & Beverage", icon: "food.png", desc: "Aiskrim Junior & Warung Soja" },
        { title: "Food Manufacturing & Processing", icon: "factory.png", desc: "Coming Soon" },
        { title: "Training & Business Academy", icon: "academy.png", desc: "Coming Soon" },
        { title: "Community Impact", icon: "community.png", desc: "Coming Soon" },
    ];

    return (
        <div>
            {/* HERO SECTION */}
            <div
                className="relative h-[40vh] flex items-center justify-center text-white text-center"
                style={{
                    backgroundImage: "url('/images/business.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10">
                    <h1 className="text-5xl font-bold drop-shadow-lg">OUR BUSINESSES</h1>
                    <p className="mt-2 text-lg opacity-90">
                        7 Core Businesses Under Sabaah7
                    </p>
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="py-16 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        Business Portfolio
                    </h2>

                    {/* GRID CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                        
                        {businessList.map((biz, index) => (
                            <div 
                                key={index} 
                                className="group p-8 bg-red-200 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-red-300"
                            >
                                {/* ICON */}
                                <img 
                                    src={`/images/icons/${biz.icon}`} 
                                    className="h-20 mx-auto mb-5 drop-shadow-md transition-transform duration-300 group-hover:scale-110" 
                                    alt={biz.title} 
                                />
                                
                                {/* TITLE */}
                                <h3 className="font-extrabold text-red-950 text-xl leading-tight">
                                    {biz.title}
                                </h3>

                                {/* HOVER DESCRIPTION */}
                                <div className="mt-4 text-sm text-red-800 font-bold opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 overflow-hidden">
                                    <div className="pt-2 border-t border-red-300/50">
                                        {biz.desc}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

Businesses.layout = page => <AuthenticatedLayout children={page} />;