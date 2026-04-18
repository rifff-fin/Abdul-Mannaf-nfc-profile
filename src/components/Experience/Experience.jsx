import { MdEngineering, MdRadio } from 'react-icons/md'
import { FaRoad, FaBuilding, FaMosque } from 'react-icons/fa'
import styles from './Experience.module.css'

const EXPERIENCE = [
  {
    Icon: MdEngineering,
    role: 'Sub-Divisional Engineer',
    org: 'Roads & Highways Department (RHD)',
    location: 'Road Division, Rajshahi',
    period: 'Oct 2020 – Present',
    type: 'Full-time · On-site',
    badge: '5 yrs 7 mos',
    note: 'Project Management & Civil Engineering',
  },
  {
    Icon: FaRoad,
    role: 'Assistant Engineer',
    org: 'Roads & Highways Department (RHD)',
    location: 'Road Division, Rajshahi',
    period: 'May 2017 – Oct 2020',
    type: 'Full-time · On-site',
    badge: '3 yrs 6 mos',
    note: 'Procurement & Online Tendering Process',
  },
  {
    Icon: FaBuilding,
    role: 'Civil Structural Designer',
    org: 'Rajshahi Development Authority (RDA)',
    location: 'Rajshahi, Bangladesh',
    period: 'Sep 2015 – Dec 2020',
    type: 'Part-time · On-site',
    badge: '5 yrs 4 mos',
    note: 'Structural Design complying with BNBC guidelines',
  },
  {
    Icon: MdRadio,
    role: 'News Presenter',
    org: 'Bangladesh Betar (Radio Station)',
    location: 'Rajshahi, Bangladesh',
    period: 'Aug 2025 – Dec 2025',
    type: 'Part-time · On-site',
    badge: '5 mos',
    note: 'Present Bangla News',
  },
  {
    Icon: FaMosque,
    role: 'FIEB Member',
    org: 'The Institution of Engineers, Bangladesh (IEB)',
    location: 'Dhaka, Bangladesh',
    period: 'Aug 2003 – Dec 2025',
    type: 'Full-time · Remote',
    badge: '22 yrs 5 mos',
    note: 'Practice Civil Engineering Professional Roles',
  },
]

export default function Experience() {
  return (
    <section className={styles.card} aria-label="Experience">
      <h2 className={`${styles.sectionTitle} text-label`}>Experience</h2>
      <div className={styles.timeline}>
        {EXPERIENCE.map((item, idx) => (
          <div key={`${item.role}-${item.org}`} className={styles.entry}>
            <div className={styles.iconCol}>
              <span className={styles.iconCircle}>
                <item.Icon size={17} />
              </span>
              {idx < EXPERIENCE.length - 1 && <span className={styles.connector} />}
            </div>
            <div className={styles.content}>
              <span className={styles.role}>{item.role}</span>
              <span className={styles.org}>{item.org}</span>
              <div className={styles.meta}>
                <span className={styles.period}>{item.period}</span>
                <span className={styles.badge}>{item.badge}</span>
              </div>
              <span className={styles.sub}>{item.type} · {item.location}</span>
              <span className={styles.note}>{item.note}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
