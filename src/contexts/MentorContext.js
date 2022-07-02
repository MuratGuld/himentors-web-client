import { createContext, useEffect, useState } from "react";

export const MentorContext = createContext();

const MentorContextProvider = (props) => {
  const [mentorList, setMentorList] = useState([]);
  const [allMentorList, setAllMentorList] = useState([]);

  useEffect(() => {
    getMentorList();
    getAllMentorList();
  }, []);

  const getMentorList = async () => {
    const response = await fetch(
      "http://localhost:5000/mentors/mentors-without-group"
    );
    const mentorList = await response.json();
    setMentorList(mentorList);
  };

  const getAllMentorList = async () => {
    const response = await fetch("http://localhost:5000/mentors");
    const mentorList = await response.json();
    setAllMentorList(mentorList);
  };
  return (
    <MentorContext.Provider value={{ mentorList, allMentorList }}>
      {props.children}
    </MentorContext.Provider>
  );
};

export default MentorContextProvider;
