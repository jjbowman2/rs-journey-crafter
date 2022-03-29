import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../login-button/login-button";
import AccountsDropdown from "./accounts-dropdown/accounts-dropdown";

const HeaderMenu = () => {
    const { isAuthenticated, isLoading, user } = useAuth0();

    if (!isAuthenticated) {
        return <LoginButton />;
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return <AccountsDropdown sub={user?.sub} />;
};

export default HeaderMenu;
