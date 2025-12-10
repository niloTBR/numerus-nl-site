import { useEffect, useRef } from 'react';
import styles from './ClienteleSection.module.css';

const ClienteleSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const clients = [
    { id: 1, name: 'FEDEX' },
    { id: 2, name: 'Mercedes-Benz' },
    { id: 3, name: 'Petronas' },
    { id: 4, name: 'Shell' },
    { id: 5, name: 'Total' },
    { id: 6, name: 'BP' },
    { id: 7, name: 'Halliburton' },
    { id: 8, name: 'Schlumberger' },
    { id: 9, name: 'Baker Hughes' },
    { id: 10, name: 'Weatherford' }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollPos += scrollSpeed;
      
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft = scrollPos;
      }
      
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className={`section ${styles.clienteleSection}`}>
      <div className="container">
        <div className={styles.clienteleContent}>
          <h2 className={styles.sectionTitle}>Our Clientele</h2>
          <p className={styles.sectionSubtitle}>
            Enabling global companies to operate, distribute, and scale in Iraq with confidence and success.
          </p>
        </div>
      </div>
      
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderGradientLeft}></div>
        <div className={styles.sliderGradientRight}></div>
        <div ref={scrollRef} className={styles.clientSlider}>
          <div className={styles.sliderTrack}>
            {[...clients, ...clients].map((client, index) => (
              <div key={`${client.id}-${index}`} className={styles.clientLogo}>
                <div className={styles.logoPlaceholder}>
                  <span className={styles.logoText}>{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClienteleSection;