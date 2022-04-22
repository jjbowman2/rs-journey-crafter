import { render } from "@testing-library/react";

import EditTaskPage from "./edit-task-page";

describe("EditTaskPage", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<EditTaskPage />);
		expect(baseElement).toBeTruthy();
	});
});
