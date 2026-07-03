// =============== Component =============== //
import Button from "../components/Button";
import Title from "../components/Title";

interface Props {
    t: (key: string) => any;
}
const tempArr = Array.from({ length: 4 });

const Pricing = (props: Props) => {
    const { t } = props;

    return (
        <section className="pricing" id="pricing">
            <Title subtitle={t("prices.pricing")} title={t("prices.pricesFee")} />
            <div className="pricing-wrapper">
                {tempArr.map((item: any, _) => (
                    <div key={_} className="pricing-card">
                        <div className="pricing-card--header">
                            <h3>fee</h3> {item}
                        </div>
                        <div className="pricing-card--body">
                            <h4>
                                <sup>$</sup> 19.99
                            </h4>

                            <ul>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                                <li>Pharetra massa</li>
                                <li>Massa ultricies mi</li>
                            </ul>
                        </div>
                        <div className="pricing-card--footer">
                            <Button htmlClass="pricing-btn" btnOnClick={() => {}}>
                                buy now
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
