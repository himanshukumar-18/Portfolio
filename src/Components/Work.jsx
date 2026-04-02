import { useState, useEffect } from "react";
import Projectcard from "./Projectcard";
import thumbnail from "../images/thumbnail.png"

const projects = [
    {
        title: "SkillForge",
        image: thumbnail,
        live: "https://skill-fore.vercel.app/",
        github: "https://github.com/himanshukumar-18/SkillFore",
        problem:
            "Traditional learning platforms lack personalized skill development tracking and interactive progress monitoring. Users struggle to maintain consistent learning habits and track their skill improvement over time.",
        role:
            "Developed a comprehensive skill development platform with interactive learning modules, progress tracking, and personalized dashboards. Built full-stack application with modern UI/UX, real-time progress analytics, and gamified learning experience.",
        tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Chart.js", "JWT", "Socket.io"],
        improvement:
            "Implemented advanced analytics dashboard with visual progress charts, real-time notifications, and adaptive learning recommendations. Added offline capability and improved mobile responsiveness by 60%.",
    },
];

const Work = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") setActiveIndex(null);
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, []);

    return (
        <section id="Work" className="w-full py-32 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="uppercase tracking-[0.35em] text-xs text-[var(--text-muted)]">
                        Portfolio
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[var(--text-primary)]">
                        Selected{" "}
                        <span className="text-[var(--accent-primary)]">Projects</span>
                    </h2>
                    <p className="mt-6 text-lg text-[var(--text-secondary)]">
                        Real-world projects that demonstrate my development approach.
                    </p>
                </div>

                {/* GRID */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <Projectcard
                            key={index}
                            project={project}
                            isOpen={activeIndex === index}
                            onOpen={() => setActiveIndex(index)}
                            onClose={() => setActiveIndex(null)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;

