"use client";

import { useState } from "react";

interface ITab {
  tabLabel: string;
  tabValue: string;
}
interface ITabs {
  tabs: ITab[];
  selectedTab: string;
  setSelectedTab: (tabValue: string) => void;
}

export default function Tabs({ tabs, selectedTab, setSelectedTab }: ITabs) {
  const onChangeTab = (tabName: string) => {
    setSelectedTab(tabName);
  };
  return (
    <div role="tablist" className="tabs tabs-bordered mb-10">
      {tabs.map((tab) => (
        <a
          role="tab"
          className={`text-lg tab ${
            selectedTab === tab.tabValue ? "tab-active" : ""
          }`}
          onClick={() => onChangeTab(tab.tabValue)}
          key={tab.tabValue}
        >
          {tab.tabLabel}
        </a>
      ))}
    </div>
  );
}
