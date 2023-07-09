//incorrect

import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState("Initial data");

  useEffect(() => {
    setTimeout(() => {
      setData("Updated data");
    }, 2000);
  }, []);

  return (
    <div>
      <MyComponent />
    </div>
  );
};

const MyComponent = () => {
  const data = useContext(MyContext);

  useEffect(() => {
    console.log("Context updated:", data);
  }, []);

  return <div>{data}</div>;
};

export default App;
