import About from "./sections/About";
import BeforeAfter from "./sections/BeforeAfter";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Process from "./sections/Process";
import WhyUs from "./sections/WhyUs";

const Main = () => {
    return (
        <div className="main-page">
            <Hero />
            <Features />
            <BeforeAfter />
            <About />
            <WhyUs />
            <Process />
        </div>
    );
};

export default Main;
