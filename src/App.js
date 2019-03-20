import React, { Component } from 'react';
import { throttle } from 'lodash';
import './App.css';
import projects from './projects.json';
import companies from './companies.json';
import colors from './colors.json';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faGithub, faLinkedin, faFile, faTimesCircle);
var mobile = false;
var company;

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
          {/* <source src={mobile ? `https://thumbs.gfycat.com/${source}-mobile.mp4` : `https://giant.gfycat.com/${source}.webm`} /> */}
          <source src={`https://thumbs.gfycat.com/${source}-mobile.mp4`} />
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
            {/* <source src={mobile ? `https://thumbs.gfycat.com/${source}-mobile.mp4` : `https://giant.gfycat.com/${source}.webm`} /> */}
            <source src={`https://thumbs.gfycat.com/${source}-mobile.mp4`} />
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


var videos;
var playing = [];

function setPlaying(index) {
  playing[index] = true;
}

function handleScroll() {
  for (let i = 0; i < videos.length; i++) {
    let top = videos[i].offsetTop;
    let height = videos[i].offsetHeight;
    let bottom = top + height;

    let visibleY = Math.max(0, Math.min(height, window.pageYOffset + window.innerHeight - top, bottom - window.pageYOffset));
    let visible = visibleY / height;

    if (visible > 0.2) {
      if (!playing[i]) {
        let playPromise = videos[i].play();
        if (playPromise !== undefined) {
          playPromise.then(() => setPlaying(i));
        }
      }
    } else {
      if (playing[i]) {
        videos[i].pause();
        playing[i] = false;
      }
    }
  }
}

class App extends Component {
  componentWillMount() {
    // vanity url
    let vanity = window.location.href.split('#')[1];
    company = companies[vanity];
    mobile = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  }

  componentDidMount() {
    videos = document.getElementsByTagName('video');

    let projectsWidth = parseInt(window.getComputedStyle(document.getElementById('projects')).width);
    let cardWidth = document.getElementsByClassName('card')[0].offsetWidth;

    handleScroll(Math.round(projectsWidth / cardWidth)); //to start playing videos already in view
    window.addEventListener('scroll', throttle(handleScroll, 500));
    window.addEventListener('resize', throttle(handleScroll, 500));
  }

  buildProjectCards() {
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

  buildRainbow() {
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

  buildNotifToRecruiter() {
    let count = 0;
    projects.forEach((project) => {
      project.tags.forEach((tag) => {
        if (tag.toLowerCase() === company.language.toLowerCase()) {
          console.log(tag)
          count++;
        }
      });
    });
    return (
      <div class="notif slide-in-top">
        <span class="emoji" role="img" aria-label="wave">👋</span>
        <div><h2>Hello {company.name}! </h2>
          <p>I have {count}&nbsp;
            <button
              // onClick={() => this.state.filter.length > 0 ? this.setState({ filter: '' }) : this.setState({ filter: company.language })}
              style={{ backgroundColor: colors[company.language.toLowerCase()] }}>
              {company.language}
            </button>
            {count === 1 ? ' project ' : ' projects '}
            that you may be interested in
          </p>
        </div>
      </div>);
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          {company ? this.buildNotifToRecruiter() : null}
          <h1>Sean Lennaerts</h1>
          <div className="socials">
            <Social
              link='mailto:seanlennaerts@gmail.com'
              prefix='fas'
              icon='envelope'
              text='seanlennaerts@gmail.com'
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
          </div>
        </header>
        <div className="rainbow">
          {this.buildRainbow()}
        </div>
        <div id="projects">
          {this.buildProjectCards()}
        </div>
        <footer className="footer">

        </footer>
      </div>
    );
  }
}

export default App;
