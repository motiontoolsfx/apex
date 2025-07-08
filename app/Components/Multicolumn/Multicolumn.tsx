import React from 'react';
import styles from './multicolumn.module.css'

type Card = {
    icon?: React.ReactNode;
    title: string;
    body: string;
};

type MulticolumnProps = {
    header: string;
    subtitle: string;
    cards: Card[];
    backgroundColor?: string;
    dark?: boolean;
};

export default function Multicolumn({ header, subtitle, cards, dark }: MulticolumnProps) {
    return (
        <div className={dark ? `${styles.dark} section` : ''}>
            <div className={'section page-width'}>
                <div className='section-header'>
                    <h2>{header}</h2>
                    <p>{subtitle}</p>
                </div>
                <ul className={styles.grid}>
                    {cards.map(({ icon, title, body }, i) => (
                        <li key={i}>
                            {icon}
                            <h3>{title}</h3>
                            <p>{body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
