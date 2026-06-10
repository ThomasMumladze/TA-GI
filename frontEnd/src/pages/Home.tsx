import React from "react";
import Contacts from "./Contacts";

interface Props {
    t: (key: string) => any;
    changeLanguage: (newLang: any) => void;
}

const Home = (props: Props) => {
    const { t } = props;

    return (
        <React.Fragment>
            <Contacts t={t} />
        </React.Fragment>
    );
};

export default Home;
