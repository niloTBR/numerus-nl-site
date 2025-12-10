import styles from './Page.module.css';

const PrivacyPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <div className={styles.pageContent}>
          <h1 className={styles.pageTitle}>Privacy Policy</h1>
          <p className={styles.comingSoon}>Coming Soon</p>
          <p className={styles.pageDescription}>
            Our privacy policy will be available here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;