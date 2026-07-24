// Third Party
import { Button } from "@heroui/react";
import { TrashBin } from "@gravity-ui/icons";

//State Management
import { setTaskID, DELETE_TASK } from "../reducers/tasksReducer";


// My Custom Hooks
import { useTasks } from "../hooks/useTasks";


export default function DeleteTaskButton({ taskId }) {
  const { dispatch, openState } = useTasks();

  return (
    <>
      {" "}
      <Button
        onPress={() => (
          openState.open(),
          dispatch(setTaskID(taskId, DELETE_TASK ))
        )}
        aria-label="delete selected task"
        isIconOnly
        variant="secondary"
        className="border-2 border-red-500 text-red-500">
        <TrashBin />
      </Button>
    </>
  );
}
