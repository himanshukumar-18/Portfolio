import { motion } from "framer-motion";

const Desk = () => {
    return (
        <motion.g
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            {/* Desk Top */}
            <rect
                x="70"
                y="315"
                width="460"
                height="22"
                rx="4"
                fill="var(--accent-yellow)"
                stroke="var(--border-primary)"
                strokeWidth="3"
            />

            {/* Left Leg */}
            <rect
                x="95"
                y="337"
                width="18"
                height="110"
                fill="var(--bg-card)"
                stroke="var(--border-primary)"
                strokeWidth="3"
            />

            {/* Right Leg */}
            <rect
                x="487"
                y="337"
                width="18"
                height="110"
                fill="var(--bg-card)"
                stroke="var(--border-primary)"
                strokeWidth="3"
            />

            {/* Bottom Support */}
            <rect
                x="95"
                y="425"
                width="410"
                height="14"
                fill="var(--bg-card)"
                stroke="var(--border-primary)"
                strokeWidth="3"
            />

            {/* Decorative Line */}
            <line
                x1="70"
                y1="326"
                x2="530"
                y2="326"
                stroke="var(--border-primary)"
                strokeWidth="2"
            />

            {/* Left Bolt */}
            <circle
                cx="95"
                cy="326"
                r="4"
                fill="var(--border-primary)"
            />

            {/* Right Bolt */}
            <circle
                cx="505"
                cy="326"
                r="4"
                fill="var(--border-primary)"
            />
        </motion.g>
    );
};

export default Desk;