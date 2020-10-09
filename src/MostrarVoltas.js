import React from 'react';

const MostrarVoltas = ({ voltas }) => {
  return (
    <p className='voltas'>
      <span>{voltas}</span>
      <br />
      Voltas
    </p>
  );
};

export default MostrarVoltas;
