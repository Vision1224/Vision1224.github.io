# Setup Guide - Deploying Your Resume Website

This guide walks you through setting up your cybersecurity resume website on GitHub Pages.

## 📋 Prerequisites

- GitHub account ([Sign up here](https://github.com/join))
- Git installed on your computer ([Download here](https://git-scm.com/downloads))
- Basic familiarity with command line/terminal

## 🚀 Step-by-Step Setup

### Step 1: Create GitHub Repository

1. **Log in to GitHub**
   - Go to [github.com](https://github.com)
   - Sign in with your account

2. **Create New Repository**
   - Click the `+` icon in top right → "New repository"
   - Repository name: `Vision1224.github.io` (MUST match your username)
   - Description: "Professional cybersecurity resume website"
   - Select: **Public** (required for free GitHub Pages)
   - ✅ **Do NOT** initialize with README (we have one already)
   - Click "Create repository"

### Step 2: Configure Branch Protection (Optional but Recommended)

1. Go to repository **Settings** → **Branches**
2. Click "Add rule" under "Branch protection rules"
3. Branch name pattern: `main`
4. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1)
5. Click "Create"

### Step 3: Upload Project Files

**Option A: Using Git Command Line** (Recommended)

```bash
# Navigate to the project folder
cd /path/to/cybersecurity-resume

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Cyberpunk resume website"

# Add remote repository
git remote add origin https://github.com/Vision1224/Vision1224.github.io.git

# Create and push to main branch
git branch -M main
git push -u origin main

# Create and push develop branch
git checkout -b develop
git push -u origin develop

# Set develop as default branch for work
git checkout develop
```

**Option B: Using GitHub Desktop** (Easier for beginners)

1. Download [GitHub Desktop](https://desktop.github.com/)
2. File → Add Local Repository → Select project folder
3. Publish repository to GitHub
4. Use the app to commit and push changes

**Option C: Upload via GitHub Web Interface**

1. Go to your repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop all project files
4. Commit changes

### Step 4: Configure GitHub Pages

1. Go to repository **Settings** → **Pages** (left sidebar)
2. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
3. Click **Save**
4. Wait 1-3 minutes for deployment

### Step 5: Verify Deployment

1. GitHub will show a success message with your URL
2. Visit: `https://vision1224.github.io`
3. Your resume website should be live! 🎉

## 🔧 Post-Setup Configuration

### Set Develop as Default Branch

1. Go to **Settings** → **Branches**
2. Under "Default branch", click pencil icon
3. Select `develop` from dropdown
4. Click "Update" and confirm

This ensures new work starts from develop, not main.

### Enable HTTPS (Recommended)

1. Go to **Settings** → **Pages**
2. Under "Enforce HTTPS"
3. Check ✅ "Enforce HTTPS"

GitHub Pages provides free SSL certificates automatically.

## 📝 Making Updates

### Workflow for Content Changes

```bash
# 1. Ensure you're on develop branch
git checkout develop
git pull origin develop

# 2. Make your changes to files
# Edit index.html, CSS, etc.

# 3. Test locally
# Open index.html in browser

# 4. Commit changes
git add .
git commit -m "Update: description of changes"
git push origin develop

# 5. When ready to deploy, merge to main
git checkout main
git pull origin main
git merge develop
git push origin main

# 6. Return to develop for next changes
git checkout develop
```

### Quick Content Updates

For small changes (typos, content updates):

```bash
git checkout develop
# Make changes
git add .
git commit -m "fix: correct typo in experience section"
git push origin develop

# Deploy immediately
git checkout main
git merge develop
git push origin main
git checkout develop
```

## 🎨 Customization Guide

### Update Personal Information

Edit `index.html`:

```html
<!-- Line ~34: Update name -->
<h1 class="glitch-text" data-text="YOUR NAME">
    <span class="typing-text">YOUR NAME</span>
</h1>

<!-- Line ~37: Update title -->
<p class="subtitle">
    <span class="accent-cyan">&gt;</span> Your Title Here
    <span class="cursor-blink">|</span>
</p>

<!-- Contact section: Update email -->
<a href="mailto:your.email@example.com" class="contact-link">
    your.email@example.com
</a>
```

### Change Colors

Edit `assets/css/main.css`:

```css
:root {
    /* Change these values */
    --primary-bg: #0a0e27;        /* Background */
    --accent-cyan: #00fff9;        /* Primary accent */
    --accent-magenta: #ff006e;     /* Secondary accent */
}
```

### Add New Experience

Copy existing job block in `index.html` (around line ~95) and modify:

```html
<article class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content card">
        <div class="job-header">
            <h3 class="job-title">Your Job Title</h3>
            <div class="job-meta">
                <span class="company">Company Name</span>
                <span class="separator">|</span>
                <time datetime="2026-01">January 2026</time> - Present
                <span class="separator">|</span>
                <span class="location">City, State</span>
            </div>
        </div>
        <div class="job-description">
            <ul class="achievement-list">
                <li>Your achievement here</li>
                <li>Another achievement</li>
            </ul>
        </div>
    </div>
</article>
```

## 🐛 Troubleshooting

### Site Not Showing Up

**Problem**: Visiting `vision1224.github.io` shows 404

**Solutions**:
1. Wait 3-5 minutes after first deployment
2. Check Settings → Pages: Is source set to `main` branch?
3. Verify repository name exactly matches: `Vision1224.github.io`
4. Ensure repository is **Public**, not Private

### CSS/JS Not Loading

**Problem**: Site shows plain HTML without styling

**Solutions**:
1. Check browser console (F12) for errors
2. Verify file paths in `index.html`:
   - Should be: `assets/css/main.css`
   - NOT: `/assets/css/main.css` (no leading slash)
3. Ensure all files are committed and pushed
4. Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

### Changes Not Appearing

**Problem**: Updated content not showing on live site

**Solutions**:
1. Verify changes are committed to `main` branch
2. Check GitHub Actions tab for deployment status
3. Clear browser cache: Settings → Clear browsing data
4. Try incognito/private browsing mode
5. Check Settings → Pages for deployment errors

### Matrix Background Not Working

**Problem**: No animated background visible

**Solutions**:
1. Check browser console for JavaScript errors
2. Ensure `animations.js` is loading correctly
3. Try different browser (Chrome, Firefox, Safari)
4. Check if "Reduce Motion" is enabled in OS accessibility settings

## 🔍 Testing Checklist

Before deploying to main, verify:

- [ ] All personal information updated
- [ ] Contact email is correct
- [ ] Links work when clicked
- [ ] Site displays correctly on mobile (use browser dev tools)
- [ ] No console errors (F12 → Console)
- [ ] All images load (if you added any)
- [ ] Print preview looks good (Ctrl/Cmd+P)

## 📚 Additional Resources

### Learning Git
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Try Git Interactive Tutorial](https://try.github.io/)

### Web Development
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/) - Browser compatibility

### GitHub Pages
- [Official GitHub Pages Docs](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 💡 Pro Tips

1. **Backup your work**: Keep local copies of important changes
2. **Test locally first**: Always preview changes before pushing to main
3. **Use meaningful commit messages**: "Updated experience" not "changes"
4. **Document in claude.md**: Keep track of issues and solutions
5. **Mobile-first**: Always test on mobile devices

## 🆘 Getting Help

If you encounter issues:

1. Check `claude.md` for known issues
2. Review GitHub Actions logs (if workflow fails)
3. Search GitHub Pages documentation
4. Ask in GitHub Discussions or Issues

## ✅ Success Indicators

Your setup is complete when:

- ✅ Site accessible at `https://vision1224.github.io`
- ✅ HTTPS enabled (lock icon in browser)
- ✅ Content displays correctly
- ✅ Animations working
- ✅ Mobile responsive
- ✅ No console errors

---

**Congratulations! Your professional cybersecurity resume is now live! 🎉**

Remember to update `claude.md` with any issues you encounter and their solutions.
