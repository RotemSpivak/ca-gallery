(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict



var gProjs

function initProj(){
  gProjs = getProjects()
  renderProjects(gProjs)
  renderModals()
}

function createProj(name,title,desc,url,labels,link){
  return {
     id: makeId(),
     name,
     title,
     desc,
     url,
     publishedAt: Date.now(),
     labels,
     link,
    }
}

function renderProjects(){
  var projs =getProjects()
  var strHTMLs = projs.map(project =>{
    return `
    <div class="project-item">
      <img src="${project.url}">
      <h1>${project.name}</h1>
      <h2>${project.title}</h2>
      <button class="btn-show-modal" onclick="openModal('${project.name}')">View Project</button>
    </div>
    `
  })
  document.querySelector('#portfolio').innerHTML = strHTMLs.join('')
}


function renderModal(name){
  var modals = getProjects()
  var modal = modals.find((modal)=>name === modal.name)
  return  `
  <div class="project-modal ${name}-modal">
    <img src="${modal.url}">
    <h1>${modal.name}</h1>
    <h2>${modal.title}</h2>
    <p>${modal.desc}</p>
    <ul class="list-inline">
    <li>Date: ${modal.publishedAt}</li>
    <li>Client: Coding Academy 2022</li>
    <li>Category: Program</li>
    </ul>
    <a ${modal.link} target="_blank" rel="noopener noreferrer">Check it Out</a>
    <button class="btn btn-primary" onclick="closeModal('${name}')" data-dismiss="modal" type="button">
    Close Project</button>
  </div>
  `
}

function renderModals(){
  var modals = getProjects()
  var strHTMLs = modals.map(modal =>{
    return renderModal(modal.name)
   })
   document.querySelector('#portfolio').innerHTML += strHTMLs
}


function getProjects(){
  return [
    createProj('Minesweeper','Minesweeper 2022','This is a copy of a computer game called minesweeper that I programmed.','./img/portfolio/minesweeper.png', 'computer game', `href="https://rotemspivak.github.io/Mine-Sweeper/" `),
    createProj('Num-Game','The Number Game','Click the numbers in the correct order to win!','img/portfolio/04-thumbnail.jpg','computer game',`href="https://rotemspivak.github.io/num-game/" `),
    createProj('In-Picture-Game','What\'s in the picture?', 'Click on the correct answer', 'img/portfolio/05-thumbnail.jpg','computer game', `href="https://rotemspivak.github.io/in-picture-game/"`)
  ]
}


function projectNewTab(name){

}