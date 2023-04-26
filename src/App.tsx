import { Header } from "./components/Header";
import { Task, TaskType } from "./components/Task";
import { HabitsBar } from "./components/HabitsBar";

import styles from "./App.module.css";

import "./Global.css";

const habits: TaskType[] = [
  {
    id: 1,
    content: [{ content: "Testando" }],
  },
  {
    id: 2,
    content: [{ content: "Testando 2" }],
  },
  {
    id: 3,
    content: [{ content: "Testando 3" }],
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <HabitsBar />
        <div className={styles.header}>
          <div className={styles.taskCreate}>
            Tarefas criadas <span>0</span>
          </div>
          <div className={styles.taskCompleted}>
            Concluidas <span>0</span>
          </div>
        </div>
        {habits.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
}
