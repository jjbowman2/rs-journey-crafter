import { render } from "@testing-library/react";

import AccountsDropdown from "./accounts-dropdown";

describe("AccountsDropdown", () => {
    it("should render successfully", () => {
        const { baseElement } = render(<AccountsDropdown />);
        expect(baseElement).toBeTruthy();
    });
});
