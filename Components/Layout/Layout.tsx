import React, { useState } from "react";
import Headerr from "./Headerr";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
interface types {
  children?: React.ReactNode;
}
const Layout = ({ children }: types) => {
  return (
    <>
      <ToastContainer />
      <Headerr />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
