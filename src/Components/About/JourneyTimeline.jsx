import { motion } from "framer-motion";
import { journey } from "./aboutData";

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

                {/* Center Line — desktop only */}
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
                    aria-hidden="true"
                />

                <div className="space-y-14">

                    {journey.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.id}
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
                                <motion.article
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
                                    {/* Step Badge — real date/step */}
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
                                        style={{ background: item.color }}
                                    >
                                        {item.step}
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
                                        style={{ background: item.color }}
                                        aria-hidden="true"
                                    >
                                        <Icon
                                            size={24}
                                            strokeWidth={2.8}
                                        />
                                    </div>

                                    <h3
                                        className="
                                            mt-5

                                            text-xl
                                            sm:text-2xl

                                            font-black

                                            uppercase
                                        "
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-4

                                            text-sm
                                            md:text-base

                                            leading-7

                                            text-[var(--text-secondary)]
                                        "
                                    >
                                        {item.description}
                                    </p>
                                </motion.article>

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
                                    "
                                    style={{ background: item.color }}
                                    aria-hidden="true"
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