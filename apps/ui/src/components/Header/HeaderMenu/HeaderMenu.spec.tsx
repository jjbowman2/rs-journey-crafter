import { render } from "@testing-library/react";
import HeaderMenu from "./HeaderMenu";

describe("HeaderMenu", () => {
    it("should render successfully", () => {
        const { baseElement } = render(<HeaderMenu />);

        expect(baseElement).toBeTruthy();
    });
});
