import styles from '../styles/FilterBar.module.css';

export default function FilterBar() {
  return (
    <>
      <div className={styles.filterActions}>
        <div className={styles.filterAct}>
        <input className={styles.searchBox} placeholder="Search" />
        <button className={styles.iconBtn}>📅</button>
        <button className={styles.iconBtn}>☰</button>
        <button className={styles.addNew}>Add New Story</button>
        </div>
      </div>
    <div className={styles.filterBar}>
      <div className={styles.tabs}>
        <button className={styles.active}>All (4,500)</button>
        <button>Draft (1,203)</button>
        <button>Pending (890)</button>
        <button>Published (2,432)</button>
        <button>Archived (320)</button>
      </div>

    </div>
    </>
  );
}
