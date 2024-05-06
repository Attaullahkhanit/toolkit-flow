import React from "react";
import Dashboard from "../page/Dashboard/Dashboard";
import { useSelector } from "react-redux";
import ErrorBoundary from "./ErrorBoundry/ErrorBoundary";

function Manage() {
  const dataofsignup = useSelector();

  return (
    <ErrorBoundary>
      <Dashboard>
        <h3>Hello Testing Manage Page</h3>
      </Dashboard>
    </ErrorBoundary>
  );
}

export default Manage;
