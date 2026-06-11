import { motion } from "framer-motion";

// Import certificate images
import certificateImg from "../images/arena.jpg"
import certificate1 from "../pdf/ArenaCert.pdf";

const certificates = [
    {
        title: "Full Stack Web Development",
        issuer: "Arena Animation",
        year: "2025",
        image: certificateImg,
        link: certificate1,
    },
];

const Achievements = () => {
    return (
        <section
            id="Achievements"
            className="relative py-28 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-primary)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="uppercase tracking-[0.35em] text-xs text-[var(--text-muted)]">
                        Achievements
                    </span>

                    <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-[var(--text-primary)]">
                        Certifications &
                        <span className="text-[var(--accent-primary)]">
                            {" "}Achievements
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-[var(--text-secondary)]">
                        Professional certifications, learning milestones, and achievements
                        that demonstrate my continuous growth as a developer.
                    </p>
                </motion.div>

                {/* Certificates */}
                <div className="mt-20">

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.map((certificate, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.6,
                                }}
                                whileHover={{
                                    y: -10,
                                }}
                                className="
                  overflow-hidden
                  rounded-3xl
                  bg-white/5
                  backdrop-blur-xl
                  border border-white/10
                  group
                "
                            >
                                {/* Certificate Image */}
                                <div className="overflow-hidden">
                                    <img
                                        src={certificate.image}
                                        alt={certificate.title}
                                        className="
                      w-full
                      h-56
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <span
                                        className="
                      inline-block
                      px-3 py-1
                      rounded-full
                      bg-[var(--accent-soft)]
                      text-[var(--accent-primary)]
                      text-xs
                    "
                                    >
                                        {certificate.year}
                                    </span>

                                    <h4 className="mt-4 text-xl font-semibold text-white">
                                        {certificate.title}
                                    </h4>

                                    <p className="mt-2 text-[var(--text-secondary)]">
                                        {certificate.issuer}
                                    </p>

                                    <a
                                        href={certificate.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-[var(--accent-primary)]
                      font-medium
                    "
                                    >
                                        View Certificate →
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;