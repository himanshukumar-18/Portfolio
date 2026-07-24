import { motion } from "framer-motion";
import {
    Laptop,
    Palette,
    Server,
    Database,
    Brain,
    Rocket,
} from "lucide-react";

const journey = [
    {
        year: "STEP 01",
        title: "Started Programming",
        description:
            "Began learning programming fundamentals and explored how websites and applications are built.",
        icon: Laptop,
        color: "var(--accent-yellow)",
    },
    {
        year: "STEP 02",
        title: "Frontend Development",
        description:
            "Learned HTML, CSS, JavaScript, React, Tailwind CSS, and focused on building responsive user interfaces.",
        icon: Palette,
        color: "var(--accent-primary)",
    },
    {
        year: "STEP 03",
        title: "Backend Development",
        description:
            "Built REST APIs and backend applications using Node.js, Express.js, Python, and Django.",
        icon: Server,
        color: "var(--accent-blue)",
    },
    {
        year: "STEP 04",
        title: "Database & Deployment",
        description:
            "Worked with MongoDB, PostgreSQL, Docker, Git, and deployment workflows for full-stack projects.",
        icon: Database,
        color: "var(--accent-green)",
    },
    {
        year: "STEP 05",
        title: "Learning AI",
        description:
            "Currently learning AI development, LLM integration, LangChain, and modern backend architecture.",
        icon: Brain,
        color: "var(--accent-yellow)",
    },
    {
        year: "TODAY",
        title: "Building Real Projects",
        description:
            "Continuously building portfolio projects, freelance work, and improving problem-solving skills every day.",
        icon: Rocket,
        color: "var(--accent-primary)",
    },
];

const JourneyTimeline = () => {
    return (
        <section className="relative py-20">

            {/* Heading */}
            <div className="text-center mb-16">
                <span
                    className="
                        inline-block
                        px-4
                        py-2

                        bg-[var(--accent-blue)]

                        border-[3px]
                        border-[var(--border-primary)]

                        shadow-[5px_5px_0_var(--border-primary)]

                        text-xs
                        font-black
                        uppercase
                        tracking-[0.2em]
                    "
                >
                    My Journey
                </span>

                <h2
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
                    From Learning
                    <br />
                    To Building
                </h2>
            </div>

            {/* Timeline */}
            <div className="relative max-w-6xl mx-auto">

                {/* Center Line */}
                <div
                    className="
                        absolute
                        left-1/2
                        top-0
                        bottom-0

                        hidden
                        lg:block

                        w-[4px]

                        -translate-x-1/2

                        bg-[var(--border-primary)]
                    "
                />

                <div className="space-y-14">

                    {journey.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.3,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className={`
                                    relative
                                    flex
                                    items-center

                                    ${index % 2 === 0
                                        ? "lg:justify-start"
                                        : "lg:justify-end"
                                    }
                                `}
                            >
                                <motion.div
                                    whileHover={{
                                        y: -6,
                                        rotate: -2,
                                    }}
                                    className="
                                        relative

                                        w-full
                                        lg:w-[46%]

                                        bg-[var(--bg-card)]

                                        border-[3px]
                                        border-[var(--border-primary)]

                                        shadow-[8px_8px_0_var(--border-primary)]

                                        p-6
                                    "
                                >
                                    {/* Step Badge */}
                                    <div
                                        className="
                                            inline-flex
                                            items-center

                                            px-3
                                            py-1

                                            border-[3px]
                                            border-[var(--border-primary)]

                                            shadow-[3px_3px_0_var(--border-primary)]

                                            text-xs
                                            font-black
                                            uppercase
                                            tracking-widest
                                        "
                                        style={{
                                            background: item.color,
                                        }}
                                    >
                                        {item.year}
                                    </div>

                                    {/* Icon */}
                                    <div
                                        className="
                                            mt-5

                                            w-14
                                            h-14

                                            flex
                                            items-center
                                            justify-center

                                            border-[3px]
                                            border-[var(--border-primary)]

                                            shadow-[4px_4px_0_var(--border-primary)]
                                        "
                                        style={{
                                            background: item.color,
                                        }}
                                    >
                                        <Icon
                                            size={24}
                                            strokeWidth={2.8}
                                        />
                                    </div>

                                    <h3
                                        className="
                                            mt-5

                                            text-2xl

                                            font-black

                                            uppercase
                                        "
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-4

                                            leading-7

                                            text-[var(--text-secondary)]
                                        "
                                    >
                                        {item.description}
                                    </p>
                                </motion.div>

                                {/* Timeline Dot */}
                                <div
                                    className="
                                        hidden
                                        lg:flex

                                        absolute

                                        left-1/2

                                        -translate-x-1/2

                                        w-6
                                        h-6

                                        border-[4px]
                                        border-[var(--border-primary)]

                                        rounded-full

                                        bg-[var(--bg-primary)]
                                    "
                                    style={{
                                        background: item.color,
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default JourneyTimeline;