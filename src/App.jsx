// Third Party
import { Toast } from "@heroui/react";

// My Providers
import { TasksProvider } from "./features/tasks/contexts/TasksProvider";

// My Components
import TasksCard from "./features/tasks/components/TasksCard";

import DialogueRouter from "./features/tasks/components/DialogueRouter";

export default function App() {
  return (
    <>
      <main className="flex flex-col gap-4 justify-center items-center w-full p-4 md:p-6 bg-slate-900 min-h-screen ">
        <TasksProvider>
          {/* The Main Content */}
          <TasksCard />

          {/* Show Dialogue in need  */}
          <DialogueRouter />
        </TasksProvider>

        {/* Global toast notifications */}
        <Toast.Provider
          placement="bottom start"
          width={170}
          maxVisibleToasts={2}
        />
      </main>
    </>
  );
}
