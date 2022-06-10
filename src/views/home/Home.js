import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MainCard } from "../../components/home/MainCard";
import Loading from "../../components/Loading";
import { AdminMainCard } from "../../components/home/AdminMainCard";
import * as userService from "../../service/user.service";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  flexStart: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 110,
    marginTop: 25,
  },
}));

export const Home = () => {
  const classes = useStyles();

  const { user, isAuthenticated } = useAuth0();
  const [role, setRole] = useState("");

  useEffect(() => {
    const setUserRole = async (pUser) => {
      const status = await userService.checkAuthenticatedUser(pUser);

      if (status.permitted) {
        setRole(status.role);
      }
    };

    setUserRole(user);
  }, []);

  return (
    <Box className={classes.flexStart}>
      {role === "mentor" && <MainCard />}
      {role === "admin" && <AdminMainCard />}
    </Box>
  );
};

export default withAuthenticationRequired(Home, {
  onRedirecting: () => <Loading />,
});
