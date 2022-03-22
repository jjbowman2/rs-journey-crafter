import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

const Header = () => {
    return (
        <nav className="flex w-screen items-center gap-4 px-12 py-6">
            <Link to="/">
                <img src="/assets/Crafting_icon.png" alt="Crafting Icon" width="48" height="auto" />
            </Link>
            <p className="hidden text-2xl uppercase tracking-widest sm:block">RS Journey Crafter</p>
            <div className="ml-auto">
                <HeaderMenu />
            </div>
        </nav>
    );
};

export default Header;
