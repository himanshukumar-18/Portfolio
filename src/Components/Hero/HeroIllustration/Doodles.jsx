import { motion } from "framer-motion";

const floatAnimation = (delay = 0) => ({
    y: [0, -4, 0],
    rotate: [-2, 2, -2],
    transition: {
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
    },
});

const Doodles = () => {
    return (
        <g>
            {/* Sparkles */}
            <motion.g animate={floatAnimation(0)}>
                <path
                    d="M90 40 L90 52 M84 46 L96 46"
                    stroke="var(--accent-primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </motion.g>

            <motion.g animate={floatAnimation(0.4)}>
                <path
                    d="M520 55 L520 67 M514 61 L526 61"
                    stroke="var(--accent-blue)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </motion.g>

            {/* Star */}
            <motion.g animate={floatAnimation(0.8)}>
                <polygon
                    points="
            150,28
            154,38
            165,38
            156,45
            160,56
            150,49
            140,56
            144,45
            135,38
            146,38
          "
                    fill="var(--accent-yellow)"
                    stroke="var(--border-primary)"
                    strokeWidth="2"
                />
            </motion.g>

            {/* Lightning */}
            <motion.g animate={floatAnimation(1.2)}>
                <polygon
                    points="
            470,40
            485,40
            476,56
            490,56
            468,82
            474,62
            462,62
          "
                    fill="var(--accent-primary)"
                    stroke="var(--border-primary)"
                    strokeWidth="2"
                />
            </motion.g>

            {/* Heart */}
            <motion.g animate={floatAnimation(0.6)}>
                <path
                    d="
            M105 125
            C105 115 118 115 118 125
            C118 115 131 115 131 125
            C131 139 118 146 118 146
            C118 146 105 139 105 125
          "
                    fill="var(--accent-primary)"
                    stroke="var(--border-primary)"
                    strokeWidth="2"
                />
            </motion.g>

            {/* Arrow */}
            <motion.g animate={floatAnimation(1.5)}>
                <path
                    d="M455 135 L500 110"
                    stroke="var(--accent-green)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <path
                    d="M490 105 L500 110 L495 120"
                    fill="none"
                    stroke="var(--accent-green)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </motion.g>

            {/* Circle */}
            <motion.circle
                cx="82"
                cy="245"
                r="9"
                fill="none"
                stroke="var(--accent-blue)"
                strokeWidth="3"
                animate={floatAnimation(0.2)}
            />

            {/* Zigzag */}
            <motion.path
                d="M470 250 L482 242 L494 250 L506 242"
                fill="none"
                stroke="var(--accent-yellow)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={floatAnimation(0.9)}
            />

            {/* Dot Cluster */}
            {[0, 1, 2, 3].map((i) => (
                <motion.circle
                    key={i}
                    cx={520 + (i % 2) * 12}
                    cy={205 + Math.floor(i / 2) * 12}
                    r="3"
                    fill="var(--accent-primary)"
                    animate={{
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: i * 0.2,
                    }}
                />
            ))}

            {/* Curved Scribble */}
            <motion.path
                d="
          M75 305
          Q95 285 115 305
          Q135 325 155 305
        "
                fill="none"
                stroke="var(--accent-green)"
                strokeWidth="3"
                strokeLinecap="round"
                animate={floatAnimation(0.3)}
            />
        </g>
    );
};

export default Doodles;