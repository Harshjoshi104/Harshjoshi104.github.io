// Active nav link on scroll
    document.addEventListener('DOMContentLoaded', function() {
      const navLinks = document.querySelectorAll('nav a');
      const sections = document.querySelectorAll('main section');

      function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= (sectionTop - 120)) {
            current = section.getAttribute('id');
          }
        });
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
          }
        });
      }

      window.addEventListener('scroll', updateActiveLink);
      updateActiveLink();
    });
    const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');        // expand/collapse menu
  hamburger.classList.toggle('active'); // animate hamburger to X
});
