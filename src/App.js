import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'antd-mobile';  // 加载 JS

// import Button from 'antd-mobile/lib/button';  // 加载 JS
// import 'antd-mobile/lib/button/style/css';        // 加载 CSS


// import 'antd-mobile/dist/antd-mobile.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {/* <Button>Start</Button> */}
          <Button>btn</Button>
        </p>
      </div>
    );
  }
}

export default App;
