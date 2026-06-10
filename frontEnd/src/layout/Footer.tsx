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

const Footer = () => {
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
                            <a>georgina</a>
                        </li>
                        <li>
                            <a>english</a>
                        </li>
                        <li>
                            <a>russian</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
