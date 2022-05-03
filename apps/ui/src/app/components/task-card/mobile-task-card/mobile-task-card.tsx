import { Flex, Box, Heading, Text, Checkbox, Stack, useColorModeValue, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Task } from "../../../data/use-tasks/use-tasks";
import { Link } from "react-router-dom";
import TaskIcon from "../task-icon/task-icon";

export interface MobileTaskCardProps {
	task: Task;
	toggleComplete: () => void;
}

export function MobileTaskCard({ task, toggleComplete }: MobileTaskCardProps) {
	const color = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
	return (
		<Flex alignItems="center" my={4}>
			<Checkbox size="lg" isChecked={task.complete} onChange={toggleComplete} mx={8} />
			<LinkBox flex="1" pr={8}>
				<LinkOverlay as={Link} to={`task/${task.id}`}>
					<Stack py={8}>
						<Flex alignItems="center">
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
								noOfLines={2}
								textDecor={task.complete ? "line-through" : undefined}
							>
								{task.description}
							</Text>
						)}
					</Stack>
				</LinkOverlay>
			</LinkBox>
		</Flex>
	);
}

export default MobileTaskCard;
