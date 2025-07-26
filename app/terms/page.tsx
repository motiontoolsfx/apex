import Link from 'next/link'
import styles from './terms.module.css'

export default function Page() {
    return (
        <div className='section'>
            <div className={`${styles.header} section-header`}>
                <h1>Terms of Service</h1>
            </div>

            <div className="page-width section">
                <p><strong>Acceptance of Terms</strong></p>
                <p>By using our services, you agree to comply with and be bound by these Terms of Service.</p>
                <br />

                <p><strong>Use of Services</strong></p>
                <p>You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others.</p>
                <br />

                <p><strong>User Accounts</strong></p>
                <p>You are responsible for maintaining the confidentiality of your account information and for all activities under your account.</p>
                <br />

                <p><strong>Prohibited Activities</strong></p>
                <p>You agree not to engage in any activity that could harm, disable, or impair our services or interfere with others' use of them.</p>
                <br />

                <p><strong>Intellectual Property</strong></p>
                <p>All content and materials provided by us are protected by intellectual property laws and may not be used without permission.</p>
                <br />

                <p><strong>Limitation of Liability</strong></p>
                <p>We are not liable for any damages resulting from your use of our services, to the maximum extent permitted by law.</p>
                <br />

                <p><strong>Termination</strong></p>
                <p>We reserve the right to suspend or terminate your access to our services at any time without prior notice.</p>
                <br />

                <p><strong>Changes to Terms</strong></p>
                <p>We may update these Terms of Service periodically. Continued use of our services constitutes acceptance of the changes.</p>
                <br />

                <p><strong>Contact Us</strong></p>
                <p>If you have any questions about these terms, please contact us at <a href="mailto:joel@clearautomate.io">joel@clearautomate.io</a>.</p>
            </div>
        </div>
    )
}