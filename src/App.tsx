import { Header } from "./components/Header";
import { Task, TaskType } from "./components/Task";
import { Habits } from "./components/Habits";

import styles from "./App.module.css";

import "./Global.css";

const habits: TaskType[] = [
  {
    id: 1,
    content: "Testando",
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Habits />
        {habits.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
}
