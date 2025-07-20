import styles from './bubble.module.css'

export default function Bubble() {
    const bubbles = [
        { top: '50%', right: '35%', transform: 'translate(50%, -50%)' },
        { top: '800px', left: '0', transform: 'translate(-75%, 0)' },
    ];

    return (
        <div className={styles.bubbles}>
            {bubbles.map((style, i) => (
                <div
                    key={i}
                    className={styles.bubble}
                    style={{ position: 'absolute', ...style }}
                />
            ))}
        </div>
    );
}
