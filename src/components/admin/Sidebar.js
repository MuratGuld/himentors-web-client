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
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box flex={2}>
      <Box sx={{ position: "fixed" }}>
        <List>
          <Link to="/admin">
            <ListItem disablePadding>
              <ListItemButton href="/admin">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/admin/groups">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GroupsIcon />
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/admin/statistics">
            <ListItem disablePadding>
              <ListItemButton href="#">
                <ListItemIcon>
                  <InsertChartIcon />
                </ListItemIcon>
                <ListItemText primary="Statistics" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
