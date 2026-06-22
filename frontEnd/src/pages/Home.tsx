import React from "react";
import Contacts from "./Contacts";
import Pricing from "./Pricing";
import Services from "./Services";
import About from "./About";
import Hero from "./Hero";
import CompanyDescription from "./CompanyDescription";

interface Props {
    t: (key: string) => any;
    changeLanguage: (newLang: any) => void;
}

const Home = (props: Props) => {
    const { t } = props;

    return (
        <React.Fragment>
            <Hero />
            <About />
            <CompanyDescription />
            <Services t={t} />
            <Pricing t={t} />
            <Contacts t={t} />
        </React.Fragment>
    );
};

export default Home;
