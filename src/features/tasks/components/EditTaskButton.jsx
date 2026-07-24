// Third Party
import { Button } from "@heroui/react";
import { Pencil } from "@gravity-ui/icons";

//State Management
import { setTaskID, EDIT_TASK } from "../reducers/tasksReducer";

// My Custom Hooks
import { useTasks } from "../hooks/useTasks";

export default function EditTaskButton({ taskId }) {
  const { dispatch, openState } = useTasks();

  return (
    <>
      <Button
        onPress={() => (
          openState.open(),
          dispatch(setTaskID(taskId, EDIT_TASK))
        )}
        aria-label="edit selected task"
        isIconOnly
        variant="secondary"
        className="border-2 border-amber-500 text-amber-500">
        <Pencil />
      </Button>
    </>
  );
}
