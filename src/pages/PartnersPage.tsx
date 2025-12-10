import PageHeader from '../components/PageHeader';
import styles from './PartnersPage.module.css';

const PartnersPage = () => {
  const partners = [
    { name: 'ABB', logo: '/partner-logos/abb.png' },
    { name: 'Schneider Electric', logo: '/partner-logos/schneider.png' },
    { name: 'Caterpillar', logo: '/partner-logos/caterpillar.png' },
    { name: 'Siemens', logo: '/partner-logos/siemens.png' },
    { name: 'General Electric', logo: '/partner-logos/ge.png' },
    { name: 'Honeywell', logo: '/partner-logos/honeywell.png' },
    { name: 'Shell', logo: '/partner-logos/shell.png' },
    { name: 'BP', logo: '/partner-logos/bp.png' },
    { name: 'ExxonMobil', logo: '/partner-logos/exxon.png' },
    { name: 'Chevron', logo: '/partner-logos/chevron.png' },
    { name: 'TotalEnergies', logo: '/partner-logos/total.png' },
    { name: 'Halliburton', logo: '/partner-logos/halliburton.png' },
    { name: 'Schlumberger', logo: '/partner-logos/schlumberger.png' },
    { name: 'Baker Hughes', logo: '/partner-logos/bakerhughes.png' },
    { name: 'Weatherford', logo: '/partner-logos/weatherford.png' },
    { name: 'Petrofac', logo: '/partner-logos/petrofac.png' },
    { name: 'KBR', logo: '/partner-logos/kbr.png' },
    { name: 'Fluor', logo: '/partner-logos/fluor.png' },
    { name: 'Bechtel', logo: '/partner-logos/bechtel.png' },
    { name: 'Emerson', logo: '/partner-logos/emerson.png' }
  ];

  return (
    <div className={styles.partnersPage}>
      <PageHeader 
        title="Our Partners" 
        subtitle="Working with global leaders to deliver excellence in Iraq"
      />
      
      <section className={styles.partnersSection}>
        <div className="container">
          <div className={styles.introContent}>
            <p className={styles.introText}>
              Over two decades, Numerus Group has built strategic partnerships with the world's leading 
              companies across energy, infrastructure, technology, and industrial sectors. These partnerships 
              enable us to bring international best practices and cutting-edge solutions to the Iraqi market.
            </p>
          </div>
          
          <div className={styles.partnersGrid}>
            {partners.map((partner, index) => (
              <div key={index} className={styles.partnerCard}>
                <div className={styles.logoContainer}>
                  <div className={styles.logoPlaceholder}>
                    {partner.name.split(' ').map(w => w[0]).join('')}
                  </div>
                </div>
                <p className={styles.partnerName}>{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;