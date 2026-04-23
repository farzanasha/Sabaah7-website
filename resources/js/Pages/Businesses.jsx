import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
export default function Businesses() {
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
                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* TITLE */}
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold">OUR BUSINESSES</h1>
                    <p className="mt-2 text-lg">
                        7 Core Businesses Under Sabaah7
                    </p>
                </div>
            </div>

{/* CONTENT SECTION */}
<div className="bg-white py-16 px-6">
    <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Business Portfolio
        </h2>

      {/* GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">

    {/* 1 */}
    <div className="group p-6 bg-[#FFF4E6] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition cursor-pointer">
        <img src="/images/icons/agri.png" className="h-16 mx-auto mb-3" />
        <h3 className="font-bold text-gray-800">Agri-Business & Livestock</h3>
        <div className="mt-2 text-sm text-gray-600 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all overflow-hidden">
            Coming Soon
        </div>
    </div>

    {/* 2 */}
    <div className="group p-6 bg-[#EAF7F2] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition cursor-pointer">
        <img src="/images/icons/services.png" className="h-16 mx-auto mb-3" />
        <h3 className="font-bold text-gray-800">Integrated Services</h3>
        <div className="mt-2 text-sm text-gray-600 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all overflow-hidden">
            Kecil Molek Tailoring
        </div>
    </div>

    {/* 3 */}
    <div className="group p-6 bg-[#F3F0FF] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition cursor-pointer">
        <img src="/images/icons/noodles.png" className="h-16 mx-auto mb-3" />
        <h3 className="font-bold text-gray-800">Staple Food & Noodle Products</h3>
        <div className="mt-2 text-sm text-gray-600 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all overflow-hidden">
            Mee Lantak
        </div>
    </div>

    {/* 4 */}
    <div className="group p-6 bg-[#E6F0FF] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition cursor-pointer">
        <img src="/images/icons/food.png" className="h-16 mx-auto mb-3" />
        <h3 className="font-bold text-gray-800">Food & Beverage</h3>
        <div className="mt-2 text-sm text-gray-600 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all overflow-hidden">
            Aiskrim Junior<br />
            Warung Soja
        </div>
    </div>

    {/* 5 */}
    <div className="group p-6 bg-[#FFF0F5] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition cursor-pointer">
        <img src="/images/icons/factory.png" className="h-16 mx-auto mb-3" />
        <h3 className="font-bold text-gray-800">Food Manufacturing & Processing</h3>
        <div className="mt-2 text-sm text-gray-600 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all overflow-hidden">
            Coming Soon
        </div>
    </div>

    {/* 6 */}
    <div className="group p-6 bg-[#FDF6E3] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition cursor-pointer">
        <img src="/images/icons/academy.png" className="h-16 mx-auto mb-3" />
        <h3 className="font-bold text-gray-800">Training & Business Academy</h3>
        <div className="mt-2 text-sm text-gray-600 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all overflow-hidden">
            Coming Soon
        </div>
    </div>

    {/* 7 */}
    <div className="group p-6 bg-[#E8F5E9] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition cursor-pointer">
        <img src="/images/icons/community.png" className="h-16 mx-auto mb-3" />
        <h3 className="font-bold text-gray-800">Community Impact</h3>
        <div className="mt-2 text-sm text-gray-600 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all overflow-hidden">
            Coming Soon
        </div>
    </div>

</div>
    </div>
</div>

        </div>
    );
}
Businesses.layout = page => <AuthenticatedLayout children={page} />;