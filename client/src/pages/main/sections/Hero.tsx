import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-grid">
                    {/* Left Content Column */}
                    <div className="hero-content">
                        <div className="hero-badge">
                            <Sparkles className="hero-badge-icon" />
                            პროფესიონალური დასუფთავება
                        </div>

                        <h1 className="hero-title">
                            სისუფთავე, რომელიც თქვენს სივრცეს <span>ახალ სიცოცხლეს</span> სძენს.
                        </h1>

                        <p className="hero-description">
                            TA-GI გთავაზობთ პროფესიონალურ დასუფთავების მომსახურებას სახლებისთვის, ოფისებისა და კომერციული
                            სივრცეებისთვის. ჩვენ ვზრუნავთ სისუფთავეზე, თქვენ კი კომფორტზე.
                        </p>

                        {/* Action Buttons */}
                        <div className="hero-actions">
                            <button
                                // onClick={() => scrollToSection("services")}
                                className="hero-button hero-button-primary"
                            >
                                ჩვენი მომსახურება
                                <ArrowRight className="hero-button-icon" />
                            </button>

                            <button
                                // onClick={() => scrollToSection("contact")}
                                className="hero-button hero-button-secondary"
                            >
                                დაგვიკავშირდით
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="hero-trust">
                            <div className="hero-trust-item">
                                <div className="hero-trust-icon">
                                    <CheckCircle2 />
                                </div>
                                <span>პროფესიონალი გუნდი</span>
                            </div>

                            <div className="hero-trust-item">
                                <div className="hero-trust-icon">
                                    <CheckCircle2 />
                                </div>
                                <span>ხარისხზე ორიენტირებული</span>
                            </div>

                            <div className="hero-trust-item">
                                <div className="hero-trust-icon">
                                    <CheckCircle2 />
                                </div>
                                <span>ინდივიდუალური მიდგომა</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Photograph Column */}
                    <div className="hero-image-column">
                        <div className="hero-image-wrapper">
                            {/* Visual Backdrop Frame */}
                            <div className="hero-image-backdrop"></div>

                            {/* Main Hero Photography */}
                            <div className="hero-image-card">
                                <img
                                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
                                    alt="TA-GI პროფესიონალური დასუფთავება"
                                    className="hero-image"
                                />

                                {/* Floating Highlight Card */}
                                <div className="hero-highlight">
                                    <div className="hero-highlight-icon">
                                        <ShieldCheck />
                                    </div>

                                    <div className="hero-highlight-content">
                                        <p>100% ხარისხის გარანტია</p>
                                        <span>ეკოლოგიურად სუფთა და უსაფრთხო საშუალებები</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
