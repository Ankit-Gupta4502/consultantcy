import React from "react";
import Sidebar from "./Sidebar";

const Wrapper = ({ children }) => {
  return (
    <div className="grid grid-cols-[.7fr_2.3fr] gap-10 p-10">
      <Sidebar />
      {children}
    </div>
  );
};

export default Wrapper;
