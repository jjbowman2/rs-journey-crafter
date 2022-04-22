import { render } from "@testing-library/react";

import MobileTaskCard from "./mobile-task-card";

describe("MobileTaskCard", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<MobileTaskCard />);
		expect(baseElement).toBeTruthy();
	});
});
