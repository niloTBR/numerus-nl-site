import { Link } from 'react-router-dom';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={`section ${styles.aboutSection}`}>
      <div className="container">
        <div className={styles.aboutContent}>
          <h2 className={styles.aboutTitle}>About</h2>
          <p className={styles.aboutText}>
            Numerus Group is Iraq's leading business enabler, providing comprehensive market entry 
            and operational support to international companies. With over two decades of experience 
            and deep local expertise, we bridge the gap between global ambitions and local success, 
            creating sustainable value for our partners and contributing to Iraq's economic growth.
          </p>
          <Link to="/about" className="btn btn-primary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;