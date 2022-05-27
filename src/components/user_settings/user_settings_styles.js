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
    height: 10,
  },
  dividerStyled: {
    backgroundColor: "rgb(255, 0, 0,0.3)",
    marginBottom: 5,
  },
  typographyStyled: {
    color: "#d32f2f",
    fontWeight: "600",
  },
}));

export default useStyles;
