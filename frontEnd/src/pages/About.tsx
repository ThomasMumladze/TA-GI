import Title from "../components/Title";

const About = () => {
    return (
        <section className="about" id="about">
            <Title subtitle={"about"} title={"who we are"} />

            <div className="about-content">
                <div className="about-content--left-col">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>

                    <ul>
                        <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                        <li>Ullamco laboris nisi ut aliquip ex ea commodo</li>
                    </ul>
                </div>
                <div className="about-content--right-col">
                    <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
