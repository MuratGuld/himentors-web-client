import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // admin
  flexStart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 110,
    minHeight: 433,
  },
  userTypography: {
    cursor: "default",
    textAlign: "center",
  },
  marginToButton: {
    marginTop: 2,
  },
  widthToButton: {
    width: 170,
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardHeaderStyled: {
    backgroundColor: "#b70202",
    color: "#ffffee",
    height: 65,
  },
  subheader: {
    color: "#ffffee !important",
  },
  // weekly_table
  iconColoured: {
    cursor: "pointer",
    color: "#b70202",
  },
  fontWeight: {
    minWidth: 125,
    position: "sticky",
    left: 0,
    backgroundColor: "inherit",
  },
  // user_settings
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
  dividerStyled: {
    backgroundColor: "rgb(255, 0, 0,0.3)",
    marginBottom: 5,
  },
  typographyStyled: {
    color: "#d32f2f",
    fontWeight: "600",
    textDecoration: "underline",
  },
}));

export default useStyles;
