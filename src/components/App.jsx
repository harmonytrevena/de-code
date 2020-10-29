import React, { useReducer }  from 'react';
import { StateProvider } from '../context/index';

import Hero from './Hero/Hero';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Gratitude from './Gratitude/Gratitude';
import Weather from './Weather/Weather';
import Silence from './Silence/Silence';

function App() {
  const initialState = {
    item: "a moment to think",
  };

  const reducer = (state, action) => {
    const { item } = action;
    switch (action.type) {
      case "CHANGE_INPUT":
        return {
          ...state,
          item
        };
      default:
        return state;
    }
  };

  return (
    <>
      <StateProvider value={useReducer(reducer, initialState)}>
        <Hero />
        <About />
        <Gratitude />
        <Weather />
        <Silence />
        <Contact />
        <Footer />
      </StateProvider>
    </>
  );
}

export default App;
