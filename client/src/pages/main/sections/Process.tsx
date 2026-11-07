import Badge from "../../../components/Badge";

const Process = () => {
    return (
        <section className="process">
            <div className="process__container">
                <div className="process__header">
                    <Badge textContent="პროცესი" />
                    <h2>მარტივად, სწრაფად და კომფორტულად</h2>
                    <p>მხოლოდ 3 მარტივი ნაბიჯი იდეალურ სისუფთავემდე</p>
                </div>

                <div className="process__grid">
                    <div className="process__line"></div>

                    {/* Step 1 */}
                    <div className="process__card">
                        <div className="process__number">01</div>
                        <h3>დაგვიკავშირდით</h3>
                        <p>მოგვაწოდეთ ინფორმაცია თქვენთვის საჭირო მომსახურებისა და სივრცის მოცულობის შესახებ.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="process__card">
                        <div className="process__number">02</div>
                        <h3>შეათანხმეთ დეტალები</h3>
                        <p>ერთად განვსაზღვრავთ მომსახურების პირობებს, დროსა და ინდივიდუალურ ღირებულებას.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="process__card">
                        <div className="process__number">03</div>
                        <h3>მიიღეთ სუფთა სივრცე</h3>
                        <p>ჩვენი გუნდი იზრუნებს პროფესიონალურ დასუფთავებაზე, თქვენ კი დატკბით სისუფთავით.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
