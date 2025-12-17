import { ArrowRight, Package, Globe, Truck, Clock, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import PageHeader from '../components/PageHeader';
import styles from './AlEstilamPage.module.css';

const CountUpNumber = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const AlEstilamPage = () => {
  const services = [
    {
      icon: Package,
      title: 'Packing Services',
      description: 'Professional packing solutions ensuring safe transport of all goods'
    },
    {
      icon: Globe,
      title: 'Global Express',
      description: 'International import/export services with FedEx and TNT'
    },
    {
      icon: Truck,
      title: 'Domestic Express',
      description: 'Nationwide delivery network covering all Iraqi provinces'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Fastest Delivery',
      description: 'Time-definite deliveries with real-time tracking'
    },
    {
      icon: Shield,
      title: 'Secure Handling',
      description: 'Advanced security protocols for all shipments'
    },
    {
      icon: Award,
      title: 'Proven Excellence',
      description: '20+ years of logistics expertise in Iraq'
    }
  ];

  const clients = [
    'Shell',
    'BP',
    'ExxonMobil',
    'Halliburton',
    'Schlumberger',
    'Baker Hughes',
    'Weatherford',
    'Petrofac',
    'KBR',
    'Bechtel',
    'UNDP',
    'WHO',
    'Iraqi Ministry of Oil',
    'Iraqi Ministry of Health',
    'Carrefour',
    'Caterpillar'
  ];

  return (
    <div className={styles.alEstilamPage}>
      <PageHeader 
        title="Logistics" 
        subtitle="Al-Estilam Express Cargo Company"
      />
      
      {/* Introduction Section */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introContent}>
            <h2 className={styles.sectionTitle}>ABOUT AL-ESTILAM</h2>
            <p className={styles.introText}>
              Taqadum Al Iraq Express (Al-Estilam Express Cargo Company) was established in 2000 as a 
              pioneer in the express cargo and logistics sector in Iraq. As the exclusive partner of 
              FedEx and TNT in Iraq, we provide comprehensive logistics solutions that bridge international 
              excellence with local expertise, ensuring reliable delivery services across the nation and beyond.
            </p>
          </div>
          
          {/* Partnership Section */}
          <div className={styles.partnershipHeader}>
            <h2 className={styles.sectionTitle}>EXCLUSIVE PARTNERS IN IRAQ</h2>
          </div>
          <div className={styles.partnersGrid}>
            <div className={styles.partnerCard}>
              <div className={styles.partnerLogoWrapper}>
                <span className={styles.partnerLogo}>FedEx</span>
              </div>
              <p className={styles.partnerLabel}>Global Express</p>
            </div>
            <div className={styles.partnerCard}>
              <div className={styles.partnerLogoWrapper}>
                <span className={styles.partnerLogo}>TNT</span>
              </div>
              <p className={styles.partnerLabel}>International Delivery</p>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesHeader}>
            <h2 className={styles.sectionTitle}>OUR SERVICES</h2>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div className="container">
          <div className={styles.whyChooseContent}>
            <div className={styles.whyChooseHeader}>
              <h2 className={styles.sectionTitle}>WHY CHOOSE AL-ESTILAM</h2>
            </div>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className={styles.featureCard}>
                    <div className={styles.featureIcon}>
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className={styles.coverageSection}>
        <div className={styles.coverageBg}></div>
        <div className="container">
          <div className={styles.coverageContent}>
            <div className={styles.coverageText}>
              <h2 className={styles.coverageTitle}>NATIONWIDE COVERAGE</h2>
              <p className={styles.coverageDescription}>
                Our extensive network covers all 18 Iraqi provinces with multiple distribution centers 
                strategically located in Baghdad, Basra, and Erbil.
              </p>
            </div>
            <div className={styles.statsBoxes}>
              <div className={styles.statBox}>
                <span className={styles.statNumber}><CountUpNumber end={18} /></span>
                <span className={styles.statLabel}>Provinces</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}><CountUpNumber end={100} />+</span>
                <span className={styles.statLabel}>Vehicles</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}><CountUpNumber end={300} />+</span>
                <span className={styles.statLabel}>Employees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className={styles.clientsSection}>
        <div className="container">
          <div className={styles.clientsHeader}>
            <h2 className={styles.sectionTitle}>OUR CLIENTS</h2>
            <Link to="/contact" className={styles.ctaButton}>
              Partner with us
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
          <div className={styles.clientsGrid}>
            {clients.map((client, index) => (
              <div key={index} className={styles.clientCard}>
                <div className={styles.clientLogo}>
                  <span>{client.split(' ').map(w => w[0]).join('')}</span>
                </div>
                <p className={styles.clientName}>{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlEstilamPage;