import { ClockIcon, FireIcon } from "@heroicons/react/24/outline"

import styles from './infoBar.module.css'

export default function InfoBar() {
    return (
        <div className={styles.bar}>
            <ClockIcon />
            <p>Limited spots available — Contact me to get started</p>
            {/* <p>Hurry — only <b>3</b> spots left! - Contact me for free support</p> */}
        </div >
    )
}