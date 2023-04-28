import React, { useState } from "react";
import Headerr from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import dynamic from 'next/dynamic'
const VideoCall = dynamic(() => import("../Agora/AgoraVideoCall"), { ssr: false })
interface types {
  children?: React.ReactNode;
}
const Layout = ({ children }: types) => {  
  return (
    <>
      <ToastContainer />
      <Headerr />
      <VideoCall />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
