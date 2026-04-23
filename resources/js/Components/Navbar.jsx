//import { Link } from '@inertiajs/react';
import { usePage, Link } from '@inertiajs/react';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-md transition-all duration-300">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

                <div>
                        <img 
                                src="/images/logo.png" 
                                alt="Sabaah7 Logo"
                                className="h-10"
                        />
                </div>

                <div className="flex gap-6">

                    <Link href="/" className="hover:text-green-700">
                        Home
                    </Link>

                    <Link href="/about" className="hover:text-green-700">
                        About
                    </Link>

                    <Link href="/businesses" className="hover:text-green-700">
                        Businesses
                    </Link>

                    <Link href="/products" className="hover:text-green-700">
                        Products
                    </Link>

                    <Link href="/contact" className="hover:text-green-700">
                        Contact
                    </Link>

                </div>

            </div>
        </nav>
    );
}