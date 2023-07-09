//correct 

import React, { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();

const App = () => {
  const [data, setData] = useState("Initial data");

  useEffect(() => {
    setTimeout(() => {
      setData("Updated data");
    }, 2000);
  }, []);

  return (
    <div>
      <MyContext.Provider value={data}>
        <MyComponent />
      </MyContext.Provider>
    </div>
  );
};

const MyComponent = () => {
  const data = useContext(MyContext);
  const defaultValue = "Default value";

  useEffect(() => {
    console.log("Context updated:", data);
  }, [data]);

  return <div>{data || defaultValue}</div>;
};

export default App;
