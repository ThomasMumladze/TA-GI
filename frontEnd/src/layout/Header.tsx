import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Header = () => {
    return (
        <header>
            <div className="header-content">
                <a href={"/"}>
                    <h1>ta-gi</h1>
                </a>

                <nav>
                    <ul>
                        <li>
                            <a href="">home</a>
                        </li>
                        <li>
                            <a href="">contact</a>
                        </li>
                    </ul>
                </nav>

                <div className="social-media">
                    <a href="">
                        <FaFacebookF />
                    </a>
                    <a href="">
                        <FaTiktok />
                    </a>
                    <a href="">
                        <FaInstagram />
                    </a>
                    <a href="">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
