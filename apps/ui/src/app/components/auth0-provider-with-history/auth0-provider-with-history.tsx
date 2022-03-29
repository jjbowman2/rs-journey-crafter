import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { environment } from "../../../environments/environment";

export interface Auth0ProviderWithHistoryProps {
    children?: ReactNode;
}

// borrowed from https://auth0.com/blog/complete-guide-to-react-user-authentication/

export function Auth0ProviderWithHistory({ children }: Auth0ProviderWithHistoryProps) {
    const domain = environment.REACT_APP_AUTH0_DOMAIN;
    const clientId = environment.REACT_APP_AUTH0_CLIENT_ID;

    const history = useHistory();

    const onRedirectCallback = (appState: AppState) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
}

export default Auth0ProviderWithHistory;
