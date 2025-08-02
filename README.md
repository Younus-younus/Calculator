# Professional Calculator

A modern, interactive calculator web application built with HTML, CSS, and JavaScript. Features a sleek design with dark/light theme support, keyboard navigation, and professional animations.

## ✨ Features

### 🎨 Modern Design
- **Clean, professional interface** with modern typography
- **Responsive design** that works on all devices
- **Smooth animations** and hover effects
- **Professional color scheme** with carefully chosen contrasts

### 🌙 Theme Support
- **Dark/Light mode toggle** with smooth transitions
- **Persistent theme preference** saved in localStorage
- **System theme detection** (respects user preferences)

### ⌨️ Advanced Functionality
- **Full keyboard support** for all operations
- **Smart number formatting** with thousand separators
- **Error handling** with user-friendly messages
- **Calculation history** display
- **Percentage calculations**
- **Backspace functionality**

### 🎯 Interactive Elements
- **Ripple effects** on button clicks
- **Visual feedback** for operations
- **Active state indicators** for operators
- **Loading animations** on startup
- **Success animations** for completed calculations

### ♿ Accessibility
- **ARIA labels** for screen readers
- **Keyboard navigation** support
- **High contrast mode** compatibility
- **Reduced motion** respect for accessibility preferences
- **Focus indicators** for better navigation

### 📱 Progressive Web App Ready
- **Service Worker** for offline functionality
- **Responsive design** for mobile devices
- **Fast loading** with optimized assets

## 🚀 Getting Started

1. Clone or download the repository
2. Open `index.html` in your web browser
3. Start calculating!

## 🎮 Usage

### Mouse/Touch
- Click any button to perform operations
- Use the theme toggle in the header to switch between light/dark modes
- Click "AC" to clear all, "⌫" for backspace, "%" for percentage

### Keyboard Shortcuts
- **Numbers (0-9)** - Input digits
- **Operators (+, -, *, /)** - Mathematical operations
- **Enter or =** - Calculate result
- **Escape or C** - Clear all
- **Backspace** - Delete last digit
- **%** - Percentage operation
- **.** - Decimal point

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript** - ES6+ features with class-based architecture
- **Google Fonts** - Inter and JetBrains Mono for professional typography

### Browser Support
- Chrome/Chromium 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- **Optimized animations** with CSS transforms
- **Efficient event handling** with event delegation
- **Minimal DOM manipulation** for smooth performance
- **Lazy loading** of non-critical resources

## 📁 Project Structure

```
calculator/
├── index.html          # Main HTML structure
├── style.css           # Professional styling
├── style.js            # Calculator logic and interactions
├── sw.js              # Service Worker for PWA features
└── README.md          # This file
```

## 🎨 Customization

The calculator uses CSS custom properties (variables) for easy theming:

```css
:root {
    --bg-primary: #f8fafc;
    --text-primary: #1e293b;
    --btn-operator-bg: #3b82f6;
    /* ... more variables */
}
```

You can easily customize colors, spacing, and typography by modifying these variables.

## 🐛 Browser Compatibility

This calculator is built with modern web standards and requires a recent browser. For older browser support, consider adding polyfills for:
- CSS Grid
- CSS Custom Properties
- ES6+ JavaScript features

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 🙏 Acknowledgments

- Icons and design inspiration from modern calculator apps
- Google Fonts for beautiful typography
- CSS-Tricks and MDN for best practices and techniques

---

**Made with ❤️ for professional calculations**
