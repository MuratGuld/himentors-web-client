import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { WeeklyTable } from "../../components/weekly_view/WeeklyTable";

const useStyles = makeStyles((theme) => ({
  flexStart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 453,
    maxWidth:800,
    marginLeft:100
  },
}));

export const WeeklyView = () => {
  const classes = useStyles();

  return (
        <Box className={classes.flexStart}>
            <WeeklyTable />
        </Box>
  );
};
