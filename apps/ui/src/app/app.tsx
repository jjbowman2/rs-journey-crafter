import { Container } from "@chakra-ui/react";
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Welcome from "../pages/welcome/welcome";
import Header from "./components/header/header";
import { Account } from "./data/use-accounts/use-accounts";
import SelectedAccountContext from "./contexts/selected-account/selected-account-context";
import AddAccount from "./pages/add-account/add-account";

export default function App() {
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    return (
        <SelectedAccountContext.Provider value={{ selectedAccount, setSelectedAccount }}>
            <Header />
            <Container as="main" maxW="container.xl">
                <Switch>
                    <Route path="/" exact>
                        {selectedAccount ? <p>{selectedAccount.accountName}</p> : <Redirect to="/welcome" />}
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
