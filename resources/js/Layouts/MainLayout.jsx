import Navbar from "@/Components/Navbar";

export default function MainLayout({ children }) {
    return (
        <div>
            <Navbar />

            <main className="pt-20">
    {children}
</main>
        </div>
    );
}
