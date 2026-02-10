# Claude.md - Living Documentation

**Last Updated**: February 6, 2026  
**Project**: Cyberpunk Cybersecurity Resume Website  
**GitHub Repository**: Vision1224/Vision1224.github.io  
**Live URL**: https://vision1224.github.io

---

## Project Overview

A professional cyberpunk-themed resume website showcasing cybersecurity expertise and career experience. The design balances edgy aesthetics with professional presentation, avoiding "script kiddie" stereotypes while maintaining a unique technical personality.

---

## Repository Structure

```
Vision1224.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── index.html                   # Main resume page
├── assets/
│   ├── css/
│   │   ├── main.css            # Core styles and layout
│   │   └── cyberpunk.css       # Theme-specific cyberpunk styles
│   ├── js/
│   │   ├── main.js             # Core interactivity
│   │   └── animations.js       # Cyberpunk visual effects
│   └── images/
│       └── favicon.ico
├── README.md                    # Repository documentation
├── claude.md                    # This file - living documentation
└── CNAME                        # Custom domain configuration (if needed)
```

---

## Branching Strategy

### Branch Structure
- **`main`** - Production branch (automatically deploys to GitHub Pages)
- **`develop`** - Development/staging branch (default for new work)
- **`feature/*`** - Feature branches (e.g., `feature/new-section`, `feature/animation-update`)

### Workflow Rules
1. All development work happens in `develop` or `feature/*` branches
2. Never commit directly to `main`
3. Changes merge to `main` only through Pull Requests from `develop`
4. `develop` is set as the default branch in GitHub settings
5. Feature branches merge into `develop` first, then `develop` merges to `main`

### Branch Protection (Configure in GitHub Settings)
- Protect `main` branch
- Require pull request reviews before merging to `main`
- Require status checks to pass (if CI/CD is added)
- No force pushes to `main`

---

## GitHub Pages Configuration

### Setup Steps
1. Navigate to: Repository Settings → Pages
2. Set Source to: Deploy from branch `main`
3. Set folder to: `/ (root)`
4. Custom domain (optional): Leave empty for default `vision1224.github.io`
5. Enforce HTTPS: ✓ (checked)

### Deployment
- GitHub Pages automatically deploys on push to `main` branch
- Typical deployment time: 1-3 minutes
- Access site at: `https://vision1224.github.io`

---

## Technical Stack

### Core Technologies
- **HTML5**: Semantic markup for SEO and accessibility
- **CSS3**: Custom properties (CSS variables) for theming
- **Vanilla JavaScript**: No frameworks - pure JS for performance

### Design Principles
- **Mobile-First**: Responsive design starting from 320px width
- **Progressive Enhancement**: Works without JavaScript, enhanced with it
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: < 1MB total page weight, < 2s load time

### Browser Support
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Cyberpunk Theme Guidelines

### Color Palette
```css
--primary-bg: #0a0e27;           /* Deep space blue */
--secondary-bg: #1a1f3a;         /* Card backgrounds */
--accent-cyan: #00fff9;          /* Primary accent - neon cyan */
--accent-magenta: #ff006e;       /* Secondary accent - hot magenta */
--accent-purple: #b026ff;        /* Tertiary accent - electric purple */
--text-primary: #e0e0e0;         /* Main text */
--text-secondary: #a0a0a0;       /* Secondary text */
--terminal-green: #00ff41;       /* Terminal/matrix green */
--warning-red: #ff3864;          /* Error/warning red */
```

### Typography
- **Headers**: 'Orbitron', monospace (Google Fonts) - futuristic, clean
- **Body**: 'Roboto Mono', monospace (Google Fonts) - readable, technical
- **Accents**: 'Share Tech Mono', monospace (Google Fonts) - terminal-style

### Visual Effects (Subtle Implementation)
1. **Matrix Background**: Slow-falling characters in background (opacity: 0.05)
2. **Scanlines**: Horizontal CRT scanline overlay (opacity: 0.03)
3. **Glitch Effect**: Subtle RGB split on hover for headers (2-3px offset)
4. **Neon Glow**: Box shadows on interactive elements
5. **Typing Animation**: Typewriter effect on hero section (once per load)

### Professional Balance
- Effects are SUBTLE - never interfere with readability
- Clean white space and clear hierarchy
- Print stylesheet removes all decorative effects
- Accessibility mode available (prefers-reduced-motion)

---

## Content Structure

### Section Order
1. **Hero/Header**: Name, title, tagline
2. **About**: Professional summary (2-3 paragraphs)
3. **Experience**: Reverse chronological timeline
4. **Education**: Degrees and certifications
5. **Skills**: Technical skills matrix
6. **Contact**: Email and professional links

### Contact Information
- **Email**: damianv2420@gmail.com
- **GitHub**: (Add if desired)
- **LinkedIn**: (Add if desired)

---

## SEO Optimization

### Meta Tags (Required in `<head>`)
```html
<title>Damian V - Cybersecurity Professional | Resume</title>
<meta name="description" content="Senior technical support engineer and developer specializing in cybersecurity, SaaS platforms, and data integration.">
<meta name="keywords" content="cybersecurity, technical support, SSIS, SQL Server, data integration, cloud security">
<meta name="author" content="Damian V">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Open Graph -->
<meta property="og:title" content="Damian V - Cybersecurity Professional">
<meta property="og:description" content="Senior technical support engineer specializing in cybersecurity and data integration.">
<meta property="og:type" content="profile">
<meta property="og:url" content="https://vision1224.github.io">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Damian V - Cybersecurity Professional">
<meta name="twitter:description" content="Senior technical support engineer specializing in cybersecurity.">
```

### Semantic HTML Requirements
- Use `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Proper heading hierarchy (h1 → h2 → h3, no skipping)
- `<time>` elements for dates
- ARIA labels where appropriate

---

## Known Issues and Fixes

### Issue Log
*This section will be updated as issues are discovered and resolved*

**Template for new issues:**
```
#### Issue #X: [Title]
**Date Found**: YYYY-MM-DD
**Description**: Brief description of the issue
**Cause**: Root cause analysis
**Fix**: Solution implemented
**Prevention**: Rule to prevent recurrence
```

---

## Development Workflow

### Making Changes
1. Create feature branch from `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. Make changes and test locally:
   - Open `index.html` in browser
   - Test all breakpoints (mobile, tablet, desktop)
   - Test in multiple browsers

3. Commit with descriptive messages:
   ```bash
   git add .
   git commit -m "feat: add new experience section with terminal styling"
   ```

4. Push and create PR to `develop`:
   ```bash
   git push origin feature/your-feature-name
   ```

5. After PR approval, merge `develop` to `main`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout main
   git pull origin main
   git merge develop
   git push origin main
   ```

### Commit Message Convention
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - CSS/formatting changes (no code logic change)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

---

## Testing Checklist

### Before Merging to Main
- [ ] All HTML validates (W3C Validator)
- [ ] CSS validates (W3C CSS Validator)
- [ ] JavaScript has no console errors
- [ ] Mobile responsive (320px to 1920px)
- [ ] Cross-browser tested (Chrome, Firefox, Safari)
- [ ] All links work
- [ ] SEO meta tags present
- [ ] Accessibility: keyboard navigation works
- [ ] Accessibility: screen reader friendly
- [ ] Print stylesheet works
- [ ] Performance: Page loads < 2 seconds

---

## Maintenance Schedule

### Regular Updates
- **Monthly**: Review and update experience descriptions
- **Quarterly**: Update skills and technologies
- **Annually**: Refresh design elements if needed

### Content Update Process
1. Create branch from `develop`
2. Update relevant HTML sections
3. Test changes locally
4. Commit and push
5. Merge to `main` after review

---

## Resources

### Design Inspiration
- Cyberpunk 2077 UI aesthetics
- Terminal/command line interfaces
- Neon noir aesthetics
- Professional tech portfolios

### Development Tools
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### Fonts
- [Google Fonts - Orbitron](https://fonts.google.com/specimen/Orbitron)
- [Google Fonts - Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)
- [Google Fonts - Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono)

---

## Future Enhancements (Backlog)

- [ ] Dark/light theme toggle
- [ ] Custom 404 page with cyberpunk theme
- [ ] Blog section for cybersecurity articles
- [ ] Projects portfolio section (when projects are available)
- [ ] Downloadable PDF resume
- [ ] Analytics integration (privacy-focused)
- [ ] Contact form (using Formspree or similar)
- [ ] Multiple language support

---

## Notes

- This file should be updated whenever:
  - A bug is found and fixed
  - A new pattern or convention is established
  - Repository structure changes
  - Deployment process changes
  - New issues are discovered
  
- Keep this file up-to-date as the single source of truth for the project

---

**End of Document**
