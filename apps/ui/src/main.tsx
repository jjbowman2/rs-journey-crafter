import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import App from "./app/app";

const queryClient = new QueryClient();

ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <Auth0Provider
                domain="dev-jjbowman2.auth0.com"
                clientId="dJlI8eGj9F9zcoAvTtRpwTsXzQT4f2Yy"
                redirectUri={window.location.origin}
            >
                <QueryClientProvider client={queryClient}>
                    <App />
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </Auth0Provider>
        </BrowserRouter>
    </StrictMode>,
    document.getElementById("root"),
);
