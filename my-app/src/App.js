import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Arvind Welcome to Reactjs</h1>
          <img src="https://2.bp.blogspot.com/-5VW_PMw8kpo/WZCgw8zVX-I/AAAAAAAAFm8/Mgoi5Ieo6VEXfPTtyEU41S122jHMsEREwCLcBGAs/s1600/Top%2B10%2Bvideo%2Btutorials%2Bto%2Blearn%2BReact%2BJS.png" alt="LearnRecatjs"/>
          <p><b>Working</b> on the <i>Reactjs</i> Environment</p>
          <a href="https://www.google.com/">Click Here to open Google</a>
          
        </header>
        <button type="input">HTML</button>
        <button type="input">CSS</button>
        <button type="input">JavaScript</button>
        <button type="input">Reactjs</button>
        <h2>Working on Reactjs to get used to the Environment</h2>   
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Working on the Reactjs Environment<br/>
          <a href="https://www.google.com/">Click Here to open Google</a>
        </p>
      </div>
    );
  }
}

export default App;
