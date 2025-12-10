import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  const images = [
    '/banner.jpg',
    '/automotive.jpg',
    '/logistics.jpg',
    '/oil-gas.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const speed = 0.5; // Parallax speed
      setParallaxOffset(scrolled * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <div 
        className={styles.backgroundImages}
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.backgroundImage} ${index === currentImageIndex ? styles.active : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className={styles.heroOverlay}></div>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            A Trusted Partner Driving Sustainable Growth in Iraq
          </h1>
          <div className={styles.heroCta}>
            <Link to="/contact" className={`btn ${styles.heroButton}`}>
              Partner With Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;