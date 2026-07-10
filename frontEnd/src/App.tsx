import "./App.scss";

import Home from "./pages/Home";
import Footer from "./layout/Footer";

import { useTranslation } from "./hooks/useTranslation";
import Header from "./layout/Header";

function App() {
    const { changeLanguage, t } = useTranslation();

    return (
        <>
            <Header />
            <Home changeLanguage={changeLanguage} t={t} />
            <Footer changeLanguage={changeLanguage} t={t} />
        </>
    );
}

export default App;
