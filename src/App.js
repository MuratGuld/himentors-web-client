import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import history from "./utils/history";
import initFontAwesome from "./utils/initFontAwesome";
import { Container } from "reactstrap";
import Loading from "./components/Loading";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { Landing } from "./views/landing/Landing";
import { About } from "./views/about/About";
import { Profile } from "./views/profile/Profile";
import { WeeklyView } from "./views/weekly_view/WeeklyView";
import { AdminGeneralView } from "./views/groups/AdminGeneralView";
import { GroupSettings } from "./views/groups/GroupSettings";
import { GeneralView } from "./views/general_view/GeneralView";
import Home from "./views/home/Home";
import "./App.css";

initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1">
          <Routes>
            <Route path="/" exact element={<Landing />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/profile" element={<Profile />} />
            <Route path="/home/weekly_view" element={<WeeklyView />} />
            <Route path="/home/general_view" element={<GeneralView />} />
            <Route path="/home/groups" element={<AdminGeneralView />} />
            <Route path="/home/groups_settings" element={<GroupSettings />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
