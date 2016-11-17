import React, { Component } from 'react';


export default class Tutorial extends Component {
  render() {
    return (
      <div>
        <h1>Tutorial</h1>
        <p>
          Hvis du ønsker å finne ut, og lære! hvordan vi har laget denne nettsiden, kan jeg avsløre at den bruker en backend server,
          MongoDB og et selv skrevet RESTapi. Hvis dette høres kult ut, og du ønsker å finne ut mer kan du lese tutorialen vår!
        </p>
        <h5>Link til <a target="_blank" href="https://drive.google.com/open?id=0Bwq3xHrSqA2yRVRrTk5mUnFGZ3M">tutorial</a> på Google Drive</h5>
      </div>
    );
  }
}
