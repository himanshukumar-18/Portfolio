import {
    FooterBottom,
    FooterBrand,
    FooterNav,
    FooterSocials,
} from "./";

const Footer = () => {
    return (
        <footer
            className="
                relative
                overflow-hidden

                bg-[var(--bg-primary)]

                pt-20
                pb-10

                border-t-[4px]
                border-[var(--border-primary)]
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
                {/* Top Grid */}

                <div
                    className="
                        grid

                        grid-cols-1
                        lg:grid-cols-12

                        gap-8
                    "
                >
                    {/* Brand */}

                    <div className="lg:col-span-5">
                        <FooterBrand />
                    </div>

                    {/* Navigation */}

                    <div className="lg:col-span-3">
                        <FooterNav />
                    </div>

                    {/* Social */}

                    <div className="lg:col-span-4">
                        <FooterSocials />
                    </div>
                </div>

                {/* Bottom */}

                <FooterBottom />
            </div>
        </footer>
    );
};

export default Footer;