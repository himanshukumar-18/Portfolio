import { motion } from "framer-motion";
import {
    User,
    Code2,
    Target,
} from "lucide-react";

const story = [
    {
        icon: User,
        title: "Who I Am",
        description:
            "Hello, my self is Himanshu Kumar. I am a BCA student with a passion for software development. I have built projects such as an assessment test platform with separate admin and candidate roles, and I am currently exploring Al-powered applications using Python and Django. I enjoy solving coding problems and continuously learning new technologies. I am looking for opportunities where I can apply my skills, learn from experienced professionals, and contribute to meaningful projects.",
        accent: "var(--accent-yellow)",
    },
    {
        icon: Code2,
        title: "What I Build",
        description:
            "I build responsive websites, REST APIs, dashboards, and full-stack applications using React, Node.js, Django, PostgreSQL, Docker, and modern development tools.",
        accent: "var(--accent-blue)",
    },
    {
        icon: Target,
        title: "My Goal",
        description:
            "My goal is to grow as a software developer, contribute to meaningful products, collaborate with talented teams, and build applications that create value for users.",
        accent: "var(--accent-primary)",
    },
];

const AboutStory = () => {
    return (
        <div className="space-y-8">

            {story.map((item, index) => {
                const Icon = item.icon;

                return (
                    <motion.article
                        key={item.title}
                        initial={{
                            opacity: 0,
                            x: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.55,
                            delay: index * 0.12,
                        }}
                        whileHover={{
                            y: -5,
                            rotate: -1,
                        }}
                        className="
                            group
                            relative

                            bg-[var(--bg-card)]

                            border-[3px]
                            border-[var(--border-primary)]

                            shadow-[6px_6px_0px_var(--border-primary)]

                            p-6
                            lg:p-7

                            transition-all
                            duration-200
                        "
                    >
                        {/* Accent Corner */}
                        <div
                            className="absolute top-0 right-0 w-5 h-5 border-l-[3px] border-b-[3px] border-[var(--border-primary)]"
                            style={{
                                background: item.accent,
                            }}
                        />

                        {/* Header */}
                        <div className="flex items-center gap-4">

                            <div
                                className="
                                    w-14
                                    h-14

                                    flex
                                    items-center
                                    justify-center

                                    border-[3px]
                                    border-[var(--border-primary)]

                                    shadow-[4px_4px_0px_var(--border-primary)]
                                "
                                style={{
                                    background: item.accent,
                                }}
                            >
                                <Icon
                                    size={24}
                                    strokeWidth={2.8}
                                    className="text-[var(--text-primary)]"
                                />
                            </div>

                            <div>
                                <p
                                    className="
                                        text-xs
                                        uppercase
                                        tracking-[0.25em]
                                        text-[var(--text-muted)]
                                    "
                                >
                                    0{index + 1}
                                </p>

                                <h3
                                    className="
                                        mt-1

                                        text-2xl

                                        font-black

                                        uppercase

                                        text-[var(--text-primary)]
                                    "
                                >
                                    {item.title}
                                </h3>
                            </div>

                        </div>

                        {/* Description */}
                        <p
                            className="
                                mt-6

                                leading-8

                                text-[15px]
                                md:text-base

                                text-[var(--text-secondary)]
                            "
                        >
                            {item.description}
                        </p>
                    </motion.article>
                );
            })}
        </div>
    );
};

export default AboutStory;