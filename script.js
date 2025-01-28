
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const linksInternos = document.querySelectorAll('a[href^="#"]');
  
    linksInternos.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const id = link.getAttribute('href');
        const targetOffset = document.querySelector(id).offsetTop;
  
        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
      });
    });
  });
  