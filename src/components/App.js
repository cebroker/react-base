import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../images/logo.svg';
import styles from './App.css';

class App extends Component {
  render() {
    let env = null;
    if (process.env.REACT_APP_ENV !== 'production') {
      env = <span className={styles.env}>{process.env.REACT_APP_ENV || "development"}</span>
    }

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Welcome to React</h2>
          {env}
        </div>
        <p className={styles.intro}>
          To get started, edit <code>src/components/App.js</code> and save to reload. Then navigate using the links below.
        </p>
        <ul className={styles.nav}>
          <li><Link to="/hello-world">Hello World</Link></li>
          <li><Link to="/hello-api">Hello Redux</Link></li>
          <li><Link to="/hello-bootstrap">Hello Bootstrap</Link></li>
        </ul>
        <div className={styles.content}>
           {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
