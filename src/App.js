import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Admin } from "./pages/admin/Admin";
import { GeneralView } from "./pages/general_view/GeneralView";
import { GroupSettings } from "./pages/group_settings/GroupSettings";
import { Landing } from "./pages/landing/Landing";
import { Mentor } from "./pages/mentor/Mentor";
import { UserSettings } from "./pages/user_settings/UserSettings";
import { WeeklyView } from "./pages/weekly_view/WeeklyView";
import { Groups } from "./pages/groups/Groups";
import { Statistics } from "./pages/statistics/Statistics";

function App() {
  // Renk opsiyonlari
  // #e9182b
  // #cc0000
  // #b70202 ok
  // #5e5e5e gray

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/profile" element={<Mentor />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile/user_settings" element={<UserSettings />} />
          <Route path="/profile/weekly_view" element={<WeeklyView />} />
          <Route path="/profile/general_view" element={<GeneralView />} />
          <Route path="/profile/group_settings" element={<GroupSettings />} />
          <Route path="/admin/groups" element={<Groups />} />
          <Route path="/admin/statistics" element={<Statistics />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
