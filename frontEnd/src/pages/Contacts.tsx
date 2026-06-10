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

const Contacts = () => {
    return (
        <section className="contact">
            <Title subtitle="Contact" title="Contact Us" />
            <div className="contact-body">
                <div className="contact-body--col">
                    <div className="info-item">
                        <blockquote>
                            <TfiEmail />
                        </blockquote>
                        <div>
                            <h3>Email</h3>

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
                            <h3>call us</h3>
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
                        <Input oneChange={() => {}} placeholder="your name" type="text" value="" />
                        <Input oneChange={() => {}} placeholder="your email" type="text" value="" />
                    </div>
                    <TextArea oneChange={() => {}} placeholder="Message" value="" />
                    <Button btnOnClick={() => {}} htmlClass="" isDisabled={false}>
                        send message
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
