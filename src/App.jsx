import { ContactModalProvider } from "./context/ContactModalContext";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Work from "./components/Work";
import Certificates from "./components/Certificates";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import AIChat from "./components/AIChat";

export default function App() {
  return (
    <ContactModalProvider>
      <div className="min-h-svh selection:bg-accent selection:text-bg">
        <Nav />
        <div className="md:pl-16">
          <main>
            <Hero />
            <Stats />
            <About />
            <Experience />
            <Services />
            <Work />
            <Certificates />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
      <ContactModal />
      <AIChat />
    </ContactModalProvider>
  );
}
