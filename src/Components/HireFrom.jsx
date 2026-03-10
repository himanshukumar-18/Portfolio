import { useState } from "react";
import { motion } from "framer-motion";

const HireFrom = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual endpoint)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("success");
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (fieldName) => `
    peer
    w-full
    bg-transparent
    border ${
      errors[fieldName] 
        ? "border-red-500 focus:border-red-500" 
        : "border-white/20 focus:border-[var(--accent-primary)]"
    }
    rounded-xl
    px-4 pt-5 pb-2
    text-sm text-white
    placeholder-transparent
    focus:outline-none
    transition-all
    resize-none
  `;

  const labelClasses = (fieldName) => `
    absolute left-4 top-2
    text-xs ${
      errors[fieldName] 
        ? "text-red-400" 
        : "text-[var(--text-muted)]"
    }
    transition-all
    peer-placeholder-shown:top-4
    peer-placeholder-shown:text-sm
    peer-placeholder-shown:text-[var(--text-muted)]
    peer-focus:top-2
    peer-focus:text-xs
    peer-focus:text-[var(--accent-primary)]
  `;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* NAME */}
      <div className="relative">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClasses("name")}
          placeholder="Your Name"
          disabled={isSubmitting}
        />
        <label className={labelClasses("name")}>
          Your Name *
        </label>
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-xs mt-1"
          >
            {errors.name}
          </motion.p>
        )}
      </div>

      {/* EMAIL */}
      <div className="relative">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses("email")}
          placeholder="Your Email"
          disabled={isSubmitting}
        />
        <label className={labelClasses("email")}>
          Your Email *
        </label>
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-xs mt-1"
          >
            {errors.email}
          </motion.p>
        )}
      </div>

      {/* SUBJECT */}
      <div className="relative">
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={inputClasses("subject")}
          placeholder="Subject"
          disabled={isSubmitting}
        />
        <label className={labelClasses("subject")}>
          Subject *
        </label>
        {errors.subject && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-xs mt-1"
          >
            {errors.subject}
          </motion.p>
        )}
      </div>

      {/* MESSAGE */}
      <div className="relative">
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className={inputClasses("message")}
          placeholder="Message"
          disabled={isSubmitting}
        />
        <label className={labelClasses("message")}>
          Message *
        </label>
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-xs mt-1"
          >
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* STATUS MESSAGE */}
      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-sm text-center"
        >
          ✓ Message sent successfully! I&apos;ll get back to you soon.
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-sm text-center"
        >
          ✗ Failed to send message. Please try again.
        </motion.div>
      )}

      {/* SUBMIT BUTTON */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className="
          mt-2
          w-full
          py-4
          rounded-2xl
          bg-[var(--accent-primary)]
          text-white
          font-medium
          shadow-[var(--accent-glow)]
          hover:opacity-90
          transition-all
          disabled:opacity-50
          disabled:cursor-not-allowed
          flex items-center justify-center gap-2
        "
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </motion.button>
    </form>
  );
};

export default HireFrom;

