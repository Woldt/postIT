import React, { Component } from 'react';
import './App.css';
import Posts from './../DatabasePosts/Posts'
import Navigation from '../NavBar/Navigation'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <div className="App">
          <Posts />
        </div>
      </div>
    );
  }
}
