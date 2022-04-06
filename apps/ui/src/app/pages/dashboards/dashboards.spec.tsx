import { render } from "@testing-library/react";

import Dashboards from "./dashboards";

describe("Dashboards", () => {
    it("should render successfully", () => {
        const { baseElement } = render(<Dashboards />);
        expect(baseElement).toBeTruthy();
    });
});
