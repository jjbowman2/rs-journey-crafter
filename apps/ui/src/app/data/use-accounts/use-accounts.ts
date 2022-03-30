import { request, gql } from "graphql-request";
import { environment } from "../../../environments/environment";
import { useQuery, UseQueryResult } from "react-query";
const endpoint = environment.API_ENDPOINT;

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
    const {
        accounts: { data },
    } = await request(
        endpoint,
        gql`
            query Account($userId: String!) {
                account(userId: $userId) {
                    id
                    userId
                    accountName
                    game
                    accountType
                }
            }
        `,
        { userId: sub },
    );
    return data;
};

export function useAccounts(sub: string | undefined): UseQueryResult<Account[]> {
    return useQuery("accounts", () => getAccounts(sub), { enabled: !!sub, staleTime: Infinity });
}

export default useAccounts;
