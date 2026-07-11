const AddPackages = () => {
    return (
        <section className="add-packages">
            <div className="add-packages__header">
                <h5>ახალი პაკეტის დამატება</h5>
                <div>
                    <button>გაუქმება</button>
                    <button>პაკეტის დამატება</button>
                </div>
            </div>

            <div className="add-packages__body">
                <div className="package_info">
                    <label>პაკეტის სახელწოდება</label>
                    <input type="text" placeholder="დასახელება" />

                    <label>პაკეტის შემადგენლობა</label>
                    <textarea rows={10} name="" id="" placeholder="ჩამოწერეთ სია თუ რას შეიცავს პაკეტი"></textarea>
                </div>

                <div className="package-price">
                    <label>პაკეტის ღირებულება</label>
                    <input type="text" placeholder="პაკეტის ღრებულება" />
                </div>
            </div>

            <div className="add-packages__header">
                <h5>პაკეტის რედაქტირება</h5>
                <div>
                    <button>გაუქმება</button>
                    <button>შენახვა</button>
                </div>
            </div>

            <div className="add-packages_edit">
                <div className="package_info">
                    <label>პაკეტის სახელწოდება</label>
                    <input type="text" placeholder="მოძებენ პაკეტის სახელით" />

                    <label>პაკეტის შემადგენლობა</label>
                    <textarea
                        rows={10}
                        name=""
                        id=""
                        placeholder="ჩამოწერეთ სია თუ რას შეიცავს პაკეტი ჩანაცვლდებ არსებული ახლი აღწერით"
                    ></textarea>
                </div>

                <div className="package-price">
                    <label>პაკეტის ღირებულება</label>
                    <input type="text" placeholder="პაკეტის ღრებულება შეცვლა" />

                    <label>ფასდაკლება</label>
                    <input type="number" placeholder="ფასდაკლება მაგ(20%)" />

                    <select>
                        <option value="">სტატუსის ცვლილება</option>
                        <option value="">აქტივაცია</option>
                        <option value="">დეაქტივაცია</option>
                        <option value="">მომლოდინე</option>
                    </select>

                    <div className="status">
                        <p>
                            სტატუსი: <span className="active">აქტიური</span>
                        </p>
                        <p>
                            ფასდაკლება: <span className="inactive">არააქტიური</span>
                        </p>

                        <p>
                            შეიქმნა: <span>06/11/2026 14:24</span>
                        </p>

                        <p>
                            განახლდა: <span>07/11/2026 19:20</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddPackages;
