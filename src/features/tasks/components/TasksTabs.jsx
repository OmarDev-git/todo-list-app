// React
import { useState } from "react";

// Third Party
import { Tabs } from "@heroui/react";

// My Components
import TasksList from "./TasksList.jsx";

// Data
import { colorList } from "../../../data/colorsData.js";

export default function TasksTabs({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  // tabs props:
  // id,name,color(optional)
  return (
    <div>
      <Tabs
        className="w-full"
        selectedKey={selectedTab}
        onSelectionChange={setSelectedTab}
      >
        <Tabs.ListContainer >
          <Tabs.List aria-label="tabs of tasks types" className="rounded-lg" >
            {/* Generate Tabs Title */}
            {tabs.map((tab) => {
              // Get Tabs & Indicator Styles
              const tabStyles =
                tab.color && colorList[tab.color]
                  ? colorList[tab.color].tabText
                  : "";
              const tabIndicatorStyles =
                tab.color && colorList[tab.color]
                  ? colorList[tab.color].tabIndicator
                  : "";

              return (
                <Tabs.Tab key={tab.id} id={tab.id} className={tabStyles}>
                  {tab.name}
                  <Tabs.Indicator
                    className={tabIndicatorStyles + " rounded-lg"}
                  />
                </Tabs.Tab>
              );
            })}
          </Tabs.List>
        </Tabs.ListContainer>
        {/* Generate Tabs Content */}
        <Tabs.Panel dir="rtl" id={selectedTab}>
          {/* The Tasks */}
          <TasksList tapType={selectedTab} />
        </Tabs.Panel>{" "}
      </Tabs>
    </div>
  );
}
