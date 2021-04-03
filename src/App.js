import { useState, useEffect } from "react";
import "./styles.css";
import MostrarVoltas from "./MostrarVoltas";
import MostrarTempo from "./MotrarTempo";
import Button from "./Button";

function App() {
  const [numVoltas, setNumVoltas] = useState(0);
  const [running, setRunning] = useState(false);
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        setTempo((old) => old + 1);
      }, 100);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [running]);

  const toggleRunning = () => {
    setRunning(!running);
  };

  const increment = () => {
    setNumVoltas(numVoltas + 1);
    //console.log("incrementou");
  };
  const decrement = () => {
    if (numVoltas >= 1) {
      setNumVoltas(numVoltas - 1);
      //console.log("decrementou");
    }
  };

  const reset = () => {
    setNumVoltas(0);
    setTempo(0);
  };

  return (
    <div>
      <p>
        Tempo Total
        <br />
        <MostrarTempo tempo={tempo} />
      </p>
      <MostrarVoltas voltas={numVoltas} />
      <Button text="+" onClick={increment} className="bigger" />
      <Button text="-" onClick={decrement} className="bigger" />
      <p>
        {numVoltas > 0 && (
          <MostrarTempo tempo={Math.round(tempo / numVoltas)} />
        )}
        <br />
        Tempo médio por volta
      </p>
      <Button text={running ? "Pausar" : "Iniciar"} onClick={toggleRunning} />
      <Button text="Reiniciar" onClick={reset} />
    </div>
  );
}

export default App;
