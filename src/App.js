import React from "react";
import {
  Button,
  Container,
  Divider,
  getRadioUtilityClass,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Box } from "@mui/system";
import Navbar from "./components/Navbar";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";

function App() {
  // #e9182b
  // #cc0000 
  // #b70202 ok
  // #5e5e5e gray

  return (
    <React.Fragment>
      <Navbar />
      <Stack direction="row" justifyContent="space-evenly">
        <Sidebar flex={1}/>
        <Feed flex={2}/>
        <Rightbar flex={1}/>
      </Stack>
    </React.Fragment>
  );
}
export default App;
