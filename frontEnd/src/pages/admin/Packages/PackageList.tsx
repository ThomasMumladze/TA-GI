const PackageList = () => {
    return (
        <section className="package-list">
            <div className="package-list--body">
                <div className="package-list--body_filter">
                    <h5>ფილტრი</h5>
                    <div>
                        <select>
                            <option>სტატუსი</option>
                            <option>აქტიური</option>
                            <option>არა აქტიური </option>
                            <option>ფასდაკლება</option>
                        </select>

                        <select>
                            <option>კატეგორია</option>
                            <option>რემონტის შემდგომი დასუფთავება</option>
                            <option>გენერალური დასუფთავება</option>
                            <option>ზედაპირული დასუფთავება</option>
                            <option>ქიმ.წმენდა</option>
                            <option>ორთქლით დამუშავება</option>
                        </select>
                    </div>
                </div>

                <hr />

                <div className="package-list--body_action">
                    <input type="text" placeholder="პაკეტის ძიება" />

                    <button>+ პაკეტის დამატება</button>
                </div>

                <hr />

                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Total Order</th>
                            <th>status</th>
                            <th>publish Date</th>
                            <th>update Date</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </section>
    );
};

export default PackageList;
