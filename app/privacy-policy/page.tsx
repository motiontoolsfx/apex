import Link from 'next/link'
import styles from './privacyPolicy.module.css'

export default function Page() {
    return (
        <div className='section'>
            <div className={`${styles.header} section-header`}>
                <h1>Privacy Policy</h1>
            </div>

            <div className="page-width section">
                <p><strong>Information We Collect</strong></p>
                <p>We may collect personal information such as your name and email address when you contact us or use our services.</p>
                <br />

                <p><strong>How We Use Your Information</strong></p>
                <p>Your information is used to provide and improve our services, communicate with you, and comply with legal requirements.</p>
                <br />

                <p><strong>Cookies</strong></p>
                <p>We use cookies to enhance your experience on our website. You can disable cookies in your browser settings if you prefer.</p>
                <br />

                <p><strong>Data Security</strong></p>
                <p>We take reasonable measures to protect your data from unauthorized access or disclosure.</p>
                <br />

                <p><strong>Third-Party Services</strong></p>
                <p>We do not sell your information. We may share data with trusted partners only to help provide our services.</p>
                <br />

                <p><strong>Your Rights</strong></p>
                <p>You have the right to access, update, or delete your personal information. Contact us if you wish to exercise these rights.</p>
                <br />

                <p><strong>Changes to This Policy</strong></p>
                <p>We may update this policy from time to time. Any changes will be posted on this page.</p>
                <br />

                <p><strong>Contact Us</strong></p>
                <p>If you have questions about this policy, please contact us at <Link href="mailto:joel@clearautomate.io">joel@clearautomate.io</Link>.</p>
            </div>
        </div>
    )
}