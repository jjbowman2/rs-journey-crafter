import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useQueryClient, useMutation } from "react-query";
import { removeTask, Task } from "../../data/use-tasks/use-tasks";

export interface DeleteTaskDialogProps {
	isOpen: boolean;
	onClose: () => void;
	task: Task;
}

export function DeleteTaskDialog({ isOpen, onClose, task }: DeleteTaskDialogProps) {
	const cancelRef = useRef<HTMLButtonElement | null>(null);
	const queryClient = useQueryClient();
	const mutation = useMutation(removeTask, {
		onMutate: () => queryClient.cancelQueries(["tasks", task.account.id]),
		onSettled: () => {
			queryClient.invalidateQueries(["tasks", task.account.id]);
			onClose();
		},
	});

	const handleDelete = () => {
		mutation.mutate(task.id);
	};

	return (
		<AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose} isCentered>
			<AlertDialogOverlay>
				<AlertDialogContent>
					<AlertDialogHeader fontSize="lg" fontWeight="bold">
						Delete Task
					</AlertDialogHeader>
					<AlertDialogBody>Are you sure? You can't undo this action afterwards.</AlertDialogBody>
					<AlertDialogFooter>
						<Button ref={cancelRef} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme="red" onClick={handleDelete} ml={3}>
							Delete
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	);
}

export default DeleteTaskDialog;
