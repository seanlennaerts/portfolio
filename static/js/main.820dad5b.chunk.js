(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},25:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(10),r=a.n(s),i=(a(22),a(11)),c=a(12),l=a(15),u=a(13),d=a(16),m=a(3),p=(a(25),a(4)),h=a(5),g=a(2),f=a(14),b=a(6),y=a(7);g.b.add(y.a,b.a,b.b,y.b);var v,w=!1;function k(e){return o.a.createElement("a",{href:e.link,target:e.newTab?"_blank":"",rel:e.newTab?"noopener noreferrer":""},o.a.createElement("div",{className:"social"},o.a.createElement(f.a,{icon:[e.prefix,e.icon]}),e.text))}function E(e){return o.a.createElement("div",{className:"tag",style:{backgroundColor:h[e.name.toLowerCase()]}},e.name)}function T(e){return o.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("div",{className:"card"},function(e,t){switch(e){case"gfy":return o.a.createElement("video",{muted:!0,loop:!0,playsInline:!0,poster:"https://thumbs.gfycat.com/".concat(t,"-mobile.jpg")},o.a.createElement("source",{src:w?"https://thumbs.gfycat.com/".concat(t,"-mobile.mp4"):"https://giant.gfycat.com/".concat(t,".webm")}));case"ios":return o.a.createElement("div",{className:"ios"},o.a.createElement("video",{muted:!0,loop:!0,playsInline:!0,poster:"https://thumbs.gfycat.com/".concat(t,"-mobile.jpg")},o.a.createElement("source",{src:w?"https://thumbs.gfycat.com/".concat(t,"-mobile.mp4"):"https://giant.gfycat.com/".concat(t,".webm")})));default:return}}(e.sourceType,e.source),o.a.createElement("div",{className:"card-body"},o.a.createElement("h2",null,e.name),o.a.createElement("p",null,e.description),o.a.createElement("div",{className:"tags"},function(e){var t=[];return e.forEach(function(e){t.push(o.a.createElement(E,{name:e}))}),t}(e.tags)))))}var S=[];function C(){for(var e=function(e){var t=v[e].offsetTop,a=v[e].offsetHeight,n=t+a;if(Math.max(0,Math.min(a,window.pageYOffset+window.innerHeight-t,n-window.pageYOffset))/a>.2){if(!S[e]){var o=v[e].play();void 0!==o&&o.then(function(){S[e]=!0})}}else S[e]&&(v[e].pause(),S[e]=!1)},t=0;t<v.length;t++)e(t)}var A=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){w=!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform)}},{key:"componentDidMount",value:function(){v=document.getElementsByTagName("video");var e=parseInt(window.getComputedStyle(document.getElementById("projects")).width),t=document.getElementsByClassName("card")[0].offsetWidth;C(Math.round(e/t)),window.addEventListener("scroll",Object(m.throttle)(C,500)),window.addEventListener("resize",Object(m.throttle)(C,500))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"Sean Lennaerts"),o.a.createElement("div",{className:"socials"},o.a.createElement(k,{link:"mailto:seanlennaerts@gmail.com",prefix:"fas",icon:"envelope",text:"seanlennaerts@gmail.com",newTab:!0}),o.a.createElement(k,{link:"https://github.com/seanlennaerts",prefix:"fab",icon:"github",text:"/seanlennaerts",newTab:!0}),o.a.createElement(k,{link:"https://www.linkedin.com/in/seanlennaerts/",prefix:"fab",icon:"linkedin",text:"/seanlennaerts",newTab:!0}),o.a.createElement(k,{link:"",prefix:"fas",icon:"file",text:"Resume"}))),o.a.createElement("div",{className:"rainbow"},function(){var e={},t=0;p.forEach(function(a){a.tags.forEach(function(a){t++,e.hasOwnProperty(a)?e[a]=e[a]+1:e[a]=1})});var a=[];for(var n in e)a.push(o.a.createElement("span",{style:{width:"".concat(e[n]/t*100,"%"),background:h[n.toLowerCase()]}}));return a}()),o.a.createElement("div",{id:"projects"},function(){var e=[];return p.forEach(function(t){e.push(o.a.createElement(T,{sourceType:t.sourceType,source:t.source,name:t.name,link:t.link,description:t.description,tags:t.tags}))}),e}()),o.a.createElement("footer",{className:"footer"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e){e.exports=[{name:"treddit",source:"PersonalAmusingBettong",sourceType:"gfy",tags:["JavaScript","HTML","CSS"],description:"A chrome extension that uses images or videos from reddit as background images on trello. Uses background scripts to handle CORS requests to Reddit's JSON API. Asynchronously makes requests to gfycat (a popular .webm hosting site) to get information on the source and length of videos.",link:"https://github.com/seanlennaerts/treddit"},{name:"bikecouch",source:"",sourceType:"gfy",tags:["Flutter","Dart","JavaScript","Firebase","Google Cloud"],description:"Callenge a friend to take a picture of two objects (i.e. sunscreen and a flip-flop). Uses Firebase to authenticate users and Google's Cloud Functions and Google's Vision API to label objects in the photo.",link:"https://github.com/boxofsquares/bikecouch"},{name:"dice",source:"BigParallelIndochinesetiger",sourceType:"gfy",tags:["OpenCV","C++"],description:"Using computer vision to detect dice face numbers. Originally designed to display roll results to our remote D&D player.",link:"https://github.com/seanlennaerts/dice"},{name:"Notes app",source:"TiredShoddyAnophelesmosquito",sourceType:"ios",tags:["Flutter","Dart","SQLite"],description:"A material design clone of the iOS Notes app made with Google's Flutter, with an emphasis on storing sensative data.",link:"https://github.com/seanlennaerts/notes"},{name:"peachai",source:"VariableHomelyKingbird",sourceType:"gfy",tags:["OpenCV","C++"],description:"Generating training data for a MarioKart Wii neural network. With the goal of making an AI that plays like me.",link:"https://github.com/seanlennaerts/peachai"},{name:"Groceries app",source:"",sourceType:"gfy",tags:["React Native","JavaScript"],description:"An iOS and Android app that let's two users keep track of grocery expenses. Data stored on Firebase's realtime database. App listens to changes on the database and suggests who should pay next in real time.",link:"https://github.com/seanlennaerts/groceries"},{name:"GTheatre",source:"BleakInconsequentialGermanshepherd",sourceType:"gfy",tags:["Heroku","PHP","MySQL","JavaScript","HTML","CSS"],description:"Database class group project. A webapp for a fictional movie theater to manage screenings and for movie goers to purchase tickets. Employee and Movie data stored in a SQL database and the frontend was made with PHP and hosted on Heroku.",link:"https://github.com/hjy0102/GTheatre"},{name:"Course scheduler",source:"FocusedTallDiscus",sourceType:"gfy",tags:["TypeScript","Node.js","JavaScript","HTML","CSS"],description:"Software engineering class partner project. Let's you select courses and buildings from UBC's Pair database and then it greedily creates a schedule.",link:"https://github.com/seanlennaerts/course-scheduler"},{name:"lennaerts.me",source:"",sourceType:"",tags:["React","JavaScript","HTML","CSS"],description:"This website. Made with React, hosted on GitHub Pages.",link:"https://github.com/seanlennaerts/resume"}]},5:function(e){e.exports={javascript:"#f1e05a",react:"#61dafb",html:"#e34c26",css:"#563d7c","c++":"#f34b7d",opencv:"#FFA500",dart:"#00B4AB",flutter:"#055A9D","node.js":"#69A063",firebase:"#FFCA27","google cloud":"#FBBC06",sqlite:"#054A64","react native":"#05A5D0",php:"#4F5D95",mysql:"#4579A1",typescript:"#2b7489",heroku:"#79589F"}}},[[17,2,1]]]);
//# sourceMappingURL=main.820dad5b.chunk.js.map