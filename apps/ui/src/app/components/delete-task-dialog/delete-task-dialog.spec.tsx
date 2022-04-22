import { render } from "@testing-library/react";

import DeleteTaskDialog from "./delete-task-dialog";

describe("DeleteTaskDialog", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<DeleteTaskDialog />);
		expect(baseElement).toBeTruthy();
	});
});
