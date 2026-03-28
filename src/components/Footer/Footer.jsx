import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <p className={styles.text}>
        <span className={styles.dot} aria-hidden="true">◆</span>
        Powered by{' '}
        <a
          href="https://finprojukti.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.brand}
        >
          <span className={styles.brandFin}>Fin</span><span className={styles.brandProjukti}>projukti</span>
        </a>
        {' '}| NFC Tech
        <span className={styles.dot} aria-hidden="true">◆</span>
      </p>
      <p className={styles.sub}>Tap · Connect · Grow</p>
    </footer>
  )
}
