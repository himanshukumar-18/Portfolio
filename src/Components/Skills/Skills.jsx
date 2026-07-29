import {
  SkillsHeader,
  SkillsGrid,
} from "./";

const Skills = () => {
  return (
    <section
      id="Skills"
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
        {/* Top Right */}
        <div
          className="
                        absolute
                        top-16
                        right-12

                        w-20
                        h-20

                        rotate-12

                        bg-[var(--accent-yellow)]

                        border-[4px]
                        border-[var(--border-primary)]
                    "
        />

        {/* Bottom Left */}
        <div
          className="
                        absolute
                        bottom-20
                        left-10

                        w-16
                        h-16

                        -rotate-12

                        bg-[var(--accent-primary)]

                        border-[4px]
                        border-[var(--border-primary)]
                    "
        />

        {/* Circle */}
        <div
          className="
                        absolute
                        top-1/2
                        right-1/4

                        w-14
                        h-14

                        rounded-full

                        bg-[var(--accent-blue)]

                        border-[4px]
                        border-[var(--border-primary)]
                    "
        />

        {/* Grid Pattern */}
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
      </div>

      {/* Content */}
      <div
        className="
                    relative

                    max-w-7xl
                    mx-auto

                    px-5
                    sm:px-6
                    lg:px-8

                    space-y-20
                    lg:space-y-24
                "
      >
        {/* Header */}
        <SkillsHeader />

        {/* Cards */}
        <SkillsGrid />
      </div>
    </section>
  );
};

export default Skills;