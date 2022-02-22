import { Component } from 'react';
import './App.css';
import { List } from './List';


class App extends Component {
  render() {
    return (
    <div className='App'>
      <div className='container'>
      <h1>To Do List</h1>
      </div>
      <div className='container' >
        <List/>
      </div>
    </div>
    )
  }
}

export default App;
