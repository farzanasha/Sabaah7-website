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
                    <h1 className="text-5xl font-bold drop-shadow-lg">CONTACT US</h1>
                    <p className="mt-2 text-lg opacity-90">
                        Get in touch with Sabaah7
                    </p>
                </div>
            </div>

            {/* CONTACT SECTION */}
            <div className="py-16 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* LEFT INFO (CARD 1) */}
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl">
                        <h2 className="text-3xl font-bold mb-6 text-white">Contact Information</h2>

                        <div className="space-y-6 text-gray-200">
                            <div>
                                <p className="font-bold text-white flex items-center gap-2 text-lg mb-1">
                                    <span>📞</span> Phone
                                </p>
                                <p className="opacity-90">+60 11-1119 0377 (Encik Dzulqarnain Adzmi)</p>
                                <p className="opacity-90">+60 11-6513 9295 (Encik Prabu Daymudoo)</p>
                            </div>

                            <div>
                                <p className="font-bold text-white flex items-center gap-2 text-lg mb-1">
                                    <span>📧</span> Email
                                </p>
                                <p className="opacity-90">dzulqarnain.adzmi@sabaah7.com</p>
                                <p className="opacity-90">prabu.daymudoo@sabaah7.com</p>
                            </div>

                            <div>
                                <p className="font-bold text-white flex items-center gap-2 text-lg mb-1">
                                    <span>📍</span> Address
                                </p>
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    className="text-red-400 hover:text-red-300 underline transition font-medium"
                                >
                                    Open Location in Google Maps
                                </a>
                            </div>
                        </div>

                        {/* SOCIAL MEDIA */}
                        <div className="mt-10 pt-6 border-t border-white/10">
                            <h3 className="font-bold mb-4 text-white">Social Media</h3>
                            <div className="flex gap-6">
                                <a className="text-gray-300 hover:text-white transition" href="#">Facebook</a>
                                <a className="text-gray-300 hover:text-white transition" href="#">Instagram</a>
                                <a className="text-gray-300 hover:text-white transition" href="#">TikTok</a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE (CARD 2 - MAP PREVIEW) */}
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl flex flex-col">
                        <h3 className="text-2xl font-bold mb-4 text-white">Our Headquarters</h3>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Sabaah7 HQ is located in Malaysia and manages multiple business operations
                            including food, agriculture, tailoring, and livestock.
                        </p>

                        {/* MAP PREVIEW */}
                        <div className="w-full flex-grow min-h-[300px] rounded-2xl overflow-hidden shadow-inner border border-white/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15935.00000000000!2d101.686!3d3.139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e7d3%3A0x232e1ffaf9f90504!2sKuala%20Lumpur!5e0!3m2!1sen!2smy!4v1620000000000!5m2!1sen!2smy"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} // Effect map gelap
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