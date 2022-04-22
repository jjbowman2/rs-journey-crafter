import { Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useTask } from "../../data/use-tasks/use-tasks";

/* eslint-disable-next-line */
export interface EditTaskPageProps {}

type IdParam = {
	id: string | undefined;
};
export function EditTaskPage(props: EditTaskPageProps) {
	const { id } = useParams<IdParam>();
	const { isLoading, isError, data } = useTask(id);

	return (
		<div>
			<Text>Editing {data?.title}</Text>
		</div>
	);
}

export default EditTaskPage;
