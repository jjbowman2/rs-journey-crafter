import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Button, Container, Flex, FormControl, FormLabel, Heading, Input, Select } from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import SelectedAccountContext from "../../contexts/selected-account/selected-account-context";
import { createAccount } from "../../data/use-accounts/use-accounts";

export function AddAccount() {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth0();
    const { setSelectedAccount } = useContext(SelectedAccountContext);
    const history = useHistory();
    const queryClient = useQueryClient();
    const mutation = useMutation(createAccount, {
        onSuccess: (account) => {
            setSelectedAccount(account);
            queryClient.invalidateQueries({ queryKey: "accounts" });
            history.push("/");
        },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = ({ accountName, game, accountType }: any) => {
        if (user?.sub) mutation.mutate({ userId: user.sub, accountName, game, accountType });
    };

    return (
        <Container maxW="container.md">
            <Heading size="lg">Getting Started</Heading>
            <Heading size="2xl" mb={4}>
                Add New Account
            </Heading>
            <Flex as="form" direction="column" onSubmit={handleSubmit(onSubmit)} gap={4}>
                <FormControl isRequired>
                    <FormLabel htmlFor="accountName">In Game Name</FormLabel>
                    <Input
                        id="accountName"
                        placeholder="Example: Cow31337Killer"
                        required
                        {...register("accountName")}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="game">In Game Name</FormLabel>
                    <Select id="game" placeholder="Example: Old School RuneScape" required {...register("game")}>
                        <option value="osrs">Old School RuneScape</option>
                        <option value="rs">RuneScape</option>
                        <option value="osrs_leagues">OSRS Leagues</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="accountType">Account Type</FormLabel>
                    <Select
                        id="accountType"
                        placeholder="Example: Hardcore Ironman"
                        required
                        {...register("accountType")}
                    >
                        <option value="main">Main Account</option>
                        <option value="ironman">Ironman</option>
                        <option value="hardcore_ironman">Hardcore Ironman</option>
                        <option value="group_ironman">Group Ironman</option>
                        <option value="ultimate_ironman">Ultimate Ironman</option>
                    </Select>
                </FormControl>
                <Button variant="ghost" type="submit" marginLeft="auto">
                    Add Account
                </Button>
            </Flex>
        </Container>
    );
}

export default withAuthenticationRequired(AddAccount);
