import {
	Button,
	FormControl,
	FormLabel,
	IconButton,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Select,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	Textarea,
	useDisclosure,
} from "@chakra-ui/react";
import { CreatableSelect, PropsValue } from "chakra-react-select";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import SelectedAccountContext from "../../contexts/selected-account/selected-account-context";
import { createTask } from "../../data/use-tasks/use-tasks";
import { CreateEditIcon } from "../icons";

/* eslint-disable-next-line */
export interface CreateTasksModalProps {}

export function CreateTasksModal(props: CreateTasksModalProps) {
	const { selectedAccount } = useContext(SelectedAccountContext);
	const [tab, setTab] = useState(0);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isError, setIsError] = useState(false);
	const [labels, setLabels] = useState<PropsValue<string>>([]); // controlled state for label since multi-select is not compatible with react-hook-form
	const { register, handleSubmit, reset } = useForm();
	const queryClient = useQueryClient();

	const resetForm = () => {
		setLabels([]);
		reset();
	};

	const mutation = useMutation(createTask, {
		onSuccess: (task) => {
			setIsError(false);
			queryClient.invalidateQueries(["tasks", selectedAccount?.id]);
			onClose();
			resetForm();
		},
		onError: (error) => {
			setIsError(true);
			console.log(error);
		},
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSubmit = ({ title, description, taskType }: any) => {
		if (selectedAccount)
			mutation.mutate({
				complete: false,
				description,
				taskType: taskType || "custom",
				title,
				accountId: selectedAccount.id,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				labels: labels.map((label) => label.value),
			});
	};

	return (
		<>
			<IconButton aria-label="Create Task" icon={<CreateEditIcon />} onClick={onOpen} variant="ghost" />
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
					<ModalHeader pb={0}>Add a Task</ModalHeader>
					<ModalCloseButton />
					<ModalBody pt={0}>
						<Tabs
							variant="line"
							align="center"
							isLazy
							index={tab}
							onChange={(index) => {
								setTab(index);
								resetForm();
							}}
						>
							<TabList>
								<Tab>Quick</Tab>
								<Tab>Advanced</Tab>
							</TabList>
							<TabPanels>
								<TabPanel>
									{/* TODO: make this a smart select component */}
									<FormControl isRequired>
										<FormLabel htmlFor="taskTitle">Task</FormLabel>
										<Input
											id="taskTitle"
											placeholder="Example: Complete Cook's Assistant"
											required
											{...register("title")}
										/>
									</FormControl>
								</TabPanel>
								<TabPanel display="flex" flexDir="column" gap={4}>
									<FormControl isRequired>
										<FormLabel htmlFor="taskTitle">Title</FormLabel>
										<Input
											id="taskTitle"
											placeholder="Example: Complete Cook's Assistant"
											required
											{...register("title")}
										/>
									</FormControl>
									<FormControl>
										<FormLabel htmlFor="taskDescription">Description</FormLabel>
										<Textarea
											id="taskDescription"
											placeholder="Example: Bake that dude a cake!"
											{...register("description")}
										/>
									</FormControl>
									<FormControl>
										<FormLabel htmlFor="taskType">Task Type</FormLabel>
										<Select id="taskType" placeholder="Example: Quest" {...register("taskType")}>
											<option value="skill">Skill</option>
											<option value="quest">Quest</option>
											<option value="achievementDiary">Achievement Diary</option>
											<option value="combatTask">Combat Task</option>
											<option value="item">Item</option>
											<option value="custom">Other</option>
										</Select>
									</FormControl>
									<FormControl>
										<FormLabel htmlFor="taskLabels">Add a Label</FormLabel>
										<CreatableSelect
											id="taskLabels"
											isMulti
											placeholder="Example: Questing"
											noOptionsMessage={() => "Type label and press enter to add"}
											formatCreateLabel={(value) => `Add "${value}"`}
											value={labels}
											onChange={setLabels}
										></CreatableSelect>
									</FormControl>
									{/* TODO: make this like smart select component with multiple */}
									<FormControl>
										<FormLabel htmlFor="taskPrerequisites">Add a Prerequisite</FormLabel>
										<Input
											id="taskPrerequisites"
											placeholder="Coming soon"
											disabled
											// {...register("prerequisites")}
										/>
									</FormControl>
								</TabPanel>
							</TabPanels>
						</Tabs>
						{isError && <Text color="red">There was a problem creating your task.</Text>}
					</ModalBody>
					<ModalFooter>
						<Button variant="ghost" mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button type="submit">Add</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default CreateTasksModal;
