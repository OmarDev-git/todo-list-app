

import { useContext } from "react";

import {TasksContext} from "../contexts/TasksContext";


// My Custom hook for Tasks Context
export const useTasks = () => useContext(TasksContext);