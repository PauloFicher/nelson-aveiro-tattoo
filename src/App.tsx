import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from "./components/Gallery";
import About from './components/About';
import BackToTopButton from './components/BackToTopButton';

import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <BackToTopButton />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;