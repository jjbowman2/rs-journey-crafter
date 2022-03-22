import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import LoginButton from "../../LoginButton/LoginButton";

import { faker } from "@faker-js/faker";

const getAccounts = async (sub: string | undefined) => {
    return [
        [...Array(faker.datatype.number({ min: 1, max: 5 })).keys()].map(() => ({
            id: faker.datatype.number(),
            userId: sub,
            accountName: faker.internet.userName(),
            game: faker.helpers.randomize(["osrs", "rs", "osrs_leagues"]),
            accountType: faker.helpers.randomize([
                "main",
                "ironman",
                "hardcore_ironman",
                "group_iroman",
                "ultimate_ironman",
                null,
            ]),
        })),
    ];
};

const useAccounts = (sub: string | undefined) => {
    return useQuery("accounts", () => getAccounts(sub), { enabled: !!sub, staleTime: Number.POSITIVE_INFINITY });
};

type Props = {
    sub: string | undefined;
};

const AccountsDropDown = ({ sub }: Props) => {
    const { isLoading, isError, data, error } = useAccounts(sub);
    console.log({ isLoading, isError, data, error });
    return <div>Accounts Drop Down</div>;
};

const HeaderMenu = () => {
    const { isAuthenticated, isLoading, user } = useAuth0();

    if (!isAuthenticated) {
        return <LoginButton />;
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return <AccountsDropDown sub={user?.sub} />;
};

export default HeaderMenu;
