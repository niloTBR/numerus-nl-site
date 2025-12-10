import Hero from '../components/Hero';
import InfoStrip from '../components/InfoStrip';
import AboutSection from '../components/AboutSection';
import SectorsGrid from '../components/SectorsGrid';
import SectorsBanner from '../components/SectorsBanner';
import VisionSection from '../components/VisionSection';
import ClienteleSection from '../components/ClienteleSection';
import CallToActionBanner from '../components/CallToActionBanner';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoStrip />
      <AboutSection />
      <div className={styles.mobileOnly}>
        <SectorsGrid />
      </div>
      <div className={styles.desktopOnly}>
        <SectorsBanner />
      </div>
      <VisionSection />
      <ClienteleSection />
      <CallToActionBanner />
    </>
  );
};

export default HomePage;