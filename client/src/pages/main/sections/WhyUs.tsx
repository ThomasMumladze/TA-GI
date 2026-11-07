import { Award, Sparkles, ShieldCheck, Users } from "lucide-react";
import Badge from "../../../components/Badge";

const WhyUs = () => {
    return (
        <section className="why-us-section">
            <div className="why-us-container">
                <div className="why-us-header">
                    <Badge textContent="უპირატესობები" />

                    <h2 className="why-us-title">რატომ უნდა აირჩიოთ TA-GI?</h2>

                    <p className="why-us-subtitle">ჩვენ ვქმნით იდეალურ სისუფთავეს მაღალი პასუხისმგებლობითა და საიმედოობით.</p>
                </div>

                <div className="why-us-grid">
                    {/* Feature 1 */}
                    <div className="why-us-card">
                        <div className="why-us-icon">
                            <Award className="why-us-icon-svg" />
                        </div>

                        <h3>პროფესიონალიზმი</h3>

                        <p>
                            ჩვენი გუნდი გადის სპეციალურ ტრენინგებს დასუფთავების თანამედროვე ტექნოლოგიებსა და უსაფრთხოების
                            ნორმებში.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="why-us-card">
                        <div className="why-us-icon">
                            <Sparkles className="why-us-icon-svg" />
                        </div>

                        <h3>ხარისხი</h3>

                        <p>თითოეულ დეტალზე ყურადღება. ვსარგებლობთ უმაღლესი ხარისხის პროფესიონალური საწმენდი საშუალებებით.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="why-us-card">
                        <div className="why-us-icon">
                            <ShieldCheck className="why-us-icon-svg" />
                        </div>

                        <h3>საიმედოობა</h3>

                        <p>თქვენი ქონების უსაფრთხოება და კონფიდენციალურობა ჩვენი საქმიანობის მთავარი პრიორიტეტია.</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="why-us-card">
                        <div className="why-us-icon">
                            <Users className="why-us-icon-svg" />
                        </div>

                        <h3>ინდივიდუალური მიდგომა</h3>

                        <p>ვითვალისწინებთ თითოეული კლიენტის სპეციფიკურ მოთხოვნებს, ბიუჯეტსა და სასურველ დროის ინტერვალს.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
