import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import About from '../components/About';
import BackToTopButton from '../components/BackToTopButton';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <About />
      <BackToTopButton />
      <CallToAction />
    </>
  );
};

export default HomePage;