import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./Task.module.css";
import { CheckCircle, Trash } from "phosphor-react";
import { Habits } from "./Habits";

interface Habits {
  content: string;
}
export interface TaskType {
  id: number;
  content: Habits[];
}

interface TaskProps {
  task: TaskType;
}

export function Task({ task }: TaskProps) {
  const [habits, sethabit] = useState(["Criei um Habit!"]);

  const [newHabit, setNewHabit] = useState("");

  const [taskCreate, setTaskCreate] = useState(0);

  const [taskCompleted, setTaskCompleted] = useState(0);

  function handleCreateHabit(event: FormEvent) {
    event.preventDefault();

    sethabit([...habits, newHabit]);

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
    const habitWithoutDeleteOne = habits.filter((habit) => {
      return habit != habitToDelete;
    });
    sethabit(habitWithoutDeleteOne);
  }

  return (
    <article className={styles.taskBox}>
      <div className={styles.taskList}>
        {habits.map((habit) => {
          return (
            <Habits key={habit} content={habit} onDeleteHabit={deleteHabit} />
          );
        })}
      </div>
    </article>
  );
}
