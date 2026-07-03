import { useState } from "react";

import Title from "../components/Title";
import Button from "../components/Button";

interface Props {
    t: (key: string) => any;
}

const tempArr = [
    {
        title: "Modi sit est dela pireda nest",
        svg: "",
        wallpaper: "https://themewagon.github.io/Selecao/assets/img/working-1.jpg",
        content: {
            title: "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
            description:
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            options: [
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                " Duis aute irure dolor in reprehenderit in voluptate velit.",
                " Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
            ],
        },
    },
    {
        title: "Unde praesenti mara setra le",
        svg: "",
        wallpaper: "https://themewagon.github.io/Selecao/assets/img/working-2.jpg",
        content: {
            title: "Neque exercitationem debitis soluta quos debitis quo mollitia officia est",
            description:
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            options: [
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Duis aute irure dolor in reprehenderit in voluptate velit.",
                " Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.",
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
            ],
        },
    },
];

const Services = (props: Props) => {
    const { t } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const active = tempArr[activeIndex];

    return (
        <section className="services" id="services">
            <Title subtitle={t("services.services")} title={t("services.whatWeOffer")} />

            <div className="services-card--navigation">
                {tempArr.map((item, index) => (
                    <Button
                        key={index}
                        htmlClass={activeIndex === index ? "active" : ""}
                        btnOnClick={() => setActiveIndex(index)}
                    >
                        {item.title}
                    </Button>
                ))}
            </div>

            <hr />

            <div className="services-wrapper">
                <div className="services-wrapper--body">
                    <h3>{active.content.title}</h3>
                    <p>{active.content.description}</p>
                    <ul>
                        {active.content.options.map((opt, i) => (
                            <li key={i}>{opt}</li>
                        ))}
                    </ul>
                </div>
                <img src={active.wallpaper} alt="" />
            </div>
        </section>
    );
};

export default Services;
