import styles from './Page.module.css';

const LogisticsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <div className={styles.pageContent}>
          <h1 className={styles.pageTitle}>Logistics</h1>
          <p className={styles.comingSoon}>Al-Estilam Express Cargo Company</p>
          <p className={styles.pageDescription}>
            Comprehensive logistics solutions and express cargo services across Iraq.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogisticsPage;