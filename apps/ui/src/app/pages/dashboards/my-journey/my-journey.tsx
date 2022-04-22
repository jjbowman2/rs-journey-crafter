import { Text } from "@chakra-ui/react";
import { Task } from "../../../data/use-tasks/use-tasks";
import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import TaskCard from "../../../components/task-card/task-card";
import SelectedAccountContext from "../../../contexts/selected-account/selected-account-context";
import useTasks from "../../../data/use-tasks/use-tasks";
import JourneyToolbar from "./journey-toolbar/journey-toolbar";

export function MyJourney() {
	const { selectedAccount } = useContext(SelectedAccountContext);
	const accountId = selectedAccount?.id;
	const { isError, isLoading, data } = useTasks(accountId);
	const [tasks, setTasks] = useState<Task[] | undefined>();

	useEffect(() => {
		setTasks(data?.sort((t1, t2) => Number(t1.createdAt) - Number(t2.createdAt)));
	}, [data]);

	// if selectedAccount is null (as opposed to undefined) no accounts were found
	if (selectedAccount === null) {
		<Redirect to="/welcome" />;
	}

	// query is dependent on loading the selectedAccount, loading won't start unless selectedAccount is truthy
	if (isLoading || !selectedAccount) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>There was a problem loading your latest journey information.</p>;
	}

	return (
		<>
			<JourneyToolbar />
			{tasks?.length === 0 ? (
				<Text mt={8} fontSize="lg">
					You don't have any tasks. Try adding a few now to get your journey started.
				</Text>
			) : (
				tasks?.map((task) => <TaskCard key={`task${task.id}`} task={task} />)
			)}
		</>
	);
}

export default MyJourney;
