import { request, gql } from "graphql-request";
import { environment } from "../../../environments/environment";
import { useQuery, UseQueryResult } from "react-query";
import { Prisma, Task } from "@prisma/client";
const endpoint = environment.API_ENDPOINT;

export const createTask = async (createInput: Prisma.TaskCreateInput): Promise<Task> => {
    const { createTask } = await request(
        endpoint,
        gql`
            mutation CreateTask($createTaskInput: CreateTaskInput!) {
                createTask(createTaskInput: $createTaskInput) {
                    # id
                    # userId
                    # accountName
                    # game
                    # accountType
                }
            }
        `,
        { createTaskInput: createInput },
    );
    return createTask;
};

export const updateTask = async (updateInput: Prisma.TaskCreateInput): Promise<Task> => {
    const { updateTask } = await request(
        endpoint,
        gql`
            mutation UpdateTask($updateTaskInput: UpdateTaskInput!) {
                updateTask(updateTaskInput: $updateTaskInput) {
                    # id
                    # userId
                    # accountName
                    # game
                    # accountType
                }
            }
        `,
        { updateTaskInput: updateInput },
    );
    return updateTask;
};

const getTasks = async (accountId: number | undefined): Promise<Task[]> => {
    const { task } = await request(
        endpoint,
        gql`
            query Tasks($accountId: Int!) {
                task(accountId: $accountId) {
                    id
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
    return task;
};

export function useTasks(accountId: number | undefined): UseQueryResult<Task[]> {
    return useQuery(["tasks", accountId], () => getTasks(accountId), { enabled: !!accountId });
}

export default useTasks;
