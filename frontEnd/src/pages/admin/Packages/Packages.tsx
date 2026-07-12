import { Outlet } from "react-router";

const Packages = () => {
    return (
        <article className="packages admin-page">
            <Outlet />
        </article>
    );
};

export default Packages;
