import { useAuth0 } from "@auth0/auth0-react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Button,
  Divider,
  Typography,
  Select,
} from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import useStyles from "../../useStyles";

export const FormBox = () => {
  const classes = useStyles();
  const [gender, setGender] = React.useState("male");
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography className={classes.typographyStyled}>First Name</Typography>
      <Typography>{user.given_name}</Typography>
      <Typography className={classes.typographyStyled}>Last Name</Typography>
      <Typography>{user.family_name}</Typography>
      <Typography className={classes.typographyStyled}>Email</Typography>
      <Typography>{user.email}</Typography>
    </React.Fragment>
  );
};
