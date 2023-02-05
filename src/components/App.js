import React, { Component, useState } from "react";
import '../styles/App.css';
import Head from "./Heading";
import Input from "./InputQuery";
import SubHead from "./SubHeading";
import Subbtn from "./SubmitButton"


const App = () => {
  return (
    <div id="main">
      <Head />
      <Input />
      <SubHead />
      <Subbtn />
    </div>
  )
}
export default App;

