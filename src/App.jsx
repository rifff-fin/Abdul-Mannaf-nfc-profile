import { motion } from 'framer-motion'
import Header from './components/Header/Header'
import CTAButton from './components/CTAButton/CTAButton'
import Education from './components/Education/Education'
import QuickInfo from './components/QuickInfo/QuickInfo'
import SocialLinks from './components/SocialLinks/SocialLinks'
import MessageForm from './components/MessageForm/MessageForm'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function App() {
  return (
    <div className={styles.page}>
      {/* ── Animated background ── */}
      <div className={styles.bgLayer} aria-hidden="true">
        <div className={styles.bgGrid} />
        <div className={styles.bgGlow} />
        <div className={styles.bgVignette} />
        <div className={styles.scanLine} />
      </div>

      <motion.main
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Header />
        </motion.div>

        <motion.div variants={itemVariants}>
          <CTAButton />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Education />
        </motion.div>

        <motion.div variants={itemVariants}>
          <QuickInfo />
        </motion.div>

        <motion.div variants={itemVariants}>
          <SocialLinks />
        </motion.div>

        <motion.div variants={itemVariants}>
          <MessageForm />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Footer />
        </motion.div>
      </motion.main>
    </div>
  )
}
