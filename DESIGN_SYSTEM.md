# Apple-Inspired Design System Documentation

## Overview

This website has been completely refactored with an Apple-inspired design philosophy, emphasizing minimalism, elegance, and sophisticated interactions.

## Design Principles

### 1. Visual Minimalism
- **Generous White Space**: Extensive negative space to let content breathe
- **Clean Alignment**: Strict grid system with consistent spacing
- **Focused Content**: Only essential information displayed
- **Refined Typography**: Clear hierarchy using Inter font family

### 2. Color Palette

#### Light Mode (Default)
```css
Primary Text:     #1d1d1f (Almost Black)
Secondary Text:   #6e6e73 (Cool Gray)
Tertiary Text:    #86868b (Light Gray)
Accent Color:     #0071e3 (Apple Blue)
Background:       #fbfbfd (Off-White)
Surface:          #ffffff (Pure White)
```

#### Dark Mode (Auto-detected)
```css
Primary Text:     #f5f5f7 (Off-White)
Secondary Text:   #a1a1a6 (Medium Gray)
Tertiary Text:    #86868b (Gray)
Accent Color:     #2997ff (Bright Blue)
Background:       #000000 (True Black)
Surface:          #1d1d1f (Dark Gray)
```

### 3. Typography Scale

**Font Family**: Inter (with system fallbacks)
```
Display (Hero):   3rem (48px)
Title (Large):    2rem (32px)
Subtitle:         1.25rem (20px)
Body Large:       1.125rem (18px)
Body:             1rem (16px)
Caption:          0.875rem (14px)
```

**Font Weights**:
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### 4. Spacing System

Based on 0.5rem (8px) increments:
```
xs:   0.5rem (8px)
sm:   1rem (16px)
md:   1.5rem (24px)
lg:   2rem (32px)
xl:   3rem (48px)
2xl:  4rem (64px)
3xl:  6rem (96px)
4xl:  8rem (128px)
```

## Key Features

### 1. Glassmorphism Navigation
- Fixed position with blur effect
- Semi-transparent background: `rgba(255, 255, 255, 0.72)`
- 20px blur with 180% saturation
- Smooth shadow on scroll
- Pill-shaped active states

**Technical Implementation**:
```css
backdrop-filter: blur(20px) saturate(180%);
-webkit-backdrop-filter: blur(20px) saturate(180%);
```

### 2. Hero Section
- Full viewport height
- Centered content with generous padding
- Profile image with subtle 3D tilt effect
- Fade-in animation on load
- Subtle radial gradient background

### 3. Interactive Elements

#### Micro-interactions:
- **Navigation Links**: Scale down on click (0.96x)
- **Profile Image**: 3D tilt on mouse move, scale on hover
- **Contact Button**: Lift on hover (-2px), ripple effect on click
- **News Cards**: Lift on hover (-4px) with shadow enhancement

#### Animations:
- **Duration**: 0.15s (fast), 0.3s (base), 0.5s (slow)
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` for natural feel
- **Fade-in-up**: Staggered entrance animations (0.2s, 0.4s delays)

### 4. Parallax Scrolling
- Profile image moves at 0.3x scroll speed
- Only active within hero section
- Respects `prefers-reduced-motion` setting
- Uses `requestAnimationFrame` for 60fps performance

### 5. Responsive Design

**Breakpoints**:
```
Desktop:        > 1024px (default)
Tablet:         768px - 1024px
Mobile:         480px - 768px
Small Mobile:   < 480px
```

**Mobile Optimizations**:
- Stacked layout (vertical)
- Centered content
- Reduced font sizes
- Optimized spacing
- Simplified navigation

### 6. Accessibility Features

#### Keyboard Navigation:
- Visible focus states
- Tab navigation support
- Skip links capability

#### Motion Preferences:
```css
@media (prefers-reduced-motion: reduce) {
  /* Disables all animations */
}
```

#### Screen Readers:
- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text for images
- ARIA labels where needed

#### Color Contrast:
- WCAG AAA compliance for body text
- WCAG AA compliance for large text
- 4.5:1 minimum ratio

### 7. Performance Optimizations

**CSS**:
- CSS custom properties (variables) for theming
- Modern layout (Flexbox)
- Hardware-accelerated transforms
- Efficient selectors

**JavaScript**:
- Debounced resize handlers
- `requestAnimationFrame` for smooth animations
- Passive event listeners for scroll
- Lazy-loaded interactions
- No external dependencies

**Loading**:
- Minimal HTTP requests
- Optimized asset loading
- System font fallbacks
- Google Fonts with `display=swap`

## Browser Support

**Modern Browsers** (Last 2 versions):
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (native backdrop-filter)
- Opera: ✅ Full support

**Fallbacks**:
- Backdrop-filter degrades gracefully
- CSS Grid/Flexbox widely supported
- CSS Variables with fallbacks

## File Structure

```
/blog/
├── index.html              # Main page (refactored)
├── styles.css              # Complete design system
├── script.js               # Interactive enhancements
├── DESIGN_SYSTEM.md        # This file
└── images/
    └── head.png            # Profile photo
```

## Future Enhancements

### Research Page
- Project cards with glassmorphism
- Filterable categories
- Smooth transitions between views

### Publications Page
- Timeline layout
- Citation copy buttons
- PDF preview modals

### Additional Features
- Dark mode toggle (manual override)
- Search functionality
- Blog post templates
- Contact form with validation
- Social media integration

## Customization Guide

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --color-accent: #YOUR_COLOR;
  --color-primary: #YOUR_COLOR;
}
```

### Adjusting Spacing
Modify spacing scale:
```css
:root {
  --spacing-lg: 2.5rem; /* Changed from 2rem */
}
```

### Disabling Animations
Set to user's system preference or force disable:
```css
* {
  animation: none !important;
  transition: none !important;
}
```

### Typography Changes
Update font import and variables:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

```css
body {
  font-family: 'YOUR_FONT', sans-serif;
}
```

## Credits

**Design Inspiration**: Apple.com, apple.com/mac
**Font**: Inter by Rasmus Andersson
**Original Template**: TEMPLATED (refactored completely)
**Implementation**: Claude Code by Anthropic

## License

Design system is open for personal and educational use. Original template credit to TEMPLATED under Creative Commons Attribution License.

---

**Last Updated**: November 2025
**Version**: 2.0.0
**Maintainer**: Jiayi Lu
