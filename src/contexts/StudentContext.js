import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext();

const StudentContextProvider = (props) => {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    getStudentList();
  }, []);

  const getStudentList = async () => {
    const response = await fetch(
      "http://localhost:5000/students/students-without-group"
    );
    const studentList = await response.json();
    setStudentList(studentList);
  };

  return (
    <StudentContext.Provider value={{ studentList }}>
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
