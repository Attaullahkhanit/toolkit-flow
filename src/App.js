import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./page/NotFound";
import Drafts from "./components/Drafts";
import GenerateCont from "./components/GenerateCont";
import Home from "./components/Home";
import Calendar from "./components/Calendar";
import Settings from "./components/Settings";
import Plan from "./components/Plan";
import Manage from "./components/Manage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AddNew from "./components/AnnoucementTable/AddNew.js/AddNew";
import EditForm from "./components/AnnoucementTable/EditForm/EditForm";
import ErrorPage from "./page/ErrorPage";
import ErrorBoundary from "./components/ErrorBoundry/ErrorBoundary";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/draft" />} />
            <Route path="/draft" element={<Drafts />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/home" element={<Home />} />
            <Route path="/generator" element={<GenerateCont />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/manage" element={<ErrorBoundary><Manage /></ErrorBoundary>} />
            {/* crud operation */}
            <Route path="/AddNew" element={<AddNew />} />
            <Route path="/EditForm/:id" element={<EditForm/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
