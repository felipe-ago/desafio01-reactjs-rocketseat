import { useState } from "react";
import { PlusCircle } from "phosphor-react";
import styles from "./Habits.module.css";

export function Habits() {
  const [newHabit, setNewHabit] = useState("");

  return (
    <div className={styles.habits}>
      <textarea name="habits" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <span><PlusCircle size={20} /></span>
      </button>
    </div>
  );
}
