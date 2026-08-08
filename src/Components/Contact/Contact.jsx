import { useForm } from "react-hook-form";
import { useWatch } from "react-hook-form";

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

    // useWatch is more targeted than watch() — only re-renders the consumer,
    // not the entire Contact tree on every keystroke
    const formData = useWatch({ control: form.control });

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
                    {/* Left — Form + Info */}
                    <div className="xl:col-span-7 flex flex-col gap-10">
                        <ContactForm form={form} />
                        <ContactInfo />
                    </div>

                    {/* Right — Illustration + WhatsApp Preview */}
                    <div className="xl:col-span-5 flex flex-col gap-10">
                        <ContactIllustration />
                        <WhatsAppPreview formData={formData} />
                    </div>
                </div>

                {/* Social Links */}
                <SocialLinks />
            </div>
        </section>
    );
};

export default Contact;