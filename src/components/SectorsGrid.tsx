import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './SectorsGrid.module.css';

const SectorsGrid = () => {
  const sectors = [
    {
      id: 'logistics',
      title: 'Logistics',
      company: 'Al-Estilam Express Cargo Company',
      description: 'Comprehensive logistics solutions and express cargo services across Iraq',
      link: '/sectors/logistics',
      image: '/logistics.jpg'
    },
    {
      id: 'automotive',
      title: 'Automotive',
      company: 'Leading Star Automotive Company',
      description: 'Premium automotive distribution and retail network throughout Iraq',
      link: '/sectors/automotive',
      image: '/automotive.jpg'
    },
    {
      id: 'oil-gas',
      title: 'Oil & Gas',
      company: 'Al-Gharraf Oil Services (AGOS)',
      description: 'Specialized oil field services and energy sector solutions',
      link: '/sectors/oil-gas',
      image: '/oil-gas.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < sectors.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640 && currentIndex !== 0) {
        setCurrentIndex(0);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  return (
    <section className={`section ${styles.sectorsSection}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Sectors</h2>
        
        {/* Desktop Grid */}
        <div className={styles.sectorsGrid}>
          {sectors.map((sector) => (
            <Link
              key={sector.id}
              to={sector.link}
              className={styles.sectorCard}
            >
              <div className={styles.cardImage}>
                <div 
                  className={styles.imagePlaceholder}
                  style={{ backgroundImage: `url(${sector.image})` }}
                ></div>
                <div className={styles.cardOverlay}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{sector.title}</h3>
                <p className={styles.cardCompany}>{sector.company}</p>
                <p className={styles.cardDescription}>{sector.description}</p>
                <span className={styles.cardLink}>
                  Learn more
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className={styles.mobileCarousel}>
          <div 
            ref={containerRef}
            className={styles.carouselContainer}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {sectors.map((sector) => (
                <Link
                  key={sector.id}
                  to={sector.link}
                  className={styles.carouselCard}
                >
                  <div className={styles.cardImage}>
                    <div 
                      className={styles.imagePlaceholder}
                      style={{ backgroundImage: `url(${sector.image})` }}
                    ></div>
                    <div className={styles.cardOverlay}></div>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{sector.title}</h3>
                    <p className={styles.cardCompany}>{sector.company}</p>
                    <p className={styles.cardDescription}>{sector.description}</p>
                    <span className={styles.cardLink}>
                      Learn more
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className={styles.pagination}>
            {sectors.map((_, index) => (
              <button
                key={index}
                className={`${styles.paginationDot} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsGrid;