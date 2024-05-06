import { Grid } from "@mui/material";
import "./styles.css";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Sidebar from "../../components/Sidebar/Sidebar";

function Dashboard(props) {
  return (
    <>
      <Grid container className="container-gallery">
        {/* Sidebar */}
        <Grid item xs={3} className="left-side-bar">
          <Sidebar />
        </Grid>
        {/* Right Side Contaner */}
        <Grid item xs={9} className="right-side-section">
          <div className="top-bar">
            <div className="title">
              <h2>DRAFT</h2>
            </div>
            <div className="right-top-bar">
              <div className="search-container">
                <button type="button" className="search-button">
                  <SearchIcon />
                </button>
                <input type="text" placeholder="Search" />
              </div>
              <div className="notification-container">
                <button type="button" className="notification-button">
                  <NotificationsNoneIcon />
                </button>
              </div>
              <div class="centered-container">
                <div class="robotic-content">
                  <div class="robotic-icon">
                    <AccountCircleIcon />
                  </div>
                  <div class="robotic-name">Mike Males</div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-container">{props.children}</div>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
