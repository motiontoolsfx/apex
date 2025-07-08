import { ClockIcon, FireIcon } from "@heroicons/react/24/outline"

import styles from './infoBar.module.css'

export default function InfoBar() {
    return (
        <div className={styles.bar}>
            <ClockIcon />
            <p className={styles.mobileText}>Limited spots — Contact me</p>
            <p className={styles.desktopText}>Hurry — only <b>3</b> spots left! - Contact me to get started</p>
        </div >
    )
}