import React from "react";
import CustomNavBar from "./CustomNavBar";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Layout(props) {
  const { children } = props;

  return (
    <div className="layout">
      <CustomNavBar />
      <ToastContainer />
      <main>
        {React.cloneElement(children)}
      </main>
    </div>
  );
}