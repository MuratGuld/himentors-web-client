import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext();

const StudentContextProvider = (props) => {
  const [studentList, setStudentList] = useState([]);
  const [allStudentList, setAllStudentList] = useState([]);

  useEffect(() => {
    getStudentList();
    getAllStudentList();
  }, []);

  const getStudentList = async () => {
    const response = await fetch(
      "http://localhost:5000/students/students-without-group"
    );
    const studentList = await response.json();
    setStudentList(studentList);
  };

  const getAllStudentList = async () => {
    const response = await fetch("http://localhost:5000/students");
    const studentList = await response.json();
    setAllStudentList(studentList);
  };

  return (
    <StudentContext.Provider value={{ studentList, allStudentList }}>
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
