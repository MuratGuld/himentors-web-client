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

const Sidebar = () => {
  return (
    <Box flex={2}>
      <Box sx={{ position: "fixed" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton href="#">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#">
              <ListItemIcon>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText primary="Weekly View" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#">
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary="General View" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
