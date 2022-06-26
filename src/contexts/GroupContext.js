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

  return (
    <GroupContext.Provider value={{ activeGroupList }}>
      {props.children}
    </GroupContext.Provider>
  );
};

export default GroupContextProvider;
