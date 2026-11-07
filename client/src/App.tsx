import "./App.scss";

import { Outlet } from "react-router";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
