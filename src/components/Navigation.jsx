import NavItem from "./NavItem.jsx";
import {navItems} from "../utils/constants.js";

const Navigation = ({changePage}) => {
    return (
        <nav className="fixed-top mt-2 ms-5">
            <ul className="nav">
                {navItems.map(item => (
                    <NavItem
                        itemTitle={item}
                        key={item}
                        changePage={changePage}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;