import { Outlet } from "react-router";

const Products = () => {
    return (
        <aside className="products admin-page">
            <Outlet />
        </aside>
    );
};

export default Products;
