import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

export const Sidebar = () => {
  return (
    <div>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="denem" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};
