
//State Management
import { EDIT_TASK, DELETE_TASK } from "../reducers/tasksReducer";

// My Custom Hooks
import { useTasks } from "../hooks/useTasks";
// My Components
import EditDialogue from "./EditDialogue";
import DeleteDialogue from "./DeleteDialogue";


export default function DialogueRouter() {
  const { openState, selectedTaskAction } = useTasks();

  if (!openState.isOpen) return null;
  return (
    <>
      {selectedTaskAction === EDIT_TASK ? <EditDialogue /> : null}
      {selectedTaskAction === DELETE_TASK ? <DeleteDialogue /> : null}
    </>
  );
}
