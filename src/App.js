import { useRef } from "react";
import "./App.css";
import ContactUs from "./components/ContactUs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import "./assets/css/header.css";
import "./assets/css/hero-section.css";

function App() {
  const about = useRef(null);
  const home = useRef(null);
  const contact = useRef(null);
  const services = useRef(null);

  return (
    <>
      <Header about={about} home={home} contact={contact} services={services} />
      <HeroSection home={home} />
      <Features about={about} />
      <hr />
      <Services services={services} />
      <hr />
      <ContactUs contact={contact} />
      <Footer />
    </>
  );
}

export default App;
