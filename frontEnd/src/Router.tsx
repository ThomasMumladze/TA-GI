import { lazy } from "react";

import { createBrowserRouter } from "react-router";

const App: any = lazy(() => import("./App"));
const Admin: any = lazy(() => import("./pages/admin/Admin"));
const SideBar: any = lazy(() => import("./components/admin/SideBar"));

// Packages
const Packages: any = lazy(() => import("./pages/admin/Packages/Packages"));
const PackageList: any = lazy(() => import("./pages/admin/Packages/PackageList"));
const AddPackages: any = lazy(() => import("./pages/admin/Packages/AddPackages"));

// Products
const Product: any = lazy(() => import("./pages/admin/products/Products"));
const ProductList: any = lazy(() => import("./pages/admin/products/ProductList"));
const AddProduct: any = lazy(() => import("./pages/admin/products/AddProduct"));
const EditProduct: any = lazy(() => import("./pages/admin/products/EditProduct"));

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
        path: "/admin",
        element: (
            <>
                <Admin />
                <SideBar />
            </>
        ),
        children: [
            {
                path: "packages",
                Component: Packages,
                children: [
                    { index: true, Component: PackageList },
                    { path: "add-packages", Component: AddPackages },
                ],
            },

            {
                path: "products",
                Component: Product,
                children: [
                    { index: true, Component: ProductList },
                    { path: "add-product", Component: AddProduct },
                    { path: "edit-product", Component: EditProduct },
                ],
            },
        ],
    },
]);

export default router;
