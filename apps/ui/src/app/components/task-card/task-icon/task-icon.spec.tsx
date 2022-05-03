import { render } from "@testing-library/react";

import TaskIcon from "./task-icon";

describe("TaskIcon", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<TaskIcon />);
		expect(baseElement).toBeTruthy();
	});
});
