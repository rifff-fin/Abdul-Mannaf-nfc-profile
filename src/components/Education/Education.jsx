import { MdSchool } from 'react-icons/md'
import { FaUniversity } from 'react-icons/fa'
import styles from './Education.module.css'

const EDUCATION = [
  {
    Icon: MdSchool,
    level: 'Secondary School',
    institution: 'Govt. Laboratory High School',
    location: 'Rajshahi',
    badge: 'SSC',
  },
  {
    Icon: FaUniversity,
    level: 'University · Ongoing',
    institution: 'BRAC University',
    location: 'Dhaka',
    badge: 'BSc. CSE',
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
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
