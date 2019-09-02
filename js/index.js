const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is AwenavAOne',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street navAOnewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// Navigation
let navA = document.querySelectorAll('a');
navA[0].innerText = siteContent['nav']['nav-item-1'];
navA[1].innerText = siteContent['nav']['nav-item-2'];
navA[2].innerText = siteContent['nav']['nav-item-3'];
navA[3].innerText = siteContent['nav']['nav-item-4'];
navA[4].innerText = siteContent['nav']['nav-item-5'];
navA[5].innerText = siteContent['nav']['nav-item-6'];

navA.forEach(function(currentValue) {
  currentValue.style.color = 'green';
});

let nav = document.querySelector('nav');

let navAOne = document.createElement('a');
navAOne.style.color = 'green';
navAOne = 'Home';

nav.prepend(navAOne);

let navATwo = document.createElement('a');
navATwo.style.color = 'green';
navATwo = 'FAQ';

nav.append(navATwo);

// CTA
let headerText = document.querySelector('h1');
headerText.innerText = siteContent.cta.h1;

let btn = document.querySelector('button');
btn.innerText = siteContent.cta.button;

let headerImage = document.getElementById('header-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// Main-Content

let contentHeadings = document.querySelector('h4');
contentHeadings[0].innerText = siteContent['main-content']['features-h4'];
contentHeadings[1].innerText = siteContent['main-content']['about-h4'];
contentHeadings[2].innerText = siteContent['main-content']['services-h4'];
contentHeadings[3].innerText = siteContent['main-content']['product-h4'];
contentHeadings[4].innerText = siteContent['main-content']['vision-h4'];

let contentParagraphs = document.querySelector('p');
contentParagraphs[0].innerText =
  siteContent['main-content']['features-content'];
contentParagraphs[1].innerText = siteContent['main-content']['about-content'];
contentParagraphs[2].innerText =
  siteContent['main-content']['services-content'];
contentParagraphs[3].innerText = siteContent['main-content']['product-content'];
contentParagraphs[4].innerText = siteContent['main-content']['vision-content'];

let midPageAccent = document.getElementById('mid-page-accent');
logo.setAttribute('src', siteContent['nav']['img-src']);

// Contact

let contact = document.querySelector('contact-h4');
contact.innerText = siteContent['contact']['contact-h4'];

// Footer

let footer = document.querySelector('footer');
footer.innerText = siteContent.footer.copyright;
