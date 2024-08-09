document.querySelector('#blog').onclick = () => {
    document.querySelector('.header .navbar').classList.add('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('.header .navbar').classList.remove('active');
}
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.header .navbar');
    const blogIcon = document.querySelector('#blog');
    if (!navbar.contains(event.target) && !blogIcon.contains(event.target)) {
        navbar.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Close the navbar after clicking a link
        document.querySelector('.header .navbar').classList.remove('active');
    });
});

// GSAP animations
gsap.from('.logo', { opacity: 0, duration: 1, delay: 2, y: 10 });
gsap.from('.navbar a', { opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2 });
gsap.from('.title', { opacity: 0, duration: 1, delay: 1.6, y: 30 });
gsap.from('.description', { opacity: 0, duration: 1, delay: 1.8, y: 30 });
gsap.from('.btn', { opacity: 0, duration: 1, delay: 2.1, y: 30 });
gsap.from('.image', { opacity: 0, duration: 1, delay: 2.6, y: 30 });

