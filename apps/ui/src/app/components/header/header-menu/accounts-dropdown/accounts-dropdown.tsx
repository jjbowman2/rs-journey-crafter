import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import faker from "@faker-js/faker";
import SelectedAccountContext from "../../../../contexts/selected-account/selected-account-context";
import { useEffect, useContext } from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";

export interface AccountsDropdownProps {
    sub: string | undefined;
}

export enum Game {
    osrs = "osrs",
    rs = "rs",
    osrs_leagues = "osrs_leagues",
}

export enum AccountType {
    main = "main",
    ironman = "ironman",
    hardcore_ironman = "hardcore_ironman",
    group_ironman = "group_ironman",
    ultimate_ironman = "ultimate_ironman",
}

export interface Account {
    id: number;
    userId: string;
    accountName: string;
    game: Game;
    accountType: AccountType | null;
}

const getAccounts = async (sub: string | undefined): Promise<Account[]> => {
    return [...Array(faker.datatype.number({ min: 0, max: 3 })).keys()].map(() => ({
        id: faker.datatype.number(),
        userId: sub ?? "",
        accountName: faker.internet.userName(),
        game: faker.helpers.randomize([Game.osrs, Game.osrs_leagues, Game.rs]),
        accountType: faker.helpers.randomize([
            AccountType.main,
            AccountType.ironman,
            AccountType.hardcore_ironman,
            AccountType.group_ironman,
            AccountType.ultimate_ironman,
            null,
        ]),
    }));
};

const useAccounts = (sub: string | undefined) => {
    return useQuery("accounts", () => getAccounts(sub), { enabled: !!sub, staleTime: Number.POSITIVE_INFINITY });
};

const AccountsDropdown = ({ sub }: AccountsDropdownProps) => {
    const { isLoading, isError, data, error } = useAccounts(sub);
    const { selectedAccount, setSelectedAccount } = useContext(SelectedAccountContext);
    const history = useHistory();
    useEffect(() => {
        if (data?.length) {
            let selectedAccountId = localStorage.getItem("selected-account-id");
            if (selectedAccountId == null || !data.find((account) => account.id.toString() === selectedAccountId)) {
                selectedAccountId = data[0]?.id.toString();
                localStorage.setItem("selected-account-id", selectedAccountId);
            }
            setSelectedAccount(data.find((account) => account.id.toString() === selectedAccountId));
        }
    }, [data, setSelectedAccount]);

    if (isLoading) {
        return <p>Loading</p>;
    }

    if (isError) {
        // eslint-disable-next-line react/jsx-no-useless-fragment
        return <>{error}</>;
    }

    if (!selectedAccount) {
        return null;
    }

    return (
        // <Dropdown toggleElement={<AccountButton account={selectedAccount} />}>
        //     {data?.map((account) => (
        //         <AccountButton account={account} />
        //     ))}
        //     <Button onClick={() => history.push("/add-account")}>Add New Account</Button>
        // </Dropdown>
        <Menu>
            <MenuButton
                as={Button}
                variant="ghost"
                leftIcon={<GameIcon game={selectedAccount.game} accountType={selectedAccount.accountType} />}
                rightIcon={<ChevronDownIcon />}
            >
                {selectedAccount.accountName}
            </MenuButton>
            <MenuList>
                {data?.map((account) => (
                    <MenuItem
                        key={`account${account.id}`}
                        icon={<GameIcon game={account.game} accountType={account.accountType} />}
                        onClick={() => setSelectedAccount(account)}
                    >
                        {account.accountName}
                    </MenuItem>
                ))}
                <MenuItem icon={<AddIcon />} onClick={() => history.push("/add-account")}>
                    Add New Account
                </MenuItem>
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
