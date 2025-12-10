import styles from './Page.module.css';

const AutomotivePage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <div className={styles.pageContent}>
          <h1 className={styles.pageTitle}>Automotive</h1>
          <p className={styles.comingSoon}>Leading Star Automotive Company</p>
          <p className={styles.pageDescription}>
            Premium automotive distribution and retail network throughout Iraq.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AutomotivePage;