import { render } from "@testing-library/react";

import DesktopTaskCard from "./desktop-task-card";

describe("DesktopTaskCard", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<DesktopTaskCard />);
		expect(baseElement).toBeTruthy();
	});
});
