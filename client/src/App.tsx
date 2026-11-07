import "./App.scss";

import { Outlet } from "react-router";
import Header from "./layout/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Outlet />
        </div>
    );
}

export default App;
