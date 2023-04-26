import { CheckCircle, Trash } from "phosphor-react";
import styles from "./Habits.module.css";

interface HabitsProps {
  content: string;
  onDeleteHabit: (content: string) => void;
}

export function Habits({ content, onDeleteHabit }: HabitsProps) {
  function handleDeleteHabit() {
    onDeleteHabit(content);
  }

  return (
    <div className={styles.habits}>
      <button className={styles.check}>
        <CheckCircle size={24} />
      </button>
      <p>{content}</p>
      <button onClick={handleDeleteHabit} className={styles.trash}>
        <Trash size={24} />
      </button>
    </div>
  );
}

/*
<div className={styles.content}>
        {task.content.map((line) => {
          return <p key={line.content}></p>;
        })}
      </div>
*/
