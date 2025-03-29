import React, {useContext} from 'react';
import {StarWarsContext} from "../utils/constants.js";

const NavItem = ({itemTitle}) => {
    const {changePage} = useContext(StarWarsContext);
    return (
        <li className="nav-item btn btn-danger mx-1"
            onClick={()=>changePage(itemTitle)}>
            {itemTitle}
        </li>
    );
};

export default NavItem;