import { motion } from "framer-motion";

const Developer = () => {
    return (
        <motion.g
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.7,
            }}
        >
            {/* Neck */}
            <rect
                x="289"
                y="218"
                width="22"
                height="14"
                fill="#F5C9A9"
                stroke="var(--border-primary)"
                strokeWidth="2"
            />

            {/* Head */}
            <circle
                cx="300"
                cy="195"
                r="28"
                fill="#F5C9A9"
                stroke="var(--border-primary)"
                strokeWidth="3"
            />

            {/* Hair */}
            <path
                d="
          M272 193
          C274 165 326 165 328 193
          C325 180 315 172 300 172
          C285 172 275 180 272 193
        "
                fill="var(--text-primary)"
            />

            {/* Beard */}
            <path
                d="
          M281 205
          C287 223 313 223 319 205
          C316 218 309 226 300 226
          C291 226 284 218 281 205
        "
                fill="var(--text-primary)"
            />

            {/* Eyes */}
            <circle cx="291" cy="196" r="2.5" fill="var(--text-primary)" />
            <circle cx="309" cy="196" r="2.5" fill="var(--text-primary)" />

            {/* Smile */}
            <path
                d="M292 208 Q300 214 308 208"
                fill="none"
                stroke="var(--text-primary)"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {/* Hoodie */}
            <path
                d="
          M245 235
          L355 235
          L372 330
          L228 330
          Z
        "
                fill="var(--accent-blue)"
                stroke="var(--border-primary)"
                strokeWidth="3"
            />

            {/* Hood */}
            <path
                d="
          M270 228
          Q300 248 330 228
          Q320 245 300 250
          Q280 245 270 228
        "
                fill="var(--bg-card)"
                stroke="var(--border-primary)"
                strokeWidth="2"
            />

            {/* Arms */}
            <rect
                x="220"
                y="245"
                width="26"
                height="72"
                rx="10"
                fill="var(--accent-blue)"
                stroke="var(--border-primary)"
                strokeWidth="3"
            />

            <rect
                x="354"
                y="245"
                width="26"
                height="72"
                rx="10"
                fill="var(--accent-blue)"
                stroke="var(--border-primary)"
                strokeWidth="3"
            />

            {/* Hands */}
            <circle
                cx="233"
                cy="322"
                r="11"
                fill="#F5C9A9"
                stroke="var(--border-primary)"
                strokeWidth="2"
            />

            <circle
                cx="367"
                cy="322"
                r="11"
                fill="#F5C9A9"
                stroke="var(--border-primary)"
                strokeWidth="2"
            />

            {/* Laptop overlap */}
            <rect
                x="250"
                y="260"
                width="100"
                height="55"
                fill="var(--bg-card)"
                opacity="0.08"
            />

            {/* Floating Code Icons */}

            <motion.text
                x="210"
                y="150"
                fontSize="20"
                fontWeight="900"
                fill="var(--accent-primary)"
                animate={{
                    y: [150, 143, 150],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                }}
            >
                {"</>"}
            </motion.text>

            <motion.text
                x="365"
                y="150"
                fontSize="20"
                fontWeight="900"
                fill="var(--accent-green)"
                animate={{
                    y: [150, 145, 150],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2.8,
                }}
            >
                {"{}"}
            </motion.text>

            <motion.text
                x="188"
                y="280"
                fontSize="18"
                fontWeight="900"
                fill="var(--accent-yellow)"
                animate={{
                    rotate: [-5, 5, -5],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                }}
            >
                JS
            </motion.text>

            <motion.text
                x="386"
                y="275"
                fontSize="18"
                fontWeight="900"
                fill="var(--accent-primary)"
                animate={{
                    rotate: [5, -5, 5],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                }}
            >
                AI
            </motion.text>
        </motion.g>
    );
};

export default Developer;