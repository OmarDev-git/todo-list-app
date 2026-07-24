// React
import { useRef } from "react";

// Third Party
import { Input, Button, toast } from "@heroui/react";

//State Management
import { addTask } from "../reducers/tasksReducer";

// My Custom Hooks
import { useTasks } from "../hooks/useTasks";

// My Components
import AddTaskButton from "./AddTaskButton";

export default function TaskInput() {
  const { dispatch } = useTasks();

  const inputRef = useRef(null);

  function handleTaskInput() {
    const taskInputValue = inputRef.current.value;
    if (taskInputValue.trim() != "") {
      dispatch(addTask(taskInputValue.trim()));
      toast.success("تم اضافة مهمة");
    }
    inputRef.current.value = "";
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center w-full items-center gap-6 ">
        <Input
          ref={inputRef}
          onKeyDown={(e) => (e.key == "Enter" ? handleTaskInput() : null)}
          className="w-full md:w-80 text-lg shadow-xl ring-2  ring-gray-300 focus:ring-blue-500"
          placeholder="عنوان المهمة..."
          autoFocus
        />
        <AddTaskButton handleAddTask={handleTaskInput} />
      </div>
    </>
  );
}
