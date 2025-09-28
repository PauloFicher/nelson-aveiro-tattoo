import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
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
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;