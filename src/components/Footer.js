import React from "react";
import { Box, lineHeight } from "@mui/system";
import styled from "@emotion/styled";
import useStyles from "../../src/useStyles";

export const Footer = () => {
  const FooterBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b70202",
    color: "white",
    height: 50,
    fontSize: 12,
    paddingTop: 16,
  });

  return (
    <FooterBox>
      <p>All Rights Reserved</p>
    </FooterBox>
  );
};
