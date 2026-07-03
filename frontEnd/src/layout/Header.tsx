import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Header = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };
    return (
        <header>
            <div className="header-content">
                <a href={"/"}>
                    <h1>ta-gi</h1>
                </a>

                <nav>
                    <ul>
                        <li>
                            <button onClick={() => scrollToSection("home")}>home</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection("about")}>About</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection("services")}>Services</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection("pricing")}>pricing</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection("contact")}>Contact</button>
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
