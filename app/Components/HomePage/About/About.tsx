import PulseDot from '../../PulseDot/PulseDot'
import styles from './about.module.css'

export default function About() {
    return (
        <div className="page-width section">
            <div className="section-header">
                <h2>Who am I?</h2>
            </div>
            <div className={styles.grid}>
                <img src={'https://img.freepik.com/premium-photo/man-portrait-tablet-with-smile-office-research-networking-stock-market-investment-portfolio-manager-tech-communication-with-clients-proposal-management-corporate-advice_590464-408461.jpg'} />
                <PulseDot>
                    <p>
                        <span className={styles.text}>
                            I’m just getting started, and I want to be upfront — <span className={styles.boldText}>it’s just me</span> behind this agency.
                        </span>
                        <br /><br />
                        <span className={styles.text}>
                            I’ve been programming for <span className={styles.boldText}>5 years</span> and specialize in tools like <span className={styles.boldText}>Next.js, API integration, and database-backed systems</span>. After helping my first business, I realized the real impact the right software can have — and now <span className={styles.highlightedText}>I’m all in.</span>
                        </span>
                        <br /><br />
                        <span className={styles.text}>
                            The difference between me and other agencies is I <span className={styles.boldText}>don’t disappear</span> after delivery — <span className={styles.highlightedText}>I handle maintenance, updates, and improvements</span> so your tools keep working as your <span className={styles.boldText}>business grows.</span>
                        </span>
                        <br /><br />
                        <span className={styles.text}>
                            <span className={styles.highlightedText}>My goal is simple:</span> streamline your operations so you can focus on what matters. If you're interested, <span className={styles.boldText}>I'm currently open to new projects.</span>
                        </span>
                    </p>
                </PulseDot >
            </div>
        </div>
    )
}