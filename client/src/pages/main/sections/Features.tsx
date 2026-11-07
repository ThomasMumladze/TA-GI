import { Award, Users, ShieldCheck, Clock } from "lucide-react";

const Features = () => {
    return (
        <section className="features">
            <div className="features__container">
                <div className="features__grid">
                    <div className="features__card">
                        <div className="features__icon">
                            <Award />
                        </div>
                        <div>
                            <h3>პროფესიონალური მომსახურება</h3>
                            <p>მაღალი სტანდარტების დაცვა თითოეულ ობიექტზე.</p>
                        </div>
                    </div>

                    <div className="features__card">
                        <div className="features__icon">
                            <Users />
                        </div>
                        <div>
                            <h3>გამოცდილი გუნდი</h3>
                            <p>გადამზადებული და სანდო პერსონალი.</p>
                        </div>
                    </div>

                    <div className="features__card">
                        <div className="features__icon">
                            <ShieldCheck />
                        </div>
                        <div>
                            <h3>ხარისხის კონტროლი</h3>
                            <p>დეტალური ინსპექტირება სამუშაოს დასრულებისას.</p>
                        </div>
                    </div>

                    <div className="features__card">
                        <div className="features__icon">
                            <Clock />
                        </div>
                        <div>
                            <h3>ორიენტირებული მიდგომა</h3>
                            <p>თქვენს გრაფიკზე მორგებული მომსახურება.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
