import { InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  return (
    <div className={styles.container}>
      <p>{label}</p>

      <input {...props} color="#737373" type="number" />
    </div>
  );
}

export default Input;
