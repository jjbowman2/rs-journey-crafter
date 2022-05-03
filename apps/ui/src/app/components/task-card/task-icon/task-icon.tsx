import { IconProps, Image, ImageProps } from "@chakra-ui/react";
import { Task } from "../../../data/use-tasks/use-tasks";
import { TaskDefaultIcon } from "../../icons";

type IconImageIntersectionProps = IconProps & ImageProps;

export interface TaskIconProps extends IconImageIntersectionProps {
	task: Task;
}

export function TaskIcon({ task, ...props }: TaskIconProps) {
	if (task.taskType === "custom") return <TaskDefaultIcon {...props} />;
	let imageName = task.account.game === "rs" ? "rs_" : "osrs_";
	if (task.taskType === "skill") {
		imageName += task.skill ?? "stats";
	} else {
		imageName += task.taskType;
	}
	return <Image {...props} src={`/assets/${imageName}.png`} alt="" />;
}

export default TaskIcon;
