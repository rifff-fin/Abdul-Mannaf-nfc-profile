import { FaLinkedin, FaWhatsapp, FaPhone } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import styles from './SocialLinks.module.css'

const SOCIAL_LINKS = [
  {
    platform: 'LinkedIn',
    handle: 'abdul-mannaf-akhand',
    Icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/abdul-mannaf-akhand-373077389/',
  },
  {
    platform: 'WhatsApp',
    handle: '+880 1715-170946',
    Icon: FaWhatsapp,
    href: 'https://wa.me/8801715170946',
  },
  {
    platform: 'Phone',
    handle: '01715-170946',
    Icon: FaPhone,
    href: 'tel:+8801715170946',
  },
]

export default function SocialLinks() {
  return (
    <section aria-label="Connect with me">
      <h2 className={`${styles.sectionTitle} text-label`}>Connect With Me</h2>
      <div className={styles.list}>
        {SOCIAL_LINKS.map(({ platform, handle, Icon, href }) => (
          <a
            key={platform}
            href={href}
            target={href.startsWith('tel') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className={styles.card}
            aria-label={`Visit ${platform}`}
          >
            {/* Left color stripe */}
            <span className={styles.stripe} />

            {/* Icon */}
            <span className={styles.iconWrap}>
              <Icon size={22} />
            </span>

            {/* Text */}
            <span className={styles.info}>
              <span className={styles.platformName}>{platform}</span>
              <span className={styles.handle}>{handle}</span>
            </span>

            {/* Arrow */}
            <HiArrowRight size={16} className={styles.arrow} />
          </a>
        ))}
      </div>
    </section>
  )
}
