import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/mentor/Navbar";
import Sidebar from "../../components/mentor/Sidebar";
import { FormCard } from "../../components/user_settings/FormCard";

const useStyles = makeStyles((theme) => ({
  flexStart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    minHeight: "453px",
  },
}));

export const UserSettings = () => {
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
            <FormCard />
          </Box>
        </Stack>
      </Box>
      <Footer />
    </React.Fragment>
  );
};
