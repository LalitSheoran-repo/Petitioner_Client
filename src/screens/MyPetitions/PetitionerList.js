import React , {useState} from "react";
import Signed from "./petitionTabs/SignedTab";
import Started from "./petitionTabs/StartedTab";
import { MdLocationOn } from "react-icons/md";

import './petitionerList.css'
const Mypetitions = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
        setActiveTab("tab1");
      };
      const handleTab2 = () => {
        setActiveTab("tab2");
      };
     
  return (
      <div className="topmost-heading">
    <div className="Mypetition">
        <div className="Petitionername">
      <h1 >Nirav Mehta</h1>
      <p className="location"><MdLocationOn/>India</p>
      <button className="editprofile">Edit Profile</button>
      </div>
      <ul className="nav">
  <li
    className={activeTab === "tab1" ? "active" : ""}
    onClick={handleTab1}
  >
    Started
  </li>
  <li
    className={activeTab === "tab2" ? "active" : ""}
    onClick={handleTab2}
  >
    Signed
  </li>
 
</ul>
<hr className="tag"></hr>

    </div>
    <div className="outlet">
      { (activeTab === "tab1")? 
        <Started />:<Signed/>}
      </div>
    </div>
    
  );
};
export default Mypetitions;