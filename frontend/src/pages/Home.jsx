import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    return (
    <>
        <Navbar />
        <section className="p-6">
            <h1 className="text-3xl">
                Bienvenido a TourMate
            </h1>
        </section>
        <Footer />
    </>
    
    );
}  