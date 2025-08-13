// DOM Elements
const darkModeToggle = document.getElementById('darkModeToggle');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

// Dark Mode Toggle
function toggleDarkMode() {
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    
    // Update icon
    const icon = darkModeToggle.querySelector('i');
    icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
}

// Initialize theme from localStorage
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    
    const icon = darkModeToggle.querySelector('i');
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .scroll-indicator');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const y = targetSection.getBoundingClientRect().top + window.pageYOffset - 70;
                window.scrollTo({ top: y, behavior: 'smooth' });
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add fade-in class to elements that should animate
    const animateElements = document.querySelectorAll('.about-content, .project-card, .certification-card, .contact-content, .skill-category, .experience-card');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Particle Animation for Hero Section
function initParticleAnimation() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    // Create floating particles
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 4 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    // Apply styles
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        left: ${x}%;
        top: ${y}%;
        animation: float-particle ${duration}s ease-in-out infinite;
        animation-delay: ${delay}s;
        pointer-events: none;
    `;
    
    container.appendChild(particle);
}

// Add CSS for particle animation
const particleStyles = document.createElement('style');
particleStyles.textContent = `
    @keyframes float-particle {
        0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.1;
        }
        25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.3;
        }
        50% {
            transform: translateY(-40px) translateX(-5px);
            opacity: 0.5;
        }
        75% {
            transform: translateY(-20px) translateX(-10px);
            opacity: 0.3;
        }
    }
`;
document.head.appendChild(particleStyles);

// Navbar Scroll Effect
function initNavbarScroll() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const navbar = document.querySelector('.navbar');
        
        // Add/remove scrolled class for styling
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll (optional)
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Typing Effect for Hero Title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
}

// 3D Card Tilt Effect
function init3DCardEffect() {
    const cards = document.querySelectorAll('.project-card, .certification-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Button Hover Effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--x', `${x}px`);
            button.style.setProperty('--y', `${y}px`);
        });
    });
}

// Parallax Effect for Hero Background
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Loading Animation
function initLoadingAnimation() {
    // Add loading class to body
    body.classList.add('loading');
    
    // Remove loading class after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            body.classList.remove('loading');
        }, 500);
    });
}

// Add loading styles
const loadingStyles = document.createElement('style');
loadingStyles.textContent = `
    .loading {
        overflow: hidden;
    }
    
    .loading::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-primary);
        z-index: 9999;
        animation: fadeOut 0.5s ease forwards;
    }
    
    @keyframes fadeOut {
        to {
            opacity: 0;
            visibility: hidden;
        }
    }
    
    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    [data-theme="dark"] .navbar.scrolled {
        background: rgba(15, 23, 42, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: var(--bg-primary);
        border-top: 1px solid var(--border-color);
        padding: 1rem 0;
        box-shadow: var(--shadow-medium);
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(loadingStyles);

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initSmoothScrolling();
    initScrollAnimations();
    initParticleAnimation();
    initNavbarScroll();
    initTypingEffect();
    init3DCardEffect();
    initButtonEffects();
    initParallaxEffect();
    initLoadingAnimation();
    
    // Event listeners
    darkModeToggle.addEventListener('click', toggleDarkMode);
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', throttle(() => {
        if (window.scrollY > 600) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }, 100));
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const name = (formData.get('name') || '').toString().trim();
            const email = (formData.get('email') || '').toString().trim();
            const message = (formData.get('message') || '').toString().trim();

            if (!name || !email || !message) {
                formStatus.textContent = 'Please fill in all fields.';
                formStatus.style.color = 'var(--accent-primary)';
                return;
            }

            // For now, just simulate success
            formStatus.textContent = 'Thanks! Your message has been sent.';
            formStatus.style.color = 'var(--text-secondary)';
            contactForm.reset();
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-menu') && !e.target.closest('.mobile-menu-toggle')) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations can be added here
}, 16)); // ~60fps
