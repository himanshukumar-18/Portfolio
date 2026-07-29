import { motion } from "framer-motion";
import {
    MapPin,
    CheckCircle2,
    Clock3,
    Code2,
    FolderGit2,
    Award,
} from "lucide-react";

import profile from "../../images/profile.png"; // Update path

const ContactIllustration = () => {
    return (
        <motion.aside
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
                relative
                overflow-hidden

                bg-[var(--bg-card)]

                border-[4px]
                border-[var(--border-primary)]

                shadow-[10px_10px_0px_var(--border-primary)]
            "
        >
            {/* Accent Bar */}
            <div
                className="
                    h-3
                    bg-[var(--accent-blue)]
                    border-b-[4px]
                    border-[var(--border-primary)]
                "
            />

            <div className="p-8">

                {/* Profile */}
                <div className="flex flex-col items-center">

                    <motion.div
                        whileHover={{
                            rotate: -2,
                            y: -4,
                        }}
                        className="
                            overflow-hidden

                            w-48
                            h-48

                            lg:w-56
                            lg:h-56

                            border-[4px]
                            border-[var(--border-primary)]

                            shadow-[8px_8px_0px_var(--border-primary)]

                            bg-[var(--accent-yellow)]
                        "
                    >
                        <img
                            src={profile}
                            alt="Himanshu Kumar"
                            className="
                                w-full
                                h-full
                                object-cover
                            "
                        />
                    </motion.div>

                    <h3
                        className="
                            mt-8

                            text-3xl

                            font-black

                            uppercase

                            text-center
                        "
                    >
                        Himanshu Kumar
                    </h3>

                    <p
                        className="
                            mt-2

                            font-bold

                            uppercase

                            tracking-[0.15em]

                            text-[var(--text-secondary)]
                        "
                    >
                        Full Stack Developer
                    </p>
                </div>

                {/* Status */}
                <div
                    className="
                        mt-10

                        space-y-4

                        border-y-[3px]
                        border-dashed
                        border-[var(--border-primary)]

                        py-6
                    "
                >
                    <div className="flex items-center gap-3">
                        <CheckCircle2
                            className="text-[var(--accent-green)]"
                            size={20}
                        />
                        <span>Available for Work</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <MapPin
                            className="text-[var(--accent-primary)]"
                            size={20}
                        />
                        <span>Hazaribagh, Jharkhand</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Clock3
                            className="text-[var(--accent-blue)]"
                            size={20}
                        />
                        <span>Replies within 24 Hours</span>
                    </div>
                </div>

                {/* Stats */}
                <div
                    className="
                        mt-8

                        grid
                        grid-cols-3

                        gap-4
                    "
                >
                    {[
                        {
                            icon: Code2,
                            value: "15+",
                            label: "Tech",
                        },
                        {
                            icon: FolderGit2,
                            value: "8+",
                            label: "Projects",
                        },
                        {
                            icon: Award,
                            value: "1",
                            label: "Internship",
                        },
                    ].map((item) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.label}
                                whileHover={{
                                    y: -4,
                                }}
                                className="
                                    p-4

                                    text-center

                                    bg-[var(--bg-primary)]

                                    border-[3px]
                                    border-[var(--border-primary)]

                                    shadow-[4px_4px_0px_var(--border-primary)]
                                "
                            >
                                <Icon
                                    size={22}
                                    className="
                                        mx-auto
                                        mb-3
                                        text-[var(--accent-primary)]
                                    "
                                />

                                <div
                                    className="
                                        text-2xl
                                        font-black
                                    "
                                >
                                    {item.value}
                                </div>

                                <div
                                    className="
                                        text-xs

                                        font-bold

                                        uppercase
                                    "
                                >
                                    {item.label}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Quote */}
                <div
                    className="
                        mt-8

                        bg-[var(--accent-yellow)]

                        border-[3px]
                        border-[var(--border-primary)]

                        shadow-[4px_4px_0px_var(--border-primary)]

                        p-5
                    "
                >
                    <p
                        className="
                            text-center

                            font-black

                            leading-7
                        "
                    >
                        "Let's build something meaningful together."
                    </p>
                </div>

            </div>
        </motion.aside>
    );
};

export default ContactIllustration;