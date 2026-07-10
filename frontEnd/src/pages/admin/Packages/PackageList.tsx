//NOTE REMOVE AFTER IMPLEMENTATION
const products = [
    {
        id: 1,
        product: "Wireless Mouse",
        category: "Electronics",
        price: 24.99,
        totalOrder: 152,
        status: "Active",
        publishDate: "2025-11-03",
        updateDate: "2026-02-14",
    },
    {
        id: 2,
        product: "Leather Wallet",
        category: "Accessories",
        price: 39.5,
        totalOrder: 87,
        status: "Inactive",
        publishDate: "2025-08-21",
        updateDate: "2026-01-09",
    },
    {
        id: 3,
        product: "Bluetooth Speaker",
        category: "Electronics",
        price: 59.99,
        totalOrder: 231,
        status: "Active",
        publishDate: "2025-12-10",
        updateDate: "2026-03-01",
    },
    {
        id: 4,
        product: "Yoga Mat",
        category: "Sports",
        price: 19.99,
        totalOrder: 64,
        status: "Active",
        publishDate: "2025-09-17",
        updateDate: "2026-01-22",
    },
    {
        id: 5,
        product: "Coffee Grinder",
        category: "Home & Kitchen",
        price: 45.0,
        totalOrder: 108,
        status: "Pending",
        publishDate: "2025-10-05",
        updateDate: "2026-02-28",
    },
    {
        id: 6,
        product: "Desk Lamp",
        category: "Furniture",
        price: 29.99,
        totalOrder: 76,
        status: "Active",
        publishDate: "2025-07-30",
        updateDate: "2026-01-15",
    },
    {
        id: 7,
        product: "Running Shoes",
        category: "Sports",
        price: 89.99,
        totalOrder: 194,
        status: "Inactive",
        publishDate: "2025-11-28",
        updateDate: "2026-03-06",
    },
];

import { FaLariSign } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCalendar2Date } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

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
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item) => (
                            <tr key={item.id}>
                                <td className="product">
                                    <div>
                                        <img
                                            src="https://cdn.magicdecor.in/com/2023/10/20174720/Anime-Scenery-Wallpaper-for-Walls-710x488.jpg"
                                            alt="... failed to load"
                                        />
                                        {item.product}
                                    </div>
                                </td>
                                <td>{item.category}</td>
                                <td className="price">
                                    <div>
                                        <FaLariSign />
                                        {item.price.toFixed(2)}
                                    </div>
                                </td>
                                <td className="total-order">
                                    <div>
                                        <TbTruckDelivery />
                                        {item.totalOrder}
                                    </div>
                                </td>
                                <td
                                    className={`${item.status === "Active" ? "active-product" : item.status === "Inactive" ? "inactive-product" : "pending-product"}`}
                                >
                                    <span className="statuses">{item.status}</span>
                                </td>
                                <td className="date publish">
                                    <div>
                                        <BsCalendar2Date />
                                        {item.publishDate}
                                    </div>
                                </td>
                                <td className="date update">
                                    <div>
                                        <BsCalendar2Date />
                                        {item.updateDate}
                                    </div>
                                </td>
                                <td className="action">
                                    <div>
                                        <button>
                                            <TbEdit />
                                        </button>
                                        <button>
                                            <MdDelete />
                                        </button>
                                        {item.status === "Inactive" ? (
                                            <button>
                                                <RxUpdate />
                                            </button>
                                        ) : null}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default PackageList;
