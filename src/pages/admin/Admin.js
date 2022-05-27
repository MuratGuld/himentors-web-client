import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Footer } from "../../components/footer/Footer";
import { MainCard } from "../../components/admin/MainCard";
import { Navbar } from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";

const useStyles = makeStyles((theme) => ({
  flexStart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    minHeight: 453,
  },
}));

export const Admin = () => {
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
