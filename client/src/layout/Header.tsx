import { LetterT } from "lucide-react";

import Button from "../components/Button";
import Navigation from "../components/Navigation";
import { Link } from "react-router";

const Header = () => {
    return (
        <header>
            <div className="header--body">
                <div className="page-logo">
                    <Link to={"/"} reloadDocument className="tag-letter">
                        <LetterT />
                    </Link>

                    <div className="company-initial">
                        <span className="brand-name">TA-GI</span>
                        <span className="brand-subtitle">Cleaning Services</span>
                    </div>
                </div>
                <Navigation />
                <Button textContent="დაჯავშნე ონლაინ" btnClassName="btn-primary" />
            </div>
        </header>
    );
};

export default Header;
