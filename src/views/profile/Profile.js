import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { FormCard } from "../../components/profile/FormCard";

const useStyles = makeStyles((theme) => ({
  flexStart: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth:400,
    marginTop:70,  
    marginLeft:120,  
  },
}));

export const Profile = () => {
  const classes = useStyles();

  return (
    <Box className={classes.flexStart}>
      <FormCard />
    </Box>
  );
};
