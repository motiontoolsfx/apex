import styles from './services.module.css'

const services = [
    {
        title: 'Admin Dashboards',
        description: 'Centralized control panels that allow administrators to manage users, monitor activity, and configure system settings.',
        firstImage: 'https://cdn.prod.website-files.com/6459eb6341c323e922c56917/6841660f6c5b185622e25873_rate%20all%20answers.png',
        secondImage: 'https://cdn.prod.website-files.com/6459eb6341c323e922c56917/6841673a834e5ed3c82e13c3_Rate%20AI%20Answers-%20color.png',
    },
    {
        title: 'KPI Dashboards',
        description: 'Visual displays of key performance indicators to track progress toward business goals in real-time.',
        firstImage: 'https://cdn.prod.website-files.com/6459eb6341c323e922c56917/6841660f6c5b185622e25873_rate%20all%20answers.png',
        secondImage: 'https://cdn.prod.website-files.com/6459eb6341c323e922c56917/6841673a834e5ed3c82e13c3_Rate%20AI%20Answers-%20color.png',
    },
    {
        title: 'Workflow Automation',
        description: 'Tools and systems that streamline repetitive tasks and processes, reducing manual work and errors.',
        firstImage: 'https://cdn.prod.website-files.com/6459eb6341c323e922c56917/6841660f6c5b185622e25873_rate%20all%20answers.png',
        secondImage: 'https://cdn.prod.website-files.com/6459eb6341c323e922c56917/6841673a834e5ed3c82e13c3_Rate%20AI%20Answers-%20color.png',
    },
    {
        title: 'API Integrations',
        description: 'Seamless connections between software applications to enable data sharing and synchronized functionality.',
        firstImage: 'https://cdn.prod.website-files.com/6459eb6341c323e922c56917/6841660f6c5b185622e25873_rate%20all%20answers.png',
        secondImage: 'https://cdn.prod.website-files.com/6459eb6341c323e922c56917/6841673a834e5ed3c82e13c3_Rate%20AI%20Answers-%20color.png',
    },
    {
        title: 'Real-Time Visualization',
        description: 'Dynamic charts and graphs that update instantly with incoming data to support fast decision-making.',
        firstImage: 'https://cdn.prod.website-files.com/6459eb6341c323e922c56917/6841660f6c5b185622e25873_rate%20all%20answers.png',
        secondImage: 'https://cdn.prod.website-files.com/6459eb6341c323e922c56917/6841673a834e5ed3c82e13c3_Rate%20AI%20Answers-%20color.png',
    },
    {
        title: 'Performance Tracking',
        description: 'Systems that monitor and measure operational metrics to evaluate efficiency and productivity.',
        firstImage: 'https://cdn.prod.website-files.com/6459eb6341c323e922c56917/6841660f6c5b185622e25873_rate%20all%20answers.png',
        secondImage: 'https://cdn.prod.website-files.com/6459eb6341c323e922c56917/6841673a834e5ed3c82e13c3_Rate%20AI%20Answers-%20color.png',
    }
];

export default function Services() {
    return (
        <div className="page-width section">
            <div className='section-header'>
                <h2>Some of My Services</h2>
                <p>Unique solutions I create to help you succeed</p>
            </div>
            <div className={styles.grid}>
                {services.map((service, i) => (
                    <div key={i} className={`card hoverable-card ${styles.card}`}>
                        <img className={styles.firstImage} src={service.firstImage} alt="" />
                        <img className={styles.secondImage} src={service.secondImage} alt="" />
                        <div className={styles.text}>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}