import { Package, Building2, Handshake, Globe, TrendingUp, Shield } from 'lucide-react';
import styles from './InfoStrip.module.css';

const InfoStrip = () => {
  const facts = [
    {
      title: "Service provider for FEDEX in Iraq since 2003",
      icon: <Package size={24} />
    },
    {
      title: "Master distributor and nationwide retail network",
      icon: <Building2 size={24} />
    },
    {
      title: "Partner to world-class global brands",
      icon: <Handshake size={24} />
    },
    {
      title: "Enabling international market entry",
      icon: <Globe size={24} />
    },
    {
      title: "20+ years of operational excellence",
      icon: <TrendingUp size={24} />
    },
    {
      title: "Trusted by Fortune 500 companies",
      icon: <Shield size={24} />
    }
  ];

  return (
    <section className={styles.infoStrip}>
      <div className={styles.tickerWrapper}>
        <div className={styles.tickerContent}>
          {[...facts, ...facts].map((fact, index) => (
            <div key={index} className={styles.tickerItem}>
              <div className={styles.tickerIcon}>{fact.icon}</div>
              <span className={styles.tickerText}>{fact.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoStrip;