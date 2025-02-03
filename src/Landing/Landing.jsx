import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Stats from './Stats';
import About from './About';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import Footer from './Footer';

function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default Landing;