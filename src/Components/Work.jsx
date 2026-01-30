import { useState } from "react";
import Projectcard from "./Projectcard";

const projects = [
    {
        title: "Blogging Platform",
        image:
            "https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg",
        live: "https://frontenddev-himanshu.github.io/Blogging-Web",
        github: "https://github.com/frontenddev-himanshu/Blogging-Web",
        problem:
            "Users needed a clean, fast platform to read and publish blogs.",
        role:
            "Designed and developed the complete frontend with focus on readability.",
        tech: ["React", "CSS", "JavaScript"],
        improvement:
            "Improved mobile UX and optimized layout for better performance.",
    },
    {
        title: "Hotel Website",
        image:
            "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg",
        live: "https://devhimanshukr.github.io/Canary-Inn/",
        github: "https://github.com/devhimanshukr/Canary-Inn",
        problem:
            "Hotel needed a modern website to showcase rooms and services.",
        role:
            "Built responsive UI and structured content for easy navigation.",
        tech: ["HTML", "CSS", "JavaScript"],
        improvement:
            "Enhanced visual hierarchy and improved page load speed.",
    },
];

const Work = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="Work" className="w-full py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="uppercase tracking-[0.35em] text-xs text-[var(--text-muted)]">
                        Portfolio
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">
                        Selected{" "}
                        <span className="text-[var(--accent-primary)]">Projects</span>
                    </h2>
                    <p className="mt-6 text-lg text-white/70">
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
