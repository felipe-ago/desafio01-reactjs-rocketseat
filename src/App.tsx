import { useState } from "react";

import styles from "./App.module.css";

import "./Global.css";

import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { Habits } from "./components/Habits";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Habits/>
        <br></br>
        <Task />
      </div>
    </div>
  );
}
