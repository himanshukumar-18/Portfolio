import { motion } from "framer-motion";

const notes = [
    {
        x: 90,
        y: 70,
        color: "var(--accent-yellow)",
        text: "AI",
        rotate: -6,
    },
    {
        x: 485,
        y: 95,
        color: "var(--accent-blue)",
        text: "MERN",
        rotate: 5,
    },
    {
        x: 500,
        y: 170,
        color: "var(--accent-green)",
        text: "GIT",
        rotate: -4,
    },
    {
        x: 85,
        y: 165,
        color: "var(--accent-primary)",
        text: "API",
        rotate: 6,
    },
];

const StickyNote = () => {
    return (
        <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay: 1,
                duration: 0.8,
            }}
        >
            {notes.map((note, index) => (
                <motion.g
                    key={index}
                    animate={{
                        y: [0, -3, 0],
                        rotate: [note.rotate, note.rotate + 1.5, note.rotate],
                    }}
                    transition={{
                        duration: 3 + index * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {/* Sticky Note */}
                    <rect
                        x={note.x}
                        y={note.y}
                        width="58"
                        height="58"
                        rx="4"
                        fill={note.color}
                        stroke="var(--border-primary)"
                        strokeWidth="3"
                        transform={`rotate(${note.rotate} ${note.x + 29} ${note.y + 29})`}
                    />

                    {/* Pin */}
                    <circle
                        cx={note.x + 29}
                        cy={note.y + 10}
                        r="4"
                        fill="var(--border-primary)"
                    />

                    {/* Folded Corner */}
                    <polygon
                        points={`
              ${note.x + 46},${note.y}
              ${note.x + 58},${note.y}
              ${note.x + 58},${note.y + 12}
            `}
                        fill="rgba(255,255,255,0.35)"
                    />

                    {/* Label */}
                    <text
                        x={note.x + 29}
                        y={note.y + 37}
                        textAnchor="middle"
                        fontSize="13"
                        fontWeight="900"
                        fill="var(--text-primary)"
                        style={{
                            textTransform: "uppercase",
                            userSelect: "none",
                        }}
                    >
                        {note.text}
                    </text>
                </motion.g>
            ))}
        </motion.g>
    );
};

export default StickyNote;