import React from "react";
import Sidebar from "./Sidebar";

const Wrapper = ({ children }) => {
  return (
    <div className="grid  md:grid-cols-[300px_auto] gap-10 p-10">
      <Sidebar />
      {children}
    </div>
  );
};

export default Wrapper;
