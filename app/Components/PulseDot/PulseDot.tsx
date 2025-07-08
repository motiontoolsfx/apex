import styles from './pulseDot.module.css'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
    dotColor?: string
}

export default function PulseDot({ children, dotColor = 'rgb(var(--primary-accent))' }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.dot} />
            <div className={styles.children}>{children}</div>
        </div>
    )
}
