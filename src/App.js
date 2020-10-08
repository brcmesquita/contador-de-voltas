import React from 'react';

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
  return <button>{props.texto}</button>;
};

function App() {
  return (
    <div>
      <MostrarVoltas voltas='15' />
      <Button texto='+' />
      <Button texto='-' />

      <MostrarTempo tempo='2:00' />
      <Button texto='Iniciar' />
      <Button texto='Reiniciar' />
    </div>
  );
}

export default App;
