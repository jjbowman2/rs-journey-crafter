import { Container } from "@chakra-ui/react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import { Account } from "./components/header/header-menu/accounts-dropdown/accounts-dropdown";
import SelectedAccountContext from "./contexts/selected-account/selected-account-context";
import AddAccount from "./pages/add-account/add-account";

export default function App() {
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    return (
        <SelectedAccountContext.Provider value={{ selectedAccount, setSelectedAccount }}>
            <Header />
            <Container as="main" maxW="container.xl">
                <Switch>
                    <Route path="/add-account">
                        <AddAccount />
                    </Route>
                </Switch>
            </Container>
        </SelectedAccountContext.Provider>
    );
}
