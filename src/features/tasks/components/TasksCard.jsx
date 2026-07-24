
// Third Party
import { Card } from "@heroui/react";
// My Components
import Title from "./Title";
import TasksTabs from "./TasksTabs";
import TaskInput from "./TaskInput";

// Data
import { defaultTabs } from "../../../data/tabsData";

export default function TasksCard() {
  return (
    <Card className="w-full max-w-xl shadow-lg items-center pb-10 ring-2 ring-violet-500">
      <Card.Header className="flex flex-col gap-8 w-full px-4  ">
        {/* The Title */}
        <Title title="مهامي" />

        {/* The Tabs */}
        <TasksTabs tabs={defaultTabs} />
      </Card.Header>

      <Card.Footer className="w-full px-4 ">
        {/* Task Input */}
        <TaskInput />
      </Card.Footer>
    </Card>
  );
}
