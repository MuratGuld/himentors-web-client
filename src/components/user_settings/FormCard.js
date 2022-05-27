import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { FormBox } from "./FormBox";
import useStyles from "./user_settings_styles";
import PersonIcon from "@mui/icons-material/Person";

export const FormCard = () => {
  const classes = useStyles();

  return (
    <Card sx={{ width: 500, margin: "15px auto 15px 200px" }}>
      <CardHeader
        title="User Settings"
        className={classes.cardHeaderStyled}
      />
      <CardContent>
        {/* Form Box */}
        <FormBox />
      </CardContent>
    </Card>
  );
};
