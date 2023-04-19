import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./Task.module.css";
import { CheckCircle, Trash } from "phosphor-react";

export interface TaskType {
  id: number;
  content: string;
}

interface TaskProps {
  task: TaskType;
}

export function Task({ task }: TaskProps) {
  const [habit, sethabit] = useState(["Criei um Habit!"]);

  const [newHabit, setNewHabit] = useState("");

  const [taskCreate, setTaskCreate] = useState(0);

  const [taskCompleted, setTaskCompleted] = useState(0);

  function handleCreateHabit(event: FormEvent) {
    event.preventDefault();

    sethabit([...habit, newHabit]);

    setNewHabit("");
  }

  function handleCreateHabitChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewHabit(event.target.value);
  }

  function handleNewHabitInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteHabit(habitToDelete: string) {
    const habitWithoutDeleteOne = habit.filter((habit) => {
      return habit != habitToDelete;
    });
    sethabit(habitWithoutDeleteOne);
  }

  return (
    <article className={styles.taskBox}>
      <header>
        <div className={styles.taskCreate}>
          Tarefas criadas <span>{taskCreate}</span>
        </div>
        <div className={styles.taskCompleted}>
          Concluidas <span>{taskCompleted}</span>
        </div>
      </header>
      <body>
        <button className={styles.check}>
          <CheckCircle size={24} />
        </button>
        <p>Os Habits vão aparecer aqui!!!</p>
        <button className={styles.trash}>
          <Trash size={24} />
        </button>
      </body>
    </article>
  );
}
