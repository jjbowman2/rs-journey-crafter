import { render } from "@testing-library/react";

import TaskCard from "./task-card";

describe("TaskCard", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<TaskCard />);
		expect(baseElement).toBeTruthy();
	});
});
