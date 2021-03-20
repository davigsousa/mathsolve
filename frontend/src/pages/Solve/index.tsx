import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import Loading from "../../components/Loading";
import styles from "./styles.module.css";

function Solve() {
  const history = useHistory();
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [root, setRoot] = useState("");
  const [absoluteError, setAbsoluteError] = useState("");
  const [image, setImage] = useState("");

  const getResult = useCallback(async () => {
    try {
      const url = `${process.env.REACT_APP_API}/solve${location.search}`;
      const response = await axios.get(url);

      const { root: rootResponse, chart, absolute_error } = response.data;

      setImage(chart);
      setRoot(rootResponse);
      setAbsoluteError(absolute_error);
    } catch (err) {
      setError(true);
    }

    setLoading(false);
  }, [setImage, setRoot, setAbsoluteError, setLoading, location.search]);

  useEffect(() => {
    getResult();
  }, [location.search, getResult]);

  if (error)
    return (
      <>
        <p>It was not possible to obtain your result.</p>
        <button
          className={styles.submit}
          type="button"
          onClick={() => history.push("/")}
        >
          Try again
        </button>
      </>
    );

  if (loading) return <Loading />;

  return (
    <>
      <h1>fsolve's Results</h1>

      <p className={styles.results}>
        <span>
          <strong>Root:</strong> {root}
        </span>

        <span>
          <strong>Absolute error:</strong> {absoluteError}
        </span>

        {image && (
          <img src={`data:image/png;base64,${image}`} alt="Function analisys" />
        )}
      </p>

      <button
        className={styles.submit}
        type="button"
        onClick={() => history.push("/")}
      >
        Try again
      </button>
    </>
  );
}

export default Solve;
