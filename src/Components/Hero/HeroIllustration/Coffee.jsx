import { motion } from "framer-motion";

const Coffee = () => {
    return (
        <motion.g
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.6,
                delay: 0.8,
            }}
        >
            {/* Steam */}
            {[0, 1, 2].map((i) => (
                <motion.path
                    key={i}
                    d={`M ${145 + i * 10} 250 C ${140 + i * 10} 240 ${150 + i * 10} 230 ${145 + i * 10} 220`}
                    fill="none"
                    stroke="var(--text-secondary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{
                        y: [0, -6, 0],
                        opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                    }}
                />
            ))}

            {/* Mug */}
            <rect
                x="130"
                y="250"
                width="42"
                height="36"
                rx="5"
                fill="var(--bg-card)"
                stroke="var(--border-primary)"
                strokeWidth="3"
            />

            {/* Coffee */}
            <rect
                x="134"
                y="254"
                width="34"
                height="8"
                rx="2"
                fill="#6F4E37"
            />

            {/* Handle */}
            <path
                d="
          M172 258
          C182 258 182 278 172 278
        "
                fill="none"
                stroke="var(--border-primary)"
                strokeWidth="3"
                strokeLinecap="round"
            />

            {/* Heart */}
            <path
                d="
          M146 270
          C146 265 152 265 152 270
          C152 265 158 265 158 270
          C158 276 152 279 152 279
          C152 279 146 276 146 270
        "
                fill="var(--accent-primary)"
            />

            {/* Saucer */}
            <ellipse
                cx="151"
                cy="289"
                rx="30"
                ry="5"
                fill="var(--accent-yellow)"
                stroke="var(--border-primary)"
                strokeWidth="2"
            />
        </motion.g>
    );
};

export default Coffee;