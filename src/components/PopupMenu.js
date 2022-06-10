import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import useStyles from "../../src/useStyles";

export const PopupMenu = ({ open, setOpen }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <Menu
      id="account-menu"
      open={open}
      onClose={(e) => setOpen(false)}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 5,
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      {/* cursor: context-menu */}
      <Box className={classes.userTypography}>
        <Typography variant="subtitle1">
          {user && user.given_name} {user && user.family_name}
        </Typography>
        <Typography variant="subtitle2" p={1}>
          {user && user.email}
        </Typography>
      </Box>
      <Divider />
      <MenuItem className={classes.marginToButton}>
        <Link to="/home/profile">
          <Button
            variant="contained"
            color="error"
            size="small"
            className={classes.widthToButton}
          >
            Profile
          </Button>
        </Link>
      </MenuItem>
      <MenuItem className={classes.marginToButton}>
        <Link to="/">
          <Button
            variant="contained"
            color="error"
            size="small"
            className={classes.widthToButton}
            onClick={() => logoutWithRedirect()}
          >
            Log Out
          </Button>
        </Link>
      </MenuItem>
    </Menu>
  );
};
