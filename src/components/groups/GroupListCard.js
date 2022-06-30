import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import React from "react";
import { GroupListBox } from "./GroupListBox";
import useStyles from "../../useStyles";

export const GroupListCard = () => {
  const classes = useStyles();

  return (
    <Card sx={{ width: 450 }}>
      <CardHeader title="Groups" className={classes.cardHeaderStyled} />
      <CardContent>
        {/* Box */}
        <GroupListBox />
      </CardContent>
    </Card>
  );
};
