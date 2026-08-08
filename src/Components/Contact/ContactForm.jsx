import { useWatch } from "react-hook-form";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

import {
    budgetOptions,
    projectTypes,
    timelineOptions,
    whatsappConfig,
} from "./contactData";

// form prop is passed from Contact.jsx (shared with WhatsAppPreview for live preview)
const ContactForm = ({ form }) => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isSubmitting },
    } = form;

    const onSubmit = (data) => {
        const message = `${whatsappConfig.intro}

👤 Full Name:
${data.name}

📧 Email:
${data.email}

🏢 Company:
${data.company || "N/A"}

💼 Project Type:
${data.projectType}

💰 Budget:
${data.budget}

📅 Timeline:
${data.timeline}

📝 Project Details:
${data.message}

${whatsappConfig.closing}`;

        const url = `https://wa.me/${whatsappConfig.phone}?text=${encodeURIComponent(
            message
        )}`;

        window.open(url, "_blank");

        reset();
    };

    const inputStyle = `
        w-full
        bg-[var(--bg-primary)]
        border-[3px]
        border-[var(--border-primary)]
        shadow-[5px_5px_0px_var(--border-primary)]
        px-4
        py-4
        text-[var(--text-primary)]
        placeholder:text-[var(--text-muted)]
        outline-none
        focus:-translate-y-1
        focus:shadow-[7px_7px_0px_var(--border-primary)]
        transition-all
        duration-200
        font-medium
    `;

    const labelStyle = `
        block
        text-xs
        font-black
        uppercase
        tracking-[0.18em]
        text-[var(--text-secondary)]
        mb-2
    `;

    return (
        <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
                bg-[var(--bg-card)]
                border-[4px]
                border-[var(--border-primary)]
                shadow-[10px_10px_0px_var(--border-primary)]
                overflow-hidden
            "
            noValidate
        >
            {/* Top Bar */}
            <div
                className="
                    h-3
                    bg-[var(--accent-primary)]
                    border-b-[4px]
                    border-[var(--border-primary)]
                "
            />

            <div className="p-6 md:p-8">

                <h3
                    className="
                        text-2xl
                        md:text-3xl
                        font-black
                        uppercase
                        mb-8
                        text-[var(--text-primary)]
                    "
                >
                    Send Project Details
                </h3>

                <div className="grid md:grid-cols-2 gap-6">

                    {/* Name */}
                    <div>
                        <label htmlFor="contact-name" className={labelStyle}>
                            Full Name *
                        </label>
                        <input
                            id="contact-name"
                            placeholder="John Doe"
                            autoComplete="name"
                            className={inputStyle}
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />
                        {errors.name && (
                            <p role="alert" className="mt-2 text-red-500 text-sm font-bold">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="contact-email" className={labelStyle}>
                            Email Address *
                        </label>
                        <input
                            id="contact-email"
                            type="email"
                            placeholder="you@email.com"
                            autoComplete="email"
                            className={inputStyle}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <p role="alert" className="mt-2 text-red-500 text-sm font-bold">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Company */}
                    <div>
                        <label htmlFor="contact-company" className={labelStyle}>
                            Company / Organization
                        </label>
                        <input
                            id="contact-company"
                            placeholder="Your Company (optional)"
                            autoComplete="organization"
                            className={inputStyle}
                            {...register("company")}
                        />
                    </div>

                    {/* Project Type */}
                    <div>
                        <label htmlFor="contact-project-type" className={labelStyle}>
                            Project Type *
                        </label>
                        <select
                            id="contact-project-type"
                            className={inputStyle}
                            {...register("projectType", {
                                required: "Please select a project type",
                            })}
                        >
                            <option value="">Select Project Type</option>
                            {projectTypes.map((item) => (
                                <option
                                    key={item.value}
                                    value={item.value}
                                >
                                    {item.value}
                                </option>
                            ))}
                        </select>
                        {errors.projectType && (
                            <p role="alert" className="mt-2 text-red-500 text-sm font-bold">
                                {errors.projectType.message}
                            </p>
                        )}
                    </div>

                    {/* Budget */}
                    <div>
                        <label htmlFor="contact-budget" className={labelStyle}>
                            Budget Range *
                        </label>
                        <select
                            id="contact-budget"
                            className={inputStyle}
                            {...register("budget", {
                                required: "Please select a budget range",
                            })}
                        >
                            <option value="">Select Budget</option>
                            {budgetOptions.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                        {errors.budget && (
                            <p role="alert" className="mt-2 text-red-500 text-sm font-bold">
                                {errors.budget.message}
                            </p>
                        )}
                    </div>

                    {/* Timeline */}
                    <div>
                        <label htmlFor="contact-timeline" className={labelStyle}>
                            Timeline *
                        </label>
                        <select
                            id="contact-timeline"
                            className={inputStyle}
                            {...register("timeline", {
                                required: "Please select a timeline",
                            })}
                        >
                            <option value="">Select Timeline</option>
                            {timelineOptions.map((item) => (
                                <option
                                    key={item.value}
                                    value={item.value}
                                >
                                    {item.value}
                                </option>
                            ))}
                        </select>
                        {errors.timeline && (
                            <p role="alert" className="mt-2 text-red-500 text-sm font-bold">
                                {errors.timeline.message}
                            </p>
                        )}
                    </div>

                </div>

                {/* Message */}
                <div className="mt-6">
                    <label htmlFor="contact-message" className={labelStyle}>
                        Project Details *
                    </label>
                    <textarea
                        id="contact-message"
                        rows={6}
                        placeholder="Tell me about your project — what you need, your timeline, and any specific requirements..."
                        className={`${inputStyle} resize-none`}
                        {...register("message", {
                            required: "Project details are required",
                            minLength: {
                                value: 20,
                                message: "Please provide at least 20 characters",
                            },
                        })}
                    />
                    {errors.message && (
                        <p role="alert" className="mt-2 text-red-500 text-sm font-bold">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    whileHover={{
                        y: -4,
                        rotate: -1,
                    }}
                    whileTap={{
                        scale: 0.98,
                    }}
                    disabled={isSubmitting}
                    className="
                        mt-8
                        w-full
                        flex
                        items-center
                        justify-center
                        gap-3
                        py-5
                        bg-[var(--accent-green)]
                        border-[4px]
                        border-[var(--border-primary)]
                        shadow-[8px_8px_0px_var(--border-primary)]
                        font-black
                        uppercase
                        tracking-wider
                        text-[var(--border-primary)]
                        transition-all
                        duration-200
                        hover:shadow-[10px_10px_0px_var(--border-primary)]
                        disabled:opacity-60
                        disabled:cursor-not-allowed
                    "
                >
                    <Send size={20} />
                    {isSubmitting ? "Opening WhatsApp..." : "Send via WhatsApp"}
                </motion.button>

                <p className="mt-4 text-center text-xs text-[var(--text-muted)] font-medium">
                    Submitting opens WhatsApp with a pre-filled message.
                </p>
            </div>
        </motion.form>
    );
};

export default ContactForm;