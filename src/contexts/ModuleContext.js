import { createContext, useEffect, useState } from 'react';

export const GroupContext = createContext();

const GroupContextProvider = (props) => {
  const [groupListByModule, setGroupListByModule] = useState([]);

  useEffect(() => {
    getGroupList();
  }, []);

  const getGroupList = async () => {
    const response = await fetch('http://localhost:5000/groups/');
    const groupList = await response.json();
    setGroupListByModule(groupList);
  };

  return (
    <GroupContext.Provider value={{ groupListByModule  }}>
      {props.children}
    </GroupContext.Provider>
  );
};

export default GroupContextProvider;
