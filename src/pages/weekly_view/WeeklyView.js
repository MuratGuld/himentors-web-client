import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Footer } from "../../components/footer/Footer";
import { MainCard } from "../../components/mentor/MainCard";
import { Navbar } from "../../components/mentor/Navbar";
import Sidebar from "../../components/mentor/Sidebar";
import { WeeklyTable } from "../../components/weekly_view/WeeklyTable";

const useStyles = makeStyles((theme) => ({
  flexStart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    minHeight: 453,
  },
  centered: {
    margin: "50px auto auto 100px",
  },
}));

export const WeeklyView = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box>
        {/* navbar */}
        <Navbar />
        {/* main */}
        <Stack className={classes.flexStart}>
          {/* left sidebar */}
          <Box width={250}>
            <Sidebar width={250} />
          </Box>
          {/* weekly table */}
          <Box className={classes.centered}>
            <WeeklyTable />
          </Box>
        </Stack>
      </Box>
      <Footer />
    </React.Fragment>
  );
};
