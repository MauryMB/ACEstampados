import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Servicios from "./components/sections/Servicios";
import Galeria from "./components/sections/Galeria";
import Proceso from "./components/sections/Proceso";
import CTA from "./components/sections/CTA";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <Galeria />
      <Proceso />
      <CTA />
      <Footer />
    </>
  );
}

export default App;