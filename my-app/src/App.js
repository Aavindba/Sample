import React,{Component} from 'react';
import logo from './logo.svg';
import element from './namefun' ;
import './App.css';

import GetGreeting from './ifnamefun';
import Tick from './Tick';
import Hello,{Multiple} from './components';
// import Welcome from './components';
import Clock from './state'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetGreeting />
        <Clock  />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Arvind Welcome to Reactjs</h1>
          <h2>It is {new Date().toLocaleTimeString()}</h2>
          
        </header>
        
         
        {element}

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Working on the Reactjs Environment<br/>
          <a href="https://www.google.com/">Click Here to open Google</a>
        </p>
        <Tick/>
        {/* <Welcome name="Sara!"/>  */}
        {Hello}
        <Multiple/>


      </div>
    );
  }
}

export default App;
