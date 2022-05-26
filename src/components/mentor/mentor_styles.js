import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  userTypography: {
    cursor: "default",
    textAlign: "center",
  },
  marginLeft: {
    marginTop: 2,
    paddingLeft: 43,
  },
  logoStyled: {
    width: 150,
    cursor: "pointer",
    backgroundColor: "white ",
    borderRadius: 5,
    padding: 2,
    display: { xs: "none", sm: "block" },
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardHeaderStyled: {
    backgroundColor: "#b70202",
    color: "#ffffee",
    height: 45,
  },
  subheader: {
    color: "#ffffee",
    fontSize: "smaller",
    marginTop: 5,
  },
}));

export default useStyles;
