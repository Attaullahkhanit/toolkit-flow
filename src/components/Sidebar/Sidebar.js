import { ListItem } from "@mui/material";
import "./styles.css";
import React from "react";
import Zlogo from "../../Assets/zlogo.png";
import HomeIc from "../../Assets/homeic.png";
import Plan from "../../Assets/plan.png";
import Generator from "../../Assets/generatoric.png";
import Calendar from "../../Assets/calendar.png";
import RightArrow from "../../Assets/rightarrow.png";

import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const menuItems = [
    {
      name: "Generator Content",
      iconSrc: Generator,
      navigatTo: () => navigate("/generator"),
    },
    {
      name: "Calendar",
      iconSrc: Calendar,
      navigatTo: () => navigate("/calendar"),
    },
    { name: "Draft", iconSrc: Generator, navigatTo: () => navigate("/draft") },
    {
      name: "Settings",
      iconSrc: Calendar,
      navigatTo: () => navigate("/settings"),
    },
  ];
  return (
    <>
      <div className="menu">
        <div className="top-menu-item">
          <div className="logo">
            <img src={Zlogo} alt="ZLogo" />
          </div>
          <ListItem
            onClick={() => navigate("/home")}
            className="menu-list-item"
          >
            <div className="menu-item-breakfast">
              <div className="icon">
                <img src={HomeIc} alt="HomeIcon" />
              </div>
              <div>Home</div>
            </div>
          </ListItem>
          <div className="divider"></div>
          {menuItems.map((menuItem, index) => (
            <ListItem
              onClick={menuItem.navigatTo}
              key={index}
              className="List-Item"
            >
              <div className="menu-item-breakfast">
                <div className="icon">
                  <img src={menuItem.iconSrc} alt="icon" />
                </div>
                <div className="name">{menuItem.name}</div>
              </div>
            </ListItem>
          ))}
          <div className="divider"></div>
        </div>
        <div className="bottom-menu-item">
          <ListItem
            onClick={() => navigate("/plan")}
            className="menu-list-item"
          >
            <div className="menu-item-breakfast">
              <div className="icon">
                <img src={Plan} alt="Plan" />
              </div>
              <div>Plan Name</div>
            </div>
          </ListItem>
          <ListItem className="menu-list-items">
            <div className="menu-item-credit">
              <div class="middle">
                <div class="bar-container">
                  <div class="bar-4"></div>
                </div>
              </div>
              <div className="credit">
                <div>CreditsUsed</div>
                <div>14/32</div>
              </div>
            </div>
          </ListItem>
          <ListItem
            onClick={() => navigate("/manage")}
            className="menu-list-item"
          >
            <div className="menu-item-manage">
              <div className="icon">Manage Plan</div>
              <div>
                <img src={RightArrow} alt="rightarrow" />
              </div>
            </div>
          </ListItem>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
