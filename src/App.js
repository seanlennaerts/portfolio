import React, { Component } from 'react';
import { throttle } from 'lodash';
import './App.css';
import projects from './projects.json';
import colors from './colors.json';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faGithub, faLinkedin, faFile);
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

// function flip() {
//   // div.classList.toggle('flipped');
//   alert(this);
// }

function Card(props) {
  return (
    <div className="card-wrapper" onClick={(card) => {
      card.classList.toggle('flipped');
    }}>
      <div className="card-inner">
        <div className="card-front">
          {buildVideo(props.sourceType, props.source)}
          <div className="card-body">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className="tags">
              {buildTags(props.tags)}
            </div>
          </div>
        </div>
        <div className="card-back">
          beep boops
        </div>
      </div>
    </div>
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

function setPlaying(index) {
  playing[index] = true;
}

function handleScroll() {
  // for (let i = 0; i < videos.length; i++) {
  //   let top = videos[i].offsetTop;
  //   let height = videos[i].offsetHeight;
  //   let bottom = top + height;

  //   let visibleY = Math.max(0, Math.min(height, window.pageYOffset + window.innerHeight - top, bottom - window.pageYOffset));
  //   let visible = visibleY / height;

  //   if (visible > 0.2) {
  //     if (!playing[i]) {
  //       let playPromise = videos[i].play();
  //       if (playPromise !== undefined) {
  //         playPromise.then(() => setPlaying(i));
  //       }
  //     }
  //   } else {
  //     if (playing[i]) {
  //       videos[i].pause();
  //       playing[i] = false;
  //     }
  //   }
  // }
}

class App extends Component {
  componentWillMount() {
    mobile = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  }

  componentDidMount() {
    videos = document.getElementsByTagName('video');

    let projectsWidth = parseInt(window.getComputedStyle(document.getElementById('projects')).width);
    let cardWidth = document.getElementsByClassName('card-wrapper')[0].offsetWidth;

    handleScroll(Math.round(projectsWidth / cardWidth)); //to start playing videos already in view
    window.addEventListener('scroll', throttle(handleScroll, 500));
    window.addEventListener('resize', throttle(handleScroll, 500));
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Sean Lennaerts</h1>
          <div className="socials">
            <Social
              link='mailto:seanlenny@gmail.com'
              prefix='fas'
              icon='envelope'
              text='seanlenny@gmail.com'
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
        <div id="projects">
          {buildProjectCards()}
        </div>
        <footer className="footer">

        </footer>
      </div>
    );
  }
}

export default App;
