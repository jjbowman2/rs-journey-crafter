import { Button } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "react-query";
import { useHistory, useParams } from "react-router-dom";
import { removeTask, useTask } from "../../data/use-tasks/use-tasks";

/* eslint-disable-next-line */
export interface TaskPageProps {}

type IdParam = {
	id: string | undefined;
};

export function TaskPage(props: TaskPageProps) {
	const { id } = useParams<IdParam>();
	const { isLoading, isError, data } = useTask(id);
	const history = useHistory();
	const queryClient = useQueryClient();
	const mutation = useMutation(removeTask, {
		onMutate: () => queryClient.cancelQueries(["tasks", data?.account.id]),
		onSettled: () => {
			queryClient.invalidateQueries(["tasks", data?.account.id]);
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
