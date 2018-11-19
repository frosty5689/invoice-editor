import React from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';

import Invoice from './Invoice';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Invoice Editor</h2>
        </div>
        <Invoice />
      </div>
    );
  }
}


export default App;
