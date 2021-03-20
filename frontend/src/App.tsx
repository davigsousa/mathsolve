import { useState } from "react";
import Input from "./components/Input";
import logo from "./assets/logo.png";
import styles from "./styles.module.css";

function App() {
  const [step, setStep] = useState(0);
  const [degree, setDegree] = useState("");
  const [coefficients, setCoefficients] = useState<string[]>([]);
  const [k, setK] = useState("");
  const [initialValue, setInitialValue] = useState("");
  const [maxNumber, setMaxNumber] = useState("");
  const [tolerance, setTolerance] = useState("");

  return (
    <div className={styles.appContainer}>
      <div className={styles.container}>
        <div className={styles.banner} />

        <img className={styles.logo} src={logo} alt="Functions" />

        <p className={styles.description}>
          This application numerically determines a function root transcendent f
          real:
        </p>

        <p className={styles.function}>f(x) = p(x) + k * cos(x)</p>
        <span className={styles.functionDetails}>
          p(x): is a polynomial of degree n. <br />
          k: is the coefficient of the circular cosine function.
        </span>

        <h1>Parameters</h1>

        <Input
          label="Degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          placeholder="0"
        />
      </div>
    </div>
  );
}

export default App;
