import React, { useState, useEffect } from 'react';
import MostrarVoltas from './MostrarVoltas';
import MostrarTempo from './MostrarTempo';
import Button from './Button';
import './styles.css';

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
    if (numVoltas > 0) {
      setNumVoltas(numVoltas - 1);
      // console.log('decrementar');
    }
  };

  const reiniciar = () => {
    setNumVoltas(0);
    setTempo(0);
    setContando(false);
  };

  return (
    <div>
      <MostrarVoltas voltas={numVoltas} />
      <Button texto='+' className='bigger' onClick={incrementar} />
      <Button texto='-' className='bigger' onClick={decrementar} />

      {numVoltas > 0 && <MostrarTempo tempo={Math.round(tempo / numVoltas)} />}
      <Button texto={contando ? 'Pausar' : 'Iniciar'} onClick={contarPausar} />
      <Button texto='Reiniciar' onClick={reiniciar} />
    </div>
  );
}

export default App;
