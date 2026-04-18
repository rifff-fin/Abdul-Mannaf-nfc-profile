import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { MdSend, MdCheckCircle } from 'react-icons/md'
import styles from './MessageForm.module.css'

const MAX_CHARS = 500
const WHATSAPP_NUMBER = '8801715170946'

export default function MessageForm() {
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    if (e.target.value.length <= MAX_CHARS) {
      setMessage(e.target.value)
      setSent(false)
    }
  }

  const handleSend = () => {
    const trimmed = message.trim()
    if (!trimmed) return
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(trimmed)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
    setMessage('')
    setTimeout(() => setSent(false), 3500)
  }

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleSend()
    }
  }

  const charCount = message.length
  const canSend = message.trim().length > 0

  return (
    <section className={styles.card} aria-label="Send a message">
      {/* Header row */}
      <div className={styles.cardHeader}>
        <span className={styles.headerIcon}>
          <FaWhatsapp size={18} />
        </span>
        <div>
          <h2 className={`${styles.title} text-heading-md`}>Send a Message</h2>
          <p className={styles.subtitle}>Opens directly in WhatsApp</p>
        </div>
      </div>

      {/* Textarea */}
      <div className={styles.inputWrap}>
        <textarea
          className={styles.textarea}
          placeholder="Hi Abdul Mannaf! I'd like to connect..."
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          rows={4}
          aria-label="Message text"
          disabled={sent}
        />
        <span className={styles.charCount}>
          {charCount}/{MAX_CHARS}
        </span>
      </div>

      {/* Send button */}
      <button
        className={`${styles.sendBtn} ${sent ? styles.sentBtn : ''}`}
        onClick={handleSend}
        disabled={!canSend || sent}
        aria-label="Send message via WhatsApp"
      >
        {sent ? (
          <>
            <MdCheckCircle size={20} />
            <span>Opening WhatsApp…</span>
          </>
        ) : (
          <>
            <MdSend size={18} />
            <span>Send on WhatsApp</span>
          </>
        )}
      </button>

      <p className={styles.hint}>
        Ctrl + Enter to send
      </p>
    </section>
  )
}
