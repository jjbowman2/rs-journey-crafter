import { Box, Flex, Show, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HeaderMenu from "./header-menu/header-menu";

const Header = () => {
    return (
        <Flex as="nav" align="center" gap={4} px={12} py={6}>
            <Link to="/">
                <img src="/assets/Crafting_icon.png" alt="Crafting Icon" />
            </Link>
            <Show above="sm">
                <Text fontSize="2xl" casing="uppercase" letterSpacing="widest">
                    RS Journey Crafter
                </Text>
            </Show>
            <Spacer />
            <Box>
                <HeaderMenu />
            </Box>
        </Flex>
    );
};

export default Header;

// <nav className="flex w-screen items-center gap-4 px-12 py-6">
