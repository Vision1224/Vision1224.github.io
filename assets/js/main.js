/* ===================================
   MAIN.JS
   Core functionality and interactivity
   =================================== */

// Utility Functions
const utils = {
    // Debounce function for performance
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Check if element is in viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Get scroll percentage
    getScrollPercentage: () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        return (scrollTop / scrollHeight) * 100;
    }
};

// Navigation Functionality
class Navigation {
    constructor() {
        this.nav = document.querySelector('.nav');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('.section');
        this.init();
    }
    
    init() {
        this.highlightActiveSection();
        this.setupScrollSpy();
    }
    
    highlightActiveSection() {
        window.addEventListener('scroll', utils.debounce(() => {
            let current = '';
            
            this.sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            this.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }, 100));
    }
    
    setupScrollSpy() {
        // Add active state styles
        const style = document.createElement('style');
        style.textContent = `
            .nav-link.active {
                color: var(--accent-cyan);
                border-color: var(--accent-cyan);
                background: rgba(0, 255, 249, 0.1);
            }
        `;
        document.head.appendChild(style);
    }
}

// Scroll Progress Indicator
class ScrollProgress {
    constructor() {
        this.createIndicator();
        this.init();
    }
    
    createIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-progress';
        indicator.innerHTML = '<div class="scroll-progress-bar"></div>';
        
        const style = document.createElement('style');
        style.textContent = `
            .scroll-progress {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 3px;
                background: rgba(0, 255, 249, 0.1);
                z-index: 1000;
                pointer-events: none;
            }
            
            .scroll-progress-bar {
                height: 100%;
                background: linear-gradient(90deg, var(--accent-cyan), var(--accent-magenta));
                width: 0%;
                transition: width 0.1s ease;
                box-shadow: 0 0 10px var(--accent-cyan);
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(indicator);
        
        this.bar = document.querySelector('.scroll-progress-bar');
    }
    
    init() {
        window.addEventListener('scroll', utils.debounce(() => {
            const percentage = utils.getScrollPercentage();
            this.bar.style.width = `${percentage}%`;
        }, 10));
    }
}

// Performance Monitor
class PerformanceMonitor {
    constructor() {
        this.checkPerformance();
    }
    
    checkPerformance() {
        // Reduce effects on lower-end devices
        const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
        
        if (isLowEnd) {
            // Reduce animation complexity
            document.documentElement.style.setProperty('--transition-base', '0.15s');
            
            // Disable some effects
            const matrixBg = document.getElementById('matrix-bg');
            if (matrixBg) {
                matrixBg.style.opacity = '0.02';
            }
            
            const scanlines = document.querySelector('.scanlines');
            if (scanlines) {
                scanlines.style.display = 'none';
            }
        }
    }
}

// Copy to Clipboard Functionality
class ClipboardManager {
    constructor() {
        this.init();
    }
    
    init() {
        // Add copy functionality to email
        const emailLink = document.querySelector('.contact-link');
        if (emailLink) {
            emailLink.addEventListener('click', (e) => {
                if (e.ctrlKey || e.metaKey) { // Ctrl/Cmd + Click to copy
                    e.preventDefault();
                    this.copyToClipboard(emailLink.textContent);
                }
            });
        }
    }
    
    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.showCopyNotification();
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    }
    
    showCopyNotification() {
        const notification = document.createElement('div');
        notification.textContent = '✓ Email copied to clipboard';
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--accent-cyan);
            color: var(--primary-bg);
            padding: 1rem 1.5rem;
            border-radius: var(--radius-md);
            font-family: var(--font-terminal);
            box-shadow: 0 4px 12px rgba(0, 255, 249, 0.4);
            z-index: 10000;
            animation: slideInUp 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutDown 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
}

// Back to Top Button
class BackToTop {
    constructor() {
        this.createButton();
        this.init();
    }
    
    createButton() {
        const button = document.createElement('button');
        button.className = 'back-to-top';
        button.innerHTML = '↑';
        button.setAttribute('aria-label', 'Back to top');
        
        const style = document.createElement('style');
        style.textContent = `
            .back-to-top {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: var(--accent-cyan);
                color: var(--primary-bg);
                border: none;
                border-radius: 50%;
                font-size: 1.5rem;
                font-weight: 700;
                cursor: pointer;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                z-index: 1000;
                box-shadow: 0 4px 12px rgba(0, 255, 249, 0.4);
            }
            
            .back-to-top.visible {
                opacity: 1;
                visibility: visible;
            }
            
            .back-to-top:hover {
                background: var(--accent-magenta);
                transform: translateY(-3px);
                box-shadow: 0 6px 16px rgba(255, 0, 110, 0.4);
            }
            
            .back-to-top:active {
                transform: translateY(-1px);
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(button);
        
        this.button = button;
    }
    
    init() {
        // Show/hide based on scroll position
        window.addEventListener('scroll', utils.debounce(() => {
            if (window.pageYOffset > 500) {
                this.button.classList.add('visible');
            } else {
                this.button.classList.remove('visible');
            }
        }, 100));
        
        // Scroll to top on click
        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Timeline Item Animations
class TimelineAnimations {
    constructor() {
        this.items = document.querySelectorAll('.timeline-item');
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1
        });
        
        this.items.forEach(item => {
            observer.observe(item);
        });
        
        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            .timeline-item {
                opacity: 0;
                transform: translateX(-30px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .timeline-item.animate-in {
                opacity: 1;
                transform: translateX(0);
            }
        `;
        document.head.appendChild(style);
    }
}

// Skills Tag Interaction
class SkillsInteraction {
    constructor() {
        this.tags = document.querySelectorAll('.skill-tag');
        this.init();
    }
    
    init() {
        this.tags.forEach(tag => {
            tag.addEventListener('click', () => {
                // Toggle selected state
                tag.classList.toggle('selected');
            });
        });
        
        // Add selected state styles
        const style = document.createElement('style');
        style.textContent = `
            .skill-tag.selected {
                background: rgba(0, 255, 249, 0.3);
                color: var(--accent-cyan);
                border-color: var(--accent-cyan);
                transform: scale(1.05);
                box-shadow: 0 0 15px rgba(0, 255, 249, 0.4);
            }
            
            .skill-tag {
                cursor: pointer;
                user-select: none;
            }
        `;
        document.head.appendChild(style);
    }
}

// Console Easter Egg
class ConsoleMessage {
    constructor() {
        this.showMessage();
    }
    
    showMessage() {
        const styles = [
            'color: #00fff9',
            'font-size: 16px',
            'font-weight: bold',
            'text-shadow: 0 0 10px #00fff9'
        ].join(';');
        
        console.log('%c> SYSTEM ACCESS GRANTED <', styles);
        console.log('%cWelcome, curious developer! 👨‍💻', 'color: #ff006e; font-size: 14px;');
        console.log('%cIf you\'re reading this, you\'re probably the kind of person I\'d like to work with.', 'color: #a0a0a0; font-size: 12px;');
        console.log('%cFeel free to reach out: damianv2420@gmail.com', 'color: #00ff41; font-size: 12px;');
        console.log('%cP.S. Try the Konami Code 😉', 'color: #b026ff; font-size: 10px;');
    }
}

// Analytics Tracking (Privacy-focused)
class AnalyticsTracker {
    constructor() {
        this.trackPageView();
        this.trackInteractions();
    }
    
    trackPageView() {
        // Log page view (can be connected to analytics service)
        const pageData = {
            url: window.location.href,
            title: document.title,
            timestamp: new Date().toISOString()
        };
        
        console.log('Page view:', pageData);
    }
    
    trackInteractions() {
        // Track navigation clicks
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const section = e.target.getAttribute('href');
                console.log('Navigation:', section);
            });
        });
        
        // Track contact link clicks
        const contactLink = document.querySelector('.contact-link');
        if (contactLink) {
            contactLink.addEventListener('click', () => {
                console.log('Contact clicked: Email');
            });
        }
    }
}

// Accessibility Enhancements
class AccessibilityManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
        this.setupARIA();
    }
    
    setupKeyboardNavigation() {
        // Allow keyboard navigation through cards
        const interactiveElements = document.querySelectorAll('.card, .skill-tag');
        
        interactiveElements.forEach(el => {
            el.setAttribute('tabindex', '0');
        });
    }
    
    setupFocusManagement() {
        // Add visible focus indicators
        const style = document.createElement('style');
        style.textContent = `
            *:focus-visible {
                outline: 2px solid var(--accent-cyan);
                outline-offset: 2px;
            }
        `;
        document.head.appendChild(style);
    }
    
    setupARIA() {
        // Enhance ARIA attributes
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const heading = section.querySelector('h2');
            if (heading) {
                section.setAttribute('aria-labelledby', heading.id || 'section-heading');
            }
        });
    }
}

// Initialize all components on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    new Navigation();
    new ScrollProgress();
    new PerformanceMonitor();
    new ClipboardManager();
    new BackToTop();
    new TimelineAnimations();
    new SkillsInteraction();
    new ConsoleMessage();
    new AccessibilityManager();
    
    // Optional: Analytics (only if needed)
    // new AnalyticsTracker();
    
    console.log('🚀 Resume website loaded successfully');
});

// Handle window resize
window.addEventListener('resize', utils.debounce(() => {
    // Recalculate any layout-dependent features
    console.log('Window resized');
}, 250));

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden - pause animations if needed
        console.log('Page hidden');
    } else {
        // Page is visible - resume animations
        console.log('Page visible');
    }
});

// Service Worker Registration (for PWA capabilities - optional)
if ('serviceWorker' in navigator) {
    // Uncomment to enable PWA features
    // window.addEventListener('load', () => {
    //     navigator.serviceWorker.register('/sw.js')
    //         .then(reg => console.log('Service Worker registered'))
    //         .catch(err => console.log('Service Worker registration failed'));
    // });
}

// Export utilities for use in other scripts
window.utils = utils;
