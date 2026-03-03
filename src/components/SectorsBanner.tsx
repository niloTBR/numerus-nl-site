import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SectorsBanner.module.css';

const SectorsBanner = () => {
  const [hoveredSector, setHoveredSector] = useState<string | null>('logistics');

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

  const backgroundImage = hoveredSector 
    ? sectors.find(s => s.id === hoveredSector)?.image 
    : null;

  return (
    <section className={styles.sectorsBanner}>
      <div 
        className={styles.bannerBackground}
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
      >
        <div className={styles.bannerOverlay} />
      </div>
      
      <div className="container">
        <div className={styles.sectorsRow}>
          {sectors.map((sector) => (
            <Link
              key={sector.id}
              to={sector.link}
              className={styles.sectorItem}
              onMouseEnter={() => setHoveredSector(sector.id)}
              onMouseLeave={() => setHoveredSector(null)}
            >
              <h3 className={styles.sectorTitle}>{sector.title}</h3>
              <p className={styles.sectorCompany}>{sector.company}</p>
              <p className={styles.sectorDescription}>{sector.description}</p>
              <span className={styles.sectorLink}>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsBanner;