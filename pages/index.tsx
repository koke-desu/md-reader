import InputPage from "components/InputPage";
import NewStylePage from "components/NewStylePage";
import StandardPage from "components/StandardPage";
import { NextPage } from "next";
import React, { useState } from "react";

const pageTabs = ["Input", "Standard", "NewStyle"] as const;
type Tabs = typeof pageTabs[number];

const Index: NextPage = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>("Input");

  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="flex flex-col gap-8 items-center p-8 container">
        <nav className="flex flex-row items-center justify-center p-1 border w-1/3 border-gray-500 rounded-full shadow-md">
          {pageTabs.map((tab) => (
            <button
              key={`page-tab-${tab}`}
              className={`rounded-full flex-1 ${tab === selectedTab && "bg-gray-400"}`}
              onClick={() => {
                setSelectedTab(tab);
              }}
            >
              {tab}
            </button>
          ))}
        </nav>
        {selectedTab === "Input" && <InputPage />}
        {selectedTab === "Standard" && <StandardPage />}
        {selectedTab === "NewStyle" && <NewStylePage />}
      </div>
    </div>
  );
};

export default Index;
