import { Container } from "@chakra-ui/react";
import { Account } from "@prisma/client";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { Redirect, Route, Switch } from "react-router-dom";
import Welcome from "../pages/welcome/welcome";
import Header from "./components/header/header";
import SelectedAccountContext from "./contexts/selected-account/selected-account-context";
import AddAccount from "./pages/add-account/add-account";

export default function App() {
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    const queryClient = useQueryClient();
    return (
        <SelectedAccountContext.Provider value={{ selectedAccount, setSelectedAccount }}>
            <Header />
            <Container as="main" maxW="container.xl">
                <Switch>
                    <Route path="/" exact>
                        {selectedAccount || queryClient.isFetching ? (
                            <p>{selectedAccount?.accountName}</p>
                        ) : (
                            <Redirect to="/welcome" />
                        )}
                    </Route>
                    <Route path="/welcome">
                        <Welcome />
                    </Route>
                    <Route path="/add-account">
                        <AddAccount />
                    </Route>
                </Switch>
            </Container>
        </SelectedAccountContext.Provider>
    );
}
