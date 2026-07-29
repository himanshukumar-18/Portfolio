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

            <div className="p-8">

                <h3
                    className="
                        text-3xl
                        font-black
                        uppercase
                        mb-8
                    "
                >
                    Send Project Details
                </h3>

                <div className="grid md:grid-cols-2 gap-6">

                    {/* Name */}

                    <div>
                        <input
                            placeholder="Full Name *"
                            className={inputStyle}
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />

                        {errors.name && (
                            <p className="mt-2 text-red-500 text-sm font-bold">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}

                    <div>
                        <input
                            type="email"
                            placeholder="Email *"
                            className={inputStyle}
                            {...register("email", {
                                required: "Email is required",
                            })}
                        />

                        {errors.email && (
                            <p className="mt-2 text-red-500 text-sm font-bold">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Company */}

                    <input
                        placeholder="Company (Optional)"
                        className={inputStyle}
                        {...register("company")}
                    />

                    {/* Project */}

                    <select
                        className={inputStyle}
                        {...register("projectType", {
                            required: true,
                        })}
                    >
                        <option value="">
                            Select Project Type
                        </option>

                        {projectTypes.map((item) => (
                            <option
                                key={item.value}
                                value={item.value}
                            >
                                {item.value}
                            </option>
                        ))}
                    </select>

                    {/* Budget */}

                    <select
                        className={inputStyle}
                        {...register("budget", {
                            required: true,
                        })}
                    >
                        <option value="">
                            Budget
                        </option>

                        {budgetOptions.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>

                    {/* Timeline */}

                    <select
                        className={inputStyle}
                        {...register("timeline", {
                            required: true,
                        })}
                    >
                        <option value="">
                            Timeline
                        </option>

                        {timelineOptions.map((item) => (
                            <option
                                key={item.value}
                                value={item.value}
                            >
                                {item.value}
                            </option>
                        ))}
                    </select>

                </div>

                {/* Message */}

                <textarea
                    rows={7}
                    placeholder="Tell me about your project..."
                    className={`${inputStyle} mt-6 resize-none`}
                    {...register("message", {
                        required: "Project details are required",
                    })}
                />

                {errors.message && (
                    <p className="mt-2 text-red-500 text-sm font-bold">
                        {errors.message.message}
                    </p>
                )}

                {/* Button */}

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

                        transition-all
                        duration-200

                        hover:shadow-[10px_10px_0px_var(--border-primary)]

                        disabled:opacity-60
                        disabled:cursor-not-allowed
                    "
                >
                    <Send size={20} />

                    {isSubmitting
                        ? "Opening WhatsApp..."
                        : "Send via WhatsApp"}
                </motion.button>
            </div>
        </motion.form>
    );
};

export default ContactForm;