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