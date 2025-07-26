import React from 'react';
import styles from './multicolumn.module.css'
import Link from 'next/link';

type Card = {
    icon?: React.ReactNode;
    title: string;
    body: string;
    color?: number;
};

type Button = {
    text: string;
    href: string;
}

type MulticolumnProps = {
    header: string;
    subtitle: string;
    cards: Card[];
    backgroundColor?: string;
    dark?: boolean;
    button?: Button;
};

export default function Multicolumn({ header, subtitle, cards, dark, button }: MulticolumnProps) {
    return (
        <div className={dark ? `${styles.dark} section` : `${styles.light} section`}>
            <div className={'section page-width'}>
                <div className='section-header'>
                    <h2>{header}</h2>
                    <p>{subtitle}</p>
                </div>
                <ul className={`${styles.grid} grid3`}>
                    {cards.map(({ icon, title, body, color }, i) => (
                        <li key={i}>
                            <div className={styles.icon} style={color !== null ? { background: `hsl(${color}, 90%, 85%)`, color: `hsl(${color}, 90%, 20%)` } : {}}>{icon}</div>
                            <h3>{title}</h3>
                            <p>{body}</p>
                        </li>
                    ))}
                </ul>
                {button && <div className={styles.button}>
                    <Link className="button-outline" href={button.href}>{button.text}</Link>
                </div>}
            </div>
        </div>
    );
}
