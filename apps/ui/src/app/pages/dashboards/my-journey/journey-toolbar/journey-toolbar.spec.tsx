import { render } from "@testing-library/react";

import JourneyToolbar from "./journey-toolbar";

describe("JourneyToolbar", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<JourneyToolbar />);
		expect(baseElement).toBeTruthy();
	});
});
