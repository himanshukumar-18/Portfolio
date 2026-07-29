import {
    AboutHeader,
    AboutImageCard,
    AboutStory,
    JourneyTimeline,
} from "./index";

const About = () => {
    return (
        <section
            id="About"
            className="
                relative

                bg-[var(--bg-primary)]

                py-24
                lg:py-32

                overflow-hidden
            "
        >
            {/* Decorative Background */}
            <div
                className="
                    absolute
                    inset-0
                    pointer-events-none
                    opacity-20
                "
            >
                <div
                    className="
                        absolute
                        top-16
                        left-10

                        w-20
                        h-20

                        border-[4px]
                        border-[var(--border-primary)]

                        bg-[var(--accent-yellow)]

                        rotate-12
                    "
                />

                <div
                    className="
                        absolute
                        top-1/3
                        right-12

                        w-16
                        h-16

                        border-[4px]
                        border-[var(--border-primary)]

                        bg-[var(--accent-blue)]

                        -rotate-12
                    "
                />

                <div
                    className="
                        absolute
                        bottom-24
                        left-1/4

                        w-14
                        h-14

                        border-[4px]
                        border-[var(--border-primary)]

                        bg-[var(--accent-primary)]

                        rotate-45
                    "
                />
            </div>

            <div
                className="
                    relative

                    max-w-7xl
                    mx-auto

                    px-5
                    sm:px-6
                    lg:px-8

                    space-y-32
                "
            >
                {/* Header */}
                <AboutHeader />

                {/* Profile + Story */}
                <div
                    className="
                        grid

                        lg:grid-cols-2

                        gap-14
                        lg:gap-20

                        items-start
                    "
                >
                    <AboutImageCard />

                    <AboutStory />
                </div>


                {/* Developer Journey */}
                <JourneyTimeline />
            </div>
        </section>
    );
};

export default About;