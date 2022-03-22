import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton/LoginButton";
import LogoutButton from "../components/LogoutButton/LogoutButton";

export default function App() {
    const { isAuthenticated, user } = useAuth0();
    return (
        <div className="flex min-h-screen flex-col justify-center bg-slate-700">
            <div className="mx-auto h-96 w-96 rounded-md bg-gray-200">
                <h1 className="animate-pulse p-8 text-2xl uppercase tracking-widest text-slate-600">Welcome</h1>
                <p className="px-8 text-3xl text-slate-800">This is the start of something great</p>
                {isAuthenticated ? (
                    <>
                        <p className="mt-4 px-8 text-right uppercase tracking-widest">{user?.given_name}</p>
                        <LogoutButton />
                    </>
                ) : (
                    <LoginButton />
                )}
            </div>
        </div>
    );
}
