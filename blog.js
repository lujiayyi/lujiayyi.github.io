/**
 * Blog-specific JavaScript enhancements
 */

(function() {
    'use strict';

    // ====================================
    // Code Copy Functionality
    // ====================================

    function initCodeCopy() {
        const copyButtons = document.querySelectorAll('.code-copy');

        copyButtons.forEach(button => {
            button.addEventListener('click', async function() {
                const codeBlock = this.closest('.code-block');
                const code = codeBlock.querySelector('code');
                const textToCopy = code.textContent;

                try {
                    await navigator.clipboard.writeText(textToCopy);

                    // Success feedback
                    const originalText = this.textContent;
                    this.textContent = '已复制!';
                    this.style.background = 'rgba(52, 199, 89, 0.3)';

                    setTimeout(() => {
                        this.textContent = originalText;
                        this.style.background = '';
                    }, 2000);

                } catch (err) {
                    console.error('Failed to copy code:', err);
                    this.textContent = '复制失败';
                    setTimeout(() => {
                        this.textContent = '复制';
                    }, 2000);
                }
            });
        });
    }

    // ====================================
    // Smooth Scroll for Anchor Links
    // ====================================

    function initSmoothScroll() {
        const tocLinks = document.querySelectorAll('.blog-toc a');

        tocLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const navHeight = document.querySelector('.nav-glass')?.offsetHeight || 0;
                    const offset = 20; // Extra spacing

                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - offset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Update active state
                    tocLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                }
            });
        });
    }

    // ====================================
    // Highlight Active TOC Item on Scroll
    // ====================================

    function initTOCHighlight() {
        const tocLinks = document.querySelectorAll('.blog-toc a');
        const sections = Array.from(tocLinks).map(link => {
            const id = link.getAttribute('href').substring(1);
            return document.getElementById(id);
        }).filter(Boolean);

        let ticking = false;

        function updateActiveTOC() {
            const scrollY = window.pageYOffset;
            const navHeight = document.querySelector('.nav-glass')?.offsetHeight || 0;

            let activeSection = null;

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= navHeight + 100 && rect.bottom > navHeight) {
                    activeSection = section;
                }
            });

            tocLinks.forEach(link => {
                link.classList.remove('active');
                if (activeSection && link.getAttribute('href') === '#' + activeSection.id) {
                    link.classList.add('active');
                }
            });

            ticking = false;
        }

        function requestTOCUpdate() {
            if (!ticking) {
                requestAnimationFrame(updateActiveTOC);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestTOCUpdate, { passive: true });
    }

    // ====================================
    // Reading Progress Bar
    // ====================================

    function initReadingProgress() {
        // Create progress bar element
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 60px;
            left: 0;
            width: 0%;
            height: 2px;
            background: linear-gradient(to right, #0071e3, #34c759);
            z-index: 999;
            transition: width 0.1s linear;
        `;
        document.body.appendChild(progressBar);

        let ticking = false;

        function updateProgress() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset;

            const scrollProgress = (scrollTop / (documentHeight - windowHeight)) * 100;
            progressBar.style.width = Math.min(scrollProgress, 100) + '%';

            ticking = false;
        }

        function requestProgressUpdate() {
            if (!ticking) {
                requestAnimationFrame(updateProgress);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestProgressUpdate, { passive: true });
        window.addEventListener('resize', requestProgressUpdate, { passive: true });
    }

    // ====================================
    // Syntax Highlighting Enhancement
    // ====================================

    function enhanceCodeBlocks() {
        const codeBlocks = document.querySelectorAll('.code-block code');

        codeBlocks.forEach(block => {
            // Add line numbers
            const lines = block.textContent.split('\n');
            if (lines.length > 1 && lines[lines.length - 1] === '') {
                lines.pop(); // Remove trailing empty line
            }

            // Optional: Add basic syntax highlighting classes
            // This is a simple implementation; for production use a library like Prism.js or Highlight.js
        });
    }

    // ====================================
    // Initialize All Features
    // ====================================

    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Initialize all blog features
        initCodeCopy();
        initSmoothScroll();
        initTOCHighlight();
        initReadingProgress();
        enhanceCodeBlocks();

        console.log('✨ Blog enhancements initialized');
    }

    // Start initialization
    init();

})();
