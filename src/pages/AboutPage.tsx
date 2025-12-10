import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  const values = [
    { title: 'Teamwork', description: 'Collaborative excellence in every endeavor' },
    { title: 'Think Different', description: 'Innovation through unique perspectives' },
    { title: 'Ownership', description: 'Taking responsibility for our impact' },
    { title: 'Pride', description: 'Excellence in everything we do' },
    { title: 'Deliver Value', description: 'Creating lasting impact for stakeholders' }
  ];

  const principles = [
    { number: '1', label: 'Integrity', description: 'Unwavering commitment to ethical business practices' },
    { number: '2', label: 'Excellence', description: 'Pursuing the highest standards in all operations' },
    { number: '3', label: 'Differentiation', description: 'Creating unique value propositions in the market' },
    { number: '4', label: 'Mutuality', description: 'Building win-win partnerships for sustainable growth' },
    { number: '5', label: 'Teamwork', description: 'Leveraging collective strength for greater impact' },
    { number: '6', label: 'Passion', description: 'Bringing energy and commitment to every project' }
  ];

  return (
    <div className={styles.aboutPage}>
      <PageHeader 
        title="About Numerus" 
        subtitle="A legacy of excellence spanning generations"
      />
      
      {/* Family Business Section */}
      <section className={styles.familySection}>
        <div className="container">
          <div className={styles.familyContent}>
            <h2 className={styles.sectionTitle}>FAMILY BUSINESS</h2>
            <p className={styles.familyText}>
              The business experience of the principals of Numerus Group spans several 
              generations and is deeply rooted in a tradition of excellence, diligence and creativity 
              coupled with an unbending ethic of fairness and responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionContent}>
            <h2 className={styles.missionTitle}>OUR MISSION</h2>
            <p className={styles.missionStatement}>
              To apply our experience in identifying and developing 
              profitable and sustainable business in Iraq.
            </p>
            <p className={styles.missionSubtext}>
              In doing so we rely on four driving principals:
            </p>
          </div>
        </div>
      </section>

      {/* Principles Grid Section */}
      <section className={styles.principlesSection}>
        <div className="container">
          <div className={styles.principlesGrid}>
            {principles.map((principle, index) => (
              <div key={index} className={styles.principleCard}>
                <div className={styles.principleNumber}>{principle.number}</div>
                <h3 className={styles.principleLabel}>{principle.label}</h3>
                <p className={styles.principleDescription}>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Culture Section */}
      <section className={styles.cultureSection}>
        <div className="container">
          <div className={styles.cultureHeader}>
            <h2 className={styles.cultureTitle}>
              Numerus strives to develop a <span>Corporate Culture</span> in its operations...
            </h2>
            <p className={styles.cultureSubtitle}>
              ...built on the following Corporate Values
            </p>
          </div>
          
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueHeader}>
                  <span className={styles.valueNumber}>{String(index + 1).padStart(2, '0')}</span>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                </div>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Partner with Excellence?</h2>
            <p>Discover how our values translate into success for your business.</p>
            <a href="/contact" className={styles.ctaButton}>
              Get Started
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;