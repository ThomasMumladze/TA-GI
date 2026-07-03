import individual from "../assets/img/individual.png";
import professional from "../assets/img/professinal.png";
import quality from "../assets/img/quality.png";
import safety from "../assets/img/safe.png";

const CompanyDescription = () => {
    return (
        <section className="company-description">
            <h3>
                <span>ta - gi</span> არის სისუფთავისა და ჰიგიენის ექსპერტთა ცენტრი, მზად ვართ, თქვენს სივრცეს შევძინოთ
                სისუფთავე და კომფორტი
            </h3>

            <div className="services__type-list">
                <div>
                    <div className="image">
                        <img src={professional} alt="..." />
                    </div>
                    <div className="description-title">პროფესიონალიზმი</div>
                    <div className="description">
                        <p>თა-გის პროფესიონალთა გუნდი, მოგიგვარებთ დალაგებასთან დაკავშირებულ ყველა პრობლემას.</p>
                    </div>
                </div>

                <div>
                    <div className="image">
                        <img src={safety} alt="..." />
                    </div>
                    <div className="description-title">უსაფრთხოება</div>
                    <div className="description">
                        <p>
                            ჩვენი თანამშრომლები, როგორც პროფესიონალიზმით, ასევე კეთილსინდისიერებითა და სანდოობით გამოირჩევიან.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="image">
                        <img src={individual} alt="..." />
                    </div>
                    <div className="description-title">ინდივიდუალური მიდგომა</div>
                    <div className="description">
                        <p>თა-გი გთავაზობთ, თქვენს განრიგსა და გეგმებზე მორგებულ მომსახურების პაკეტს.</p>
                    </div>
                </div>

                <div>
                    <div className="image">
                        <img src={quality} alt="..." />
                    </div>
                    <div className="description-title">ხარისხი</div>
                    <div className="description">
                        <p>
                            საუკეთესო ინვენტარით და პრემიუმ კლასის ხსნარებით აღჭურვილი პროფესიონალთა გუნდი, იზრუნებს თქვენი
                            სივრცის იდეალურ სისუფთავეზე.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyDescription;
