import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box flex={2}>
      <Box sx={{ position: "fixed" }}>
        <List>
          <Link to="/profile">
            <ListItem disablePadding>
              <ListItemButton href="/profile">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/profile/weekly_view">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary="Weekly View" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/profile/general_view">
            <ListItem disablePadding>
              <ListItemButton href="#">
                <ListItemIcon>
                  <CalendarTodayIcon />
                </ListItemIcon>
                <ListItemText primary="General View" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/profile/group_settings">
            <ListItem disablePadding>
              <ListItemButton href="#">
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Group Settings" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
