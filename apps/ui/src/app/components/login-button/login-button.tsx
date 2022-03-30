import { useAuth0 } from "@auth0/auth0-react";
import { Button, Spinner } from "@chakra-ui/react";

const LoginButton = () => {
    const { loginWithRedirect, isLoading } = useAuth0();

    return (
        <Button onClick={loginWithRedirect} disabled={isLoading}>
            Login
        </Button>
    );
};

export default LoginButton;
