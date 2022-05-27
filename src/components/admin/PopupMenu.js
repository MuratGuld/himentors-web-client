import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./admin_styles";

export const PopupMenu = ({ open, setOpen }) => {
  const classes = useStyles();

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
        <Typography variant="subtitle1" pb={1}>
          Mert Demir
        </Typography>
        <Typography variant="subtitle2" pb={1}>
          HiCoders Admin
        </Typography>
        <Typography variant="subtitle2" p={1}>
          mert.demir@hicoders.ch
        </Typography>
      </Box>
      <Divider />
      <MenuItem className={classes.marginToButton}>
        <Link to="/profile/user_settings">
          <Button
            variant="contained"
            color="error"
            size="small"
            className={classes.widthToButton}
          >
            Settings
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
          >
            Sign Out
          </Button>
        </Link>
      </MenuItem>
    </Menu>
  );
};
