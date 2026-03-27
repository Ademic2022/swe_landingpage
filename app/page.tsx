import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Team from "./components/Team";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-bg min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Team />
      <About />
      <Footer />
    </main>
  );
}
