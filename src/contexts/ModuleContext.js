import { createContext, useEffect, useState } from "react";

export const ModuleContext = createContext();

const ModuleContextProvider = (props) => {
  const [activeModule, setActiveModule] = useState([]);

  useEffect(() => {
    getActiveModule();
  }, []);

  const getActiveModule = async () => {
    const response = await fetch("http://localhost:5000/modules/active-module");
    const activeModule = await response.json();
    setActiveModule(activeModule);
  };

  return (
    <ModuleContext.Provider value={{ activeModule }}>
      {props.children}
    </ModuleContext.Provider>
  );
};

export default ModuleContextProvider;
