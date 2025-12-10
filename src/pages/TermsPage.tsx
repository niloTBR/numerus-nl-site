import styles from './Page.module.css';

const TermsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <div className={styles.pageContent}>
          <h1 className={styles.pageTitle}>Terms & Conditions</h1>
          <p className={styles.comingSoon}>Coming Soon</p>
          <p className={styles.pageDescription}>
            Our terms and conditions will be available here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;