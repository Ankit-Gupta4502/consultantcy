import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Wrapper = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
        <div className="grid  md:grid-cols-[300px_auto] gap-10 p-10">
          <Sidebar />
          {children}
        </div>
      </div>

      {/* <div className="grid  md:grid-cols-[300px_auto] gap-10 p-10">
        <Sidebar />
        {children}
      </div> */}
    </div>
  );
};

export default Wrapper;
