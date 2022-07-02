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
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as studentService from "../../service/student.service";
import * as homeworkService from "../../service/homework.service";
import { useAuth0 } from "@auth0/auth0-react";

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
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    cursor: "default",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const WeeklyTable = () => {
  const classes = useStyles();
  const [studentList, setStudentList] = useState([]);
  const [homeworkList, setHomeworkList] = useState([]);
  const { user } = useAuth0();

  useEffect(() => {
    const getStudentsByMentorEmail = async (pUser) => {
      const studentList = await studentService.getStudentsOfMentor(pUser);
      setStudentList(studentList);
    };

    const getHomeworkList = async () => {
      const homeworks = await homeworkService.getHomeworkListOfWeek();
      setHomeworkList(homeworks);
    };
    getHomeworkList();
    getStudentsByMentorEmail(user);
  }, []);

  return (
    <Box>
      <Stack
        sx={{
          bgcolor: "#b70202",
          borderRadius: 1,
          mt: 10,
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
              {/* assignment */}
              {homeworkList
                ?.filter(
                  (item, index, self) =>
                    self.map((item) => item.name).indexOf(item.name) === index
                )
                .map((homework) => (
                  <StyledTableCell
                    align="center"
                    colSpan={2}
                    className={classes.fontWeight}
                  >
                    <b>{homework.name}</b> <br />
                    (Due:{" "}
                    {new Date(homework.deadline).toLocaleString("en-us", {
                      weekday: "long",
                    })}
                    )
                  </StyledTableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {studentList?.map((student) => (
              <StyledTableRow key={student.id}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  className={classes.fontWeight}
                >
                  {student.first_name} {student.last_name}
                </StyledTableCell>
                {homeworkList
                  .filter((homework) => homework.StudentId == student.id)
                  .map((homework) => (
                    <StyledTableCell align="center" colSpan={2}>
                      {homework.status == "CREATED" ? (
                        <i style={{ color: "red" }}>Not Submitted</i>
                      ) : null}
                      {homework.status == "TURNED_IN" ? (
                        <i style={{ color: "orange" }}>
                          Submitted <br />
                          Not Checked
                        </i>
                      ) : null}
                      {homework.status == "RETURNED" ? (
                        <i style={{ color: "green" }}>
                          Submitted <br />
                          Checked ({homework.grade}/100)
                        </i>
                      ) : null}
                    </StyledTableCell>
                  ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
