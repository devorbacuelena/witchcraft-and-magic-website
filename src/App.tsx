import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MagicDuality from "./components/MagicDuality";
import Services from "./components/Services";
import Offerings from "./components/Offerings";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-night-950 text-purple-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MagicDuality />
        <Services />
        <Offerings />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
