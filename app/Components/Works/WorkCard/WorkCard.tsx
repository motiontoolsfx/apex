import Link from 'next/link';
import React from 'react';

import styles from './workCard.module.css'

import {
    CodeBracketIcon,
    ServerStackIcon,
    ChartBarIcon,
    CpuChipIcon,
    GlobeAltIcon,
    CloudIcon,
    RectangleGroupIcon,
    CommandLineIcon,
    BoltIcon,
    FireIcon,
    EnvelopeIcon,
} from '@heroicons/react/24/outline';

const chips = [
    { text: 'Next.js', icon: CodeBracketIcon },
    { text: 'SQL', icon: ServerStackIcon },
    { text: 'Chart.js', icon: ChartBarIcon },
    { text: 'Python', icon: CpuChipIcon },
    { text: 'JavaScript', icon: CommandLineIcon },
    { text: 'React', icon: RectangleGroupIcon },
    { text: 'APIs', icon: GlobeAltIcon },
    { text: 'Cloud', icon: CloudIcon },
    { text: 'Supabase', icon: BoltIcon },
    { text: 'Firebase', icon: FireIcon },
    { text: 'Mail', icon: EnvelopeIcon }
] as const;

type ChipText = typeof chips[number]['text'];

type ProjectCardProps = {
    title: string;
    description: string;
    client: string;
    id: string;
    image?: string;
    stack: ChipText[];
};

export default function WorkCard({ title, description, client, image, id, stack }: ProjectCardProps) {
    return (
        <Link href={`/works/${id}`} className={`card hoverable-card ${styles.projectCard}`}>
            <div className={styles.img}>
                {image && <img src={`/works/${image}.png`} alt={title} className="project-image" />}
            </div>
            <div className={styles.text}>
                <div className={styles.chips}>
                    {chips
                        .filter(({ text }) => stack.includes(text))
                        .map(({ text, icon: Icon }) => (
                            <span key={text} className="chip">
                                <Icon className={styles.icon} aria-hidden="true" />
                                {text}
                            </span>
                        ))}
                </div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p>Client: {client}</p>
            </div>
        </Link>
    );
}
