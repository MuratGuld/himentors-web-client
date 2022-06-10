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
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

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

const students = [
  {
    first_name: "Ali",
    last_name: "Yilmaz",
    first_assignment: {
      sentStatus: "sent",
      checkStatus: "checked",
    },
    second_assignment: {
      sentStatus: "sent",
      checkStatus: "checked",
    },
  },
  {
    first_name: "Mehmet",
    last_name: "Can",
    first_assignment: {
      sentStatus: "sent",
      checkStatus: "checked",
    },
    second_assignment: {
      sentStatus: "not sent",
      checkStatus: "not checked",
    },
  },
  {
    first_name: "Asli",
    last_name: "Deniz",
    first_assignment: {
      sentStatus: "not sent",
      checkStatus: "not checked",
    },
    second_assignment: {
      sentStatus: "sent",
      checkStatus: "checked",
    },
  },
  {
    first_name: "Ugur",
    last_name: "Celik",
    first_assignment: {
      sentStatus: "sent late",
      checkStatus: "checked",
    },
    second_assignment: {
      sentStatus: "not sent",
      checkStatus: "not checked",
    },
  },
];

export const WeeklyTable = () => {
  const classes = useStyles();

  return (
    <Box>
      <Stack
        sx={{
          bgcolor: "#b70202",
          borderRadius: 1,
          mb: 0.1,
          pl: 1.5,
          pt: 0.5,
          minHeight: 40,
        }}
      >
        <Typography variant="h6" color="white">
          Weekly View
        </Typography>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell className={classes.fontWeight}>
                Student
              </StyledTableCell>
              <StyledTableCell
                align="center"
                colSpan={2}
                className={classes.fontWeight}
              >
                Assignment 1
              </StyledTableCell>
              <StyledTableCell
                align="center"
                colSpan={2}
                className={classes.fontWeight}
              >
                Assignment 2
              </StyledTableCell>
              <StyledTableCell colSpan={2}></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <StyledTableRow key={student.name}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  className={classes.fontWeight}
                >
                  {student.first_name} {student.last_name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {student.first_assignment.sentStatus}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {student.first_assignment.checkStatus}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {student.first_assignment.sentStatus}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {student.first_assignment.checkStatus}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <RateReviewIcon className={classes.iconColoured} />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <MessageIcon className={classes.iconColoured} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
