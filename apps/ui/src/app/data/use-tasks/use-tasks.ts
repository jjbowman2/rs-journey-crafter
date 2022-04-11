import { request, gql } from "graphql-request";
import { environment } from "../../../environments/environment";
import { useQuery, UseQueryResult } from "react-query";
import { Prisma, Task } from "@prisma/client";
const endpoint = environment.API_ENDPOINT;

export const createTask = async (createInput: Prisma.TaskUncheckedCreateInput): Promise<Task> => {
	const { createTask } = await request(
		endpoint,
		gql`
			mutation CreateTask($createTaskInput: CreateTaskInput!) {
				createTask(createTaskInput: $createTaskInput) {
					id
				}
			}
		`,
		{ createTaskInput: createInput },
	);
	return createTask;
};

export const updateTask = async (updateInput: Prisma.TaskUncheckedUpdateInput): Promise<Task> => {
	const { updateTask } = await request(
		endpoint,
		gql`
			mutation UpdateTask($updateTaskInput: UpdateTaskInput!) {
				updateTask(updateTaskInput: $updateTaskInput) {
					id
				}
			}
		`,
		{ updateTaskInput: updateInput },
	);
	return updateTask;
};

export const removeTask = async (id: string | undefined): Promise<Task> => {
	const { removeTask } = await request(
		endpoint,
		gql`
			mutation RemoveTask($id: String!) {
				removeTask(id: $id) {
					id
				}
			}
		`,
		{ id },
	);
	return removeTask;
};

const getTask = async (id: string | undefined): Promise<Task> => {
	const { task } = await request(
		endpoint,
		gql`
			query Task($id: String!) {
				task(id: $id) {
					id
					# account {
					# 	id
					# }
					taskType
					title
					description
					skill
					level
					questId
					achievementDiaryId
					combatTaskId
					dependees {
						dependee {
							id
						}
					}
					complete
					labels
					createdAt
				}
			}
		`,
		{ id },
	);
	return task;
};

const getTasks = async (accountId: string | undefined): Promise<Task[]> => {
	const { tasksByAccountId } = await request(
		endpoint,
		gql`
			query TasksByAccountId($accountId: String!) {
				tasksByAccountId(accountId: $accountId) {
					id
					# account {
					# 	id
					# }
					taskType
					title
					description
					skill
					level
					questId
					achievementDiaryId
					combatTaskId
					dependees {
						dependee {
							id
						}
					}
					complete
					labels
					createdAt
				}
			}
		`,
		{ accountId },
	);
	return tasksByAccountId;
};

export function useTask(id: string | undefined): UseQueryResult<Task> {
	return useQuery(["task", id], () => getTask(id), { enabled: !!id });
}

export function useTasks(accountId: string | undefined): UseQueryResult<Task[]> {
	return useQuery(["tasks", accountId], () => getTasks(accountId), { enabled: !!accountId });
}

export default useTasks;
