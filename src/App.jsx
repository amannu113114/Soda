// App.jsx
import React from 'react';
import Navbar from './Navbar';
import Model from './Model';
import Carousel from './Carousel';
import Partner from './Partner';
import Dev from './Dev';
import Footer from './Footer';
import SmoothScroll from '../SmoothScroll';

function App() {
  return (
    <>
      <SmoothScroll>
        <div>
          <Navbar />
          <section data-scroll-section><Model/></section>
          <section data-scroll-section><Carousel/></section>
          <section data-scroll-section><Partner/></section>
          <section data-scroll-section><Dev/></section>
          <section data-scroll-section><Footer/></section>
          {/* Add more sections here */}
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
