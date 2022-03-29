import { render } from "@testing-library/react";

import AddAccount from "./add-account";

describe("AddAccount", () => {
    it("should render successfully", () => {
        const { baseElement } = render(<AddAccount />);
        expect(baseElement).toBeTruthy();
    });
});
