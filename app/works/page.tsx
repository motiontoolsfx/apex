import WorkCard from '../Components/Works/WorkCard/WorkCard'
import styles from './works.module.css'

export default function Page() {
    return (
        <div className="page-width">
            <div className='section'>
                <div className={`section-header ${styles.title}`}>
                    <h2>Projects That Drive Business Success</h2>
                    <p>Real-world dashboards and tools designed to streamline workflows and boost performance.</p>
                </div>
                <div className={styles.grid}>
                    <WorkCard
                        title="Case Management System"
                        description="Streamlined automated process for submitting, assigning, and managing cases in real time."
                        image="website"
                        stack={['Next.js', 'SQL']}
                        id="afge"
                    />
                    {/* <WorkCard /> */}
                </div>
            </div>
        </div>
    )
}