import { motion } from "framer-motion"
import HireFrom from './HireFrom'

const Contact = () => {
    return (
        <>
            <section
                id="Contact"
                className="relative w-full py-32 overflow-hidden"
            >
                {/* BACKGROUND */}
                <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                        {/* LEFT — CONTENT + FORM */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="lg:col-span-6"
                        >
                            <span className="uppercase tracking-[0.35em] text-xs text-[var(--text-muted)]">
                                Let’s Work Together
                            </span>

                            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[var(--text-primary)]">
                                Hire <span className="text-[var(--accent-primary)]">Me</span>
                            </h2>

                            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-xl">
                                I’m open to full-time roles and freelance opportunities.
                                If you’re looking for someone who cares about quality,
                                performance, and clarity — let’s talk.
                            </p>

                            {/* CONTACT INFO */}
                            <div className="mt-6 space-y-2 text-[var(--text-secondary)]">
                                <p>
                                    📞 <span className="text-white">+91 6201030273</span>
                                </p>
                                <p>
                                    ✉️ <span className="text-white">rajh5343@gmail.com</span>
                                </p>
                            </div>

                            {/* GLASS FORM */}
                            <div
                                className="
            mt-10
            rounded-3xl
            bg-white/5
            backdrop-blur-2xl
            border border-white/10
            p-8
            shadow-[0_30px_80px_rgba(0,0,0,0.6)]
          "
                            >
                                <HireFrom />

                                {/* SUBMIT BUTTON */}
                                <motion.button
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    className="
              mt-6
              w-full
              py-4
              rounded-2xl
              bg-[var(--accent-primary)]
              text-white
              font-medium
              shadow-[var(--accent-glow)]
              hover:opacity-90
              transition
            "
                                >
                                    Send Message
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* RIGHT — IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="lg:col-span-6 hidden lg:block"
                        >
                            <div
                                className="
            relative
            h-[520px]
            rounded-3xl
            overflow-hidden
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            shadow-[0_30px_80px_rgba(0,0,0,0.6)]
          "
                            >
                                <img
                                    src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260"
                                    alt="Contact"
                                    className="w-full h-full object-cover scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40" />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact