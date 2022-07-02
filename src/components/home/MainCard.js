import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import useStyles from "../../useStyles";
import CardHeader from "@mui/material/CardHeader";
import { SummaryTable } from "./SummaryTable";
import { Link } from "react-router-dom";
import { ModuleContext } from "../../contexts/ModuleContext";

export const MainCard = () => {
  const classes = useStyles();
  const { activeModule } = React.useContext(ModuleContext);

  return (
    <Card sx={{ minWidth: 400 }}>
      <CardHeader
        title={`${activeModule.name} Module`}
        classes={{ subheader: classes.subheader }}
        className={classes.cardHeaderStyled}
      />
      <CardContent>
        {/* summary table */}
        <SummaryTable />
      </CardContent>
      <CardActions className={classes.alignRight}>
        <Link to="/home/general_view">
          <Button variant="contained" size="small" color="error" fullWidth>
            Go to General View
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
