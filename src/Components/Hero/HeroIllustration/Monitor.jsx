import { motion } from "framer-motion";

const Monitor = () => {
    return (
        <motion.g
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                delay: 0.3,
            }}
        >
            {/* Monitor Frame */}
            <rect
                x="140"
                y="40"
                width="320"
                height="190"
                rx="8"
                fill="var(--bg-card)"
                stroke="var(--border-primary)"
                strokeWidth="3"
            />

            {/* Browser Header */}
            <rect
                x="140"
                y="40"
                width="320"
                height="30"
                fill="var(--accent-yellow)"
                stroke="var(--border-primary)"
                strokeWidth="3"
            />

            {/* Browser Buttons */}
            <circle cx="160" cy="55" r="5" fill="#ef4444" />
            <circle cx="178" cy="55" r="5" fill="#facc15" />
            <circle cx="196" cy="55" r="5" fill="#22c55e" />

            {/* VS Code Title */}
            <text
                x="235"
                y="59"
                fontSize="12"
                fontWeight="700"
                fill="black"
            >
                portfolio.jsx
            </text>

            {/* Code Lines */}

            <rect
                x="165"
                y="90"
                width="140"
                height="8"
                rx="2"
                fill="var(--accent-blue)"
            />

            <rect
                x="165"
                y="110"
                width="200"
                height="8"
                rx="2"
                fill="var(--accent-primary)"
            />

            <rect
                x="165"
                y="130"
                width="160"
                height="8"
                rx="2"
                fill="var(--accent-green)"
            />

            <rect
                x="165"
                y="150"
                width="210"
                height="8"
                rx="2"
                fill="var(--accent-yellow)"
            />

            <rect
                x="165"
                y="170"
                width="180"
                height="8"
                rx="2"
                fill="var(--accent-blue)"
            />

            <rect
                x="165"
                y="190"
                width="120"
                height="8"
                rx="2"
                fill="var(--accent-primary)"
            />

            {/* Monitor Stand */}

            <rect
                x="286"
                y="230"
                width="28"
                height="55"
                fill="var(--bg-card)"
                stroke="var(--border-primary)"
                strokeWidth="3"
            />

            <rect
                x="245"
                y="285"
                width="110"
                height="18"
                rx="4"
                fill="var(--accent-blue)"
                stroke="var(--border-primary)"
                strokeWidth="3"
            />
        </motion.g>
    );
};

export default Monitor;