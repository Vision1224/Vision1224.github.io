/* ===================================
   ANIMATIONS.JS
   Matrix background and cyberpunk visual effects
   =================================== */

// Matrix Rain Effect
class MatrixRain {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        
        // Matrix characters - mix of binary, hex, and symbols
        this.chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFabcdef0123456789@#$%^&*()';
        this.charArray = this.chars.split('');
        
        this.fontSize = 14;
        this.columns = Math.floor(this.width / this.fontSize);
        this.drops = [];
        
        // Initialize drops
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.floor(Math.random() * -100);
        }
        
        this.init();
    }
    
    init() {
        this.animate();
        this.handleResize();
    }
    
    animate() {
        // Semi-transparent dark to create fade effect
        this.ctx.fillStyle = 'rgba(15, 20, 25, 0.05)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Professional cyan for matrix effect
        this.ctx.fillStyle = '#4fc3f7';
        this.ctx.font = `${this.fontSize}px monospace`;
        
        for (let i = 0; i < this.drops.length; i++) {
            const char = this.charArray[Math.floor(Math.random() * this.charArray.length)];
            const x = i * this.fontSize;
            const y = this.drops[i] * this.fontSize;
            
            this.ctx.fillText(char, x, y);
            
            // Reset drop to top randomly or continue falling
            if (y > this.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            
            this.drops[i]++;
        }
        
        requestAnimationFrame(() => this.animate());
    }
    
    handleResize() {
        window.addEventListener('resize', () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.columns = Math.floor(this.width / this.fontSize);
            
            // Reinitialize drops for new column count
            this.drops = [];
            for (let i = 0; i < this.columns; i++) {
                this.drops[i] = Math.floor(Math.random() * -100);
            }
        });
    }
}

// Initialize Matrix Rain on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        new MatrixRain('matrix-bg');
    }
});

// Typing Text Animation
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    // Add 'typed' class after animation completes to remove cursor
    setTimeout(() => {
        typingElement.classList.add('typed');
    }, 3000); // 1s delay + 2s typing
}

// Glitch Effect on Hover (Enhanced)
function initGlitchEffects() {
    const glitchElements = document.querySelectorAll('.glitch-text');
    
    glitchElements.forEach(element => {
        // Add data attribute for glitch effect
        const text = element.textContent;
        element.setAttribute('data-text', text);
    });
}

// Smooth Scroll with Offset
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // 80px offset for fixed header if any
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards and timeline items
    const animatedElements = document.querySelectorAll('.card, .timeline-item');
    animatedElements.forEach((el, index) => {
        // Set initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
        
        observer.observe(el);
    });
}

// Random Flicker Effect (Very Subtle)
function initFlickerEffect() {
    const flickerElements = document.querySelectorAll('.terminal-prompt, .nav-bracket');
    
    flickerElements.forEach(element => {
        setInterval(() => {
            if (Math.random() > 0.97) { // 3% chance to flicker
                element.style.opacity = '0.5';
                setTimeout(() => {
                    element.style.opacity = '1';
                }, 50);
            }
        }, 2000);
    });
}

// Cyber Border Animation
function initCyberBorders() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        // Add subtle random delay to hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transition = `all ${0.2 + Math.random() * 0.3}s ease`;
        });
    });
}

// Terminal Typing Effect for Contact Section
function initTerminalTyping() {
    const terminalLines = document.querySelectorAll('.terminal-line');
    
    terminalLines.forEach((line, index) => {
        line.style.opacity = '0';
        
        setTimeout(() => {
            line.style.transition = 'opacity 0.3s ease';
            line.style.opacity = '1';
        }, index * 200);
    });
}

// Parallax Effect on Scroll (Subtle)
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        hero.style.transform = `translateY(${parallax}px)`;
        hero.style.opacity = 1 - (scrolled / 700);
    });
}

// Random Background Glitch Effect (Very Rare)
function initBackgroundGlitch() {
    const container = document.querySelector('.container');
    if (!container) return;
    
    setInterval(() => {
        if (Math.random() > 0.98) { // 2% chance every interval
            container.style.transform = 'translateX(2px)';
            setTimeout(() => {
                container.style.transform = 'translateX(-2px)';
                setTimeout(() => {
                    container.style.transform = 'translateX(0)';
                }, 50);
            }, 50);
        }
    }, 5000);
}

// Dynamic Skill Tag Animations
function initSkillTagAnimations() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        // Stagger animation on load
        tag.style.opacity = '0';
        tag.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            tag.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            tag.style.opacity = '1';
            tag.style.transform = 'scale(1)';
        }, index * 30);
        
        // Add random hover delay
        tag.addEventListener('mouseenter', function() {
            this.style.transitionDelay = `${Math.random() * 0.1}s`;
        });
    });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        initTypingAnimation();
        initGlitchEffects();
        initScrollAnimations();
        initFlickerEffect();
        initCyberBorders();
        initParallaxEffect();
        initBackgroundGlitch();
        initSkillTagAnimations();
    }
    
    // These work regardless of motion preference
    initSmoothScroll();
    initTerminalTyping();
});

// Easter Egg: Konami Code
(function() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    function activateEasterEgg() {
        // Add intense glitch effect to entire page
        const body = document.body;
        body.style.animation = 'intense-glitch 0.5s ease';
        
        // Create temporary style for intense glitch
        const style = document.createElement('style');
        style.textContent = `
            @keyframes intense-glitch {
                0%, 100% { transform: translate(0); filter: none; }
                10% { transform: translate(-5px, 5px); filter: hue-rotate(90deg); }
                20% { transform: translate(5px, -5px); filter: hue-rotate(180deg); }
                30% { transform: translate(-5px, -5px); filter: hue-rotate(270deg); }
                40% { transform: translate(5px, 5px); filter: hue-rotate(0deg); }
                50% { transform: translate(-5px, 5px); filter: invert(1); }
                60% { transform: translate(5px, -5px); filter: none; }
                70% { transform: translate(-5px, -5px); filter: hue-rotate(90deg); }
                80% { transform: translate(5px, 5px); filter: hue-rotate(180deg); }
                90% { transform: translate(0); filter: none; }
            }
        `;
        document.head.appendChild(style);
        
        // Show secret message
        const message = document.createElement('div');
        message.textContent = '> ACCESS GRANTED <';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: 'Share Tech Mono', monospace;
            font-size: 3rem;
            color: #00ff41;
            text-shadow: 0 0 20px #00ff41, 0 0 40px #00ff41;
            z-index: 10000;
            opacity: 0;
            animation: fade-in-out 2s ease;
        `;
        
        const fadeStyle = document.createElement('style');
        fadeStyle.textContent = `
            @keyframes fade-in-out {
                0%, 100% { opacity: 0; }
                50% { opacity: 1; }
            }
        `;
        document.head.appendChild(fadeStyle);
        document.body.appendChild(message);
        
        // Remove message after animation
        setTimeout(() => {
            message.remove();
            style.remove();
            fadeStyle.remove();
            body.style.animation = '';
        }, 2000);
    }
})();


