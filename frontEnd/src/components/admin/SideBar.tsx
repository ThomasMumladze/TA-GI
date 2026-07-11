import { useState } from "react";

import { RxCaretRight } from "react-icons/rx";
import { TbPackages } from "react-icons/tb";

import { Link, useLocation } from "react-router";

const SideBar = () => {
    const [packagesOpen, setPackagesOpen] = useState(false);
    const location = useLocation().pathname;

    return (
        <aside className="sidebar">
            <div className="sidebar__header">
                <Link to="/">
                    <h1>TA-GI</h1>
                </Link>
            </div>

            <div className="sidebar__menu">
                <button onClick={() => setPackagesOpen(!packagesOpen)} className={`${packagesOpen ? "active-packages" : ""}`}>
                    <div>
                        <TbPackages />
                        Packages
                    </div>
                    <RxCaretRight style={{ transform: packagesOpen ? "rotate(90deg)" : "none" }} />
                </button>

                <ul className={`sidebar__menu__sub ${packagesOpen ? "open" : ""}`}>
                    <li>
                        <Link className={`${location === "/admin/packages" ? "active" : ""}`} to="/admin/packages">
                            Packages
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${location === "/admin/packages/add-packages" ? "active" : ""}`}
                            to="/admin/packages/add-packages"
                        >
                            Manage Packages
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default SideBar;
