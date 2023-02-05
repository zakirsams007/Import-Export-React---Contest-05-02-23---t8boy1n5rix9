import React, { Component, useState } from "react";
import '../styles/App.css';
import Head from "./Heading";
import Input from "InputQuery;
import SubHead from "./SubHeading";
import submitBtn from "./SubmitButton


const App = () => {
  return (
    <div id="main">
      <Head />
      <Input />
      <SubHead />
      <SubmitBtn />
    </div>
  )
}
export default App;

