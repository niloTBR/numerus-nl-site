import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
          
          {/* Company Logos Grid */}
          <div className={styles.companiesGrid}>
            <Link to="/sectors/logistics" className={styles.companyCard}>
              <div className={styles.companyLogoWrapper}>
                <img src="/estilam-logo.png" alt="Al-Estilam" className={styles.companyLogoImg} />
              </div>
              <p className={styles.companySector}>Logistics</p>
            </Link>
            <Link to="/sectors/automotive" className={styles.companyCard}>
              <div className={styles.companyLogoWrapper}>
                <div className={styles.leadingStarLogo}>LEADING STAR</div>
              </div>
              <p className={styles.companySector}>Automotive</p>
            </Link>
            <Link to="/sectors/oil-gas" className={styles.companyCard}>
              <div className={styles.companyLogoWrapper}>
                <img src="/agos-logo.jpg" alt="Al-Gharraf" className={styles.companyLogoImg} />
              </div>
              <p className={styles.companySector}>Oil & Gas</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={styles.missionVisionSection}>
        <div className={styles.parallaxBg}></div>
        <div className="container">
          <div className={styles.missionVisionGrid}>
            <div className={styles.missionContent}>
              <h2 className={styles.sectionLabel}>OUR MISSION</h2>
              <p className={styles.statementText}>
                To apply our experience in identifying and developing 
                profitable and sustainable business in Iraq.
              </p>
            </div>
            <div className={styles.visionContent}>
              <h2 className={styles.sectionLabel}>OUR VISION</h2>
              <p className={styles.statementText}>
                To be the leading enabler of sustainable business growth in Iraq, 
                bridging international excellence with local opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Corporate Culture Section */}
      <section className={styles.cultureSection}>
        <div className="container">
          <div className={styles.cultureHeader}>
            <h2 className={styles.cultureTitle}>CORPORATE CULTURE</h2>
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

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className="container">
          <div className={styles.timelineHeader}>
            <h2 className={styles.timelineTitle}>OUR JOURNEY</h2>
          </div>
          <div className={styles.timelineContainer}>
            <div className={styles.timelineLine}></div>
            <div className={styles.timelineEvents}>
              <div className={styles.timelineEvent}>
                <div className={styles.timelineYear}>2000</div>
                <div className={styles.timelineContent}>
                  <h3>Foundation</h3>
                  <p>Established operations in Baghdad, beginning our journey in Iraq's emerging market</p>
                </div>
              </div>
              <div className={styles.timelineEvent}>
                <div className={styles.timelineYear}>2005</div>
                <div className={styles.timelineContent}>
                  <h3>Expansion</h3>
                  <p>Expanded operations to Basra and Erbil, establishing nationwide presence</p>
                </div>
              </div>
              <div className={styles.timelineEvent}>
                <div className={styles.timelineYear}>2010</div>
                <div className={styles.timelineContent}>
                  <h3>Strategic Partnerships</h3>
                  <p>Formed key alliances with international corporations entering Iraqi market</p>
                </div>
              </div>
              <div className={styles.timelineEvent}>
                <div className={styles.timelineYear}>2015</div>
                <div className={styles.timelineContent}>
                  <h3>Sector Diversification</h3>
                  <p>Expanded into automotive and logistics sectors alongside energy operations</p>
                </div>
              </div>
              <div className={styles.timelineEvent}>
                <div className={styles.timelineYear}>2020</div>
                <div className={styles.timelineContent}>
                  <h3>Regional Leadership</h3>
                  <p>Established presence in UAE, becoming a regional business enabler</p>
                </div>
              </div>
              <div className={styles.timelineEvent}>
                <div className={styles.timelineYear}>2024</div>
                <div className={styles.timelineContent}>
                  <h3>Future Forward</h3>
                  <p>Continuing to bridge international excellence with local opportunity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground}>
          <div className={styles.ctaOverlay}></div>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Enter the Iraqi Market?</h2>
              <p className={styles.ctaSubtitle}>Let's discuss how we can help you succeed</p>
              <a href="/contact" className={styles.ctaButton}>
                Get Started
                <ArrowRight size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;