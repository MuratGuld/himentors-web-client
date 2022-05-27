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
import React from "react";
import useStyles from "./user_settings_styles";

export const FormBox = () => {
  const classes = useStyles();
  const [gender, setGender] = React.useState("male");

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <>
      {/* Profile */}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "26ch", height:"55px" },
          width: "448px",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography className={classes.typographyStyled}>PROFILE</Typography>
        <Divider className={classes.dividerStyled} />
        <div>
          <TextField
            error
            id="outlined-error"
            label="First Name"
            defaultValue="Mert"
          />
          <TextField
            error
            id="outlined-error-helper-text"
            label="Last Name"
            defaultValue="Demir"
          />
        </div>
        <div>
          <TextField
            error
            id="filled-error"
            label="Email"
            defaultValue="mert.demir@hicoders.ch"
          />
          <FormControl sx={{ m: 1, width: "26ch" }} error>
            <InputLabel id="demo-simple-select-error-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-error-label"
              id="demo-simple-select-error"
              value={gender}
              label="Gender"
              onChange={handleGender}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.alignRight}>
          <Button variant="contained" color="error" size="small">
            Save
          </Button>
        </div>
      </Box>
      {/* Password */}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "26ch" },
          width: "448px",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography className={classes.typographyStyled}>PASSWORD</Typography>
        <Divider className={classes.dividerStyled} />
        <div>
          <TextField
            id="current-outlined-password-input"
            label="Current Password"
            type="password"
            error
          />
        </div>
        <div>
          <TextField
            id="new-outlined-password-input"
            label="New Password"
            type="password"
            error
          />
          <TextField
            id="again-outlined-password-input"
            label="New Password (again)"
            type="password"
            error
          />
        </div>
        <div className={classes.alignRight}>
          <Button variant="contained" color="error" size="small">
            Save
          </Button>
        </div>
      </Box>
    </>
  );
};
