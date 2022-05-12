import React, { useState } from "react"; // rcfe
import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  Divider,
  ListItemIcon,
} from "@mui/material";
import { Box } from "@mui/system";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../components/logo.png";
import "./Navbar.css";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

function Navbar() {
  const [open, setOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#b70202",
    alignItems: "center",
  });

  const Icons = styled(Box)({
    display: "flex",
    gap: 5,
  });

  const Search = styled("div")({
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "5px 15px",
    width: "40%",
  });

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Icons>
          <img
            src={logo}
            alt="himentors"
            width={150}
            style={{
              backgroundColor: "white ",
              borderRadius: 5,
              padding: 2,
              display: { xs: "none", sm: "block" },
            }}
          />
          <DeveloperModeIcon sx={{ display: { xs: "block", sm: "none" } }} />
        </Icons>
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="success">
            <EmailIcon color="white" fontSize="large" />
          </Badge>
          <Badge badgeContent={2} color="success">
            <NotificationsIcon color="white" fontSize="large" />
          </Badge>
          <Avatar
            sx={{ width: 33, height: 33 }}
            alt="User Profile"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            onClick={(e) => setOpen(!open)}
          />
        </Icons>
      </StyledToolbar>
      {/* Pop up user Menu  */}
      <Menu
        id="account-menu"
        open={open}
        onClose={(e) => setOpen(false)}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 5.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 27,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "bottom" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
