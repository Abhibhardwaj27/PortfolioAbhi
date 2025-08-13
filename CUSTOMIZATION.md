# Customization Guide for Abhi Bhardwaj's Portfolio

## Quick Customization Steps

### 1. Update Social Media Links
In `index.html`, find the social links section and update the URLs:

```html
<div class="social-links">
    <a href="https://github.com/your-github-username" class="social-link" title="GitHub">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/your-linkedin-profile" class="social-link" title="LinkedIn">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://instagram.com/your-instagram" class="social-link" title="Instagram">
        <i class="fab fa-instagram"></i>
    </a>
</div>
```

### 2. Add Resume Download Link
Replace the placeholder resume link in the hero section:

```html
<a href="path/to/your/resume.pdf" class="btn btn-secondary" download>
    <span>Download Resume</span>
    <i class="fas fa-download"></i>
</a>
```

### 3. Add Real Project Images
Replace the placeholder divs with actual project screenshots:

```html
<!-- Instead of this: -->
<div class="image-placeholder">
    <i class="fas fa-seedling"></i>
</div>

<!-- Use this: -->
<img src="images/zengarden-screenshot.jpg" alt="ZenGarden Project" class="project-image">
```

### 4. Add Profile Picture
Replace the about section placeholder:

```html
<!-- Instead of this: -->
<div class="image-placeholder">
    <i class="fas fa-user"></i>
</div>

<!-- Use this: -->
<img src="images/profile-photo.jpg" alt="Abhi Bhardwaj" class="profile-image">
```

### 5. Add Certificate Images
Replace certification placeholders with actual certificate images:

```html
<!-- Instead of this: -->
<div class="image-placeholder">
    <i class="fas fa-certificate"></i>
</div>

<!-- Use this: -->
<img src="images/deloitte-certificate.jpg" alt="Deloitte Certificate" class="cert-image">
```

## File Structure for Images
Create an `images` folder and organize your images:

```
portfolio/
├── images/
│   ├── profile-photo.jpg
│   ├── zengarden-screenshot.jpg
│   ├── solar-energy-screenshot.jpg
│   ├── deloitte-certificate.jpg
│   ├── cisco-certificate.jpg
│   └── other-certificates.jpg
├── index.html
├── styles.css
├── script.js
└── README.md
```

## CSS Updates for Images
Add these styles to `styles.css` for proper image display:

```css
.profile-image {
    width: 300px;
    height: 300px;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: var(--shadow-heavy);
    transition: transform 0.3s ease;
}

.profile-image:hover {
    transform: scale(1.05) rotate(5deg);
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.cert-image img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto;
    display: block;
}
```

## SEO Optimization
Add these meta tags to the `<head>` section of `index.html`:

```html
<meta name="description" content="Abhi Bhardwaj - Final-year B.Tech CSE Student, Data Science Enthusiast, and Full Stack Developer. View my projects and certifications.">
<meta name="keywords" content="Abhi Bhardwaj, Portfolio, Data Science, Machine Learning, Full Stack Developer, React, Node.js, Python">
<meta name="author" content="Abhi Bhardwaj">
<meta property="og:title" content="Abhi Bhardwaj - Portfolio">
<meta property="og:description" content="Data Science Enthusiast and Full Stack Developer">
<meta property="og:type" content="website">
<meta property="og:url" content="https://your-domain.com">
<meta property="og:image" content="https://your-domain.com/images/profile-photo.jpg">
```

## Performance Tips

1. **Optimize Images**: Compress all images to reduce file size
2. **Use WebP Format**: Convert images to WebP for better compression
3. **Lazy Loading**: Add `loading="lazy"` to images below the fold
4. **CDN**: Host images on a CDN for faster loading

## Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your portfolio folder to Netlify
2. Your site will be deployed instantly
3. Get a custom domain if needed

### Vercel
1. Connect your GitHub repository to Vercel
2. Automatic deployments on every push
3. Custom domain support

## Testing Checklist

- [ ] All links work correctly
- [ ] Dark mode toggle functions properly
- [ ] Mobile menu works on all devices
- [ ] Images load properly
- [ ] Smooth scrolling works
- [ ] Animations are smooth
- [ ] Contact form/email links work
- [ ] Social media links open in new tabs
- [ ] Resume download works
- [ ] All sections are responsive

## Browser Testing

Test your portfolio on:
- Chrome (Desktop & Mobile)
- Firefox (Desktop & Mobile)
- Safari (Desktop & Mobile)
- Edge (Desktop & Mobile)

## Final Steps

1. Replace all placeholder content with your actual information
2. Add real project screenshots and descriptions
3. Upload actual certificate images
4. Test all functionality
5. Deploy to your preferred platform
6. Share your portfolio URL!

Your portfolio is now ready to showcase your skills and projects professionally! 🚀
