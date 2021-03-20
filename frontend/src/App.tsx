import { useState } from "react";
import logo from "./assets/logo.png";
import styles from "./styles.module.css";

function App() {
  const [step, setStep] = useState(0);

  return (
    <div className={styles.appContainer}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="Functions" />

        <p>
          This application numerically determines a function root transcendent f
          real, f(x) = p(x) + k * cos(x), where p(x) is a polynomial of degree n
          and k is the coefficient of the circular cosine function.
        </p>

        <span>
          To be executed, you need to provide all the necessary variables.
        </span>
      </div>
    </div>
  );
}

export default App;
