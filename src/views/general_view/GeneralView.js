import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { GeneralTable } from "../../components/general_view/GeneralTable";

const useStyles = makeStyles((theme) => ({
  flexStart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "50px auto",
  },
}));

export const GeneralView = () => {
  const classes = useStyles();

  return (
    <Box className={classes.flexStart}>
      <GeneralTable />
    </Box>
  );
};
