import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./app/app";

ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <Auth0Provider
                domain="dev-jjbowman2.auth0.com"
                clientId="dJlI8eGj9F9zcoAvTtRpwTsXzQT4f2Yy"
                redirectUri={window.location.origin}
            >
                <App />
            </Auth0Provider>
        </BrowserRouter>
    </StrictMode>,
    document.getElementById("root"),
);
