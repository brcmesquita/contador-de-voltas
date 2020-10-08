import React, { useState, useEffect } from 'react';

const MostrarVoltas = ({ voltas }) => {
  return (
    <p>
      {voltas} <br />
      Voltas
    </p>
  );
};

const MostrarTempo = ({ tempo }) => {
  return (
    <p>
      {tempo}
      <br />
      Tempo médio por Volta
    </p>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.texto}</button>;
};

function App() {
  const [numVoltas, setNumVoltas] = useState(20);
  const [tempo, setTempo] = useState('01:30');

  useEffect(() => {
    setInterval(() => {
      console.log('chamou!');
    }, 1000);
  }, []);

  const incrementar = () => {
    setNumVoltas(numVoltas + 1);
    // console.log('incrementar');
  };
  const decrementar = () => {
    setNumVoltas(numVoltas - 1);
    // console.log('decrementar');
  };

  return (
    <div>
      <MostrarVoltas voltas={numVoltas} />
      <Button texto='+' onClick={incrementar} />
      <Button texto='-' onClick={decrementar} />

      <MostrarTempo tempo={tempo} />
      <Button texto='Iniciar' />
      <Button texto='Reiniciar' />
    </div>
  );
}

export default App;
