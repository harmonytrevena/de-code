import React from 'react';
import { StateProvider } from '../context/context';
import Hero from './Hero/Hero';
import About from './About/About';
import Graditude from './Graditude/Graditude';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';


function App() {
  return (
    <>
      <StateProvider>
        <Hero />
        <About />
        <Graditude />
        <Contact />
        <Footer />
      </StateProvider>
    </>
  );
}

export default App;
