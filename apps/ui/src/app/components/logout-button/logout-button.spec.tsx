import * as Auth0 from "@auth0/auth0-react";
import { Menu, MenuList } from "@chakra-ui/react";
import { render } from "@testing-library/react";

import LogoutButton from "./logout-button";

describe("LogoutButton", () => {
    it("should render successfully", () => {
        const { baseElement } = render(
            <Menu>
                <MenuList>
                    <LogoutButton />
                </MenuList>
            </Menu>,
        );

        expect(baseElement).toBeTruthy();
    });

    it("should say Logout", () => {
        const { getByText } = render(
            <Menu>
                <MenuList>
                    <LogoutButton />
                </MenuList>
            </Menu>,
        );

        expect(getByText(/Logout/gi)).toBeTruthy();
    });

    it("should call auth0 onClick", () => {
        const authSpy = jest.spyOn(Auth0, "useAuth0");
        const { baseElement } = render(
            <Menu>
                <MenuList>
                    <LogoutButton />
                </MenuList>
            </Menu>,
        );
        baseElement.click();

        expect(authSpy).toBeCalled();
    });
});
