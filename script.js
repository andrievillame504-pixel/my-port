
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');
    const logo = document.querySelector('.logo');
    
  
    nav.style.opacity = '0';
    nav.style.transform = 'translateY(-30px)';
    
    setTimeout(() => {
        nav.style.transition = 'all 0.8s ease';
        nav.style.opacity = '1';
        nav.style.transform = 'translateY(0)';
    }, 500);
    
    navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            link.style.transition = `all 0.5s ease ${index * 0.1}s`;
            link.style.opacity = '1';
            link.style.transform = 'translateX(0)';
        }, 800 + (index * 100));
    });
    
  
    logo.style.animation = 'logoPulse 2s ease-in-out infinite';
    

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Add to script.js
document.addEventListener('mousemove', (e) => {
    const saturn = document.querySelector('.saturn-wrapper');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    saturn.style.transform = `
        translate(-50%, -50%) 
        rotateX(${y * 20}deg) 
        rotateY(${x * 40}deg)
    `;
});

// Reveal tech-stack on scroll
const projectRows = document.querySelectorAll('.project-row');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelector('.tech-stack').style.opacity = '1';
        }
    });
});

projectRows.forEach(row => observer.observe(row));