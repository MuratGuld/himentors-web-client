import React, { useState } from "react";
import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import himentorsLogo from "../../assets/logos/himentorsLogo.png";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import useStyles from "./mentor_styles";
import { PopupMenu } from "./PopupMenu";

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

export const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {/* logo */}
        <Icons>
          <img
            className={classes.logoStyled}
            src={himentorsLogo}
            alt="himentors"
          />
          <DeveloperModeIcon sx={{ display: { xs: "block", sm: "none" } }} />
        </Icons>
        {/* user button */}
        <Icons>
          <button className="user-button" onClick={(e) => setOpen(!open)}>
            M
          </button>
        </Icons>
      </StyledToolbar>
      {/* Pop up Menu  */}
      <PopupMenu open={open} setOpen={setOpen} />
    </AppBar>
  );
};
