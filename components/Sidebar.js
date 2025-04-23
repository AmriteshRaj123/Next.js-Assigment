import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>Weframe</div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.active}>📊 Dashboard</li>
          <li>📝 Content</li>
          <li>👤 User</li>
          <li>✅ Task</li>
          <li>🌐 App/Web</li>
          <li>📈 Analytics</li>
          <li>🖼️ Media</li>
          <li>🎨 Customize</li>
          <li>🔔 Notifications</li>
          <li>💳 Subscription</li>
          <li>⚙️ Settings</li>
          <li>🎧 Contact Support</li>
        </ul>
      </nav>
    </aside>
  );
}
