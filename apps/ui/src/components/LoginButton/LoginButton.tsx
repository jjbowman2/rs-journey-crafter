import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button className="text-lg text-cyan-800 hover:text-cyan-600" onClick={loginWithRedirect}>
            Login
        </button>
    );
};

export default LoginButton;
