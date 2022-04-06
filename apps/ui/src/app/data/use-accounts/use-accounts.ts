import { request, gql } from "graphql-request";
import { environment } from "../../../environments/environment";
import { useQuery, UseQueryResult } from "react-query";
import { Prisma, Account } from "@prisma/client";
const endpoint = environment.API_ENDPOINT;

export const createAccount = async (createInput: Prisma.AccountCreateInput): Promise<Account> => {
    const { createAccount } = await request(
        endpoint,
        gql`
            mutation CreateAccount($createAccountInput: CreateAccountInput!) {
                createAccount(createAccountInput: $createAccountInput) {
                    id
                    userId
                    accountName
                    game
                    accountType
                }
            }
        `,
        { createAccountInput: createInput },
    );
    return createAccount;
};

export const updateAccount = async (updateInput: Prisma.AccountCreateInput): Promise<Account> => {
    const { updateAccount } = await request(
        endpoint,
        gql`
            mutation UpdateAccount($updateAccountInput: UpdateAccountInput!) {
                updateAccount(updateAccountInput: $updateAccountInput) {
                    id
                    userId
                    accountName
                    game
                    accountType
                }
            }
        `,
        { updateAccountInput: updateInput },
    );
    return updateAccount;
};

const getAccounts = async (sub: string | undefined): Promise<Account[]> => {
    const { account } = await request(
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
    return account;
};

export function useAccounts(sub: string | undefined): UseQueryResult<Account[]> {
    return useQuery("accounts", () => getAccounts(sub), { enabled: !!sub, staleTime: Infinity });
}

export default useAccounts;
