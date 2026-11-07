import { Check } from "lucide-react";
import Badge from "../../../components/Badge";

const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-grid">
                    {/* Left Image Column */}
                    <div className="about-image-column">
                        <div className="about-image-wrapper">
                            <div className="about-image-frame">
                                <img
                                    src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1000&q=80"
                                    alt="TA-GI გუნდი მუშაობისას"
                                    className="about-image"
                                />
                            </div>

                            {/* Decorative Stats Box */}
                            <div className="about-stats">
                                <span className="about-stats-number">100%</span>
                                <span className="about-stats-description">
                                    პასუხისმგებლობა და ხარისხის გარანტია თითოეულ შეკვეთაზე
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Text Content Column */}
                    <div className="about-content">
                        <Badge textContent="ჩვენს შესახებ" />

                        <h2 className="about-title">სისუფთავე ჩვენი პროფესიაა.</h2>

                        <p className="about-description">
                            კომპანია TA-GI დაარსდა იმ მიზნით, რომ მომხმარებლებს შესთავაზოს ევროპული სტანდარტის დასუფთავების
                            მომსახურება. ჩვენ ვიყენებთ მხოლოდ სერტიფიცირებულ, ჰიპოალერგიულ და ეკოლოგიურად სუფთა ქიმიურ
                            საშუალებებსა და თანამედროვე ტექნიკას.
                        </p>

                        <p className="about-description">
                            ჩვენი გუნდი შედგება გადამზადებული პროფესიონალებისგან, რომლებიც განსაკუთრებული პასუხისმგებლობით
                            ეკიდებიან ნებისმიერ დავალებას — იქნება ეს პატარა ბინა თუ მსხვილი კომერციული ობიექტი.
                        </p>

                        {/* 3 Check Advantages */}
                        <div className="about-advantages">
                            <div className="about-advantage">
                                <div className="about-check-icon">
                                    <Check className="about-check-svg" />
                                </div>

                                <div className="about-advantage-content">
                                    <h4>ეკოლოგიური და უსაფრთხო საშუალებები</h4>
                                    <p>უსაფრთხოა ბავშვებისა და შინაური ცხოველებისთვის.</p>
                                </div>
                            </div>

                            <div className="about-advantage">
                                <div className="about-check-icon">
                                    <Check className="about-check-svg" />
                                </div>

                                <div className="about-advantage-content">
                                    <h4>თანამედროვე ტექნიკური აღჭურვილობა</h4>
                                    <p>პროფესიონალური ორთქლისა და მტვერსასრუტის სისტემები.</p>
                                </div>
                            </div>

                            <div className="about-advantage">
                                <div className="about-check-icon">
                                    <Check className="about-check-svg" />
                                </div>

                                <div className="about-advantage-content">
                                    <h4>მოქნილი გრაფიკი და სწრაფი რეაგირება</h4>
                                    <p>ვმუშაობთ კვირაში 7 დღე, თქვენთვის მოსახერხებელ დროს.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
