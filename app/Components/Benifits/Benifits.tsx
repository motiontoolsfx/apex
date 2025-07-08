import Multicolumn from "../Multicolumn/Multicolumn";
import {
    BoltIcon,
    EyeIcon,
    PuzzlePieceIcon,
    ClockIcon,
    ShieldCheckIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";

export default function Benefits() {
    const cards = [
        {
            icon: <BoltIcon />,
            title: "Instant Efficiency",
            body: "Slash time spent on tasks with lightning-fast custom automation.",
        },
        {
            icon: <EyeIcon />,
            title: "Clear Visibility",
            body: "Gain complete transparency into your operations with real-time visual insights.",
        },
        {
            icon: <PuzzlePieceIcon />,
            title: "Seamless Integration",
            body: "Effortlessly connect disparate tools into one unified workflow.",
        },
        {
            icon: <ClockIcon />,
            title: "24/7 Reliability",
            body: "Automations run nonstop, ensuring consistent productivity around the clock.",
        },
        {
            icon: <ShieldCheckIcon />,
            title: "Data Security",
            body: "Protect sensitive business information with secure, compliant solutions.",
        },
        {
            icon: <SparklesIcon />,
            title: "Tailored Innovation",
            body: "Unique tools crafted to solve your exact challenges and elevate your workflow.",
        },
    ];

    return (
        <Multicolumn
            header="Unlock Unique Benefits"
            subtitle="Innovative solutions designed for your success"
            cards={cards}
            dark={true}
        />
    );
}
