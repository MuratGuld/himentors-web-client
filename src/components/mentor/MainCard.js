import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useStyles from "./mentor_styles";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { SummaryTable } from "./SummaryTable";
import { Link } from "react-router-dom";

export const MainCard = () => {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 400, margin: "15px auto 15px 100px" }}>
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
        <Link to="/profile/weekly_view">
          <Button variant="contained" size="small" color="error">
            Weekly View
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
