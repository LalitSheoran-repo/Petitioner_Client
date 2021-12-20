import React , {useState} from "react";
import FeaturedTab from "./TabComponent/FeaturedTab";
import RecentTab from "./TabComponent/RecentTab";
import VictoryTab from "./TabComponent/VictoryTab";

import './TabComponent/tab.css'
import './TabComponent/mainstyle.css'

const BrowsePetition = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
        setActiveTab("tab1");
      };
      const handleTab2 = () => {
        setActiveTab("tab2");
      };
      const handleTab3 = () => {
        setActiveTab("tab3");
      };
  return (
      <div>
    <div className="Tabs">
      <h1 className="discoverpetition">Discover petition</h1>
      <ul className="nav">
  <li
    className={activeTab === "tab1" ? "active" : ""}
    onClick={handleTab1}
  >
    Featured
  </li>
  <li
    className={activeTab === "tab2" ? "active" : ""}
    onClick={handleTab2}
  >
    Recent
  </li>
  <li
    className={activeTab === "tab3" ? "active" : ""}
    onClick={handleTab3}
  >
    Victory
  </li>
</ul>

    </div>
    <div className="outlet">
      { (activeTab === "tab1")? 
        <FeaturedTab />:(activeTab === "tab2")?<RecentTab/>:<VictoryTab/>}
      </div>
    </div>
    
  );
};
export default BrowsePetition;