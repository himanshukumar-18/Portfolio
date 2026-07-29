import { motion } from "framer-motion";
import {
    CheckCircle2,
    Clock3,
    MapPin,
    Laptop,
} from "lucide-react";

import { availability } from "./contactData";

const AvailabilityCard = () => {
    return (
        <motion.div
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
                duration: 0.6,
            }}
            className="
                relative

                mt-16

                overflow-hidden

                bg-[var(--bg-card)]

                border-[4px]
                border-[var(--border-primary)]

                shadow-[10px_10px_0px_var(--border-primary)]
            "
        >
            {/* Top Accent */}
            <div
                className="
                    h-3

                    bg-[var(--accent-green)]

                    border-b-[4px]
                    border-[var(--border-primary)]
                "
            />

            {/* Decorative Shapes */}
            <div
                className="
                    absolute
                    top-8
                    right-8

                    w-5
                    h-5

                    rotate-45

                    bg-[var(--accent-yellow)]

                    border-[3px]
                    border-[var(--border-primary)]
                "
            />

            <div
                className="
                    absolute
                    bottom-8
                    left-8

                    w-4
                    h-4

                    rounded-full

                    bg-[var(--accent-blue)]

                    border-[3px]
                    border-[var(--border-primary)]
                "
            />

            <div
                className="
                    grid

                    grid-cols-1
                    md:grid-cols-4

                    divide-y
                    md:divide-y-0
                    md:divide-x

                    divide-[var(--border-primary)]
                "
            >
                {/* Status */}
                <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <CheckCircle2
                            size={22}
                            className="text-[var(--accent-green)]"
                        />

                        <span
                            className="
                                text-xs

                                font-black

                                uppercase

                                tracking-[0.2em]

                                text-[var(--text-muted)]
                            "
                        >
                            Status
                        </span>
                    </div>

                    <h3
                        className="
                            text-2xl

                            font-black

                            uppercase

                            text-[var(--text-primary)]
                        "
                    >
                        {availability.status}
                    </h3>
                </div>

                {/* Response */}
                <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Clock3
                            size={22}
                            className="text-[var(--accent-primary)]"
                        />

                        <span
                            className="
                                text-xs

                                font-black

                                uppercase

                                tracking-[0.2em]

                                text-[var(--text-muted)]
                            "
                        >
                            Response
                        </span>
                    </div>

                    <h3
                        className="
                            text-2xl

                            font-black

                            uppercase

                            text-[var(--text-primary)]
                        "
                    >
                        {availability.responseTime}
                    </h3>
                </div>

                {/* Location */}
                <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin
                            size={22}
                            className="text-[var(--accent-blue)]"
                        />

                        <span
                            className="
                                text-xs

                                font-black

                                uppercase

                                tracking-[0.2em]

                                text-[var(--text-muted)]
                            "
                        >
                            Location
                        </span>
                    </div>

                    <h3
                        className="
                            text-lg

                            font-black

                            uppercase

                            leading-snug

                            text-[var(--text-primary)]
                        "
                    >
                        {availability.location}
                    </h3>
                </div>

                {/* Work Mode */}
                <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Laptop
                            size={22}
                            className="text-[var(--accent-yellow)]"
                        />

                        <span
                            className="
                                text-xs

                                font-black

                                uppercase

                                tracking-[0.2em]

                                text-[var(--text-muted)]
                            "
                        >
                            Work Mode
                        </span>
                    </div>

                    <div
                        className="
                            flex
                            flex-wrap

                            gap-2
                        "
                    >
                        {availability.workMode.map((mode) => (
                            <motion.span
                                key={mode}
                                whileHover={{
                                    y: -2,
                                    rotate: -2,
                                }}
                                className="
                                    px-3
                                    py-2

                                    bg-[var(--accent-yellow)]

                                    border-[3px]
                                    border-[var(--border-primary)]

                                    shadow-[3px_3px_0px_var(--border-primary)]

                                    text-xs

                                    font-black

                                    uppercase
                                "
                            >
                                {mode}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AvailabilityCard;