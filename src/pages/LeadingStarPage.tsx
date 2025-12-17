import { ArrowRight, Car, Wrench, Users, Clock, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import PageHeader from '../components/PageHeader';
import styles from './LeadingStarPage.module.css';

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

const LeadingStarPage = () => {
  const services = [
    {
      icon: Car,
      title: 'Commercial Vehicles',
      description: 'Daimler Mercedes Benz trucks, buses, and vans distribution'
    },
    {
      icon: Wrench,
      title: 'After Sales Service',
      description: 'World-class facilities and service in accordance with Daimler standards'
    },
    {
      icon: Users,
      title: 'Dealership Network',
      description: 'Comprehensive coverage across Iraq and Kurdistan region'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Established Presence',
      description: 'Showroom and service center in Erbil since 2014'
    },
    {
      icon: Shield,
      title: 'Daimler Partnership',
      description: 'Joint venture with Numerus and Gargash UAE'
    },
    {
      icon: Award,
      title: 'Global Standards',
      description: 'Meeting Daimler\'s international requirements'
    }
  ];

  const clients = [
    'Iraqi Government',
    'Kurdistan Regional Government',
    'Oil Companies',
    'Construction Firms',
    'Logistics Companies',
    'Transportation Services',
    'Public Transport',
    'Private Enterprises'
  ];

  return (
    <div className={styles.leadingStarPage}>
      <PageHeader 
        title="Automotive" 
        subtitle="Leading Star Automotive Co."
      />
      
      {/* Introduction Section */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introContent}>
            <h2 className={styles.sectionTitle}>ABOUT LEADING STAR</h2>
            <p className={styles.introText}>
              Leading Star Automotive Co., a joint venture between Numerus and Gargash (UAE), 
              has been awarded the Iraq-Kurdistan region dealership for Daimler Mercedes Benz 
              commercial vehicles including Trucks (Actros), Busses (Sprinter) and Vans (V-Class and Viano). 
              We provide world-class facilities and after sales services in accordance with Daimler's 
              global requirements in Iraq.
            </p>
          </div>
          
          {/* Partnership Section */}
          <div className={styles.partnershipHeader}>
            <h2 className={styles.sectionTitle}>EXCLUSIVE DEALERSHIP</h2>
          </div>
          <div className={styles.partnersGrid}>
            <div className={styles.partnerCard}>
              <div className={styles.partnerLogoWrapper}>
                <span className={styles.partnerLogo}>Mercedes-Benz</span>
              </div>
              <p className={styles.partnerLabel}>Commercial Vehicles</p>
            </div>
            <div className={styles.partnerCard}>
              <div className={styles.partnerLogoWrapper}>
                <span className={styles.partnerLogo}>Daimler</span>
              </div>
              <p className={styles.partnerLabel}>Global Partnership</p>
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
              <h2 className={styles.sectionTitle}>WHY CHOOSE LEADING STAR</h2>
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
              <h2 className={styles.coverageTitle}>MARKET PRESENCE</h2>
              <p className={styles.coverageDescription}>
                Leading Star has established a strong presence in the Iraq-Kurdistan region with 
                an interim showroom and services centre in Erbil launched during the third quarter of 2014.
              </p>
            </div>
            <div className={styles.statsBoxes}>
              <div className={styles.statBox}>
                <span className={styles.statNumber}><CountUpNumber end={2014} /></span>
                <span className={styles.statLabel}>Established</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}><CountUpNumber end={2} /></span>
                <span className={styles.statLabel}>Regions</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}><CountUpNumber end={4} /></span>
                <span className={styles.statLabel}>Vehicle Types</span>
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

export default LeadingStarPage;