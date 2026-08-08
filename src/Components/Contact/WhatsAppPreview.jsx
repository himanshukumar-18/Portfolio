import { motion } from "framer-motion";
import { MessageCircle, CheckCheck } from "lucide-react";

// formData is optional — safe defaults prevent TypeError when prop is missing or partial
const WhatsAppPreview = ({ formData = {} }) => {
    const message = `Hello Himanshu 👋

My Name: ${formData.name || "Your Name"}

Email: ${formData.email || "example@email.com"}

Company: ${formData.company || "Your Company"}

Project Type: ${formData.projectType || "Portfolio Website"}

Budget: ${formData.budget || "Let's Discuss"}

Timeline: ${formData.timeline || "Flexible"}

Project Details:
${formData.message || "Tell me about your project here..."}

Looking forward to hearing from you.`;

    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
                overflow-hidden
                bg-[var(--bg-card)]
                border-[4px]
                border-[var(--border-primary)]
                shadow-[10px_10px_0px_var(--border-primary)]
            "
            aria-label="WhatsApp message preview"
        >
            {/* Top Bar */}
            <div
                className="
                    flex
                    items-center
                    gap-3
                    px-6
                    py-4
                    bg-[var(--accent-green)]
                    border-b-[4px]
                    border-[var(--border-primary)]
                "
            >
                <div
                    className="
                        w-12
                        h-12
                        flex
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        border-[3px]
                        border-[var(--border-primary)]
                        shrink-0
                    "
                    aria-hidden="true"
                >
                    <MessageCircle size={24} className="text-green-600" />
                </div>

                <div>
                    <h3 className="font-black uppercase text-[var(--border-primary)]">
                        Himanshu Kumar
                    </h3>
                    <p className="text-xs font-bold text-[var(--border-primary)]">
                        WhatsApp Preview
                    </p>
                </div>
            </div>

            {/* Chat area */}
            <div
                className="
                    p-4
                    sm:p-6
                    bg-[#efeae2]
                    min-h-[400px]
                "
            >
                {/* Message bubble — NO layout prop to avoid expensive recalculation */}
                <div
                    className="
                        ml-auto
                        max-w-[95%]
                        bg-[#dcf8c6]
                        border-[3px]
                        border-[var(--border-primary)]
                        shadow-[5px_5px_0px_var(--border-primary)]
                        p-4
                        sm:p-5
                    "
                >
                    <pre
                        className="
                            whitespace-pre-wrap
                            font-sans
                            text-xs
                            sm:text-sm
                            leading-6
                            sm:leading-7
                            text-black
                        "
                    >
                        {message}
                    </pre>

                    <div
                        className="
                            mt-4
                            flex
                            items-center
                            justify-end
                            gap-2
                            text-xs
                            text-gray-500
                        "
                    >
                        <span>10:30</span>
                        <CheckCheck size={16} className="text-blue-600" />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div
                className="
                    flex
                    items-center
                    justify-between
                    flex-wrap
                    gap-3
                    px-6
                    py-4
                    border-t-[4px]
                    border-[var(--border-primary)]
                    bg-[var(--bg-card)]
                "
            >
                <span className="text-xs font-bold text-[var(--text-secondary)]">
                    Updates as you type
                </span>

                <div
                    className="
                        px-4
                        py-2
                        bg-[var(--accent-yellow)]
                        border-[3px]
                        border-[var(--border-primary)]
                        shadow-[4px_4px_0px_var(--border-primary)]
                        text-xs
                        font-black
                        uppercase
                    "
                >
                    Live Preview
                </div>
            </div>
        </motion.div>
    );
};

export default WhatsAppPreview;