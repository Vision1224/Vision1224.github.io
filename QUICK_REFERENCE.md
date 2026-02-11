# Quick Reference Guide

Essential commands and tasks for managing your resume website.

## 🚀 Common Git Commands

### Daily Workflow
```bash
# Check which branch you're on
git branch

# Switch to develop branch
git checkout develop

# Get latest changes
git pull origin develop

# Make changes, then:
git add .
git commit -m "update: your change description"
git push origin develop

# Deploy to production (when ready)
git checkout main
git merge develop
git push origin main
git checkout develop
```

### Branch Management
```bash
# Create new feature branch
git checkout -b feature/new-section

# Delete branch (after merging)
git branch -d feature/new-section

# View all branches
git branch -a

# Switch between branches
git checkout branch-name
```

### Undo Changes
```bash
# Discard local changes (before commit)
git checkout -- filename.html

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# View commit history
git log --oneline
```

## 📝 Content Update Checklist

### Updating Experience
1. Open `index.html`
2. Find the experience section (line ~95)
3. Copy existing job block
4. Update: title, company, dates, description
5. Save and test locally
6. Commit and push

### Updating Skills
1. Open `index.html`
2. Find skills section (line ~370)
3. Add new `<span class="skill-tag">New Skill</span>`
4. Save and test
5. Commit and push

### Updating Colors
1. Open `assets/css/main.css`
2. Find `:root` section (line ~10)
3. Change color values
4. Save and test
5. Commit and push

## 🎨 Color Palette Reference

Current theme colors:
```css
--primary-bg: #0a0e27;        /* Deep space blue */
--secondary-bg: #1a1f3a;      /* Card backgrounds */
--accent-cyan: #00fff9;       /* Primary neon cyan */
--accent-magenta: #ff006e;    /* Secondary hot magenta */
--accent-purple: #b026ff;     /* Tertiary electric purple */
--text-primary: #e0e0e0;      /* Main text */
--text-secondary: #a0a0a0;    /* Secondary text */
--terminal-green: #00ff41;    /* Matrix green */
```

## 🔍 File Locations

### Key Files to Edit
- **Personal Info**: `index.html` (lines 34-50)
- **Experience**: `index.html` (lines 95-320)
- **Education**: `index.html` (lines 335-395)
- **Skills**: `index.html` (lines 410-505)
- **Contact**: `index.html` (lines 520-560)
- **Colors**: `assets/css/main.css` (lines 10-30)
- **Effects**: `assets/css/cyberpunk.css`

### Do NOT Edit
- `assets/js/animations.js` (unless you know JavaScript)
- `assets/js/main.js` (unless you know JavaScript)
- `.github/workflows/deploy.yml`

## 🐛 Quick Fixes

### Problem: Site not updating
```bash
# Hard refresh browser
Ctrl + F5 (Windows)
Cmd + Shift + R (Mac)

# Or clear cache and refresh
```

### Problem: CSS not loading
```bash
# Check file paths in index.html
# Should be: href="assets/css/main.css"
# NOT: href="/assets/css/main.css"
```

### Problem: Need to revert changes
```bash
# Go back to last commit
git reset --hard HEAD

# Go back to specific commit
git reset --hard commit-hash
```

## 📱 Testing Commands

### Test Locally
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

### Validate HTML
- Visit: https://validator.w3.org/
- Upload `index.html`
- Fix any errors shown

### Check Mobile Responsiveness
- Open site in browser
- Press F12 for DevTools
- Click device toolbar icon
- Test different screen sizes

## 🔐 Security Checklist

Before pushing to GitHub:
- [ ] No passwords or API keys in code
- [ ] No personal sensitive information
- [ ] Email address is intentionally public
- [ ] No private documents included

## ⚡ Performance Tips

### Optimize Before Adding Images
```bash
# Use online tools:
- TinyPNG.com (compress images)
- Squoosh.app (resize and compress)

# Recommended:
- Max width: 1200px
- Format: WebP or JPEG
- File size: < 200KB each
```

### Check Performance
- Visit: https://pagespeed.web.dev/
- Enter your URL
- Review suggestions

## 📋 Deployment Checklist

Before merging to main:
- [ ] Test all links work
- [ ] Check mobile display
- [ ] Verify no console errors
- [ ] Test on different browsers
- [ ] Review content for typos
- [ ] Update date if needed
- [ ] Commit with clear message

## 🎯 Commit Message Convention

Use these prefixes:
- `feat:` - New feature or section
- `fix:` - Bug fix or correction
- `update:` - Content update
- `style:` - Visual/CSS changes
- `docs:` - Documentation changes
- `refactor:` - Code restructuring

Examples:
```bash
git commit -m "feat: add new certification section"
git commit -m "fix: correct company name typo"
git commit -m "update: add latest job experience"
git commit -m "style: adjust mobile navigation spacing"
```

## 🆘 Emergency Commands

### Site is broken, need to rollback
```bash
# Find last working commit
git log --oneline

# Rollback to that commit
git reset --hard commit-hash
git push origin main --force

# WARNING: --force deletes history, use carefully!
```

### Accidentally deleted files
```bash
# Restore specific file
git checkout HEAD -- path/to/file

# Restore everything
git reset --hard HEAD
```

## 📞 Quick Links

- **Live Site**: https://vision1224.github.io
- **Repository**: https://github.com/Vision1224/Vision1224.github.io
- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **HTML Validator**: https://validator.w3.org/
- **CSS Validator**: https://jigsaw.w3.org/css-validator/

## 💡 Pro Tips

1. **Always work on develop branch** - Keep main clean
2. **Test locally before pushing** - Catch errors early
3. **Commit often** - Small commits are better
4. **Use clear messages** - Future you will thank you
5. **Document issues** - Update `claude.md` with solutions

---

**Keep this file handy for quick reference!**

Last Updated: February 6, 2026
