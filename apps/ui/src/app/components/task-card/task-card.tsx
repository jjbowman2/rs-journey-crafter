import { Box, Flex, Heading, IconButton, Text, Tooltip, useBoolean } from "@chakra-ui/react";
import { Task } from "@prisma/client";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import SelectedAccountContext from "../../contexts/selected-account/selected-account-context";
import { updateTask } from "../../data/use-tasks/use-tasks";
import { CheckIcon, OpenExternalIcon, TaskDefaultIcon } from "../icons";

/* eslint-disable-next-line */
export interface TaskCardProps {
	task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
	const [expanded, { toggle }] = useBoolean(false);
	// TODO: swap for account id from task once reference works
	const { selectedAccount } = useContext(SelectedAccountContext);
	const queryClient = useQueryClient();
	const mutation = useMutation(updateTask, {
		onMutate: () => queryClient.cancelQueries(["tasks", selectedAccount?.id]),
		onSettled: () => queryClient.invalidateQueries(["tasks", selectedAccount?.id]),
	});

	const toggleComplete = () => {
		mutation.mutate({ id: task.id, complete: !task.complete });
	};

	return (
		<Box
			my={4}
			p={8}
			borderRadius={4}
			bg={task.complete ? "facebook.200" : "blue.300"}
			as={motion.div}
			whileHover={{ scale: 1.01 }}
			whileTap={{ scale: 0.99 }}
			cursor="pointer"
			onClick={toggle}
		>
			<Flex>
				<TaskDefaultIcon w={8} h={8} mr="18px" />
				<Box>
					<Heading size="md" textAlign="left" mb={3} textDecor={task.complete ? "line-through" : undefined}>
						{task.title}
					</Heading>
					<Text
						fontSize="md"
						textAlign="left"
						textOverflow="ellipsis"
						noOfLines={expanded ? undefined : 2}
						textDecor={task.complete ? "line-through" : undefined}
					>
						{task.description}
					</Text>
				</Box>
			</Flex>
			<Flex justifyContent="right" hidden={!expanded} gap={2}>
				<Tooltip placement="top" label="Open Task Details" openDelay={500}>
					<IconButton
						aria-label="open task"
						icon={<OpenExternalIcon />}
						variant="ghost"
						size="lg"
						as={Link}
						to={`task/${task.id}`}
						onClick={(e) => e.stopPropagation()}
					/>
				</Tooltip>
				<Tooltip placement="top" label={`Mark as ${task.complete ? "Incomplete" : "Complete"}`} openDelay={500}>
					<IconButton
						aria-label={`mark ${task.complete ? "incomplete" : "complete"}`}
						icon={<CheckIcon />}
						variant="ghost"
						size="lg"
						colorScheme="orange"
						onClick={(e) => {
							e.stopPropagation();
							toggleComplete();
						}}
					/>
				</Tooltip>
			</Flex>
		</Box>
	);
}

export default TaskCard;
