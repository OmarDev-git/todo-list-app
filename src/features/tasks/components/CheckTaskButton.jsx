// Third Party
import { toast, Button } from "@heroui/react";
import { Check } from "@gravity-ui/icons";

// State Management
import { toggleTask } from "../reducers/tasksReducer";

// My Custom Hooks
import { useTasks } from "../hooks/useTasks";

// Data
import { playSound } from "../data/soundData";



export default function CheckTaskButton({ taskId, isTaskCompleted }) {
  const { dispatch } = useTasks();

  function handleCheckTask() {
    dispatch(toggleTask(taskId));
  }

  return (
    <>
      {!isTaskCompleted ? (
        <Button
          aria-label="check selected task"
          onPress={() => (playSound(), toast.success("تم انجاز مهمة"))}
          onClick={handleCheckTask}
          isIconOnly
          variant="secondary"
          className="border-2 border-green-500 text-green-500">
          <Check />
        </Button>
      ) : (
        <Button
          aria-label="uncheck selected task"
          onClick={handleCheckTask}
          isIconOnly
          className="bg-green-500">
          <Check />
        </Button>
      )}
    </>
  );
}
