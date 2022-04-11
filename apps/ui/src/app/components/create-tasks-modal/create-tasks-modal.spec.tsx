import { render } from "@testing-library/react";

import CreateTasksModal from "./create-tasks-modal";

describe("CreateTasksModal", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<CreateTasksModal />);
		expect(baseElement).toBeTruthy();
	});
});
