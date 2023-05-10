import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../hooks";
const Wrapper = ({ children }) => {
  const router = useRouter()
  const { AuthReducer: { auth, isAuthentiCated } } = useAppSelector(state => state)
  useEffect(() => {
    if (!isAuthentiCated || auth.type !== "consultant") {
      router.push('/')
    }
  }, [isAuthentiCated, auth])
  return (
    <div>
      <div>
        <Header />
        <div className="grid items-start md:grid-cols-[300px_auto] gap-10 p-10">
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
