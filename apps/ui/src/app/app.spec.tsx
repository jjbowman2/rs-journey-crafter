import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import { BrowserRouter } from "react-router-dom";

import App from "./app";

describe("App", () => {
    it("should render successfully", () => {
        const { baseElement } = render(
            <QueryClientProvider client={new QueryClient()}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </QueryClientProvider>,
        );

        expect(baseElement).toBeTruthy();
    });
});
