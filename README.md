# Abhi Bhardwaj - Digital Portfolio

A modern, minimalistic, and fully responsive digital portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, dark mode toggle, 3D effects, and beautiful typography.

## 🌟 Features

### Design & UI
- **Modern Minimalistic Design** - Clean and professional aesthetic
- **Dark/Light Mode Toggle** - Seamless theme switching with localStorage persistence
- **Fully Responsive** - Optimized for laptops, tablets, and mobile devices
- **Beautiful Typography** - Inter font family for excellent readability
- **Smooth Animations** - CSS transitions and JavaScript-powered animations

### Interactive Elements
- **3D Card Tilt Effects** - Hover animations on project and certification cards
- **Particle Background** - Animated floating particles in hero section
- **Scroll Animations** - Elements fade in as you scroll
- **Smooth Scrolling** - Navigation links with smooth scroll behavior
- **Mobile Menu** - Responsive hamburger menu for mobile devices

### Sections
1. **Hero Section** - Full-screen introduction with animated background
2. **About Me** - Personal information with skill tags
3. **Projects** - Showcase of technical projects with hover effects
4. **Certifications** - Grid layout of professional certifications
5. **Contact** - Social links and contact information
6. **Footer** - Minimal footer with quick links

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No external dependencies or frameworks required

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. The portfolio is ready to use!

### File Structure
```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization

### Personal Information
Edit the following sections in `index.html`:

#### Hero Section
```html
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<p class="hero-subtitle">
    Your title and description
</p>
```

#### About Section
```html
<p>
    Your personal description here...
</p>
<div class="skills">
    <div class="skill-tag">Skill 1</div>
    <div class="skill-tag">Skill 2</div>
    <!-- Add more skills -->
</div>
```

#### Projects
```html
<div class="project-card">
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
        </div>
        <a href="#" class="btn btn-outline">View Project</a>
    </div>
</div>
```

#### Certifications
```html
<div class="certification-card">
    <div class="cert-content">
        <h3>Certificate Name</h3>
        <p>Issuer • Date</p>
        <a href="#" class="btn btn-outline">View Certificate</a>
    </div>
</div>
```

#### Contact Information
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <a href="mailto:your.email@example.com">your.email@example.com</a>
</div>
<div class="social-links">
    <a href="your-github-url" class="social-link" title="GitHub">
        <i class="fab fa-github"></i>
    </a>
    <!-- Add more social links -->
</div>
```

### Color Scheme
Modify the CSS variables in `styles.css`:

```css
:root {
    /* Light Mode Colors */
    --bg-primary: #ffffff;
    --bg-secondary: #f8fafc;
    --accent-primary: #3b82f6;
    --accent-secondary: #8b5cf6;
    /* Add more colors */
}

[data-theme="dark"] {
    /* Dark Mode Colors */
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --accent-primary: #60a5fa;
    /* Add more colors */
}
```

### Adding Images
Replace the placeholder divs with actual images:

```html
<!-- Instead of image-placeholder div -->
<img src="path/to/your/image.jpg" alt="Description" class="project-image">
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

### Mobile Features
- Hamburger menu for navigation
- Optimized touch targets
- Responsive typography
- Stacked layouts for better mobile experience

## 🎯 Performance Features

- **Optimized Animations** - Throttled scroll events for smooth performance
- **CSS Variables** - Efficient theme switching
- **Minimal JavaScript** - Lightweight and fast loading
- **Progressive Enhancement** - Works without JavaScript (basic functionality)

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them with the community!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Built with ❤️ using HTML, CSS, and JavaScript**
"# PortfolioAbhi" 
