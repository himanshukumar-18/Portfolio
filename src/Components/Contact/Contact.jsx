import { useForm } from "react-hook-form";

import {
    ContactForm,
    ContactHeader,
    ContactIllustration,
    ContactInfo,
    SocialLinks,
    WhatsAppPreview,
    AvailabilityCard,
} from "./";

const Contact = () => {
    // Shared form instance — ContactForm fills it, WhatsAppPreview reads it
    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            company: "",
            projectType: "",
            budget: "",
            timeline: "",
            message: "",
        },
    });

    // Live field values streamed to the WhatsApp preview
    const formData = form.watch();

    return (
        <section
            id="Contact"
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
                    -z-10
                    overflow-hidden
                    pointer-events-none
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

                {/* Decorative Shapes */}

                <div
                    className="
                        absolute
                        top-16
                        left-12

                        w-20
                        h-20

                        rotate-12

                        bg-[var(--accent-yellow)]

                        border-[4px]
                        border-[var(--border-primary)]

                        opacity-20
                    "
                />

                <div
                    className="
                        absolute
                        top-24
                        right-16

                        w-16
                        h-16

                        rounded-full

                        bg-[var(--accent-blue)]

                        border-[4px]
                        border-[var(--border-primary)]

                        opacity-20
                    "
                />

                <div
                    className="
                        absolute
                        bottom-24
                        left-20

                        w-10
                        h-10

                        rotate-45

                        bg-[var(--accent-primary)]

                        border-[4px]
                        border-[var(--border-primary)]

                        opacity-20
                    "
                />

                <div
                    className="
                        absolute
                        bottom-20
                        right-20

                        w-24
                        h-24

                        -rotate-12

                        bg-[var(--accent-green)]

                        border-[4px]
                        border-[var(--border-primary)]

                        opacity-20
                    "
                />

                {/* Glow */}

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

                <ContactHeader />

                {/* Availability */}

                <AvailabilityCard />

                {/* Main Contact Area */}

                <div
                    className="
                        mt-20

                        grid

                        grid-cols-1
                        xl:grid-cols-12

                        gap-10
                    "
                >
                    {/* Left */}

                    <div
                        className="
                            xl:col-span-7

                            flex
                            flex-col

                            gap-10
                        "
                    >
                        {/* Pass the shared form instance — ContactForm owns the fields */}
                        <ContactForm form={form} />

                        <ContactInfo />
                    </div>

                    {/* Right */}

                    <div
                        className="
                            xl:col-span-5

                            flex
                            flex-col

                            gap-10
                        "
                    >
                        <ContactIllustration />

                        {/* Pass live field values so preview updates as user types */}
                        <WhatsAppPreview formData={formData} />
                    </div>
                </div>

                {/* Social */}

                <SocialLinks />
            </div>
        </section>
    );
};

export default Contact;