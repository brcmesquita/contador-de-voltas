import { useState, useEffect } from "react";

const MostrarVoltas = (props) => {
  return (
    <p>
      {props.voltas}
      <br />
      Voltas
    </p>
  );
};

const MostraTempo = (props) => {
  const tempo = props.tempo;
  const minutos = Math.round(tempo / 60);
  const segundos = tempo % 60;
  const minutosStr = minutos < 10 ? "0" + minutos : minutos;
  const segundosStr = segundos < 10 ? "0" + segundos : segundos;
  return <p>{`${minutosStr}:${segundosStr}`}</p>;
};

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

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
    setNumVoltas(numVoltas - 1);
    //console.log("decrementou");
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
        <MostraTempo tempo={tempo} />
      </p>
      <MostrarVoltas voltas={numVoltas} />
      <Button text="+" onClick={increment} />
      <Button text="-" onClick={decrement} />
      <p>
        {numVoltas > 0 && <MostraTempo tempo={Math.round(tempo / numVoltas)} />}
        <br />
        Tempo médio por volta
      </p>
      <Button text="Iniciar" onClick={toggleRunning} />
      <Button text="Reiniciar" onClick={reset} />
    </div>
  );
}

export default App;
