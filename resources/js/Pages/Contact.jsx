import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
export default function Contact() {
    return (
        <div>

            {/* HERO SECTION */}
            <div
                className="relative h-[40vh] flex items-center justify-center text-white text-center"
                style={{
                    backgroundImage: "url('/images/contact.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* TITLE */}
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold">CONTACT US</h1>
                    <p className="mt-2 text-lg">
                        Get in touch with Sabaah7
                    </p>
                </div>
            </div>

            {/* CONTACT SECTION */}
            <div className="bg-white py-16 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* LEFT INFO */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

                        <div className="space-y-4 text-gray-700">

                            <div>
                                <p className="font-semibold">📞 Phone</p>
                                <p>+60 11-1119 0377 (En. Dzulqarnain Adzmi)</p>
                                <p>+60 11-6513 9295 (En. Prabu)</p>
                            </div>

                            <div>
                                <p className="font-semibold">📧 Email</p>
                                <p>idzulqarnain.adzmi@sabaah7.com</p>
                                <p>prabu.daymudoo@sabaah7.com</p>
                            
                            </div>

                            <div>
                                <p className="font-semibold">📍 Address</p>
                                <a
                                    href="https://www.google.com/maps"
                                    target="_blank"
                                    className="text-blue-600 underline"
                                >
                                    Open Location in Google Maps
                                </a>
                            </div>

                        </div>

                        {/* SOCIAL MEDIA */}
                        <div className="mt-8">
                            <h3 className="font-bold mb-3">Social Media</h3>

                            <div className="space-y-2">
                                <a className="text-blue-600 block" href="#">Facebook</a>
                                <a className="text-pink-600 block" href="#">Instagram</a>
                                <a className="text-sky-500 block" href="#">TikTok</a>
                            </div>
                        </div>
                    </div>

                   {/* RIGHT SIDE (MAP PREVIEW) */}
<div className="bg-gray-100 p-6 rounded-xl shadow">

    <h3 className="text-xl font-bold mb-4">Our Headquarters</h3>

    <p className="text-gray-600 mb-4">
        Sabaah7 HQ is located in Malaysia and manages multiple business operations
        including food, agriculture, tailoring, and livestock.
    </p>

    {/* MAP PREVIEW */}
    <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
        <iframe
            src="https://www.google.com/maps?q=Kuala%20Lumpur&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>

</div>
                </div>
            </div>

        </div>
    );
}
Contact.layout = page => <AuthenticatedLayout children={page} />;