import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  userTypography: {
    cursor: "default",
    textAlign: "center",
  },
  marginToButton: {
    marginTop: 2,
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
  widthToButton: {
    width: 150,
  },
  cardHeaderStyled: {
    backgroundColor: "#b70202",
    color: "#ffffee",
    height: 45,
  },
  subheader: {
    color: "#ffffee",
    marginTop: 5,
  },
}));

export default useStyles;
