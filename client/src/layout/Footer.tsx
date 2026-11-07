import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router";
import Navigation from "../components/Navigation";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__main">
                    {/* Brand */}
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <div className="footer__logo-icon">T</div>
                            <span>TA-GI</span>
                        </div>

                        <p>
                            პროფესიონალური დასუფთავების კომპანია TA-GI. უმაღლესი ხარისხი, საიმედოობა და იდეალური სისუფთავე
                            თქვენს სახლსა და ოფისში.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="footer__column">
                        <h4>ნავიგაცია</h4>

                        <Navigation />
                    </div>

                    {/* Services */}
                    <div className="footer__column">
                        <h4>სერვისები</h4>

                        <ul>
                            <li>
                                <a href="#services">ბინების დასუფთავება</a>
                            </li>
                            <li>
                                <a href="#services">ოფისების დასუფთავება</a>
                            </li>
                            <li>
                                <a href="#services">გენერალური წმენდა</a>
                            </li>
                            <li>
                                <a href="#services">რემონტის შემდგომი</a>
                            </li>
                            <li>
                                <a href="#services">კომერციული ფართები</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer__column">
                        <h4>კონტაქტი</h4>

                        <div className="footer__contact">
                            <p>
                                <Phone />
                                +995 (32) 2XX XX XX
                            </p>

                            <p>
                                <Mail />
                                info@ta-gi.ge
                            </p>

                            <p>
                                <MapPin />
                                თბილისი, საქართველო
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer__bottom">
                    <p>© {new Date().getFullYear()} TA-GI. ყველა უფლება დაცულია.</p>

                    <div className="footer__legal">
                        <a href="#">კონფიდენციალურობა</a>
                        <a href="#">წესები და პირობები</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
