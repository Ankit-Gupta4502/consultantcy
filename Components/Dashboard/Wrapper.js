import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { getUserDetails } from "../../redux/actions/AuthAction";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useRouter } from "next/router";
const Wrapper = ({ children }) => {
  const dispatch = useAppDispatch()
  const { AuthReducer: { auth, isAuthentiCated } } = useAppSelector(state => state)
  const router = useRouter()
  useEffect(() => {
    if (auth.token) {
      dispatch(getUserDetails(auth.token))
    }
  }, [auth])

  useEffect(() => {
    if (!isAuthentiCated || auth.type !== "user") {
      router.back()
    }
  }, [isAuthentiCated, auth])

  return (
    <div className="grid  md:grid-cols-[300px_auto] gap-10 p-10">
      <Sidebar />
      {children}
    </div>
  );
};

export default Wrapper;
