const HireFrom = () => {
    return (
        <form className="flex flex-col gap-6">

            {/* NAME */}
            <div className="relative">
                <input
                    type="text"
                    required
                    className="
            peer
            w-full
            bg-transparent
            border border-white/20
            rounded-xl
            px-4 pt-5 pb-2
            text-sm text-white
            placeholder-transparent
            focus:outline-none
            focus:border-[var(--accent-primary)]
            transition
          "
                    placeholder="Your Name"
                />
                <label
                    className="
            absolute left-4 top-2
            text-xs text-[var(--text-muted)]
            transition-all
            peer-placeholder-shown:top-4
            peer-placeholder-shown:text-sm
            peer-placeholder-shown:text-[var(--text-muted)]
            peer-focus:top-2
            peer-focus:text-xs
            peer-focus:text-[var(--accent-primary)]
          "
                >
                    Your Name *
                </label>
            </div>

            {/* EMAIL */}
            <div className="relative">
                <input
                    type="email"
                    required
                    className="
            peer
            w-full
            bg-transparent
            border border-white/20
            rounded-xl
            px-4 pt-5 pb-2
            text-sm text-white
            placeholder-transparent
            focus:outline-none
            focus:border-[var(--accent-primary)]
            transition
          "
                    placeholder="Your Email"
                />
                <label
                    className="
            absolute left-4 top-2
            text-xs text-[var(--text-muted)]
            transition-all
            peer-placeholder-shown:top-4
            peer-placeholder-shown:text-sm
            peer-placeholder-shown:text-[var(--text-muted)]
            peer-focus:top-2
            peer-focus:text-xs
            peer-focus:text-[var(--accent-primary)]
          "
                >
                    Your Email *
                </label>
            </div>

            {/* SUBJECT */}
            <div className="relative">
                <input
                    type="text"
                    required
                    className="
            peer
            w-full
            bg-transparent
            border border-white/20
            rounded-xl
            px-4 pt-5 pb-2
            text-sm text-white
            placeholder-transparent
            focus:outline-none
            focus:border-[var(--accent-primary)]
            transition
          "
                    placeholder="Subject"
                />
                <label
                    className="
            absolute left-4 top-2
            text-xs text-[var(--text-muted)]
            transition-all
            peer-placeholder-shown:top-4
            peer-placeholder-shown:text-sm
            peer-placeholder-shown:text-[var(--text-muted)]
            peer-focus:top-2
            peer-focus:text-xs
            peer-focus:text-[var(--accent-primary)]
          "
                >
                    Subject *
                </label>
            </div>

            {/* MESSAGE */}
            <div className="relative">
                <textarea
                    rows="4"
                    required
                    className="
            peer
            w-full
            bg-transparent
            border border-white/20
            rounded-xl
            px-4 pt-5 pb-2
            text-sm text-white
            placeholder-transparent
            focus:outline-none
            focus:border-[var(--accent-primary)]
            transition
            resize-none
          "
                    placeholder="Message"
                />
                <label
                    className="
            absolute left-4 top-2
            text-xs text-[var(--text-muted)]
            transition-all
            peer-placeholder-shown:top-4
            peer-placeholder-shown:text-sm
            peer-placeholder-shown:text-[var(--text-muted)]
            peer-focus:top-2
            peer-focus:text-xs
            peer-focus:text-[var(--accent-primary)]
          "
                >
                    Message *
                </label>
            </div>

        </form>
    );
};

export default HireFrom;
