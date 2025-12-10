import styles from './Page.module.css';

const OilGasPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <div className={styles.pageContent}>
          <h1 className={styles.pageTitle}>Oil & Gas</h1>
          <p className={styles.comingSoon}>Al-Gharraf Oil Services (AGOS)</p>
          <p className={styles.pageDescription}>
            Specialized oil field services and energy sector solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OilGasPage;