import { motion } from "framer-motion";

const Plant = () => {
    const leafAnimation = {
        y: [0, -3, 0],
        rotate: [-2, 2, -2],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    };

    return (
        <motion.g
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.7,
                delay: 0.9,
            }}
        >
            {/* Pot Shadow */}
            <ellipse
                cx="500"
                cy="298"
                rx="26"
                ry="6"
                fill="rgba(0,0,0,0.12)"
            />

            {/* Pot */}
            <path
                d="
          M480 250
          L520 250
          L514 290
          L486 290
          Z
        "
                fill="var(--accent-yellow)"
                stroke="var(--border-primary)"
                strokeWidth="3"
            />

            {/* Pot Rim */}
            <rect
                x="478"
                y="244"
                width="44"
                height="10"
                rx="2"
                fill="var(--bg-card)"
                stroke="var(--border-primary)"
                strokeWidth="3"
            />

            {/* Soil */}
            <ellipse
                cx="500"
                cy="249"
                rx="17"
                ry="4"
                fill="#6B4F2A"
            />

            {/* Stem */}
            <line
                x1="500"
                y1="248"
                x2="500"
                y2="185"
                stroke="var(--accent-green)"
                strokeWidth="4"
                strokeLinecap="round"
            />

            {/* Left Leaf */}
            <motion.ellipse
                cx="486"
                cy="220"
                rx="11"
                ry="22"
                fill="var(--accent-green)"
                stroke="var(--border-primary)"
                strokeWidth="2"
                transform="rotate(-35 486 220)"
                animate={leafAnimation}
            />

            {/* Right Leaf */}
            <motion.ellipse
                cx="514"
                cy="220"
                rx="11"
                ry="22"
                fill="var(--accent-green)"
                stroke="var(--border-primary)"
                strokeWidth="2"
                transform="rotate(35 514 220)"
                animate={leafAnimation}
            />

            {/* Top Leaf */}
            <motion.ellipse
                cx="500"
                cy="195"
                rx="10"
                ry="20"
                fill="var(--accent-green)"
                stroke="var(--border-primary)"
                strokeWidth="2"
                animate={leafAnimation}
            />

            {/* Small Left Leaf */}
            <motion.ellipse
                cx="492"
                cy="205"
                rx="8"
                ry="14"
                fill="var(--accent-green)"
                stroke="var(--border-primary)"
                strokeWidth="2"
                transform="rotate(-25 492 205)"
                animate={leafAnimation}
            />

            {/* Small Right Leaf */}
            <motion.ellipse
                cx="508"
                cy="205"
                rx="8"
                ry="14"
                fill="var(--accent-green)"
                stroke="var(--border-primary)"
                strokeWidth="2"
                transform="rotate(25 508 205)"
                animate={leafAnimation}
            />

            {/* Pot Decoration */}
            <circle
                cx="500"
                cy="270"
                r="6"
                fill="var(--accent-primary)"
                stroke="var(--border-primary)"
                strokeWidth="2"
            />
        </motion.g>
    );
};

export default Plant;