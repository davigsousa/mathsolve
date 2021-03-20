import { useState, useEffect } from "react";
import Input from "../../components/Input";
import styles from "./styles.module.css";

const getCoefficientLabel = (index: number) => {
  if (index === 0) return "Independent coefficient";

  return `Coefficient for x ** ${index}`;
};

function App() {
  const [degree, setDegree] = useState("0");
  const [coefficients, setCoefficients] = useState<string[]>([]);
  const [k, setK] = useState("0");
  const [initialValue, setInitialValue] = useState("0");
  const [maxNumber, setMaxNumber] = useState("0");
  const [tolerance, setTolerance] = useState("0");

  useEffect(() => {
    const degreeNumber = Number(degree);

    if (degreeNumber > 0) {
      const newCoefficients = [];

      for (let i = 0; i < degreeNumber + 1; i++) {
        newCoefficients.push("0");
      }

      setCoefficients(newCoefficients);
    } else {
      setCoefficients([]);
    }
  }, [degree, setCoefficients]);

  return (
    <>
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

      {Number(degree) > 0 && (
        <>
          <h2>Polynomial coefficients</h2>

          <div className={styles.inputWrapper}>
            {coefficients.map((item, index) => (
              <Input
                halfSize
                label={getCoefficientLabel(index)}
                placeholder="0"
                value={coefficients[index]}
                onChange={(e) => {
                  const newCoefficients = coefficients.slice();
                  newCoefficients[index] = e.target.value;

                  setCoefficients(newCoefficients);
                }}
              />
            ))}
          </div>
        </>
      )}

      <h2>Others</h2>

      <div className={styles.inputWrapper}>
        <Input
          halfSize
          label="k value"
          value={k}
          onChange={(e) => setK(e.target.value)}
          placeholder="0"
        />

        <Input
          halfSize
          label="Iterative initial value"
          value={initialValue}
          onChange={(e) => setInitialValue(e.target.value)}
          placeholder="0"
        />

        <Input
          halfSize
          label="Max iterations"
          value={maxNumber}
          onChange={(e) => setMaxNumber(e.target.value)}
          placeholder="0"
        />

        <Input
          halfSize
          label="Method numerical tolerance"
          value={tolerance}
          onChange={(e) => setTolerance(e.target.value)}
          placeholder="0"
        />
      </div>

      <button className={styles.submit} type="button">
        Solve!
      </button>
    </>
  );
}

export default App;
