import Title from "../components/Title";

interface Props {
    t: (key: string) => any;
}

const Services = (props: Props) => {
    const { t } = props;

    return (
        <section className="services" id="services">
            <Title subtitle={t("services.services")} title={t("services.whatWeOffer")} />

            <div className="services-card--navigation"></div>

            <hr />

            <div className="services-wrapper">
                <div className="services-wrapper--body">
                    <h3>უსაფრთხოება</h3>
                    <p></p>
                    <p>ჩვენი თანამშრომლები, როგორც პროფესიონალიზმით, ასევე კეთილსინდისიერებითა და სანდოობით გამოირჩევიან.</p>
                    <ul>
                        <li>ასდ</li>
                    </ul>
                </div>
                <img src="" alt="" />
            </div>
        </section>
    );
};

export default Services;
