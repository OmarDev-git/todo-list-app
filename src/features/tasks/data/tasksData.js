//Third Party
import { v4 as uuidv4 } from "uuid";

// Retrieve stored tasks from localStorage or return an empty array
const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

export const defaultTasks =
  savedTasks.length > 0
    ? savedTasks
    : [
        {
          id: uuidv4(),
          title: "قراءة كتاب",
          body: "الانجاز قبل نهاية الشهر",
          isCompleted: false,
        },
      ];
