import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import SelectedAccountContext from "../../../../contexts/selected-account/selected-account-context";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../../../logout-button/logout-button";
import useAccounts from "../../../../data/use-accounts/use-accounts";
import { AccountType, Game } from "@prisma/client";

export interface AccountsDropdownProps {
    sub: string | undefined;
}

const AccountsDropdown = ({ sub }: AccountsDropdownProps) => {
    const { isLoading, isError, data } = useAccounts(sub);
    const { selectedAccount, setSelectedAccount } = useContext(SelectedAccountContext);
    useEffect(() => {
        if (data?.length) {
            let selectedAccountId = localStorage.getItem("selected-account-id");
            if (selectedAccountId == null || !data.find((account) => account.id.toString() === selectedAccountId)) {
                selectedAccountId = data[0]?.id.toString();
            }
            setSelectedAccount(data.find((account) => account.id.toString() === selectedAccountId));
        }
    }, [data, setSelectedAccount]);

    useEffect(() => {
        if (!isLoading && !isError) localStorage.setItem("selected-account-id", selectedAccount?.id.toString() || "");
    }, [selectedAccount, isLoading, isError]);

    if (isError || isLoading) {
        return null;
    }

    return (
        <Menu>
            <MenuButton
                as={Button}
                variant="ghost"
                leftIcon={
                    selectedAccount && (
                        <GameIcon game={selectedAccount.game} accountType={selectedAccount.accountType} />
                    )
                }
                rightIcon={<ChevronDownIcon />}
                iconSpacing={!selectedAccount ? 0 : undefined}
            >
                {selectedAccount?.accountName}
            </MenuButton>
            <MenuList>
                {data?.map((account) => (
                    <MenuItem
                        key={`account${account.id}`}
                        icon={<GameIcon game={account.game} accountType={account.accountType} />}
                        onClick={() => setSelectedAccount(account)}
                        marginLeft="auto"
                    >
                        {account.accountName}
                    </MenuItem>
                ))}
                <MenuItem icon={<AddIcon />} as={Link} to="/add-account">
                    Add New Account
                </MenuItem>
                <LogoutButton />
            </MenuList>
        </Menu>
    );
};

interface GameIconProps {
    game: Game;
    accountType: AccountType | null;
}

const GameIcon = ({ game, accountType }: GameIconProps) => {
    // TODO: get logos for other account types
    let src;
    if (game === Game.rs) {
        src = "assets/rs_logo.png";
    } else {
        src = "assets/osrs_logo.png";
    }
    return <Image src={src} alt="Account Icon" />;
};

export default AccountsDropdown;
