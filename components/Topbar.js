import styles from '../styles/Topbar.module.css';

export default function Topbar() {
  return (
    <div className={styles.topbar}>
    <div className={styles.titleSection}>
      <span className={styles.backArrow}>←</span>
      <h2>Stories</h2>
    </div>
  
    <div className={styles.profileBox}>
      <img
        src="/assets/profile.png"
        alt="profile"
        className={styles.avatar}
      />
      <div className={styles.profileText}>
        <p>Welcome back.</p>
        <strong>Akshita Patel</strong>
      </div>
      <span className={styles.downArrow}>▾</span>
    </div>
  </div>
  
  );
}
