import { lazy } from "react";

import { createBrowserRouter } from "react-router";

const App: any = lazy(() => import("./App"));
const Admin: any = lazy(() => import("./pages/admin/Admin"));
const SideBar: any = lazy(() => import("./components/admin/SideBar"));

// Packages
const Packages: any = lazy(() => import("./pages/admin/Packages/Packages"));
const PackageList: any = lazy(() => import("./pages/admin/Packages/PackageList"));
const AddPackages: any = lazy(() => import("./pages/admin/Packages/AddPackages"));

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
        ],
    },
]);

export default router;
