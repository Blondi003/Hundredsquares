import React from 'react';
import './styles.css';

const getColor = () => {
  let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color.click = '0' + color;
  }

  return '#' + color;
};

function Squares() {
  const anArray = new Array(100).fill();

  console.log(anArray);

  return (
    <ol>
      {anArray.map((item, index) => {
        const color = getColor();

        return (
          <div
            className='square'
            key={index}
            style={{ backgroundColor: color }}
          />
        );
      })}
    </ol>
  );
}

export default Squares;
