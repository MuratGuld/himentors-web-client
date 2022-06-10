import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MessageIcon from "@mui/icons-material/Message";
import RateReviewIcon from "@mui/icons-material/RateReview";
import useStyles from "../../useStyles";
import { Divider, Stack, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#b70202",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "white",
  //   "&:nth-of-type(odd)": {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    cursor: "default",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const GroupTables = ({ selectedGroup }) => {
  const classes = useStyles();

  if (selectedGroup == "Group 1") {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            {/* first thead row */}
            <TableRow>
              <StyledTableCell className={classes.fontWeight}>
                Group 1
              </StyledTableCell>
              <StyledTableCell align="center" colSpan={5}>
                Week 1
              </StyledTableCell>
              <StyledTableCell align="center" colSpan={5}>
                Week 2
              </StyledTableCell>
              <StyledTableCell align="center" colSpan={5}>
                Week 3
              </StyledTableCell>
            </TableRow>
            {/* second thead row */}
            <TableRow>
              <StyledTableCell className={classes.fontWeight}>
                Student
              </StyledTableCell>
              {/* Week 1 */}
              <StyledTableCell align="center">Homework 1</StyledTableCell>
              <StyledTableCell align="center">Homework 2</StyledTableCell>
              <StyledTableCell align="center">Main Session</StyledTableCell>
              <StyledTableCell align="center">Practice Session</StyledTableCell>
              <StyledTableCell align="center">Mentor Session</StyledTableCell>
              {/* Week 2 */}
              <StyledTableCell align="center">Homework 1</StyledTableCell>
              <StyledTableCell align="center">Homework 2</StyledTableCell>
              <StyledTableCell align="center">Main Session</StyledTableCell>
              <StyledTableCell align="center">Practice Session</StyledTableCell>
              <StyledTableCell align="center">Mentor Session</StyledTableCell>
              {/* Week 3  */}
              <StyledTableCell align="center">Homework 1</StyledTableCell>
              <StyledTableCell align="center">Homework 2</StyledTableCell>
              <StyledTableCell align="center">Main Session</StyledTableCell>
              <StyledTableCell align="center">Practice Session</StyledTableCell>
              <StyledTableCell align="center">Mentor Session</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* student */}
            <StyledTableRow>
              <StyledTableCell className={classes.fontWeight}>
                Ali Yilmaz
              </StyledTableCell>
              <StyledTableCell align="center">80</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">0</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">80</StyledTableCell>
              <StyledTableCell align="center">0</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center">80</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
            </StyledTableRow>
            {/* student */}
            <StyledTableRow>
              <StyledTableCell className={classes.fontWeight}>
                Mehmet Can
              </StyledTableCell>
              <StyledTableCell align="center">85</StyledTableCell>
              <StyledTableCell align="center">80</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">0</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">80</StyledTableCell>
              <StyledTableCell align="center">0</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center">0</StyledTableCell>
            </StyledTableRow>
            {/* student */}
            <StyledTableRow>
              <StyledTableCell className={classes.fontWeight}>
                Asli Deniz
              </StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">0</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">0</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else if (selectedGroup == "Group 2") {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            {/* first thead row */}
            <TableRow>
              <StyledTableCell className={classes.fontWeight}>
                Group 2
              </StyledTableCell>
              <StyledTableCell align="center" colSpan={5}>
                Week 1
              </StyledTableCell>
              <StyledTableCell align="center" colSpan={5}>
                Week 2
              </StyledTableCell>
              <StyledTableCell align="center" colSpan={5}>
                Week 3
              </StyledTableCell>
            </TableRow>
            {/* second thead row */}
            <TableRow>
              <StyledTableCell className={classes.fontWeight}>
                Student
              </StyledTableCell>
              {/* Week 1 */}
              <StyledTableCell align="center">Homework 1</StyledTableCell>
              <StyledTableCell align="center">Homework 2</StyledTableCell>
              <StyledTableCell align="center">Main Session</StyledTableCell>
              <StyledTableCell align="center">Practice Session</StyledTableCell>
              <StyledTableCell align="center">Mentor Session</StyledTableCell>
              {/* Week 2 */}
              <StyledTableCell align="center">Homework 1</StyledTableCell>
              <StyledTableCell align="center">Homework 2</StyledTableCell>
              <StyledTableCell align="center">Main Session</StyledTableCell>
              <StyledTableCell align="center">Practice Session</StyledTableCell>
              <StyledTableCell align="center">Mentor Session</StyledTableCell>
              {/* Week 3  */}
              <StyledTableCell align="center">Homework 1</StyledTableCell>
              <StyledTableCell align="center">Homework 2</StyledTableCell>
              <StyledTableCell align="center">Main Session</StyledTableCell>
              <StyledTableCell align="center">Practice Session</StyledTableCell>
              <StyledTableCell align="center">Mentor Session</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* student */}
            <StyledTableRow>
              <StyledTableCell className={classes.fontWeight}>
                Murat Tan
              </StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">80</StyledTableCell>
              <StyledTableCell align="center">70</StyledTableCell>
              <StyledTableCell align="center">0</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">70</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">80</StyledTableCell>
              <StyledTableCell align="center">0</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">70</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">0</StyledTableCell>
            </StyledTableRow>
            {/* student */}
            <StyledTableRow>
              <StyledTableCell className={classes.fontWeight}>
                Esra Pek
              </StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">70</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">80</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">0</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">80</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">80</StyledTableCell>
            </StyledTableRow>
            {/* student */}
            <StyledTableRow>
              <StyledTableCell className={classes.fontWeight}>
                Tarik Dogru
              </StyledTableCell>
              <StyledTableCell align="center">0</StyledTableCell>
              <StyledTableCell align="center">70</StyledTableCell>
              <StyledTableCell align="center">60</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">0</StyledTableCell>
              <StyledTableCell align="center">80</StyledTableCell>
              <StyledTableCell align="center">70</StyledTableCell>
              <StyledTableCell align="center">0</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">70</StyledTableCell>
              <StyledTableCell align="center">70</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">50</StyledTableCell>
              <StyledTableCell align="center">70</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else if (selectedGroup == "Group 3") {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            {/* first thead row */}
            <TableRow>
              <StyledTableCell className={classes.fontWeight}>
                Group 3
              </StyledTableCell>
              <StyledTableCell align="center" colSpan={5}>
                Week 1
              </StyledTableCell>
              <StyledTableCell align="center" colSpan={5}>
                Week 2
              </StyledTableCell>
              <StyledTableCell align="center" colSpan={5}>
                Week 3
              </StyledTableCell>
            </TableRow>
            {/* second thead row */}
            <TableRow>
              <StyledTableCell className={classes.fontWeight}>
                Student
              </StyledTableCell>
              {/* Week 1 */}
              <StyledTableCell align="center">Homework 1</StyledTableCell>
              <StyledTableCell align="center">Homework 2</StyledTableCell>
              <StyledTableCell align="center">Main Session</StyledTableCell>
              <StyledTableCell align="center">Practice Session</StyledTableCell>
              <StyledTableCell align="center">Mentor Session</StyledTableCell>
              {/* Week 2 */}
              <StyledTableCell align="center">Homework 1</StyledTableCell>
              <StyledTableCell align="center">Homework 2</StyledTableCell>
              <StyledTableCell align="center">Main Session</StyledTableCell>
              <StyledTableCell align="center">Practice Session</StyledTableCell>
              <StyledTableCell align="center">Mentor Session</StyledTableCell>
              {/* Week 3  */}
              <StyledTableCell align="center">Homework 1</StyledTableCell>
              <StyledTableCell align="center">Homework 2</StyledTableCell>
              <StyledTableCell align="center">Main Session</StyledTableCell>
              <StyledTableCell align="center">Practice Session</StyledTableCell>
              <StyledTableCell align="center">Mentor Session</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* student */}
            <StyledTableRow>
              <StyledTableCell className={classes.fontWeight}>
                Fatih Toktas
              </StyledTableCell>
              <StyledTableCell align="center">50</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">70</StyledTableCell>
              <StyledTableCell align="center">80</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">60</StyledTableCell>
              <StyledTableCell align="center">80</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">0</StyledTableCell>
              <StyledTableCell align="center">80</StyledTableCell>
              <StyledTableCell align="center">85</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">80</StyledTableCell>
              <StyledTableCell align="center">0</StyledTableCell>
            </StyledTableRow>
            {/* student */}
            <StyledTableRow>
              <StyledTableCell className={classes.fontWeight}>
                Ufuk Cihan
              </StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">85</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">60</StyledTableCell>
              <StyledTableCell align="center">95</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">70</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">70</StyledTableCell>
              <StyledTableCell align="center">75</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">70</StyledTableCell>
            </StyledTableRow>
            {/* student */}
            <StyledTableRow>
              <StyledTableCell className={classes.fontWeight}>
                Meryem Yildiz
              </StyledTableCell>
              <StyledTableCell align="center">70</StyledTableCell>
              <StyledTableCell align="center">80</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">80</StyledTableCell>
              <StyledTableCell align="center">0</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">70</StyledTableCell>
              <StyledTableCell align="center">70</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
              <StyledTableCell align="center">80</StyledTableCell>
              <StyledTableCell align="center">60</StyledTableCell>
              <StyledTableCell align="center">50</StyledTableCell>
              <StyledTableCell align="center">0</StyledTableCell>
              <StyledTableCell align="center">100</StyledTableCell>
              <StyledTableCell align="center">90</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
};
