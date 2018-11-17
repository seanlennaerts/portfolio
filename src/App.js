import React, { Component } from 'react';
import './App.css';
import projects from './projects.json';
import colors from './colors.json';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faFile } from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faEnvelope, faPhone, faLinkedin, faFile);

//https://api.gfycat.com/v1/gfycats/

function Social(props) {
  return (
    <a
      className="social-link"
      href={props.link}
      target={props.newTab ? "_blank" : ""}
      rel={props.newTab ? "noopener noreferrer" : ""}
    >
      <div className="social">
        <FontAwesomeIcon icon={[props.prefix, props.icon]} />
        {props.text}
      </div>
    </a>
  );
}

function Tag(props) {
  return (
    <div
      className="tag"
      style={{ backgroundColor: colors[props.name.toLowerCase()] }}
    >
      {props.name}
    </div>
  );
}

function buildTags(tags) {
  let t = [];
  tags.forEach((tag) => {
    t.push(
      <Tag
        name={tag}
      />
    )
  });
  return t;
}

function Card(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card">
        <video
          autoPlay
          muted
          loop
        >
          <source src={props.gfy} type="video/webm" />
        </video>
        <div className="card-body">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <div className="tags">
            {buildTags(props.tags)}
          </div>
        </div>
      </div>
    </a>
  );
}

function buildProjectCards() {
  let cards = []
  projects.forEach((project) => {
    cards.push(
      <Card
        gfy={project.gfy}
        name={project.name}
        link={project.link}
        description={project.description}
        tags={project.tags}
      />
    );
  });
  return cards;
}

function buildRainbow() {
  let count = {};
  let total = 0;
  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      total++;
      if (!count.hasOwnProperty(tag)) {
        count[tag] = 1;
      } else {
        count[tag] = count[tag] + 1;
      }
    });
  });
  console.log(count);
  console.log(total);
  let spans = [];
  for (let key in count) {
    spans.push(
      <span
        style={{
          width: `${count[key] / total * 100}%`,
          background: colors[key.toLowerCase()]
        }}>
      </span>
    );
  }
  return spans;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Sean Lennaerts</h1>
          <div className="socials">
            <Social
              link='tel:***REMOVED***'
              prefix='fas'
              icon='phone'
              text='***REMOVED***'
            />
            <Social
              link='mailto:***REMOVED***'
              prefix='fas'
              icon='envelope'
              text='***REMOVED***'
              newTab
            />
            <Social
              link='https://github.com/seanlennaerts'
              prefix='fab'
              icon='github'
              text='/seanlennaerts'
              newTab
            />
            <Social
              link='https://www.linkedin.com/in/seanlennaerts/'
              prefix='fab'
              icon='linkedin'
              text='/seanlennaerts'
              newTab
            />
            <Social
              link=''
              prefix='fas'
              icon='file'
              text='Resume'
            />
          </div>
        </header>
        <div className="rainbow">
          {buildRainbow()}
        </div>
        <div className="projects">
          {buildProjectCards()}
        </div>
        <footer className="footer">

        </footer>
      </div>
    );
  }
}

export default App;
