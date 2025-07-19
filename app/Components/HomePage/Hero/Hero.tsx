'use client'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts'
import { ChartBarIcon, PresentationChartLineIcon, CogIcon, ArrowPathIcon, LinkIcon, Squares2X2Icon, DevicePhoneMobileIcon, ArrowTrendingUpIcon, DocumentTextIcon, UserIcon, FireIcon, ClockIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import styles from './hero.module.css'
import Link from 'next/link'
import Video from './Video/Video'
import ReviewsRibbon from '../../ReviewsRibbon/ReviewsRibbon'

const chips = [
    { text: 'Admin dashboards', icon: ChartBarIcon },
    { text: 'KPI dashboards', icon: PresentationChartLineIcon },
    // { text: 'Maintenance & support', icon: CogIcon },
    { text: 'Workflow automation', icon: ArrowPathIcon },
    { text: 'API integrations', icon: LinkIcon },
    { text: 'Real-time visualization', icon: Squares2X2Icon },
    // { text: 'Mobile-friendly dashboards', icon: DevicePhoneMobileIcon },
    { text: 'Performance tracking', icon: ArrowTrendingUpIcon },
    { text: 'BI reporting', icon: DocumentTextIcon },
    // { text: 'User permissions', icon: UserIcon },
]

const data = [
    { month: 'Jan', clv: 120 },
    { month: 'Feb', clv: 200 },
    { month: 'Mar', clv: 300 },
    { month: 'Apr', clv: 450 },
    { month: 'May', clv: 600 },
    { month: 'Jun', clv: 800 },
]

export default function Hero() {

    return (
        <div className="page-width">
            <div className={styles.layout}>
                <div className={styles.text}>
                    <h1 className={styles.title}>
                        Simplify your <span style={{ color: 'rgb(var(--primary-accent))' }}>workflows</span> with <span style={{ color: 'rgb(var(--primary-accent))' }}>custom tools</span> that remove <span style={{ color: 'rgb(var(--primary-accent))' }}>headaches</span>.
                    </h1>
                    {/* <p className={styles.subTitle}>
                        Transform your spreadsheets, reports, and manual tasks into automated, easy-to-use tools tailored to your business.
                    </p> */}
                    {/* <div className={styles.chips}>
                        {chips.map(({ text, icon: Icon }) => (
                            <span key={text} className="chip">
                                <Icon className={styles.icon} aria-hidden="true" />
                                {text}
                            </span>
                        ))}
                    </div> */}
                    <div className={`${styles.offerCard} card`}>
                        <div className={styles.offerHeader}>
                            <ClockIcon />
                            <h3>LIMITED TIME OFFER!!!</h3>
                        </div>
                        <div className={styles.offerList}>
                            <div className={styles.offerCardIcon}>
                                <CheckCircleIcon />
                            </div>
                            Custom automation tool for your workflow
                        </div>
                        <div className={styles.offerList}>
                            <div className={styles.offerCardIcon}>
                                <CheckCircleIcon />
                            </div>
                            No risk — I’ll build your tool at zero upfront cost.
                        </div>
                        <div className={styles.offerList}>
                            <div className={styles.offerCardIcon}>
                                <CheckCircleIcon />
                            </div>
                            I'll send you $200 guarantee if you feel I've wasted your time. No questions asked.
                        </div>
                    </div>
                    <div className={styles.contact}>
                        {/* <input placeholder='Name' className='text-input'></input>
                        <input placeholder='Email' className='text-input'></input> */}
                        <div className={styles.contactBtns}>
                            {/* <button className='button-outline'>Things I've Built</button> */}
                            <button
                                className='button-solid'
                                onClick={() => {
                                    const el = document.getElementById('contact')
                                    if (el) {
                                        const yOffset = -100
                                        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
                                        window.scrollTo({ top: y, behavior: 'smooth' })
                                    }
                                }}>
                                Get Me Started Risk-Free
                            </button>
                        </div>
                        <div className={styles.caption}><FireIcon /><p>Hurry — only <b>1</b> spot left!</p></div>
                        <ReviewsRibbon />
                    </div>
                </div>
                <div>
                    <Video />
                </div>
                {/* <div className={styles.perspective}>
                    <div className={`card ${styles.graphic}`}>
                        <h3>Customer Lifetime Value (CLV)</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="rgb(var(--primary-accent))" stopOpacity={0.8} />
                                        <stop offset="100%" stopColor="rgb(var(--primary-accent))" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis
                                    dataKey="month"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={false}  // hides the ticks and labels
                                />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip />
                                <CartesianGrid vertical={false} stroke="rgba(var(--text-color), 0.05)" />
                                <Area
                                    type="monotone"
                                    dataKey="clv"
                                    stroke="rgb(var(--primary-accent))"
                                    strokeWidth={2}
                                    fill="url(#colorGradient)"
                                    fillOpacity={1}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
