import { motion } from "framer-motion";

import {
    footerCopyright,
} from "./footerData";

const FooterBottom = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.5,
                delay: 0.3,
            }}
            className="
                mt-10

                border-t-[3px]
                border-[var(--border-primary)]

                pt-8
            "
        >
            <div
                className="
                    flex
                    flex-col
                    lg:flex-row

                    items-center
                    justify-center

                    gap-6
                "
            >
                {/* Copyright */}

                <p
                    className="
                        text-center
                        lg:text-left

                        text-sm

                        font-bold

                        text-[var(--text-secondary)]
                    "
                >
                    {footerCopyright.text}
                </p>
            </div>
        </motion.div>
    );
};

export default FooterBottom;