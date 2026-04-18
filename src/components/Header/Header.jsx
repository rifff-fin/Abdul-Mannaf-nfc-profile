import Tilt from 'react-parallax-tilt'
import Typewriter from 'typewriter-effect'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Tilt profile picture */}
      <div className={styles.tiltWrapper}>
        <Tilt
          tiltMaxAngleX={12}
          tiltMaxAngleY={12}
          glareEnable={true}
          glareMaxOpacity={0.12}
          glareColor="#6b1f2a"
          glarePosition="all"
          glareBorderRadius="50%"
          scale={1.05}
          transitionSpeed={700}
          gyroscope={true}
        >
          <div className={styles.avatarRing}>
            <div className={styles.avatarInner}>
          <img
                src="/abm.jpeg"
                alt="Abdul Mannaf Akhand"
                className={styles.avatar}
              />
            </div>
          </div>
        </Tilt>
      </div>

      {/* Name with gradient */}
      <h1 className={styles.name}>
        Abdul Mannaf Akhand
      </h1>

      {/* Typewriter subtitle */}
      <div className={styles.typewriterWrap}>
        <Typewriter
          options={{
            strings: [
              'Sub Divisional Engineer, RHD.',
              'Structural Engineer, RDA.',
              'News Presenter, Bangladesh Betar.',
              'Civil Engineering Professional.',
            ],
            autoStart: true,
            loop: true,
            delay: 55,
            deleteSpeed: 30,
          }}
        />
      </div>
    </header>
  )
}
