import styles from "./Header.module.css";
import rocketLogo from "/src/assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Ícone de Foguete" />
      <h1 className={styles.to}>to</h1>
      <h1 className={styles.do}>do</h1>
    </header>
  );
}
