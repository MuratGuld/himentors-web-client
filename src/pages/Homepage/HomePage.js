import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Footer } from "../../components/Footer/Footer";
import HomePageNavbar from "../../components/HomePageNavbar/HomePageNavbar";
import Rightbar from "../../components/Rightbar";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import homepageLogo from "../../assets/logos/homepageLogo.png";

export const HomePage = () => {
  return (
    <React.Fragment>
      <Box>
        <HomePageNavbar />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          height={453}
        >
          <Box width={400}>
            <Typography variant="h4" mb={2}>
              Let's succeed together
            </Typography>
            <Typography variant="h6">
              Our participants are more secure in the learning process with the
              professional and 24/7 support of their mentors.
            </Typography>
          </Box>
          <Box>
            <img src={homepageLogo} alt="hicoders_image" width={500} />
          </Box>
        </Stack>
      </Box>
      <Footer />
    </React.Fragment>
  );
};
