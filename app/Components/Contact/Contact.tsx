import { ClockIcon } from '@heroicons/react/24/outline';
import styles from './contact.module.css'

export default function Contact() {
    return (
        <form id='contact' className='page-width section'>
            <div className={`card ${styles.card}`}>
                <h2>Let's Get Started!</h2>
                <div className={styles.me}>
                    <div className={styles.active}>
                        <img src='https://i0.wp.com/www.commercialphotographynorthwestblog.co.uk/wp-content/uploads/2020/10/MDH_8729webqualitysquare.jpg?resize=560%2C560&ssl=1' />
                    </div>
                    <div className={styles.activeText}>
                        <p>
                            <strong>Joel Carmenini</strong>
                            <span className={styles.jobTitle}> &bull; Owner & Developer</span>
                        </p>
                        <div className={styles.iconWithText}><ClockIcon /><p style={{ opacity: 0.85 }}>Typically responds within a few hours</p></div>
                    </div>
                </div>
                <input className="text-input" type="text" placeholder="Name" />
                <input className="text-input" type="email" placeholder="Email" />
                <textarea className={`text-input ${styles.textArea}`} rows={10} placeholder="Brief Description" />
                <button className="button-solid" type="submit">Get Started Risk-Free</button>
                <small>We'll never share your data with anyone.</small>
            </div>
        </form>
    );
}
