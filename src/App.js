import React from 'react';
import SquareWrapper from './SquareWrapper/SquareWrapper';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <SquareWrapper />
        <div class='square'></div>
      </div>
    );
  }
}

//const App = () => (
// <div>
//  <SquareWrapper />
//   <div class='square'></div>
// </div>
//);

export default App;
