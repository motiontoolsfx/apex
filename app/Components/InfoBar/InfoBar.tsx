import { FireIcon } from "@heroicons/react/24/outline"

import styles from './infoBar.module.css'

export default function InfoBar() {
    return (
        <div className={styles.bar}>
            <FireIcon style={{ color: 'orange' }} />
            <p>
                I have limited availability — only <b>2</b> spot left! Contact me to get started.
            </p>
        </div >
    )
}