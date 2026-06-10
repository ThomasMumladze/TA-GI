import { IoLogoYoutube } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const socials = [
    { icon: <IoLogoYoutube />, url: "https://www.youtube.com/" },
    { icon: <FaTiktok />, url: "https://www.tiktok.com/" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/" },
    { icon: <FaSquareInstagram />, url: "https://www.instagram.com/" },
];

interface Props {
    t: (key: string) => any;
    changeLanguage: (newLang: any) => void;
}

const Footer = (props: Props) => {
    const { changeLanguage, t } = props;

    return (
        <footer>
            <div className="footer-body">
                <h1>TA-GI</h1>

                <hr />

                <div>
                    <h3>follow us</h3>

                    <div className="social-url">
                        {socials.map(({ icon, url }) => (
                            <a key={url} href={url} target="_blank" rel="noreferrer">
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                <hr />

                <div className="footer-translate">
                    <ul>
                        <li>
                            <a onClick={() => changeLanguage("ka")}>{t("language.ka")}</a>
                        </li>
                        <li>
                            <a onClick={() => changeLanguage("en")}>{t("language.en")}</a>
                        </li>
                        <li>
                            <a onClick={() => changeLanguage("ru")}>{t("language.ru")}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
