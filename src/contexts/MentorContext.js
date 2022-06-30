import { createContext, useEffect, useState } from "react";

export const MentorContext = createContext();

const MentorContextProvider = (props) => {
  const [mentorList, setMentorList] = useState([]);

  useEffect(() => {
    getMentorList();
  }, []);

  const getMentorList = async () => {
    const response = await fetch(
      "http://localhost:5000/mentors/mentors-without-group"
    );
    const mentorList = await response.json();
    setMentorList(mentorList);
  };

  return (
    <MentorContext.Provider value={{ mentorList }}>
      {props.children}
    </MentorContext.Provider>
  );
};

export default MentorContextProvider;
