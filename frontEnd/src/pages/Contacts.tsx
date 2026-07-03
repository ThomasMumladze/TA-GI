// =============== React Icons =============== //
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

// =============== Component =============== //
import Button from "../components/Button";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Title from "../components/Title";

// =============== Services =============== //
import { handleTextCopy } from "../services/textCopy";

interface Props {
    t: (key: string) => any;
}

const Contacts = (props: Props) => {
    const { t } = props;

    return (
        <section className="contact" id="contact">
            <Title subtitle={t("contact.contact")} title={t("contact.contactUs")} />
            <div className="contact-body">
                <div className="contact-body--col">
                    <div className="info-item">
                        <blockquote>
                            <TfiEmail />
                        </blockquote>
                        <div>
                            <h3>{t("contact.email")}</h3>

                            <p
                                onClick={(e: React.MouseEvent<HTMLParagraphElement>) =>
                                    handleTextCopy(e.currentTarget.textContent)
                                }
                            >
                                info@example.com
                            </p>
                        </div>
                    </div>
                    <div className="info-item">
                        <blockquote>
                            <BsTelephone />
                        </blockquote>
                        <div>
                            <h3>{t("contact.phone")}</h3>
                            <p
                                onClick={(e: React.MouseEvent<HTMLParagraphElement>) =>
                                    handleTextCopy(e.currentTarget.textContent)
                                }
                            >
                                +1 5589 55488 55
                            </p>
                        </div>
                    </div>
                </div>
                <div className="contact-body--col">
                    <div>
                        <Input oneChange={() => {}} placeholder={t("contact.name")} type="text" value="" />
                        <Input oneChange={() => {}} placeholder={t("contact.email")} type="text" value="" />
                    </div>
                    <TextArea oneChange={() => {}} placeholder={t("contact.message")} value="" />
                    <Button btnOnClick={() => {}} htmlClass="" isDisabled={false}>
                        {t("contact.sendMessage")}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
