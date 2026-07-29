import {
    AchievementsHeader,
    AchievementStats,
    CertificateGrid,
} from "./";

const Achievements = () => {
    return (
        <section
            id="Achievements"
            className="
                relative
                overflow-hidden

                bg-[var(--bg-primary)]

                py-24
                lg:py-32
            "
        >
            {/* ================= Background ================= */}

            <div
                className="
                    absolute
                    inset-0
                    pointer-events-none
                    -z-10
                "
            >
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
                        top-28
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
                        bottom-24
                        left-16

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
                        bottom-20
                        right-16

                        w-24
                        h-24

                        -rotate-12

                        bg-[var(--accent-green)]

                        border-[4px]
                        border-[var(--border-primary)]
                    "
                />

                {/* Decorative Circle */}
                <div
                    className="
                        absolute

                        left-1/2
                        top-1/3
                        -translate-x-1/2

                        w-72
                        h-72

                        rounded-full

                        bg-[var(--accent-primary)]

                        opacity-10

                        blur-3xl
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
                <AchievementsHeader />

                {/* Statistics */}
                <AchievementStats />

                {/* Certificates */}
                <CertificateGrid />
            </div>
        </section>
    );
};

export default Achievements;