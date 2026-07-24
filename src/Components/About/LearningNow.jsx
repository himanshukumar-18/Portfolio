import { motion } from "framer-motion";
import {
    BrainCircuit,
    Workflow,
    Boxes,
    Container,
    Cpu,
    BookOpen,
} from "lucide-react";

const learning = [
    {
        title: "LangChain",
        subtitle: "LLM Applications",
        icon: BrainCircuit,
        color: "var(--accent-yellow)",
        status: "Learning",
    },
    {
        title: "LangGraph",
        subtitle: "AI Workflows",
        icon: Workflow,
        color: "var(--accent-primary)",
        status: "Exploring",
    },
    {
        title: "System Design",
        subtitle: "Scalable Architecture",
        icon: Boxes,
        color: "var(--accent-blue)",
        status: "Studying",
    },
    {
        title: "Docker",
        subtitle: "Containers",
        icon: Container,
        color: "var(--accent-green)",
        status: "Practicing",
    },
    {
        title: "AI Integration",
        subtitle: "Real Projects",
        icon: Cpu,
        color: "var(--accent-yellow)",
        status: "Building",
    },
    {
        title: "DSA",
        subtitle: "Problem Solving",
        icon: BookOpen,
        color: "var(--accent-primary)",
        status: "Daily",
    },
];

const LearningNow = () => {
    return (
        <section className="py-24">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">

                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="
                        inline-block

                        px-5
                        py-2

                        bg-[var(--accent-yellow)]

                        border-[3px]
                        border-[var(--border-primary)]

                        shadow-[5px_5px_0_var(--border-primary)]

                        text-xs
                        font-black
                        uppercase
                        tracking-[0.2em]
                    "
                >
                    Currently Learning
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="
                        mt-8

                        text-4xl
                        md:text-5xl
                        lg:text-6xl

                        font-black
                        uppercase

                        leading-none
                    "
                >
                    Growing Every
                    <br />
                    Single Day
                </motion.h2>

                <p
                    className="
                        mt-6

                        text-base
                        md:text-lg

                        leading-8

                        text-[var(--text-secondary)]
                    "
                >
                    I'm continuously expanding my skills by exploring modern technologies, improving my problem-solving abilities, and building practical projects that strengthen my experience as a Full Stack Developer.
                </p>

            </div>

            {/* Cards */}
            <div
                className="
                    grid

                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3

                    gap-6
                "
            >
                {learning.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={item.title}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                delay: index * 0.08,
                            }}
                            whileHover={{
                                y: -8,
                                rotate: -2,
                            }}
                            className="
                                group
                                relative

                                bg-[var(--bg-card)]

                                border-[3px]
                                border-[var(--border-primary)]

                                shadow-[6px_6px_0_var(--border-primary)]

                                p-6

                                transition-all
                                duration-200
                            "
                        >
                            {/* Status Badge */}
                            <div
                                className="
                                    absolute
                                    top-4
                                    right-4

                                    px-3
                                    py-1

                                    border-[2px]
                                    border-[var(--border-primary)]

                                    text-[10px]
                                    font-black
                                    uppercase
                                    tracking-wider
                                "
                                style={{
                                    background: item.color,
                                }}
                            >
                                {item.status}
                            </div>

                            {/* Icon */}
                            <div
                                className="
                                    w-16
                                    h-16

                                    flex
                                    items-center
                                    justify-center

                                    border-[3px]
                                    border-[var(--border-primary)]

                                    shadow-[4px_4px_0_var(--border-primary)]

                                    mb-6
                                "
                                style={{
                                    background: item.color,
                                }}
                            >
                                <Icon
                                    size={28}
                                    strokeWidth={2.5}
                                />
                            </div>

                            {/* Title */}
                            <h3
                                className="
                                    text-2xl

                                    font-black

                                    uppercase
                                "
                            >
                                {item.title}
                            </h3>

                            {/* Subtitle */}
                            <p
                                className="
                                    mt-3

                                    text-[15px]

                                    leading-7

                                    text-[var(--text-secondary)]
                                "
                            >
                                {item.subtitle}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default LearningNow;