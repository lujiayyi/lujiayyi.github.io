/**
 * Apple-Style Interactive Enhancements
 * Smooth animations, parallax scrolling, and micro-interactions
 */

(function() {
    'use strict';

    // ====================================
    // Smooth Parallax Scrolling Effect
    // ====================================

    function initParallax() {
        const profileWrapper = document.querySelector('.profile-image-wrapper');
        const heroSection = document.querySelector('.hero-section');

        if (!profileWrapper || !heroSection) return;

        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        let ticking = false;

        function updateParallax() {
            const scrollY = window.pageYOffset;
            const heroHeight = heroSection.offsetHeight;

            // Only apply parallax within hero section
            if (scrollY < heroHeight) {
                const parallaxAmount = scrollY * 0.3;
                profileWrapper.style.transform = `translateY(${parallaxAmount}px)`;
            }

            ticking = false;
        }

        function requestParallaxUpdate() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
    }

    // ====================================
    // Navigation Scroll Effect
    // ====================================

    function initNavigationScroll() {
        const nav = document.querySelector('.nav-glass');
        if (!nav) return;

        let lastScrollY = window.pageYOffset;
        let ticking = false;

        function updateNavigation() {
            const scrollY = window.pageYOffset;

            // Add shadow when scrolled
            if (scrollY > 10) {
                nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
            } else {
                nav.style.boxShadow = 'none';
            }

            lastScrollY = scrollY;
            ticking = false;
        }

        function requestNavigationUpdate() {
            if (!ticking) {
                requestAnimationFrame(updateNavigation);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestNavigationUpdate, { passive: true });
    }

    // ====================================
    // Smooth Fade-in on Scroll
    // ====================================

    function initScrollReveal() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements that should fade in
        const revealElements = document.querySelectorAll('.section-card');
        revealElements.forEach(el => observer.observe(el));
    }

    // ====================================
    // Contact Button Ripple Effect
    // ====================================

    function initButtonRipple() {
        const buttons = document.querySelectorAll('.contact-button');

        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const ripple = document.createElement('span');
                ripple.style.cssText = `
                    position: absolute;
                    left: ${x}px;
                    top: ${y}px;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.4);
                    transform: translate(-50%, -50%);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;

                button.style.position = 'relative';
                button.style.overflow = 'hidden';
                button.appendChild(ripple);

                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Add ripple animation keyframes if not already present
        if (!document.getElementById('ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                @keyframes ripple {
                    to {
                        width: 200px;
                        height: 200px;
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // ====================================
    // Profile Image Tilt Effect (3D)
    // ====================================

    function initImageTilt() {
        const profileImage = document.querySelector('.profile-image');
        if (!profileImage) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        profileImage.addEventListener('mousemove', function(e) {
            const rect = profileImage.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            profileImage.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale3d(1.02, 1.02, 1.02)
            `;
        });

        profileImage.addEventListener('mouseleave', function() {
            profileImage.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    }

    // ====================================
    // Smooth Scroll for Internal Links
    // ====================================

    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();

                    const navHeight = document.querySelector('.nav-glass')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ====================================
    // Keyboard Navigation Enhancement
    // ====================================

    function initKeyboardNav() {
        // Add visible focus styles for keyboard navigation
        let isUsingKeyboard = false;

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                isUsingKeyboard = true;
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('mousedown', () => {
            isUsingKeyboard = false;
            document.body.classList.remove('keyboard-nav');
        });
    }

    // ====================================
    // Performance Optimization
    // ====================================

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ====================================
    // Initialize All Features
    // ====================================

    function init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Initialize all features
        initParallax();
        initNavigationScroll();
        initScrollReveal();
        initButtonRipple();
        initImageTilt();
        initSmoothScroll();
        initKeyboardNav();

        console.log('✨ Apple-style interactions initialized');
    }

    // Start initialization
    init();

    // ====================================
    // Handle Window Resize
    // ====================================

    const handleResize = debounce(() => {
        // Recalculate positions on resize if needed
        console.log('Window resized - recalculating layouts');
    }, 250);

    window.addEventListener('resize', handleResize);

})();
