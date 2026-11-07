import { CheckCircle2 } from "lucide-react";
import Badge from "../components/Badge";

const packages = [
    {
        id: "basic",
        name: "სტანდარტი",
        price: 80,
        period: "ერთჯერადი",
        description: "იდეალურია ყოველდღიური სისუფთავის შესანარჩუნებლად",
        features: ["მტვრის მშრალი და ნესტიანი წმენდა", "იატაკის მოწმენდა", "სანიტარული კვანძის დეზინფექცია", "ნაგვის გატანა"],
    },
    {
        id: "standard",
        name: "გენერალური",
        price: 160,
        period: "რეკომენდებული",
        popular: true,
        description: "ღრმა წმენდა ბინის ყველა კუთხე-კუნჭულისთვის",
        features: [
            "სტანდარტული პაკეტის ყველა სერვისი",
            "სამზარეულოს ტექნიკის გარედან წმენდა",
            "კაფელ-მეთლახის ღრმა წმენდა",
            "კარებებისა და რადიატორების რეცხვა",
            "სარკეებისა და მინის ზედაპირების პრიალება",
        ],
    },
    {
        id: "premium",
        name: "VIP / რემონტის შემდგომი",
        price: 280,
        period: "სრული სერვისი",
        description: "სამშენებლო მტვრისა და ლაქების 100%-ით მოშორება",
        features: [
            "გენერალური პაკეტის ყველა სერვისი",
            "სამშენებლო მტვრისა და საღებავის ლაქების მოშორება",
            "ფანჯრებისა და ვიტრაჟების ორმხრივი წმენდა",
            "ჰაერის ოზონირება და არომატიზაცია",
            "სპეციალური სამრეწველო მტვერსასრუტების გამოყენება",
        ],
    },
];

const Packages = () => {
    return (
        <div className="pricing">
            <div className="pricing__container">
                <div className="pricing__header">
                    <Badge textContent="ტარიფები" />
                    <h1> პაკეტები</h1>
                </div>

                <div className="pricing__grid">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className="pricing__card">
                            <div className="pricing__card-content">
                                <h3>{pkg.name}</h3>
                                <p className="pricing__description">{pkg.description}</p>

                                <div className="pricing__price">
                                    <span>{pkg.price} ₾</span>
                                </div>

                                <ul className="pricing__features">
                                    {pkg.features.map((f, i) => (
                                        <li key={i}>
                                            <CheckCircle2 />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Packages;
