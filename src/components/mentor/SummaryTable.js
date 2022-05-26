import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fontWeight } from "@mui/system";
import Typography from "@mui/material/Typography";

export const SummaryTable = () => {
  const studentList = [
    {
      first_name: "Ali",
      last_name: "Yilmaz",
      sendStatus: "not sent",
      checkStatus: "not checked",
    },
    {
      first_name: "Mehmet",
      last_name: "Can",
      sendStatus: "sent late",
      checkStatus: "checked",
    },
    {
      first_name: "Asli",
      last_name: "Deniz",
      sendStatus: "sent on time",
      checkStatus: "checked",
    },
    {
      first_name: "Ugur",
      last_name: "Celik",
      sendStatus: "sent on time",
      checkStatus: "checked",
    },
  ];

  return (
    <TableContainer sx={{ maxWidth: 400, maxHeight: 350 }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="body1" fontWeight="bolder">
                Group 1
              </Typography>
            </TableCell>
            <TableCell
              colSpan={2}
              sx={{ textAlign: "right", fontWeight: "bolder" }}
            >
              Assignment (Week 3)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((student, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.first_name} {student.last_name}
              </TableCell>
              <TableCell align="right">{student.sendStatus}</TableCell>
              <TableCell align="right">{student.checkStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
