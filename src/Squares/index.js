import React from 'react';
import './styles.css';

function Squares() {
  const anArray = new Array(100).fill();

  return (
    <ol>
      {anArray.map((item, index) => {
        return <div className='square' key={index} />;
      })}
    </ol>
  );
}

export default Squares;
