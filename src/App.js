import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Then navigate using the links below.
        </p>
        <ul className="App-nav">
          <li><Link to="/hello-world">Hello World</Link></li>
        </ul>
        <p className="App-content">
           {this.props.children}
        </p>
      </div>
    );
  }
}

export default App;
