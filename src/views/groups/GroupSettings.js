import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { GroupListCard } from "../../components/groups/GroupListCard";

const useStyles = makeStyles((theme) => ({
  flexStart: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: 400,
    marginTop: 70,
    marginLeft: 120,
  },
}));

export const GroupSettings = () => {
  const classes = useStyles();

  return (
    <Box className={classes.flexStart}>
      <GroupListCard />
    </Box>
  );
};
