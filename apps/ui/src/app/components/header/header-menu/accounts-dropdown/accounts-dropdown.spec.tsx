import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import AccountsDropdown from "./accounts-dropdown";

describe("AccountsDropdown", () => {
    it("should render successfully", () => {
        const { baseElement } = render(
            <BrowserRouter>
                <QueryClientProvider client={new QueryClient()}>
                    <AccountsDropdown sub="" />
                </QueryClientProvider>
            </BrowserRouter>,
        );
        expect(baseElement).toBeTruthy();
    });
});
