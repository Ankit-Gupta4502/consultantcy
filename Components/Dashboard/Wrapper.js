import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { getUserDetails } from "../../redux/actions/AuthAction";
import { useAppDispatch, useAppSelector } from "../../hooks";
const Wrapper = ({ children }) => {
  const dispatch = useAppDispatch()
  const { AuthReducer: { auth } } = useAppSelector(state => state)
  useEffect(() => {
    if (auth.token) {
      dispatch(getUserDetails(auth.token))
    }
  }, [auth])
  return (
    <div className="grid  md:grid-cols-[300px_auto] gap-10 p-10">
      <Sidebar />
      {children}
    </div>
  );
};

export default Wrapper;
