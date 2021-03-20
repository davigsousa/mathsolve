import { ReactNode } from "react";
import logo from "../../assets/logo.png";
import styles from "./styles.module.css";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className={styles.appContainer}>
      <div className={styles.container}>
        <div className={styles.banner} />

        <img className={styles.logo} src={logo} alt="Functions" />
        {children}
      </div>
    </div>
  );
}

export default Container;
