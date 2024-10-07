import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Optional: For custom styling

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            id: 1,
            image: "/fcuk.jpeg",
            title: "FCUK (Fizzy Cola Ultra Kick)",
            subtitle: "A Unique Cola Experience",
            backgroundColor: "#ff5733",  // Set specific background color here
            description: []
        },
        {
            id: 2,
            image: "/monsterr.jpeg",
            title: "Red Bull",
            subtitle: "The Original Energy Drink",
            backgroundColor: "#1a73e8",
            description: []
        },
        {
            id: 3,
            image: "/wings.jpeg",
            title: "Monster Energy",
            subtitle: "Unleash the Beast",
            backgroundColor: "#28a745",
            description: []
        },
        {
            id: 4,
            image: "/prime.jpeg",
            title: "Prime Energy Drink",
            subtitle: "Hydration Meets Energy",
            backgroundColor: "#f39c12",
            description: []
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 10000); // Change slide every 10 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div
            className="carousel"
            style={{
                backgroundColor: slides[currentIndex].backgroundColor, // Apply background color dynamically
            }}
        >
            <div className="carousel-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide) => (
                    <div className="carousel-slide" key={slide.id}>
                        <div className="candetail">
                            <div className="can" style={{ "--sticker": `url(${slide.image})` }}></div>
                        </div>
                        <div className="slide-description">
                            <h1>{slide.title}</h1>
                            <h2>{slide.subtitle}</h2>
                            <div>
                                {slide.description.map((desc, index) => (
                                    <h3 key={index}>{desc}</h3>
                                ))}
                            </div>
                            <button id='get'>Get it Now!</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-arrow left" onClick={handlePrev}>
                &#10094; {/* Left arrow */}
            </button>
            <button className="carousel-arrow right" onClick={handleNext}>
                &#10095; {/* Right arrow */}
            </button>
            <div className="carousel-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
