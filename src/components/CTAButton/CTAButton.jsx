import { FaWhatsapp } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import styles from './CTAButton.module.css'

const WHATSAPP_URL = 'https://wa.me/8801715170946'

export default function CTAButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.cta}
      aria-label="Message on WhatsApp"
    >
      <span className={styles.iconWrap}>
        <FaWhatsapp size={22} />
      </span>
      <span className={styles.label}>Add to Contact / Message Me</span>
      <HiArrowRight size={18} className={styles.arrow} />
    </a>
  )
}
