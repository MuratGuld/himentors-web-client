import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useStyles from "./admin_styles";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

export const MainCard = () => {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 400, margin: "25px auto 15px 100px" }}>
      <CardHeader
        title="Fullstack Web Developing Course"
        subheader="Javascript Module"
        classes={{ subheader: classes.subheader }}
        className={classes.cardHeaderStyled}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          color="text.primary"
        >
          Information About The Module
        </Typography>
        <Divider />
        <Typography variant="body2" color="text.secondary"></Typography>
        <Typography variant="body2" color="text.secondary">
          Number of Students : 32
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Number of Mentors : 12
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Number of Groups : 12
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Current Week : Week 3
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Module Duration : 6 Weeks
        </Typography>
      </CardContent>
      <CardActions className={classes.alignRight}>
        <Link to="/admin/groups">
          <Button variant="contained" size="small" color="error">
            Groups
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
