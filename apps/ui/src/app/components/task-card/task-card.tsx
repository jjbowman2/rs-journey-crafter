import { Box, Hide, Show, useColorModeValue } from "@chakra-ui/react";
import { Task } from "../../data/use-tasks/use-tasks";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "react-query";
import { updateTask } from "../../data/use-tasks/use-tasks";
import DesktopTaskCard from "./desktop-task-card/desktop-task-card";
import MobileTaskCard from "./mobile-task-card/mobile-task-card";

export interface TaskCardProps {
	task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
	const bg = useColorModeValue("white", "gray.600");
	const queryClient = useQueryClient();
	const mutation = useMutation(updateTask, {
		onMutate: () => queryClient.cancelQueries(["tasks", task?.account.id]),
		onSettled: () => queryClient.invalidateQueries(["tasks", task?.account.id]),
	});

	const toggleComplete = () => {
		mutation.mutate({ id: task.id, complete: !task.complete });
	};

	return (
		<Box
			borderRadius={4}
			boxShadow="md"
			bg={bg}
			as={motion.div}
			whileHover={{ scale: 1.005 }}
			whileTap={{ scale: 0.995 }}
		>
			<Show above="md">
				<DesktopTaskCard task={task} toggleComplete={toggleComplete} />
			</Show>
			<Hide above="md">
				<MobileTaskCard task={task} toggleComplete={toggleComplete} />
			</Hide>
		</Box>
	);
}

export default TaskCard;
