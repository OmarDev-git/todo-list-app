// React
import {  useMemo } from "react";

// Third Party
import { Card } from "@heroui/react";
import { Virtuoso } from "react-virtuoso";

// My Custom Hooks
import { useTasks } from "../hooks/useTasks";

// My Components
import CheckTaskButton from "./CheckTaskButton";
import EditTaskButton from "./EditTaskButton";
import DeleteTaskButton from "./DeleteTaskButton";

export default function TasksList({ tapType }) {
  const { tasks } = useTasks();

  const completedTasks = useMemo(() => {
    return tasks.filter((task) => task.isCompleted == true);
  }, [tasks]);

  const incompleteTasks = useMemo(() => {
    return tasks.filter((task) => task.isCompleted == false);
  }, [tasks]);

  const tasksFinal =
    tapType == "completed"
      ? completedTasks
      : tapType == "incomplete"
        ? incompleteTasks
        : tasks;

  const tasksList = tasksFinal.map((task) => {
    const completedTaskStyle = task.isCompleted
      ? "line-through text-gray-300"
      : "";
    return (
      <Card
        key={task.id}
        className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 overflow-auto hover:py-6 transition-all duration-100 bg-violet-700 ring-2 ring-violet-300 text-white p-4 rounded-md">
        <Card.Header className="flex flex-col justify-center items-center  md:items-start ">
          {/*  a task title */}
          <h1 className={`font-bold text-wrap  ${completedTaskStyle}`}>
            {task.title}
          </h1>

          {/*  a task description */}
          {task.body ? (
            <Card.Description
              className={`text-sm text-wrap text-white ${completedTaskStyle}`}>
              {task.body}
            </Card.Description>
          ) : null}
        </Card.Header>

        {/* Tasks Actions */}
        <Card.Footer className="flex justify-center items-center gap-4 ">
          {/* Check Action*/}
          <CheckTaskButton
            isTaskCompleted={task.isCompleted}
            taskId={task.id}
          />

          {/* Edit Action */}
          <EditTaskButton taskId={task.id} />

          {/* Delete Action */}
          <DeleteTaskButton taskId={task.id} />
        </Card.Footer>
      </Card>
    );
  });

  return (
    <Virtuoso
      dir="ltr"
      style={{ height: "280px"}}
      totalCount={tasksFinal.length}
      itemContent={(index) => (
        <>
          {" "}
          <div dir="rtl" className="my-4 mr-2">
            {tasksList[index]}
          </div>
          {index == tasksFinal.length - 1 ? <div className="py-2" ></div> : null}
        </>
      )}
    />
  );
}
