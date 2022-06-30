import { createContext, useEffect, useState } from "react";

export const GroupContext = createContext();

const GroupContextProvider = (props) => {
  const [activeGroupList, setActiveGroupList] = useState([]);

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
        
      await fetch("http://localhost:5000/groups/active-groups")
      .then((activeGroups) => activeGroups.json())
      .then((activeGroups) => setActiveGroupList(activeGroups));
      
      await fetch("http://localhost:5000/groups/active-groups")
        .then((activeGroups) => activeGroups.json())
        .then((activeGroups) => setActiveGroupList(activeGroups));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GroupContext.Provider value={{ activeGroupList, addGroup }}>
      {props.children}
    </GroupContext.Provider>
  );
};

export default GroupContextProvider;
