import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import MyJourney from "./my-journey";

describe("MyJourney", () => {
    it("should render successfully", () => {
        const { baseElement } = render(
            <QueryClientProvider client={new QueryClient()}>
                <MyJourney />
            </QueryClientProvider>,
        );
        expect(baseElement).toBeTruthy();
    });
});
