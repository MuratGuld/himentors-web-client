import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import aboutusLogo from "../../assets/logos/aboutusLogo.png";

export const About = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      minHeight={410}
      mt={6}
    >
      <Box width={560}>
        <Typography variant="h4" mb={2} mt={6}>
          About Us
        </Typography>
        <Typography variant="subtitle1">
          This application has been prepared within the scope of the activities
          of the HiCoders association, which was established in 2020 by computer
          scientists and people who are interested in IT and have immigration
          experience. The application is a final project of the HiCoders
          Fullstack Web Programming course. With this project, it is aimed to
          perform HiCoders Mentoring activities more effectively on a central
          platform.
        </Typography>
      </Box>
      <Box>
        <img src={aboutusLogo} alt="about_us_image" width={550} />
      </Box>
    </Stack>
  );
};
