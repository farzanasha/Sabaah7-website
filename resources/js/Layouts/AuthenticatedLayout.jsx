import Navbar from '@/Components/Navbar';

export default function AuthenticatedLayout({ header, children }) {
    return (
        <div className="min-h-screen bg-gray-100">

            <Navbar />

            <main className="pt-20">
                {children}
            </main>

            <footer className="bg-gray-900 text-white text-center py-6 mt-10">
                © 2026 Sabaah7. All rights reserved.
            </footer>

        </div>
    );
}