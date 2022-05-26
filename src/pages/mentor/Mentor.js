import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Footer } from "../../components/footer/Footer";
import { MainCard } from "../../components/mentor/MainCard";
import { Navbar } from "../../components/mentor/Navbar";
import Sidebar from "../../components/Sidebar";

const useStyles = makeStyles((theme) => ({
  flexStart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: 453,
  },
}));

export const Mentor = () => {
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
          {/* table */}
          <Box width="100%">
            <MainCard />
          </Box>
        </Stack>
      </Box>
      <Footer />
    </React.Fragment>
  );
};
