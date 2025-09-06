# 🎮 Memory Match Game

An advanced memory matching game built with React and GSAP animations featuring a modern, responsive UI and smooth animations.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Game-blue?style=for-the-badge&logo=react)](https://vishnuskandha.github.io/clicker-game-react)
[![GitHub Stars](https://img.shields.io/github/stars/vishnuskandha/clicker-game-react?style=for-the-badge&logo=github)](https://github.com/vishnuskandha/clicker-game-react)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green?style=for-the-badge&logo=greensock)](https://greensock.com/)

![Game Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Memory+Match+Game)

## ✨ Features

- **Smooth GSAP Animations**: Card flips, hover effects, and page transitions
- **Modern UI Design**: Glassmorphism effects with animated gradients
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Game Statistics**: Track moves and time
- **Win Celebration**: Animated victory screen with confetti effects
- **Easy Installation**: One-command setup and deployment

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vishnuskandha/clicker-game-react.git
   cd clicker-game-react
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to play the game!

## 🎯 How to Play

1. **Objective**: Match all pairs of cards with the same letter
2. **Gameplay**: 
   - Click on cards to flip them
   - Find matching pairs
   - Complete the game in as few moves as possible
3. **Scoring**: Track your moves and time to beat your best score

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run deploy` - Deploys to GitHub Pages

## 🌐 Deployment

### GitHub Pages Deployment

1. **Update the homepage URL** in `package.json`:
   ```json
   "homepage": "https://vishnuskandha.github.io/clicker-game-react"
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch
   - Your game will be live at `https://vishnuskandha.github.io/clicker-game-react`

### Alternative Deployment Options

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **Heroku**: Use the React buildpack

## 🎨 Customization

### Changing Card Values

Edit the `cardValues` array in `src/components/Game.js`:

```javascript
const cardValues = ["A", "B", "C", "D", "E", "F", "G", "H"];
```

### Modifying Animations

Adjust GSAP animations in the component files:

```javascript
// Example: Change card flip duration
gsap.to(cardRef.current, {
  rotationY: 180,
  duration: 0.5, // Adjust this value
  ease: "power2.inOut"
});
```

### Styling Changes

Modify `src/App.css` to customize:
- Colors and gradients
- Card sizes and spacing
- Animation timings
- Responsive breakpoints

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Card.js          # Individual card component with GSAP animations
│   └── Game.js          # Main game logic and animations
├── App.js               # Root component with page transitions
├── App.css              # Modern styling with animations
└── index.js             # React app entry point
```

## 🎭 Animation Features

- **Page Load**: Smooth fade-in with scale animation
- **Card Entrance**: Staggered card appearance with rotation
- **Card Flips**: 3D rotation with smooth transitions
- **Hover Effects**: Scale and glow animations
- **Match Detection**: Success/failure animations
- **Win Screen**: Celebratory bounce and fade effects
- **Restart**: Smooth card reset with rotation

## 🔧 Technical Details

- **React 19**: Latest React features
- **GSAP 3.13**: Professional-grade animations
- **CSS3**: Modern styling with gradients and transforms
- **Responsive Grid**: CSS Grid for perfect card layout
- **Performance**: Optimized animations with hardware acceleration

## 🐛 Troubleshooting

### Common Issues

1. **Dependency conflicts**: Use `--legacy-peer-deps` flag
2. **Build errors**: Clear node_modules and reinstall
3. **Animation issues**: Check browser compatibility

### Getting Help

- Check the [Issues](https://github.com/vishnuskandha/clicker-game-react/issues) page
- Review the [GSAP Documentation](https://greensock.com/docs/)
- Read the [React Documentation](https://reactjs.org/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/) for amazing animation capabilities
- [React](https://reactjs.org/) for the component-based architecture
- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) for responsive layouts

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Enjoy playing! 🎉**

Made with ❤️ and lots of ☕