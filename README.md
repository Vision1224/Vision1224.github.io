# Cybersecurity Resume Website

A professional cyberpunk-themed resume website showcasing cybersecurity expertise and technical experience.

![Version](https://img.shields.io/badge/version-1.0.0-00fff9)
![License](https://img.shields.io/badge/license-MIT-ff006e)
![Status](https://img.shields.io/badge/status-active-00ff41)

## 🚀 Live Site

Visit: [https://vision1224.github.io](https://vision1224.github.io)

## 📋 Overview

This repository contains a modern, responsive resume website with a cyberpunk aesthetic. The design balances professional presentation with unique visual elements that reflect expertise in cybersecurity and software development.

### Features

- ✨ **Cyberpunk Theme**: Matrix-inspired background, neon accents, and terminal aesthetics
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- ♿ **Accessible**: WCAG 2.1 AA compliant with keyboard navigation
- 🎨 **Smooth Animations**: Subtle effects that enhance without distracting
- 🔍 **SEO Optimized**: Meta tags, semantic HTML, and Schema.org markup
- 🖨️ **Print-Friendly**: Clean print stylesheet for PDF generation
- ⚡ **Performance**: Fast loading times with optimized assets

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid
- **Vanilla JavaScript**: No frameworks, pure performance
- **GitHub Pages**: Free hosting and automatic deployment

## 📁 Project Structure

```
Vision1224.github.io/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   ├── main.css          # Core styles
│   │   └── cyberpunk.css     # Theme styles
│   ├── js/
│   │   ├── main.js           # Core functionality
│   │   └── animations.js     # Visual effects
│   └── images/
│       └── favicon.ico
├── README.md                  # This file
└── claude.md                  # Living documentation
```

## 🚦 Getting Started

### Prerequisites

- Git installed on your machine
- A GitHub account
- A text editor (VS Code, Sublime, etc.)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vision1224/Vision1224.github.io.git
   cd Vision1224.github.io
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (with http-server installed)
     npx http-server
     ```

3. **View the site**
   - Navigate to `http://localhost:8000` in your browser

## 🔀 Branching Strategy

This project uses a structured branching approach:

- **`main`** - Production branch (live site)
- **`develop`** - Development/staging branch
- **`feature/*`** - Feature branches for new additions

### Workflow

1. Create a feature branch from `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "feat: description of changes"
   ```

3. Push and create pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Merge to `develop`, then to `main` for deployment

## 🎨 Customization

### Updating Content

**Personal Information**: Edit `index.html`
- Update name, title, and contact information
- Modify experience, education, and skills sections

**Colors**: Edit `assets/css/main.css`
```css
:root {
    --primary-bg: #0a0e27;
    --accent-cyan: #00fff9;
    --accent-magenta: #ff006e;
    /* ... */
}
```

**Fonts**: Replace Google Fonts links in `index.html`

### Adding Sections

1. Add HTML structure in `index.html`
2. Add styles in `assets/css/main.css`
3. Update navigation links

### Disabling Effects

For users who prefer reduced motion, effects automatically disable based on system preferences. To manually disable:

**Matrix Background**: Comment out in `assets/js/animations.js`
```javascript
// new MatrixRain('matrix-bg');
```

**All Animations**: Set in `assets/css/main.css`
```css
* {
    animation: none !important;
    transition: none !important;
}
```

## 📊 SEO Optimization

The site includes comprehensive SEO optimizations:

- Meta tags (description, keywords, author)
- Open Graph tags for social sharing
- Twitter Card tags
- Schema.org structured data
- Semantic HTML5 elements
- Alt text for images (when added)

### Improving SEO

1. Update meta tags in `<head>` section
2. Add relevant keywords
3. Submit sitemap to search engines
4. Build backlinks from professional networks

## 🧪 Testing

### Browser Compatibility

Tested and compatible with:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Testing Checklist

- [ ] All links work correctly
- [ ] Responsive on all screen sizes
- [ ] No console errors
- [ ] Smooth animations
- [ ] Keyboard navigation works
- [ ] Print stylesheet renders correctly
- [ ] SEO meta tags present

## 📈 Performance

Current metrics:
- Page load time: < 2 seconds
- Total page weight: < 1MB
- Lighthouse score: 90+ (aim)

### Performance Tips

- Optimize images before adding
- Minimize JavaScript execution
- Use lazy loading for off-screen content
- Enable browser caching

## 🔒 Security

- No sensitive data in repository
- No API keys or credentials
- HTTPS enforced via GitHub Pages
- No external dependencies vulnerable to supply chain attacks

## 📝 Documentation

For detailed technical documentation, see [`claude.md`](./claude.md)

This living document contains:
- Branching conventions
- Design guidelines
- Known issues and fixes
- Maintenance schedule

## 🤝 Contributing

While this is a personal resume website, suggestions are welcome:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see below:

```
MIT License

Copyright (c) 2026 Damian V

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📧 Contact

**Damian V**
- Email: damianv2420@gmail.com
- GitHub: [@Vision1224](https://github.com/Vision1224)

## 🙏 Acknowledgments

- Design inspiration: Cyberpunk 2077, The Matrix
- Fonts: Google Fonts (Orbitron, Roboto Mono, Share Tech Mono)
- Hosting: GitHub Pages

## 🎯 Future Enhancements

- [ ] Add downloadable PDF resume
- [ ] Implement contact form
- [ ] Add blog section for cybersecurity articles
- [ ] Create projects portfolio section
- [ ] Add analytics integration
- [ ] Implement PWA features
- [ ] Add multiple language support

---

**Built with ❤️ and lots of ☕**

**Version**: 1.0.0  
**Last Updated**: February 6, 2026
