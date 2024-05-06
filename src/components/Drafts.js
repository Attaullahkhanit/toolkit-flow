import React, { useState } from "react";
import "./styles.css";
import Dashboard from "../page/Dashboard/Dashboard";
import { Tab, Tabs } from "@mui/material";
import AnnouncementTable from "./AnnoucementTable/AnnouncementTable";
import { useNavigate } from "react-router-dom";

function Drafts() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setActiveTab((prevTab) => Math.max(prevTab - 1, 0));
    } else if (direction === "right") {
      setActiveTab((prevTab) => Math.min(prevTab + 1, 4));
    }
  };

  return (
    <Dashboard>
      <div className="tabs-container">
        <div className="tabs">
          <button
            class="arrow-button left-arrow"
            onClick={() => handleArrowClick("left")}
          >
            &lt;
          </button>
          <div
            className={`tab ${activeTab === 0 ? "active" : ""}`}
            onClick={() => handleTabClick(0)}
          >
            Announcement
          </div>
          <div
            className={`tab ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            Giveaways
          </div>
          <div
            className={`tab ${activeTab === 2 ? "active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            Engagement Questions
          </div>
          <div
            className={`tab ${activeTab === 3 ? "active" : ""}`}
            onClick={() => handleTabClick(3)}
          >
            Promotions
          </div>
          <div
            className={`tab ${activeTab === 4 ? "active" : ""}`}
            onClick={() => handleTabClick(4)}
          >
            Giveaways
          </div>
          <button
            class="arrow-button right-arrow"
            onClick={() => handleArrowClick("right")}
          >
            &gt;
          </button>
          <button onClick={()=> navigate('/AddNew')} className="add-button">Add New</button>
        </div>

        <div className="content">
          {activeTab === 0 && (
            <p>
              <AnnouncementTable />
            </p>
          )}
          {activeTab === 1 && <p>Tab content for Giveways</p>}
          {activeTab === 2 && <p>Tab content for Engagement Qeuestions</p>}
          {activeTab === 3 && <p>Tab content for Promotions</p>}
          {activeTab === 4 && <p>Tab content for Giveaways</p>}
        </div>
      </div>
    </Dashboard>
  );
}

export default Drafts;
