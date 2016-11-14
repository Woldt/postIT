import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './../DatabasePosts/Posts'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Posts />

      </div>
    );
  }
}
