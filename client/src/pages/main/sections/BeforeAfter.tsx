import Badge from "../../../components/Badge";
import BeforeAfterSlider from "../../../components/BeforeAfterSlider";

const BeforeAfter = () => {
    return (
        <section className="before-after">
            <div className="before-after__container">
                <div className="before-after__header">
                    <Badge textContent="ჩვენი შედეგი" />
                    <h2>მანამდე &amp; შემდეგ</h2>
                    <p>გადააადგილეთ სლაიდერი და შეაფასეთ ტა-გის პროფესიონალური წმენდის შედეგი</p>
                </div>

                <div className="before-after__content">
                    <BeforeAfterSlider
                        beforeImg="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000"
                        afterImg="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
                    />
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
