import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './CallToActionBanner.module.css';

const CallToActionBanner = () => {
  return (
    <section className={styles.ctaBanner}>
      <div className={styles.ctaBackground}></div>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Begin your Iraq market entry with proven local expertise
          </h2>
          <p className={styles.ctaSubtitle}>
            Join leading global brands who trust Numerus Group to navigate, establish, and grow their presence in Iraq.
          </p>
          <Link to="/contact" className={`btn ${styles.ctaButton}`}>
            Partner With Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;