// Third Party
import { v4 as uuidv4 } from "uuid";

export const TOGGLE_TASK = "tasks/toggle";
export const ADD_TASK = "tasks/add";
export const EDIT_TASK = "tasks/edit";
export const DELETE_TASK = "tasks/delete";
export const SET_TASK_ID = "tasks/id";

export const tasksReducer = (state, action) => {
  const { type} = action;

  const {
    taskID = "",
    taskTitle = "",
    taskBody = "",
    taskAction = "",
  } = action.payload || {};

  function handleToggleTask() {
    return state.tasks.map((task) => {
      return task.id == taskID
        ? { ...task, isCompleted: !task.isCompleted }
        : task;
    });
  }

  function handleAddTask() {
    return [
      ...state.tasks,
      {
        id: uuidv4(),
        title: taskTitle.trim(),
        body: "",
        isCompleted: false,
      },
    ];
  }

  function handleEditTask() {
    return state.tasks.map((task) => {
      return task.id == state.selectedTaskID
        ? {
            ...task,
            title: taskTitle,
            body: taskBody,
          }
        : task;
    });
  }

  function handleDeleteTask() {
    return state.tasks.filter((task) => task.id != state.selectedTaskID);
  }

  switch (type) {
    case SET_TASK_ID:
      return {
        ...state,
        selectedTaskID: taskID,
        selectedTaskAction: taskAction,
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: handleToggleTask(),
      };
    case ADD_TASK:
      return { ...state, tasks: handleAddTask() };
    case EDIT_TASK:
      return { ...state, tasks: handleEditTask() };
    case DELETE_TASK:
      return { ...state, tasks: handleDeleteTask() };

    default:
      return state;
  }
};

export const toggleTask = (taskIdValue) => {
  return {
    type: TOGGLE_TASK,
    payload: {
      taskID: taskIdValue,
    },
  };
};

export const addTask = (taskTitleValue) => {
  return {
    type: ADD_TASK,
    payload: {
      taskTitle: taskTitleValue,
    },
  };
};

export const editTask = (taskTitleValue, taskBodyValue) => {
  return {
    type: EDIT_TASK,
    payload: {
      taskTitle: taskTitleValue,
      taskBody: taskBodyValue,
    },
  };
};

export const deleteTask = () => {
  return {
    type: DELETE_TASK,
  };
};

export const setTaskID = (taskIdValue, taskActionValue) => {
  return {
    type: SET_TASK_ID,
    payload: { taskID: taskIdValue, taskAction: taskActionValue },
  };
};
