// JavaScript for navigation toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// JavaScript for smooth scrolling and updating active navigation link
let navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();

  const targetId = this.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);

  window.scrollTo({
    top: targetSection.offsetTop - 90,
    behavior: 'smooth'
  });
}

// JavaScript for updating active navigation link on scroll
let sections = document.querySelectorAll('section');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // Add sticky class to header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', top > 100);

  // Close menu on scroll
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// JavaScript for buttons and contact form
let contactForm = document.querySelector('#contact-form');
let submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  // Add your form submission logic here
  // For example, you can use the Fetch API to send form data to a server
  // and handle the response accordingly.
  // You may also want to validate the form data before submitting.
  console.log('Form submitted!');
});
