import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import homepageLogo from "../../assets/logos/homepageLogo.png"

export const Landing = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      minHeight={410}
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
  );
};
