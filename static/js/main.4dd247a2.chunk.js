(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e){e.exports={nudata:{name:"NuData",language:"PHP"},sap:{name:"SAP",language:"JavaScript"}}},18:function(e,t,a){e.exports=a(30)},23:function(e,t,a){},26:function(e,t,a){},3:function(e){e.exports=[{name:"treddit",source:"PersonalAmusingBettong",sourceType:"gfy",tags:["JavaScript","HTML","CSS"],description:"A chrome extension that uses images or videos from reddit as background images on trello. Uses background scripts to handle CORS requests to Reddit's JSON API. Asynchronously makes requests to gfycat (a popular .webm hosting site) to get information on the source and length of videos.",link:"https://github.com/seanlennaerts/treddit"},{name:"bikecouch",source:"",sourceType:"gfy",tags:["Flutter","Dart","JavaScript","Firebase","Google Cloud"],description:"Callenge a friend to take a picture of two objects (i.e. sunscreen and a flip-flop). Uses Firebase to authenticate users and Google's Cloud Functions and Google's Vision API to label objects in the photo.",link:"https://github.com/boxofsquares/bikecouch"},{name:"dice",source:"BigParallelIndochinesetiger",sourceType:"gfy",tags:["OpenCV","C++"],description:"Using computer vision to detect dice face numbers. Originally designed to display roll results to our remote D&D player.",link:"https://github.com/seanlennaerts/dice"},{name:"Notes app",source:"TiredShoddyAnophelesmosquito",sourceType:"ios",tags:["Flutter","Dart","SQLite"],description:"A material design clone of the iOS Notes app made with Google's Flutter, with an emphasis on storing sensative data.",link:"https://github.com/seanlennaerts/notes"},{name:"peachai",source:"VariableHomelyKingbird",sourceType:"gfy",tags:["OpenCV","C++"],description:"Generating training data for a MarioKart Wii neural network. With the goal of making an AI that plays like me.",link:"https://github.com/seanlennaerts/peachai"},{name:"Groceries app",source:"",sourceType:"gfy",tags:["React Native","JavaScript"],description:"An iOS and Android app that let's two users keep track of grocery expenses. Data stored on Firebase's realtime database. App listens to changes on the database and suggests who should pay next in real time.",link:"https://github.com/seanlennaerts/groceries"},{name:"GTheatre",source:"BleakInconsequentialGermanshepherd",sourceType:"gfy",tags:["Heroku","PHP","MySQL","JavaScript","HTML","CSS"],description:"Database class group project. A webapp for a fictional movie theater to manage screenings and for movie goers to purchase tickets. Employee and Movie data stored in a SQL database and the frontend was made with PHP and hosted on Heroku.",link:"https://github.com/hjy0102/GTheatre"},{name:"Course scheduler",source:"FocusedTallDiscus",sourceType:"gfy",tags:["TypeScript","Node.js","JavaScript","HTML","CSS"],description:"Software engineering class partner project. Let's you select courses and buildings from UBC's Pair database and then it greedily creates a schedule.",link:"https://github.com/seanlennaerts/course-scheduler"},{name:"lennaerts.me",source:"",sourceType:"",tags:["React","JavaScript","HTML","CSS"],description:"This website. Made with React, hosted on GitHub Pages.",link:"https://github.com/seanlennaerts/resume"}]},30:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),s=a.n(r),i=(a(23),a(11)),c=a(12),l=a(16),u=a(13),d=a(17),m=a(6),p=(a(26),a(3)),h=a(14),g=a(4),f=a(2),b=a(15),v=a(7),y=a(5);f.b.add(y.a,v.a,v.b,y.b,y.c);var w,k;function E(e){return o.a.createElement("a",{href:e.link,target:e.newTab?"_blank":"",rel:e.newTab?"noopener noreferrer":""},o.a.createElement("div",{className:"social"},o.a.createElement(b.a,{icon:[e.prefix,e.icon]}),e.text))}function T(e){return o.a.createElement("div",{className:"tag",style:{backgroundColor:g[e.name.toLowerCase()]}},e.name)}function C(e){return o.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("div",{className:"card"},function(e,t){switch(e){case"gfy":return o.a.createElement("video",{muted:!0,loop:!0,playsInline:!0,poster:"https://thumbs.gfycat.com/".concat(t,"-mobile.jpg")},o.a.createElement("source",{src:"https://thumbs.gfycat.com/".concat(t,"-mobile.mp4")}));case"ios":return o.a.createElement("div",{className:"ios"},o.a.createElement("video",{muted:!0,loop:!0,playsInline:!0,poster:"https://thumbs.gfycat.com/".concat(t,"-mobile.jpg")},o.a.createElement("source",{src:"https://thumbs.gfycat.com/".concat(t,"-mobile.mp4")})));default:return}}(e.sourceType,e.source),o.a.createElement("div",{className:"card-body"},o.a.createElement("h2",null,e.name),o.a.createElement("p",null,e.description),o.a.createElement("div",{className:"tags"},function(e){var t=[];return e.forEach(function(e){t.push(o.a.createElement(T,{name:e}))}),t}(e.tags)))))}var S=[];function j(){for(var e=function(e){var t=k[e].offsetTop,a=k[e].offsetHeight,n=t+a;if(Math.max(0,Math.min(a,window.pageYOffset+window.innerHeight-t,n-window.pageYOffset))/a>.2){if(!S[e]){var o=k[e].play();void 0!==o&&o.then(function(){S[e]=!0})}}else S[e]&&(k[e].pause(),S[e]=!1)},t=0;t<k.length;t++)e(t)}var A=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=window.location.href.split("#")[1];w=h[e],!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform)}},{key:"componentDidMount",value:function(){k=document.getElementsByTagName("video");var e=parseInt(window.getComputedStyle(document.getElementById("projects")).width),t=document.getElementsByClassName("card")[0].offsetWidth;j(Math.round(e/t)),window.addEventListener("scroll",Object(m.throttle)(j,500)),window.addEventListener("resize",Object(m.throttle)(j,500))}},{key:"buildProjectCards",value:function(){var e=[];return p.forEach(function(t){e.push(o.a.createElement(C,{sourceType:t.sourceType,source:t.source,name:t.name,link:t.link,description:t.description,tags:t.tags}))}),e}},{key:"buildRainbow",value:function(){var e={},t=0;p.forEach(function(a){a.tags.forEach(function(a){t++,e.hasOwnProperty(a)?e[a]=e[a]+1:e[a]=1})});var a=[];for(var n in e)a.push(o.a.createElement("span",{style:{width:"".concat(e[n]/t*100,"%"),background:g[n.toLowerCase()]}}));return a}},{key:"buildNotifToRecruiter",value:function(){var e=0;return p.forEach(function(t){t.tags.forEach(function(t){t.toLowerCase()===w.language.toLowerCase()&&(console.log(t),e++)})}),o.a.createElement("div",{class:"notif slide-in-top"},o.a.createElement("span",{class:"emoji",role:"img","aria-label":"wave"},"\ud83d\udc4b"),o.a.createElement("div",null,o.a.createElement("h2",null,"Hello ",w.name,"! "),o.a.createElement("p",null,"I have ",e,"\xa0",o.a.createElement("button",{style:{backgroundColor:g[w.language.toLowerCase()]}},w.language),1===e?" project ":" projects ","that you may be interested in")))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"header"},w?this.buildNotifToRecruiter():null,o.a.createElement("h1",null,"Sean Lennaerts"),o.a.createElement("div",{className:"socials"},o.a.createElement(E,{link:"mailto:seanlennaerts@gmail.com",prefix:"fas",icon:"envelope",text:"seanlennaerts@gmail.com",newTab:!0}),o.a.createElement(E,{link:"https://github.com/seanlennaerts",prefix:"fab",icon:"github",text:"/seanlennaerts",newTab:!0}),o.a.createElement(E,{link:"https://www.linkedin.com/in/seanlennaerts/",prefix:"fab",icon:"linkedin",text:"/seanlennaerts",newTab:!0}))),o.a.createElement("div",{className:"rainbow"},this.buildRainbow()),o.a.createElement("div",{id:"projects"},this.buildProjectCards()),o.a.createElement("footer",{className:"footer"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e){e.exports={javascript:"#f1e05a",react:"#61dafb",html:"#e34c26",css:"#563d7c","c++":"#f34b7d",opencv:"#FFA500",dart:"#00B4AB",flutter:"#055A9D","node.js":"#69A063",firebase:"#FFCA27","google cloud":"#FBBC06",sqlite:"#054A64","react native":"#05A5D0",php:"#4F5D95",mysql:"#4579A1",typescript:"#2b7489",heroku:"#79589F"}}},[[18,2,1]]]);
//# sourceMappingURL=main.4dd247a2.chunk.js.map