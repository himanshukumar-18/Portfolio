import { useState } from "react";

import {
    WorkHeader,
    WorkStats,
    ProjectTabs,
    ProjectGrid,
} from "./";

const Work = () => {
    const [activeTab, setActiveTab] = useState("personal");

    return (
        <section
            id="Work"
            className="
                relative

                overflow-hidden

                bg-[var(--bg-primary)]

                py-24
                lg:py-32
            "
        >
            {/* ================= Background Decorations ================= */}

            <div
                className="
                    absolute
                    inset-0
                    pointer-events-none
                    -z-10
                "
            >
                {/* Grid */}
                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.05]
                    "
                    style={{
                        backgroundImage: `
                            linear-gradient(var(--border-primary) 1px, transparent 1px),
                            linear-gradient(90deg, var(--border-primary) 1px, transparent 1px)
                        `,
                        backgroundSize: "42px 42px",
                    }}
                />

                {/* Top Left */}
                <div
                    className="
                        absolute

                        top-16
                        left-10

                        w-20
                        h-20

                        rotate-12

                        bg-[var(--accent-yellow)]

                        border-[4px]
                        border-[var(--border-primary)]
                    "
                />

                {/* Top Right */}
                <div
                    className="
                        absolute

                        top-32
                        right-12

                        w-16
                        h-16

                        rounded-full

                        bg-[var(--accent-blue)]

                        border-[4px]
                        border-[var(--border-primary)]
                    "
                />

                {/* Bottom Left */}
                <div
                    className="
                        absolute

                        bottom-20
                        left-20

                        w-12
                        h-12

                        rotate-45

                        bg-[var(--accent-primary)]

                        border-[4px]
                        border-[var(--border-primary)]
                    "
                />

                {/* Bottom Right */}
                <div
                    className="
                        absolute

                        bottom-16
                        right-20

                        w-24
                        h-24

                        -rotate-12

                        bg-[var(--accent-green)]

                        border-[4px]
                        border-[var(--border-primary)]
                    "
                />
            </div>

            {/* ================= Content ================= */}

            <div
                className="
                    relative

                    max-w-7xl
                    mx-auto

                    px-5
                    sm:px-6
                    lg:px-8
                "
            >
                {/* Header */}
                <WorkHeader />

                {/* Stats */}
                <WorkStats />

                {/* Tabs */}
                <ProjectTabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                {/* Projects */}
                <ProjectGrid
                    activeTab={activeTab}
                />
            </div>
        </section>
    );
};

export default Work;