import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./styles.module.css";

function Loading() {
  return (
    <div className={styles.container}>
      <AiOutlineLoading3Quarters
        className={styles.spin}
        size={60}
        color="#3358dd"
      />
      <h1>Loading...</h1>
    </div>
  );
}

export default Loading;
