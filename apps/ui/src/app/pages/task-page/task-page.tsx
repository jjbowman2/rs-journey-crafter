import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useHistory, useParams } from "react-router-dom";
import SelectedAccountContext from "../../contexts/selected-account/selected-account-context";
import { removeTask, useTask } from "../../data/use-tasks/use-tasks";

/* eslint-disable-next-line */
export interface TaskPageProps {}

type IdParam = {
	id: string | undefined;
};

export function TaskPage(props: TaskPageProps) {
	const { id } = useParams<IdParam>();
	const { isLoading, isError, data } = useTask(id);
	// TODO: swap for account id from task once reference works
	const { selectedAccount } = useContext(SelectedAccountContext);
	const history = useHistory();
	const queryClient = useQueryClient();
	const mutation = useMutation(removeTask, {
		onMutate: () => queryClient.cancelQueries(["tasks", selectedAccount?.id]),
		onSettled: () => {
			queryClient.invalidateQueries(["tasks", selectedAccount?.id]);
			history.push("/");
		},
	});

	return (
		<div>
			<h1>{JSON.stringify(data)}</h1>
			<Button onClick={() => mutation.mutate(id)}>Delete Task</Button>
		</div>
	);
}

export default TaskPage;
