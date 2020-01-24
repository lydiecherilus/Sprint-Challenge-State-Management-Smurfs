import React from "react";
import "./App.css";

import SmurfCard from "./SmurfCard"
import Form from "./Form"

export default function App() {
    return (
      <div className="App">
        <h1>SMURFS</h1>
        <div>Welcome to the Village!</div>
        <Form />
        <SmurfCard />
      </div>
    );
  }