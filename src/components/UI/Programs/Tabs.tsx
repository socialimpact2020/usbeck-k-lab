"use client";

import { useState } from "react";

interface ITabs {
  tabs: string[];
}

export default function Tabs({ tabs }: ITabs) {
  const [selectedTab, setSelectedTab] = useState("Basic");

  const onChangeTab = (tabName: string) => {
    setSelectedTab(tabName);
  };
  return (
    <div role="tablist" className="tabs tabs-bordered mb-10">
      {tabs.map((tab) => (
        <a
          role="tab"
          className={`text-lg tab ${selectedTab === tab ? "tab-active" : ""}`}
          onClick={() => onChangeTab(tab)}
          key={tab}
        >
          {tab}
        </a>
      ))}
    </div>
  );
}
