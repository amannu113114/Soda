import React, { useEffect } from 'react';
import './Under.css'; // Ensure your CSS styles are defined here
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Under = () => {
  useEffect(() => {
    const handleWheel = (event) => {
      // Detect the direction of the scroll
      const isScrollingDown = event.deltaY > 0;
      
      // Animation for the moving text based on scroll direction
      gsap.to('.moving', {
        x: isScrollingDown ? '-200%' : '0%', // Move left or reset
        duration: 3,
        ease: 'none',
        repeat: -1, // Repeat indefinitely
      });

      // Rotate the arrow icon
      gsap.to('.moving i', {
        rotate: isScrollingDown ? 180 : 0,
      });
    };

    // Add event listener for the wheel event
    window.addEventListener('wheel', handleWheel);

    // GSAP animation for the company element
    gsap.from('.company', {
      y: -100,
      duration: 4,
      delay: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: '.company',
        scroller: 'body', // Scrolling reference
        start: 'top 50%', // Start animation when top of the element reaches 50% of the viewport
        end: 'top 50%',   // End animation at the same position
        scrub: 2,        // Smooth scrubbing
        markers: true,   // Enable markers for debugging (remove in production)
      },
    });

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="Under">
      <div className="page2">
        <footer id="move">
          {Array.from({ length: 12 }).map((_, index) => (
            <div className="moving" key={index}>
              <h1>Still Under Construction</h1>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          ))}
        </footer>
      </div>
    </div>
  );
}

export default Under;
