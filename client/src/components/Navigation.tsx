import { Link } from "react-router";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>მთავარი</Link>
                </li>
                <li>
                    <Link to={"/ta-gi/calculator"}>კალკულატორი</Link>
                </li>
                <li>
                    <Link to={"/ta-gi/packages"}>პაკეტები</Link>
                </li>
                <li>
                    <Link to={"/ta-gi/work"}>ნამუშევრები</Link>
                </li>
                <li>
                    <Link to={"/ta-gi/blog"}>ბლოგი</Link>
                </li>
                <li>
                    <Link to={"/ta-gi/contact"}>კონტაქტი</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
