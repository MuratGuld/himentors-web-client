import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useAuth0 } from "@auth0/auth0-react";
import * as studentService from "../../service/student.service";
import * as homeworkService from "../../service/homework.service";

export const SummaryTable = () => {
  const [studentList, setStudentList] = useState([]);
  const [homeworkList, setHomeworkList] = useState([]);
  const { user } = useAuth0();

  useEffect(() => {
    const getStudentsByMentorEmail = async (pUser) => {
      const studentList = await studentService.getStudentsOfMentor(pUser);
      setStudentList(studentList);
    };

    const getHomeworkList = async () => {
      const homeworks = await homeworkService.getHomeworkList();
      setHomeworkList(homeworks);
    };
    getHomeworkList();
    getStudentsByMentorEmail(user);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="body1" fontWeight="bolder">
                Student
              </Typography>
            </TableCell>
            {/* ASSIGNMENTS */}
            {homeworkList
              ?.map((homework) => homework.name)
              .filter((item, index, self) => self.indexOf(item) === index)
              .map((name) => (
                <TableCell sx={{ textAlign: "center", fontWeight: "bolder" }}>
                  {name}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList?.map((student, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.first_name} {student.last_name}
              </TableCell>
              {/* STATUS */}
              {homeworkList
                .filter((homework) => homework.StudentId == student.id)
                .map((homework) => (
                  <TableCell sx={{ textAlign: "center", fontWeight: "bolder" }}>
                    {homework.status == "CREATED" ? (
                      <i style={{ color: "red" }}>Assigned</i>
                    ) : null}
                    {homework.status == "TURNED_IN" ? (
                      <i style={{ color: "orange" }}>Submitted</i>
                    ) : null}
                    {homework.status == "RETURNED" ? (
                      <i style={{ color: "green" }}>Checked</i>
                    ) : null}
                  </TableCell>
                ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
