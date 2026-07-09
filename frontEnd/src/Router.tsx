import { lazy } from "react";

import { createBrowserRouter } from "react-router";

const App: any = lazy(() => import("./App"));
const Admin: any = lazy(() => import("./pages/admin/Admin"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/admin",
        element: (
            <>
                <Admin />
            </>
        ),
        children: [],
    },
]);

export default router;
