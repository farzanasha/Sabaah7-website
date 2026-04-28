import Navbar from "@/Components/Navbar";

export default function MainLayout({ children }) {
    return (
        <div>
            <Navbar />

            <main>
    {children}
</main>
        </div>
    );
}
