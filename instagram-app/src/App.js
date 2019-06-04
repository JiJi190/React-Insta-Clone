import React , { Component } from 'react';
import dummyData from './dummy-data.js'
import './App.css';
import searchbar from './components/SearchBar/searchbar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      dummyData: dummyData
    }
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App;