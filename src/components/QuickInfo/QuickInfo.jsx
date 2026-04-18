import { MdLocationOn, MdEngineering, MdWork } from 'react-icons/md'
import styles from './QuickInfo.module.css'

const INFO_ITEMS = [
  {
    Icon: MdLocationOn,
    label: 'Location',
    value: 'Rajshahi, Bangladesh',
    sub: 'Road Division, Rajshahi',
  },
  {
    Icon: MdEngineering,
    label: 'Current Role',
    value: 'Sub-Divisional Engineer',
    sub: 'Roads & Highways Dept.',
  },
  {
    Icon: MdWork,
    label: 'Experience',
    value: '9+ Years',
    sub: 'Civil & Structural Engineering',
  },
]

export default function QuickInfo() {
  return (
    <section className={styles.card} aria-label="Quick info">
      <h2 className={`${styles.sectionTitle} text-label`}>Quick Info</h2>
      <ul className={styles.list}>
        {INFO_ITEMS.map((item, idx) => (
          <li
            key={item.label}
            className={`${styles.row} ${idx < INFO_ITEMS.length - 1 ? styles.divider : ''}`}
          >
            <span className={styles.iconCircle} aria-hidden="true">
              <item.Icon size={17} />
            </span>
            <div className={styles.textGroup}>
              <span className={`${styles.rowLabel} text-label`}>{item.label}</span>
              <span className={styles.rowValue}>{item.value}</span>
              {item.sub && (
                <span className={styles.rowSub}>{item.sub}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
