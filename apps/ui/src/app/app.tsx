import { useAuth0 } from "@auth0/auth0-react";
import Header from "../components/Header/Header";

export default function App() {
    const { isAuthenticated, user } = useAuth0();
    return (
        <>
            <Header />
        </>
    );
}
