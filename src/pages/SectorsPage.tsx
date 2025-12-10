import styles from './Page.module.css';

const SectorsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <div className={styles.pageContent}>
          <h1 className={styles.pageTitle}>Our Sectors</h1>
          <p className={styles.comingSoon}>Coming Soon</p>
          <p className={styles.pageDescription}>
            Explore our diverse portfolio of sectors where we enable world-class operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectorsPage;