import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import styles from './ServicesPage.module.css';

const ServicesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const criteria = [
    {
      number: '01',
      title: 'Creating true value to the stakeholders',
      image: '/logistics.jpg'
    },
    {
      number: '02',
      title: 'Building of sustainable businesses that are founded on a culture of excellence in performance',
      image: '/oil-gas.jpg'
    },
    {
      number: '03',
      title: 'Creating a positive impact on the Iraqi economy',
      image: '/automotive.jpg'
    },
    {
      number: '04',
      title: 'Transferring skills and knowledge to the Iraqi workforce and the development of Iraqi human resources',
      image: '/banner.jpg'
    }
  ];


  const handleNavClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.servicesPage}>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive solutions for successful market entry and sustainable growth in Iraq"
      />
      
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introContent}>
            <p className={styles.introText}>
              Numerus Group is Iraq's leading business enabler, providing comprehensive market entry 
              and operational support to international companies. With over two decades of experience 
              and deep local expertise, we bridge the gap between global ambitions and local success, 
              creating sustainable value for our partners and contributing to Iraq's economic growth.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.wayForwardSection}>
        <div className={styles.wayForwardContent}>
          <h2 className={styles.wayForwardTitle}>THE WAY FORWARD</h2>
          <p className={styles.wayForwardSubtitle}>
            We continuously work to identify and invest in commercial opportunities in the service 
            and manufacturing sectors in Iraq based on the following criteria:
          </p>
          
          <div className={styles.carouselNavigation}>
            {criteria.map((item, index) => (
              <button
                key={index}
                className={`${styles.navItem} ${index === currentSlide ? styles.active : ''}`}
                onClick={() => handleNavClick(index)}
              >
                <span className={styles.navNumber}>{item.number}</span>
                <span className={styles.navLine}></span>
              </button>
            ))}
          </div>
          
          <div className={styles.accordionContainer}>
            {criteria.map((item, index) => (
              <div 
                key={index} 
                className={`${styles.accordionCard} ${index === currentSlide ? styles.expandedCard : ''}`}
                style={{
                  backgroundImage: index === currentSlide ? `url(${item.image})` : 'none',
                  cursor: 'pointer'
                }}
                onClick={() => setCurrentSlide(index)}
              >
                <div className={styles.cardOverlay}></div>
                {index === currentSlide ? (
                  <>
                    <h3 className={styles.criteriaTitle}>{item.title}</h3>
                    <div className={styles.criteriaNumber}>{item.number}</div>
                  </>
                ) : (
                  <div className={styles.verticalNumber}>{item.number}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;