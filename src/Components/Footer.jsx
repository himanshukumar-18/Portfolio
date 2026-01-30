const Footer = () => {
    return (
        <footer className="w-full my-8">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="
          flex flex-col md:flex-row
          items-center justify-between
          gap-6
          py-6
        ">
                    {/* LEFT — BRAND */}
                    <div className="text-lg font-semibold text-[var(--text-primary)]">
                        Himanshu<span className="text-[var(--accent-primary)]">.</span>
                    </div>

                    {/* CENTER — COPYRIGHT */}
                    <p className="text-sm text-[var(--text-muted)] text-center">
                        © 2025 Himanshu Kumar. All rights reserved.
                    </p>

                    {/* RIGHT — SOCIAL */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/himanshukumar-18"
                            target="_blank"
                            className="
                text-[var(--text-muted)]
                hover:text-[var(--accent-primary)]
                transition
              "
                        >
                            <i className="fa-brands fa-github text-lg" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/himanshu-kumar-8b5845313/"
                            target="_blank"
                            className="
                text-[var(--text-muted)]
                hover:text-[var(--accent-primary)]
                transition
              "
                        >
                            <i className="fa-brands fa-linkedin-in text-lg" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
