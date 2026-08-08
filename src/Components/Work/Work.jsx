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
            {/* Grid paper texture — same as Hero */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(var(--border-primary) 1px, transparent 1px),
                        linear-gradient(90deg, var(--border-primary) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            />

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