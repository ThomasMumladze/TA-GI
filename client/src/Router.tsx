import { createBrowserRouter } from "react-router";

import { lazy } from "react";

const App = lazy(() => import("./App"));
const Main = lazy(() => import("./pages/main/Main"));

const Calculator = lazy(() => import("./pages/Calculator"));
const Packages = lazy(() => import("./pages/Packages"));
const OurWork = lazy(() => import("./pages/OurWorks"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Main /> },
            { path: "ta-gi/calculator", element: <Calculator /> },
            { path: "ta-gi/packages", element: <Packages /> },
            { path: "ta-gi/work", element: <OurWork /> },
            { path: "ta-gi/blog", element: <Blog /> },
            { path: "ta-gi/contact", element: <Contact /> },
        ],
    },
]);

export default AppRouter;
