import React, { Component } from 'react';
import './App.css';
import projects from './projects.json';
import colors from './colors.json';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faLinkedin, faFile);
var mobile = false;

//https://api.gfycat.com/v1/gfycats/

function Social(props) {
  return (
    <a
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

function buildVideo(type, source) {
  switch (type) {
    case 'gfy':
      return (
        <video
          muted
          loop
          playsInline
          poster={`https://thumbs.gfycat.com/${source}-mobile.jpg`}
        >
          <source src={mobile ? `https://thumbs.gfycat.com/${source}-mobile.mp4` : `https://giant.gfycat.com/${source}.webm`} />
        </video>
      );
    case 'ios':
      return (
        <div className="ios">
          <video
            muted
            loop
            playsInline
            poster={`https://thumbs.gfycat.com/${source}-mobile.jpg`}
          >
            <source src={mobile ? `https://thumbs.gfycat.com/${source}-mobile.mp4` : `https://giant.gfycat.com/${source}.webm`} />
          </video>
        </div>
      );
    default:
      return;
  }
}

function Card(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card">
        {buildVideo(props.sourceType, props.source)}
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
        sourceType={project.sourceType}
        source={project.source}
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

var videos;
var playing = [];

function handleScroll() {
  for (let i = 0; i < videos.length; i++) {
    let video = videos[i];
    let top = video.offsetTop;
    let height = video.offsetHeight;
    let bottom = top + height;

    let visibleY = Math.max(0, Math.min(height, window.pageYOffset + window.innerHeight - top, bottom - window.pageYOffset));
    let visible = visibleY / height;

    if (visible > 0.5) {
      if (!playing[i]) {
        let playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.then(_ => {
            playing[i] = true;
          });
        }
      }
    } else {
      if (playing[i]) {
        video.pause();
        playing[i] = false;
      }
    }
  }
}

class App extends Component {

  componentWillMount() {
    mobile = !!navigator.platform && /iPhone|iPod/.test(navigator.platform);
  }

  componentDidMount() {
    videos = document.getElementsByTagName('video');
    handleScroll(); //to start playing videos already in view
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Sean Lennaerts</h1>
          <div className="socials">
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
