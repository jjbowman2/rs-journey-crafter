import { Flex, IconButton, Show } from "@chakra-ui/react";
import CreateTasksModal from "../../../../components/create-tasks-modal/create-tasks-modal";
import { SortDownIcon, FilterIcon, DiagramIcon, ListIcon } from "../../../../components/icons";

/* eslint-disable-next-line */
export interface JourneyToolbarProps {}

export function JourneyToolbar(props: JourneyToolbarProps) {
	return (
		<Flex justifyContent="space-between">
			<Flex gap={2}>
				<IconButton aria-label="Sort" icon={<SortDownIcon />} />
				<IconButton aria-label="Filter" icon={<FilterIcon />} />
			</Flex>
			<Show above="md">
				<Flex gap={2}>
					<IconButton aria-label="Display as List" icon={<ListIcon />} />
					<IconButton aria-label="Display as Graph" icon={<DiagramIcon />} />
				</Flex>
			</Show>
			<CreateTasksModal />
		</Flex>
	);
}

export default JourneyToolbar;
