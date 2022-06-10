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
import useStyles from "../../useStyles";
import PersonIcon from "@mui/icons-material/Person";

export const FormCard = () => {
  const classes = useStyles();

  return (
    <Card sx={{ width: 450}}>
      <CardHeader title="My Profile" className={classes.cardHeaderStyled} />
      <CardContent>
        {/* Form Box */}
        <FormBox />
      </CardContent>
    </Card>
  );
};
