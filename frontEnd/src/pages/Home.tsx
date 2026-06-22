import React from "react";
import Contacts from "./Contacts";
import Pricing from "./Pricing";
import Services from "./Services";

interface Props {
    t: (key: string) => any;
    changeLanguage: (newLang: any) => void;
}

const Home = (props: Props) => {
    const { t } = props;

    return (
        <React.Fragment>
            <Services t={t} />
            <Pricing t={t} />
            <Contacts t={t} />
        </React.Fragment>
    );
};

export default Home;
