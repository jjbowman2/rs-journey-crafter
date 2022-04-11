import { useAuth0 } from "@auth0/auth0-react";
import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "../../icons";
import LoginButton from "../../login-button/login-button";
import AccountsDropdown from "./accounts-dropdown/accounts-dropdown";

const HeaderMenu = () => {
	const { isAuthenticated, isLoading, user } = useAuth0();
	const { colorMode, toggleColorMode } = useColorMode();

	if (!isAuthenticated) {
		return <LoginButton />;
	}

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<Flex gap={2}>
			<IconButton
				aria-label="color-mode"
				icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
				onClick={toggleColorMode}
			/>
			<AccountsDropdown sub={user?.sub} />
		</Flex>
	);
};

export default HeaderMenu;
