import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";
import { AppBar, Stack, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import himentorsLogo from "../assets/logos/himentorsLogo.png";
import CodeIcon from "@mui/icons-material/Code";
import useStyles from "../useStyles";
import { NavLink as RouterNavLink } from "react-router-dom";
import { PopupMenu } from "./PopupMenu";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import * as userService from "../service/user.service";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#b70202",
  alignItems: "center",
});

const Icons = styled(Box)({
  display: "inline-flex",
  gap: 5,
});

const WhiteButton = styled(Button)({
  marginRight: "5px",
  backgroundColor: "white",
  color: "#d32f2f",
  border: "none",
  boxShadow: "1px 1px 10px 1px rgba(0, 0, 0, 0.3)",
  "&:hover": {
    border: "none",
    backgroundColor: "#ebebeb",
  },
});

export const NavBar = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [anchorEl, setAnchorEl] = useState(null);
  const dropdownOpen = Boolean(anchorEl);
  const [role, setRole] = useState("");
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleDropdown = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  useEffect(() => {
    const checkUser = async (pUser) => {
      const status = await userService.checkAuthenticatedUser(pUser);

      if (!status.permitted) {
        logoutWithRedirect();
      } else {
        setRole(status.role);
      }
    };

    if (isAuthenticated) {
      checkUser(user);
    }
  }, [isAuthenticated]);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {/* himentors logo */}
        <Icons>
          <img
            className={classes.logoStyled}
            src={himentorsLogo}
            alt="himentors"
          />
          <CodeIcon sx={{ display: { xs: "block", sm: "none" } }} />
        </Icons>
        {/* Buttons */}
        <Box>
          {/* Before Login */}
          {!isAuthenticated && (
            <>
              <Link to="/about">
                <WhiteButton variant="outlined">About</WhiteButton>
              </Link>
              <Link to="/home">
                <Button
                  onClick={() => loginWithRedirect()}
                  variant="contained"
                  color="error"
                >
                  Login
                </Button>
              </Link>
            </>
          )}
          {/* After Login */}
          {isAuthenticated && role == "mentor" && (
            <>
              <Link to="/home/general_view">
                <Button variant="contained" color="error" sx={{ ml: 0.5 }}>
                  General View
                </Button>
              </Link>
              <Link to="/home/weekly_view">
                <Button variant="contained" color="error" sx={{ ml: 0.5 }}>
                  Weekly View
                </Button>
              </Link>
              <Link to="/home">
                <Button variant="contained" color="error" sx={{ ml: 0.5 }}>
                  Home
                </Button>
              </Link>
            </>
          )}
          {isAuthenticated && role == "admin" && (
            <>
              <Box sx={{ display: "inline" }}>
                <Button
                  id="basic-button"
                  aria-controls={dropdownOpen ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen ? "true" : undefined}
                  onClick={handleDropdown}
                  variant="contained"
                  color="error"
                  sx={{ ml: 0.5 }}
                >
                  GROUPS
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={dropdownOpen}
                  onClose={handleDropdownClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  sx={{ color: "red" }}
                >
                  <Link to="/home/groups">
                    <MenuItem
                      onClick={handleDropdownClose}
                      sx={{ color: "#d32f2f", paddingX: 1.4 }}
                    >
                      <GroupsIcon sx={{ marginRight: 1 }} />
                      General View
                    </MenuItem>
                  </Link>
                  <Link to="/home/groups_settings">
                    <MenuItem
                      onClick={handleDropdownClose}
                      sx={{ color: "#d32f2f", paddingX: 1.4 }}
                    >
                      <SettingsIcon sx={{ marginRight: 1 }} /> Settings
                    </MenuItem>
                  </Link>
                </Menu>
              </Box>
              <Link to="/home">
                <Button variant="contained" color="error" sx={{ ml: 0.5 }}>
                  Home
                </Button>
              </Link>
            </>
          )}
          {isAuthenticated && (
            <Icons>
              <button className="user-button" onClick={(e) => setOpen(!open)}>
                {user.given_name ? user.given_name[0] : " "}
              </button>
            </Icons>
          )}
        </Box>
      </StyledToolbar>
      {/* Pop up menu */}
      <PopupMenu open={open} setOpen={setOpen} />
    </AppBar>
  );
};
