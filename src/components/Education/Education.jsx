import { FaUniversity } from 'react-icons/fa'
import styles from './Education.module.css'

const EDUCATION = [
  {
    Icon: FaUniversity,
    level: 'Bachelor of Science · Civil Engineering',
    institution: 'Dhaka University of Engineering & Technology (DUET)',
    location: 'Gazipur, Bangladesh',
    badge: 'BSc. Civil Eng.',
    period: 'Sep 1995 – Dec 1999',
    grade: 'CGPA 3.25 / 4.00',
  },
]

export default function Education() {
  return (
    <section className={styles.card} aria-label="Education">
      <h2 className={`${styles.sectionTitle} text-label`}>Academy & Education</h2>
      <div className={styles.timeline}>
        {EDUCATION.map((item, idx) => (
          <div key={item.institution} className={styles.entry}>
            <div className={styles.iconCol}>
              <span className={styles.iconCircle}>
                <item.Icon size={18} />
              </span>
              {idx < EDUCATION.length - 1 && <span className={styles.connector} />}
            </div>
            <div className={styles.content}>
              <span className={styles.level}>{item.level}</span>
              <span className={styles.institution}>{item.institution}</span>
              <div className={styles.meta}>
                <span className={styles.location}>{item.location}</span>
                <span className={styles.badge}>{item.badge}</span>
              </div>
              <span className={styles.period}>{item.period} · {item.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
