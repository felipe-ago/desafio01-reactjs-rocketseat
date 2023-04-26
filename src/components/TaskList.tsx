/*import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./TaskList.module.css";

interface Habits {
  content: string;
}
export interface TaskType {
  id: number;
  content: Habits[];
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (habit: string) => void;
}

export function TaskList({ task, onDeleteTask }: TaskProps) {
  const [habit, sethabit] = useState(["Criei um Habit!"]);

  const [newHabit, setNewHabit] = useState("");

  function handleCreateHabit(event: FormEvent) {
    event.preventDefault();

    sethabit([...habit, newHabit]);

    setNewHabit("");
  }

  function handleCreateHabitChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewHabit(event.target.value);
  }

  function deleteHabit(habitToDelete: string) {
    const habitWithoutDeleteOne = habit.filter((habit) => {
      return habit != habitToDelete;
    });
    sethabit(habitWithoutDeleteOne);
  }

  return (
    
  );
}
*/