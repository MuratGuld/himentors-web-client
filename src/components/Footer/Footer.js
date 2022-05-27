import React from "react";
import { Box, lineHeight } from "@mui/system";
import styled from "@emotion/styled";

export const Footer = () => {
  const FooterBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#b70202",
    color: "white",
  });

  return (
    <FooterBox>
      <h5>All Rights Reserved</h5>
    </FooterBox>
  );
};
