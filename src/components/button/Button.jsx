import styles from "./button.module.css";

export default function Button({ name, isLoading }) {
  return (
    <button className={styles.btn}>{isLoading ? name : "Loading..."}</button>
  );
}
