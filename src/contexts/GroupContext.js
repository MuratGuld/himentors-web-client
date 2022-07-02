import { createContext, useEffect, useState } from "react";

export const GroupContext = createContext();

const GroupContextProvider = (props) => {
  const [activeGroupList, setActiveGroupList] = useState([]);
  const [studentGroupList, setStudentGroupList] = useState([]);
  const [mentorGroupList, setMentorGroupList] = useState([]);

  useEffect(() => {
    getActiveGroupList();
  }, []);

  const getActiveGroupList = async () => {
    const response = await fetch("http://localhost:5000/groups/active-groups");
    const groupList = await response.json();
    setActiveGroupList(groupList);
  };

  const addGroup = async (pGroup) => {
    try {
      await fetch("http://localhost:5000/groups/active-groups", {
        method: "POST",
        body: JSON.stringify(pGroup),
        headers: { "Content-Type": "application/json" },
      });

      await fetch("http://localhost:5000/groups/active-groups")
        .then((activeGroups) => activeGroups.json())
        .then((activeGroups) => setActiveGroupList(activeGroups));

      await fetch("http://localhost:5000/student-groups")
        .then((studentGroup) => studentGroup.json())
        .then((studentGroup) => setStudentGroupList(studentGroup));

      await fetch("http://localhost:5000/mentor-groups")
        .then((mentorGroup) => mentorGroup.json())
        .then((mentorGroup) => setMentorGroupList(mentorGroup));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGroup = async (pGroupId) => {
    try {
      await fetch(`http://localhost:5000/groups/active-groups/${pGroupId}`, {
        method: "DELETE",
      });

      await fetch("http://localhost:5000/groups/active-groups")
        .then((activeGroups) => activeGroups.json())
        .then((activeGroups) => setActiveGroupList(activeGroups));

      await fetch("http://localhost:5000/student-groups")
        .then((studentGroup) => studentGroup.json())
        .then((studentGroup) => setStudentGroupList(studentGroup));

      await fetch("http://localhost:5000/mentor-groups")
        .then((mentorGroup) => mentorGroup.json())
        .then((mentorGroup) => setMentorGroupList(mentorGroup));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GroupContext.Provider
      value={{
        activeGroupList,
        addGroup,
        studentGroupList,
        mentorGroupList,
        deleteGroup,
      }}
    >
      {props.children}
    </GroupContext.Provider>
  );
};

export default GroupContextProvider;
