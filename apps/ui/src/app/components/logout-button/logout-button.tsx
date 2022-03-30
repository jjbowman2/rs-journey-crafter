import { useAuth0 } from "@auth0/auth0-react";
import { MinusIcon } from "@chakra-ui/icons";
import { MenuItem } from "@chakra-ui/react";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <MenuItem onClick={() => logout()} textColor="red.600">
            Logout
        </MenuItem>
    );
};

export default LogoutButton;
