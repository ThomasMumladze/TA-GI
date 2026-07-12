import { useState } from "react";

import { RxCaretRight } from "react-icons/rx";
import { TbPackages } from "react-icons/tb";

import { Link, useLocation } from "react-router";

const SideBar = () => {
    const [packagesOpen, setPackagesOpen] = useState(false);
    const [productOpen, setProductOpen] = useState(false);
    const location = useLocation().pathname;

    return (
        <aside className="sidebar">
            <div className="sidebar__header">
                <Link to="/">
                    <h1>TA-GI</h1>
                </Link>
            </div>

            <div className="sidebar__menu">
                <button
                    onClick={() => {
                        (setPackagesOpen(!packagesOpen), setProductOpen(false));
                    }}
                    className={`${packagesOpen ? "active-packages" : ""}`}
                >
                    <div>
                        <TbPackages />
                        პაკეტი
                    </div>
                    <RxCaretRight style={{ transform: packagesOpen ? "rotate(90deg)" : "none" }} />
                </button>

                <ul className={`sidebar__menu__sub ${packagesOpen ? "open" : ""}`}>
                    <li>
                        <Link className={`${location === "/admin/packages" ? "active" : ""}`} to="/admin/packages">
                            პაკეტები
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${location === "/admin/packages/add-packages" ? "active" : ""}`}
                            to="/admin/packages/add-packages"
                        >
                            პაკეტების მართვა
                        </Link>
                    </li>
                </ul>

                <button
                    onClick={() => {
                        (setProductOpen(!productOpen), setPackagesOpen(false));
                    }}
                    className={`${productOpen ? "active-products" : ""}`}
                >
                    <div>
                        <TbPackages />
                        პროდუქტი
                    </div>
                    <RxCaretRight style={{ transform: productOpen ? "rotate(90deg)" : "none" }} />
                </button>

                <ul className={`sidebar__menu__sub ${productOpen ? "open" : ""}`}>
                    <li>
                        <Link className={`${location === "/admin/packages" ? "active" : ""}`} to="/admin/packages">
                            პროდუქტები
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${location === "/admin/packages/add-packages" ? "active" : ""}`}
                            to="/admin/packages/add-packages"
                        >
                            პროდუქტის დამატება
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${location === "/admin/packages/add-packages" ? "active" : ""}`}
                            to="/admin/packages/add-packages"
                        >
                            პროდუქტის რედაქტირება
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default SideBar;
