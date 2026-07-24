// React
import { useEffect, useReducer } from "react";

// Third Party
import { useOverlayState } from "@heroui/react";

// My Contexts & State Management
import { TasksContext } from "./TasksContext";
import { tasksReducer } from "../reducers/tasksReducer";

// Data
import { defaultTasks } from "../data/tasksData";

export const TasksProvider = ({ children }) => {

    // Lazy init: Set initial state once on mount
  const [{ tasks, selectedTaskID, selectedTaskAction }, dispatch] = useReducer(
    tasksReducer,
    {},
    () => {
      return {
        tasks: defaultTasks,
        selectedTaskID: "",
        selectedTaskAction: "",
      };
    },
  );

  // Sync tasks to localStorage on update
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Custom Hook to deal with Dialogues (Hero UI)
  const openState = useOverlayState();

  return (
    <TasksContext.Provider
      value={{
        tasks,
        selectedTaskID,
        selectedTaskAction,
        dispatch,
        openState,
      }}>
      {children}
    </TasksContext.Provider>
  );
};
