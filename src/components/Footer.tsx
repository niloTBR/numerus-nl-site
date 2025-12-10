import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerGrid}>
            <div className={styles.footerColumn}>
              <div className={styles.brandBlock}>
                <h3 className={styles.brandName}>Numerus Group</h3>
                <p className={styles.brandTagline}>
                  A trusted partner driving sustainable growth in Iraq through world-class partnerships and local expertise.
                </p>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Locations</h4>
              <ul className={styles.locationList}>
                <li>Baghdad</li>
                <li>Basra</li>
                <li>Erbil</li>
                <li>UAE</li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/sectors">Sectors</Link></li>
                <li><Link to="/partners">Partners</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Connect</h4>
              <a href="mailto:info@numerusgroup.com" className={styles.emailLink}>
                <Mail size={16} />
                info@numerusgroup.com
              </a>
              <div className={styles.socialIcons}>
                <a 
                  href="#" 
                  className={styles.socialIcon} 
                  aria-label="LinkedIn"
                  rel="noopener noreferrer"
                >
                  in
                </a>
                <a 
                  href="#" 
                  className={styles.socialIcon} 
                  aria-label="Facebook"
                  rel="noopener noreferrer"
                >
                  f
                </a>
                <a 
                  href="#" 
                  className={styles.socialIcon} 
                  aria-label="Twitter/X"
                  rel="noopener noreferrer"
                >
                  x
                </a>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <div className={styles.footerBottomContent}>
              <p className={styles.copyright}>
                © {currentYear} Numerus Group. All rights reserved.
              </p>
              <div className={styles.legalLinks}>
                <Link to="/terms">Terms & Conditions</Link>
                <span className={styles.separator}>|</span>
                <Link to="/privacy">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;