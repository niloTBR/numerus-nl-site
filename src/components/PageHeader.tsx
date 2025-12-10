import styles from './PageHeader.module.css';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className={styles.pageHeader}>
      <div className={styles.headerOverlay}>
        <div className="container">
          <h1 className={styles.headerTitle}>{title}</h1>
          {subtitle && (
            <p className={styles.headerSubtitle}>{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;