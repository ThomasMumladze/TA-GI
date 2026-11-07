import About from "./sections/About";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import WhyUs from "./sections/WhyUs";

const Main = () => {
    return (
        <div className="main-page">
            <Hero />
            <Features />
            <About />
            <WhyUs />
        </div>
    );
};

export default Main;
