import {
	Flex,
	Box,
	Heading,
	Tooltip,
	IconButton,
	Text,
	useBoolean,
	Checkbox,
	Stack,
	useColorModeValue,
	LinkBox,
	LinkOverlay,
	useDisclosure,
	Tag,
} from "@chakra-ui/react";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Task } from "../../../data/use-tasks/use-tasks";
import { Link } from "react-router-dom";
import DeleteTaskDialog from "../../delete-task-dialog/delete-task-dialog";
import { DownIcon, UpIcon, CreateEditIcon, FlagIcon, PlusIcon, TrashIcon } from "../../icons";
import TaskIcon from "../task-icon/task-icon";

export interface DesktopTaskCardProps {
	task: Task;
	toggleComplete: () => void;
}

export function DesktopTaskCard({ task, toggleComplete }: DesktopTaskCardProps) {
	const [expanded, { toggle }] = useBoolean(false);
	const color = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
	const deleteDisclosure = useDisclosure();

	return (
		<Box my={4}>
			<Flex alignItems="flex-start">
				<Checkbox size="lg" isChecked={task.complete} onChange={toggleComplete} mx={8} mt="44px" />
				<LinkBox flex="1" alignSelf="center">
					<LinkOverlay as={Link} to={`task/${task.id}`}>
						<Stack py={8}>
							<Flex>
								<TaskIcon task={task} w={6} h={6} mr="10px" color={color} />
								<Box>
									<Heading
										textAlign="left"
										fontSize="18px"
										fontWeight="semibold"
										textDecor={task.complete ? "line-through" : undefined}
										color={color}
									>
										{task.title}
									</Heading>
								</Box>
							</Flex>
							{task.description && (
								<Text
									fontSize="14px"
									fontWeight="light"
									textAlign="left"
									textOverflow="ellipsis"
									noOfLines={expanded ? undefined : 2}
									textDecor={task.complete ? "line-through" : undefined}
								>
									{task.description}
								</Text>
							)}
						</Stack>
					</LinkOverlay>
				</LinkBox>
				{expanded ? (
					<IconButton aria-label="Collapse task" m={8} variant="ghost" icon={<UpIcon />} onClick={toggle} />
				) : (
					<IconButton aria-label="Expand task" m={8} variant="ghost" icon={<DownIcon />} onClick={toggle} />
				)}
			</Flex>
			{task.labels?.length > 0 && (
				<Flex px={8} gap={2} hidden={!expanded}>
					{task.labels.map((label) => (
						<Tag key={label} size="lg" colorScheme="orange" borderRadius="full">
							{label}
						</Tag>
					))}
				</Flex>
			)}
			<Flex justifyContent="right" hidden={!expanded} gap={2} pr={8} pb={8}>
				<Tooltip placement="top" label="Edit task" openDelay={500}>
					<IconButton
						aria-label="edit task"
						icon={<CreateEditIcon />}
						variant="ghost"
						size="lg"
						as={Link}
						to={`/task/${task.id}/edit`}
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
			</Flex>
			<DeleteTaskDialog isOpen={deleteDisclosure.isOpen} onClose={deleteDisclosure.onClose} task={task} />
		</Box>
	);
}

export default DesktopTaskCard;
