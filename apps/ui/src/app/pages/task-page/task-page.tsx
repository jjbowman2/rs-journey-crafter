import {
	Button,
	Center,
	Container,
	Flex,
	Heading,
	IconButton,
	Spacer,
	Spinner,
	Tag,
	Text,
	Tooltip,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";
import { useQueryClient, useMutation } from "react-query";
import { Link, useHistory, useParams } from "react-router-dom";
import DeleteTaskDialog from "../../components/delete-task-dialog/delete-task-dialog";
import { CheckIcon, ChevronLeftIcon, CreateEditIcon, FlagIcon, PlusIcon, TrashIcon } from "../../components/icons";
import TaskCard from "../../components/task-card/task-card";
import { updateTask, useTask } from "../../data/use-tasks/use-tasks";

/* eslint-disable-next-line */
export interface TaskPageProps {}

type IdParam = {
	id: string | undefined;
};

export function TaskPage(props: TaskPageProps) {
	const { id } = useParams<IdParam>();
	const { isLoading, isError, data } = useTask(id);
	const color = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
	const deleteDisclosure = useDisclosure();
	const history = useHistory();
	const queryClient = useQueryClient();
	const mutation = useMutation(updateTask, {
		onMutate: () => queryClient.cancelQueries(["task", data?.id]),
		onSettled: () => queryClient.invalidateQueries(["task", data?.id]),
	});

	const toggleComplete = () => {
		mutation.mutate({ id: data?.id, complete: !data?.complete });
	};

	if (isLoading)
		return (
			<Center h="48">
				<Spinner />
			</Center>
		);

	if (isError)
		return (
			<Center h="48">
				<Text fontSize="lg">There was a problem loading your task.</Text>
			</Center>
		);

	if (!data) return null;

	return (
		<Container maxW="container.lg" display="flex" flexDirection="column" gap={3}>
			<Flex>
				<IconButton
					variant="ghost"
					aria-label="Go back"
					icon={<ChevronLeftIcon />}
					onClick={() => history.goBack()}
				/>
				<Spacer />
				{data && (
					<Flex gap={2}>
						<Tooltip placement="top" label="Edit task" openDelay={500}>
							<IconButton
								aria-label="edit task"
								icon={<CreateEditIcon />}
								variant="ghost"
								size="lg"
								as={Link}
								to={`/task/${data.id}/edit`}
							/>
						</Tooltip>
						<Tooltip placement="top" label="Flag task" openDelay={500}>
							<IconButton
								aria-label="flag task"
								icon={<FlagIcon />}
								variant="ghost"
								size="lg"
								disabled
								title="Flag task coming soon"
							/>
						</Tooltip>
						<Tooltip placement="top" label="Add prerequisite" openDelay={500}>
							<IconButton
								aria-label="add prerequisite task"
								icon={<PlusIcon />}
								variant="ghost"
								size="lg"
								disabled
								title="Prerequisites coming soon"
							/>
						</Tooltip>
						<Tooltip placement="top" label="Delete task" openDelay={500}>
							<IconButton
								aria-label="delete task"
								icon={<TrashIcon />}
								variant="ghost"
								size="lg"
								onClick={deleteDisclosure.onOpen}
							/>
						</Tooltip>
						<DeleteTaskDialog
							isOpen={deleteDisclosure.isOpen}
							onClose={deleteDisclosure.onClose}
							task={data}
							onDelete={() => history.push("/")}
						/>
					</Flex>
				)}
			</Flex>
			<Heading
				textAlign="left"
				fontSize="24px"
				fontWeight="semibold"
				textDecor={data.complete ? "line-through" : undefined}
				color={color}
			>
				{data.title}
			</Heading>
			<Text
				fontSize="18px"
				fontWeight="light"
				textAlign="left"
				textDecor={data.complete ? "line-through" : undefined}
			>
				{data.description}
			</Text>
			{data.labels?.length > 0 && (
				<Flex gap={2}>
					{data.labels.map((label) => (
						<Tag key={label} size="lg" colorScheme="orange" borderRadius="full">
							{label}
						</Tag>
					))}
				</Flex>
			)}
			<Heading fontWeight="semibold" color={color} fontSize="18px">
				Prerequisites
			</Heading>
			{data.dependees?.length === 0 ? (
				<Text>This task does not have any prerequisites.</Text>
			) : (
				data.dependees.map((task) => <TaskCard key={task.id} task={task} />)
			)}
			<Flex justifyContent="end">
				<Button
					colorScheme="orange"
					opacity={data.complete ? 0.7 : undefined}
					onClick={toggleComplete}
					leftIcon={<CheckIcon />}
				>
					{data.complete ? "Mark Uncomplete" : "Mark Complete"}
				</Button>
			</Flex>
		</Container>
	);
}

export default TaskPage;
