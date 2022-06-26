import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useStyles from "../../useStyles";
import * as gradeService from "../../service/grade.service";
import * as studentService from "../../service/student.service";

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
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    cursor: "default",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const GroupTables = ({ selectedGroupId }) => {
  const classes = useStyles();
  const [studentList, setStudentList] = useState([]);
  const [gradesOfStudents, setGradesOfStudents] = useState([]);

  useEffect(() => {
    const getStudentsOfGroup = async (pGroupId) => {
      const studentList = await studentService.getStudentsOfGroup(pGroupId);
      setStudentList(studentList);

      const GradesOfStudents = await Promise.all(
        studentList.map(async (student) => {
          return await gradeService.getGradesOfStudent(student.id);
        })
      );

      setGradesOfStudents(GradesOfStudents);
    };

    getStudentsOfGroup(selectedGroupId);
  }, [selectedGroupId]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          {/* first thead row */}
          <TableRow>
            <StyledTableCell className={classes.fontWeight}>
              General View
            </StyledTableCell>
            {gradesOfStudents[0] &&
              gradesOfStudents[0].map((gradeInfo) => (
                <StyledTableCell align="center">
                  {gradeInfo.type}
                </StyledTableCell>
              ))}
          </TableRow>
          {/* second thead row */}
          <TableRow>
            <StyledTableCell className={classes.fontWeight}>
              Student
            </StyledTableCell>
            {/* Columns */}
            {gradesOfStudents[0] &&
              gradesOfStudents[0].map((gradeInfo) => (
                <StyledTableCell align="center">
                  {gradeInfo.name}
                </StyledTableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* student */}
          {studentList[0] &&
            studentList.map((student, index) => (
              <StyledTableRow>
                <StyledTableCell className={classes.fontWeight}>
                  {student.first_name} {student.last_name}
                </StyledTableCell>
                {/* grades */}
                {gradesOfStudents[index]?.map((gradeInfo) => (
                  <StyledTableCell align="center">
                    {gradeInfo.grade}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
