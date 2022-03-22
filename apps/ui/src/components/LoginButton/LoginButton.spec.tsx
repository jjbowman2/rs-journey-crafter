import * as Auth0 from "@auth0/auth0-react";
import { render } from "@testing-library/react";

import LoginButton from "./LoginButton";

describe("LoginButton", () => {
    it("should render successfully", () => {
        const { baseElement } = render(<LoginButton />);

        expect(baseElement).toBeTruthy();
    });

    it("should say Login", () => {
        const { getByText } = render(<LoginButton />);

        expect(getByText(/Login/gi)).toBeTruthy();
    });

    it("should call auth0 onClick", () => {
        const authSpy = jest.spyOn(Auth0, "useAuth0");
        const { baseElement } = render(<LoginButton />);
        baseElement.click();

        expect(authSpy).toBeCalled();
    });
});
