import { Container } from "@chakra-ui/react";
import { Account } from "@prisma/client";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/welcome/welcome";
import Header from "./components/header/header";
import SelectedAccountContext from "./contexts/selected-account/selected-account-context";
import AddAccount from "./pages/add-account/add-account";
import Dashboards from "./pages/dashboards/dashboards";
import TaskPage from "./pages/task-page/task-page";
import EditTaskPage from "./pages/edit-task-page/edit-task-page";

export default function App() {
	const [selectedAccount, setSelectedAccount] = useState<Account | null>();
	return (
		<SelectedAccountContext.Provider value={{ selectedAccount, setSelectedAccount }}>
			<Header />
			<Container as="main" maxW="container.xl">
				<Switch>
					<Route path="/" exact>
						<Dashboards />
					</Route>
					<Route path="/task/:id" exact>
						<TaskPage />
					</Route>
					<Route path="/task/:id/edit">
						<EditTaskPage />
					</Route>
					<Route path="/welcome">
						<Welcome />
					</Route>
					<Route path="/account/new">
						<AddAccount />
					</Route>
				</Switch>
			</Container>
		</SelectedAccountContext.Provider>
	);
}
