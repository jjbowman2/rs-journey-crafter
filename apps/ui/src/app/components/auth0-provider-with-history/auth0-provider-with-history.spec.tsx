import { render } from "@testing-library/react";

import Auth0ProviderWithHistory from "./auth0-provider-with-history";

describe("Auth0ProviderWithHistory", () => {
    it("should render successfully", () => {
        const { baseElement } = render(<Auth0ProviderWithHistory />);
        expect(baseElement).toBeTruthy();
    });
});
