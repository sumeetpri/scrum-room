import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {

   joinRoom(e){
    e.preventDefault();
    fetch('/join')
      .then(res=>res)
      .then(result => console.log(result))
  }

  render() {
    return  <div className="App">
    <header className="App-header">
    <div>
      <input type="text" placeholder="Name"/>
      <input type="text" placeholder="Room"/>
      <button onClick={this.joinRoom}> Join Room</button>
    </div>  
    </header>
  </div>;
  }
}

export default App;
