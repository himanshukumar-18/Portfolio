import { motion } from "framer-motion";

const Laptop = () => {
    return (
        <motion.g
            initial={{ opacity: 0, y: 25, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
                duration: 0.7,
                delay: 0.5,
            }}
        >
            {/* Screen */}
            <rect
                x="205"
                y="185"
                width="190"
                height="110"
                rx="6"
                fill="var(--bg-card)"
                stroke="var(--border-primary)"
                strokeWidth="3"
            />

            {/* Terminal Header */}
            <rect
                x="205"
                y="185"
                width="190"
                height="22"
                fill="var(--accent-primary)"
                stroke="var(--border-primary)"
                strokeWidth="3"
            />

            {/* Terminal Buttons */}
            <circle cx="220" cy="196" r="3.5" fill="#ef4444" />
            <circle cx="234" cy="196" r="3.5" fill="#facc15" />
            <circle cx="248" cy="196" r="3.5" fill="#22c55e" />

            {/* Terminal Title */}
            <text
                x="270"
                y="200"
                fontSize="10"
                fontWeight="700"
                fill="white"
            >
                terminal
            </text>

            {/* Terminal Commands */}

            <text
                x="220"
                y="225"
                fontSize="10"
                fill="var(--accent-green)"
                fontWeight="700"
            >
                $ npm run dev
            </text>

            <text
                x="220"
                y="245"
                fontSize="10"
                fill="var(--accent-blue)"
                fontWeight="700"
            >
                ✓ Vite ready
            </text>

            <text
                x="220"
                y="265"
                fontSize="10"
                fill="var(--accent-primary)"
                fontWeight="700"
            >
                localhost:5173
            </text>

            {/* Keyboard Base */}

            <polygon
                points="
          185,295
          415,295
          445,315
          155,315
        "
                fill="var(--accent-yellow)"
                stroke="var(--border-primary)"
                strokeWidth="3"
            />

            {/* Trackpad */}

            <rect
                x="265"
                y="301"
                width="70"
                height="10"
                rx="2"
                fill="var(--bg-card)"
                stroke="var(--border-primary)"
                strokeWidth="2"
            />

            {/* Keyboard Rows */}

            {[0, 1, 2, 3].map((row) =>
                Array.from({ length: 10 }).map((_, col) => (
                    <rect
                        key={`${row}-${col}`}
                        x={175 + col * 24}
                        y={300 + row * 3}
                        width="14"
                        height="2"
                        rx="1"
                        fill="var(--border-primary)"
                    />
                ))
            )}
        </motion.g>
    );
};

export default Laptop;