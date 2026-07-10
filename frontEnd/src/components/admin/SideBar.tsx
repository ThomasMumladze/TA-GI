import { useState } from "react";

import { RxCaretRight } from "react-icons/rx";
import { TbPackages } from "react-icons/tb";

import { Link } from "react-router";

const SideBar = () => {
    const [packagesOpen, setPackagesOpen] = useState(false);
    return (
        <aside className="sidebar">
            <div className="sidebar__header">
                <Link to="/">
                    <h1>TA-GI</h1>
                </Link>
            </div>

            <div className="sidebar__menu">
                <button onClick={() => setPackagesOpen(!packagesOpen)} className="sidebar__menu__item">
                    <div>
                        <TbPackages />
                        Packages
                    </div>
                    <RxCaretRight style={{ transform: packagesOpen ? "rotate(90deg)" : "none" }} />
                </button>

                <ul className={`sidebar__menu__sub ${packagesOpen ? "open" : ""}`}>
                    <li>
                        <Link to="/admin/packages">Packages</Link>
                    </li>
                    <li>
                        <Link to="/admin/packages/add-packages">Add Packages</Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default SideBar;
