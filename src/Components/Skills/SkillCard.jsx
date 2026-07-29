import { motion } from "framer-motion";
import SkillChip from "./SkillChip";

const SkillCard = ({ category, index }) => {
    const Icon = category.icon;

    return (
        <motion.article
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
                amount: 0.2,
            }}
            transition={{
                duration: 0.6,
                delay: index * 0.08,
            }}
            whileHover={{
                y: -8,
                rotate: -1.5,
            }}
            className="
                group
                relative

                flex
                flex-col

                h-full

                bg-[var(--bg-card)]

                border-[3px]
                border-[var(--border-primary)]

                shadow-[8px_8px_0px_var(--border-primary)]
                hover:shadow-[12px_12px_0px_var(--border-primary)]

                transition-all
                duration-200

                overflow-hidden
            "
        >
            {/* Accent Strip */}
            <div
                className="h-3 w-full border-b-[3px] border-[var(--border-primary)]"
                style={{
                    background: category.accent,
                }}
            />

            {/* Card Content */}
            <div className="flex flex-col flex-1 p-6">

                {/* Header */}
                <div className="flex items-start justify-between gap-4">

                    <div
                        className="
                            flex
                            items-center
                            justify-center

                            w-16
                            h-16

                            border-[3px]
                            border-[var(--border-primary)]

                            shadow-[4px_4px_0px_var(--border-primary)]

                            bg-[var(--bg-primary)]
                        "
                        style={{
                            background: category.accent,
                        }}
                    >
                        <Icon
                            size={30}
                            strokeWidth={2.5}
                            className="text-[var(--border-primary)]"
                        />
                    </div>

                    <span
                        className="
                            text-5xl

                            font-black

                            leading-none

                            text-[var(--text-muted)]

                            select-none
                        "
                    >
                        {String(index + 1).padStart(2, "0")}
                    </span>
                </div>

                {/* Title */}
                <h3
                    className="
                        mt-8

                        text-2xl
                        lg:text-[28px]

                        font-black

                        uppercase

                        leading-tight

                        text-[var(--text-primary)]
                    "
                >
                    {category.title}
                </h3>

                {/* Description */}
                <p
                    className="
                        mt-4

                        text-[15px]

                        leading-7

                        text-[var(--text-secondary)]
                    "
                >
                    {category.description}
                </p>

                {/* Technologies */}
                <div
                    className="
                        mt-8

                        flex
                        flex-wrap
                        content-start
                        gap-3

                        flex-1
                        min-h-[170px]

                        pb-8
                    "
                >
                    {category.technologies.map((skill) => (
                        <SkillChip
                            key={skill}
                            skill={skill}
                            accent={category.accent}
                        />
                    ))}
                </div>

                {/* Footer */}
                <div
                    className="
                        mt-auto
                        pt-8

                        flex
                        items-center
                        justify-between

                        border-t-[3px]
                        border-dashed
                        border-[var(--border-primary)]
                    "
                >
                    <span
                        className="
                            text-xs

                            font-black

                            uppercase

                            tracking-[0.2em]

                            text-[var(--text-muted)]
                        "
                    >
                        {category.technologies.length} Technologies
                    </span>

                    <div
                        className="
                            w-5
                            h-5

                            border-[3px]
                            border-[var(--border-primary)]

                            rotate-45
                        "
                        style={{
                            background: category.accent,
                        }}
                    />
                </div>
            </div>
        </motion.article>
    );
};

export default SkillCard;