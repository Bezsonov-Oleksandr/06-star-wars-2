import Navigation from "./Navigation.jsx";
import {useContext} from "react";
import {StarWarsContext} from "../utils/constants.js";

const Header = () => {
    const {setPage} = useContext(StarWarsContext);
    return (
        <header className="rounded-top-4">
            <Navigation changePage={setPage} />
            <h1 className="text-center fs-1 py-4">Luke Skywalker</h1>
        </header>
    );
};

export default Header;