import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../images/logo.svg';
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
          To get started, edit <code>src/components/App.js</code> and save to reload. Then navigate using the links below.
        </p>
        <ul className="App-nav">
          <li><Link to="/hello-world">Hello World</Link></li>
          <li><Link to="/hello-api">Hello Redux</Link></li>
        </ul>
        <div className="App-content">
           {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
