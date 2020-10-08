import React, { useState, useEffect } from 'react';

const MostrarVoltas = ({ voltas }) => {
  return (
    <p>
      {voltas} <br />
      Voltas
    </p>
  );
};

const MostrarTempo = (props) => {
  const tempo = props.tempo;
  const minutos = Math.round(tempo / 60);
  const segundos = tempo % 60;
  const minutosStr = minutos < 10 ? '0' + minutos : minutos;
  const segundosStr = segundos < 10 ? '0' + segundos : segundos;

  return (
    <p>
      {`${minutosStr}:${segundosStr}`}
      <br />
      Tempo médio por Volta
    </p>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.texto}</button>;
};

function App() {
  const [numVoltas, setNumVoltas] = useState(0);
  const [contando, setContando] = useState(false);
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    let timer = null;
    if (contando) {
      timer = setInterval(() => {
        // console.log('chamou!');
        setTempo((old) => old + 1);
      }, 1000);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [contando]);

  const contarPausar = () => {
    setContando(!contando);
  };

  const incrementar = () => {
    setNumVoltas(numVoltas + 1);
    // console.log('incrementar');
  };
  const decrementar = () => {
    setNumVoltas(numVoltas - 1);
    // console.log('decrementar');
  };

  const reiniciar = () => {
    setNumVoltas(0);
    setTempo(0);
    setContando(false);
  };

  return (
    <div>
      <MostrarVoltas voltas={numVoltas} />
      <Button texto='+' onClick={incrementar} />
      <Button texto='-' onClick={decrementar} />

      {numVoltas > 0 && <MostrarTempo tempo={Math.round(tempo / numVoltas)} />}
      <Button texto='Iniciar' onClick={contarPausar} />
      <Button texto='Reiniciar' onClick={reiniciar} />
    </div>
  );
}

export default App;
