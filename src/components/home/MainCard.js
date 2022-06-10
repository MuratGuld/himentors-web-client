import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import useStyles from "../../useStyles";
import CardHeader from "@mui/material/CardHeader";
import { SummaryTable } from "./SummaryTable";
import { Link } from "react-router-dom";

export const MainCard = () => {
  const classes = useStyles();

  return (
    <Card sx={{ minWidth: 500 }}>
      <CardHeader
        title="Javascript Module"
        subheader="Fullstack Web Developing Course"
        classes={{ subheader: classes.subheader }}
        className={classes.cardHeaderStyled}
      />
      <CardContent>
        {/* summary table */}
        <SummaryTable />
      </CardContent>
      <CardActions className={classes.alignRight}>
        <Link to="/home/weekly_view">
          <Button variant="contained" size="small" color="error" fullWidth>
            Go to Weekly View
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
