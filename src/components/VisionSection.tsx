import { useState, useEffect, useRef } from 'react';
import styles from './VisionSection.module.css';

const VisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [numbers, setNumbers] = useState({ years: 0, partners: 0, jobs: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 50;
      const interval = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setNumbers({
          years: Math.floor(20 * progress),
          partners: Math.floor(50 * progress),
          jobs: Math.floor(1000 * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setNumbers({ years: 20, partners: 50, jobs: 1000 });
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section className={`section ${styles.visionSection}`} ref={sectionRef}>
      <div className="container">
        <div className={styles.visionGrid}>
          <div className={styles.visionImage}>
            <div 
              className={styles.imagePlaceholder}
              style={{ backgroundImage: 'url(/getty-vision.jpg)' }}
            >
            </div>
          </div>
          <div className={styles.visionContent}>
            <h2 className={styles.visionTitle}>Vision</h2>
            <p className={styles.visionText}>
              To be the catalyst for sustainable investment and economic development in Iraq, 
              creating lasting value for our partners while contributing to the nation's prosperity.
            </p>
            <div className={styles.visionMetrics}>
              <div className={styles.metric}>
                <span className={styles.metricNumber}>{numbers.years}+</span>
                <span className={styles.metricLabel}>Years of Excellence</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricNumber}>{numbers.partners}+</span>
                <span className={styles.metricLabel}>Global Partners</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricNumber}>{numbers.jobs}+</span>
                <span className={styles.metricLabel}>Jobs Created</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;