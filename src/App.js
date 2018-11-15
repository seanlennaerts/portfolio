import React, { Component } from 'react';
import './App.css';

import projects from './projects.json';

class App extends Component {


  buildProjectCards() {
    let cards = []
    projects.forEach((project) => {
      cards.push(<div className="card">{project.name}</div>);
    });
    return cards;
  }

  render() {
    console.log(projects);
    return (
      <div className="App">
        <header className="header">
          Sean Lennaerts
        </header>
        <div className="projects">
          {this.buildProjectCards()}
        </div>
      </div>
    );
  }
}

export default App;
