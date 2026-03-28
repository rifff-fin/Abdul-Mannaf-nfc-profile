import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { HiArrowRight } from 'react-icons/hi'
import styles from './SocialLinks.module.css'

const SOCIAL_LINKS = [
  {
    platform: 'Instagram',
    handle: '@diganto_89',
    Icon: FaInstagram,
    href: 'https://www.instagram.com/diganto_89',
  },
  {
    platform: 'YouTube',
    handle: '@Diggaming-k2e',
    Icon: FaYoutube,
    href: 'https://www.youtube.com/@Diggaming-k2e',
  },
  {
    platform: 'Facebook',
    handle: 'mahmoodsadiq.diganto',
    Icon: FaFacebook,
    href: 'https://www.facebook.com/mahmoodsadiq.diganto.1',
  },
  {
    platform: 'Email',
    handle: 'mahmoodsadiqdiganto473@gmail.com',
    Icon: MdEmail,
    href: 'mailto:mahmoodsadiqdiganto473@gmail.com',
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
            target="_blank"
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
