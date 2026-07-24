import { motion } from "framer-motion";
import {
    MapPin,
    Briefcase,
    CheckCircle2,
} from "lucide-react";

import profile from "../../images/profile.jpg";

const AboutImageCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            whileHover={{
                y: -6,
                rotate: -1,
            }}
            className="relative w-full max-w-md mx-auto"
        >
            {/* Available Sticker */}
            <motion.div
                whileHover={{ rotate: 3 }}
                className="
                    absolute
                    -top-4
                    left-6
                    z-20

                    px-4
                    py-2

                    bg-[var(--accent-yellow)]

                    border-[3px]
                    border-[var(--border-primary)]

                    shadow-[4px_4px_0_var(--border-primary)]

                    flex
                    items-center
                    gap-2

                    font-black
                    text-[11px]
                    uppercase
                    tracking-[0.15em]
                "
            >
                <CheckCircle2 size={15} />
                Available
            </motion.div>

            {/* Main Card */}
            <div
                className="
                    relative

                    overflow-hidden

                    bg-[var(--bg-card)]

                    border-[3px]
                    border-[var(--border-primary)]

                    shadow-[8px_8px_0_var(--border-primary)]
                "
            >
                {/* Grid Background */}
                <div
                    className="
                        absolute
                        inset-0
                        opacity-10
                        pointer-events-none
                    "
                    style={{
                        backgroundImage:
                            "linear-gradient(to right,var(--border-primary) 1px,transparent 1px),linear-gradient(to bottom,var(--border-primary) 1px,transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />

                {/* Image */}
                <div className="relative overflow-hidden">
                    <img
                        src={profile}
                        alt="Himanshu Kumar"
                        className="
                            w-full
                            h-[420px]
                            md:h-[500px]

                            object-cover

                            transition-all
                            duration-500

                            grayscale
                            hover:grayscale-0
                            hover:scale-105
                        "
                    />
                </div>

                {/* Bottom Info */}
                <div
                    className="
                        relative

                        border-t-[3px]
                        border-[var(--border-primary)]

                        bg-[var(--bg-primary)]

                        p-6
                    "
                >
                    <h3
                        className="
                            text-2xl
                            font-black
                            uppercase
                            tracking-wide

                            text-[var(--text-primary)]
                        "
                    >
                        Himanshu Kumar
                    </h3>

                    <p
                        className="
                            mt-2

                            text-sm

                            font-semibold

                            text-[var(--text-secondary)]
                        "
                    >
                        Full Stack Developer
                    </p>

                    <div className="mt-5 space-y-3">

                        <div className="flex items-center gap-3">
                            <MapPin
                                size={18}
                                className="text-[var(--accent-primary)]"
                            />
                            <span className="text-sm">
                                India
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Briefcase
                                size={18}
                                className="text-[var(--accent-blue)]"
                            />
                            <span className="text-sm">
                                Open to Full-Time & Freelance
                            </span>
                        </div>

                    </div>
                </div>

                {/* Decorative Corner */}
                <div
                    className="
                        absolute
                        top-4
                        right-4

                        w-6
                        h-6

                        bg-[var(--accent-primary)]

                        border-[3px]
                        border-[var(--border-primary)]
                    "
                />

                {/* Bottom Corner */}
                <div
                    className="
                        absolute
                        bottom-4
                        left-4

                        w-5
                        h-5

                        bg-[var(--accent-blue)]

                        border-[3px]
                        border-[var(--border-primary)]
                    "
                />
            </div>
        </motion.div>
    );
};

export default AboutImageCard;