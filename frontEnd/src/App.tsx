import "./style/pages/index.scss";
import "./style/layouts/index.scss";

import "./App.scss";

import Home from "./pages/Home";
import Footer from "./layout/Footer";

import { useTranslation } from "./hooks/useTranslation";

function App() {
    const { changeLanguage, t } = useTranslation();
    console.log(t("language.ka"));

    return (
        <>
            <Home changeLanguage={changeLanguage} t={t} />
            <Footer changeLanguage={changeLanguage} t={t} />
        </>
    );
}

export default App;
