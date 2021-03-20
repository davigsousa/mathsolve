import { InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  halfSize?: boolean;
}

function Input({ label, halfSize, ...props }: InputProps) {
  return (
    <div
      style={!halfSize ? { width: "70%" } : undefined}
      className={`${styles.container} ${halfSize ? styles.half : ""}`}
    >
      <p>{label}</p>

      <input {...props} color="#737373" type="number" />
    </div>
  );
}

export default Input;
