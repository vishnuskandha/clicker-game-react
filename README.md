<div align="center">

# Memory Match Game

**A responsive React memory game with animated card flips, a move counter, a timer, and a victory screen.**

`React · GSAP · CSS Grid`

</div>


<!-- README polish: repository metadata badges -->
<p>
  <a href="https://github.com/vishnuskandha/clicker-game-react"><img alt="GitHub stars" src="https://img.shields.io/github/stars/vishnuskandha/clicker-game-react?style=for-the-badge&logo=github&label=Stars"></a>
  <a href="https://github.com/vishnuskandha/clicker-game-react/fork"><img alt="GitHub forks" src="https://img.shields.io/github/forks/vishnuskandha/clicker-game-react?style=for-the-badge&logo=github&label=Forks"></a>
  <a href="https://github.com/vishnuskandha/clicker-game-react/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/vishnuskandha/clicker-game-react?style=for-the-badge&logo=github&label=Issues"></a>
  <a href="https://github.com/vishnuskandha/clicker-game-react/commits"><img alt="Last commit" src="https://img.shields.io/github/last-commit/vishnuskandha/clicker-game-react?style=for-the-badge&logo=git&label=Updated"></a>
</p>
<!-- End README polish -->

[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![CI](https://github.com/vishnuskandha/clicker-game-react/actions/workflows/deploy.yml/badge.svg)](https://github.com/vishnuskandha/clicker-game-react/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-18-blue.svg?logo=react)](https://reactjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3-green.svg?logo=greensock)](https://greensock.com/)

[Play the game](https://vishnuskandha.github.io/clicker-game-react)

A memory matching game built with React and GSAP. Flip cards, find all matching pairs, and beat your best score. The game features a glassmorphism UI, 3D card flips, and celebration animations on victory.

## How to Play

1. Cards are laid out face down in a grid.
2. Click a card to flip it and reveal its letter.
3. Click a second card: if it matches, both stay face up; if not, they flip back.
4. Match all pairs in as few moves as possible. The timer tracks how long a round takes.
5. When every pair is matched, a victory screen shows your final moves and time.

## Features

- **GSAP animations**: 3D card flips, staggered card entrance, hover effects, match/fail feedback, and an animated win screen.
- **Move counter and timer**: Track your performance each round.
- **Restart support**: Shuffle a fresh deck and reset the clock with one click.
- **Responsive layout**: CSS Grid board that adapts to desktop, tablet, and mobile.
- **Modern UI**: Glassmorphism styling with animated gradients.

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

> The project uses `--legacy-peer-deps` during install due to known peer dependency conflicts in the Create React App toolchain.

### Installation

```bash
git clone https://github.com/vishnuskandha/clicker-game-react.git
cd clicker-game-react
npm install --legacy-peer-deps
```

### Available Scripts

| Script            | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| `npm start`       | Run the app in development mode at `http://localhost:3000`     |
| `npm test`        | Launch the test runner in watch mode (`CI=true` in CI)         |
| `npm run build`   | Build the production bundle into `build/`                      |
| `npm run deploy`  | Build and publish to GitHub Pages via `gh-pages`               |

## Deployment

The project is configured for GitHub Pages via the `homepage` field in `package.json`.

### GitHub Pages

```bash
npm run deploy
```

This builds the app and publishes the `build/` directory to the `gh-pages` branch. The site is served from the `gh-pages` branch in the repository's Pages settings.

### Other Hosts

The `build/` folder is fully static. Deploy it to any static host:

- **Netlify / Vercel**: point them at this repository; build command `npm run build`, publish directory `build`.
- **Any web server**: upload the contents of `build/`.

## Customization

- **Card letters**: edit the `cardValues` array in `src/components/Game.js` (it is duplicated to build the deck).
- **Animations**: GSAP tweens live in `src/components/Game.js` and `src/components/Card.js`.
- **Styling**: colors, gradients, and responsive breakpoints are in `src/App.css` and `src/index.css`.

## Project Structure

```
.
├── public/                # Static assets and HTML shell
├── src/
│   ├── components/        # Game, Card, and LicenseSection components
│   ├── App.js             # Root component with page-load animation
│   ├── App.css            # Styling and animations
│   ├── App.test.js        # Smoke test for the game title
│   └── index.js           # React entry point
└── .github/workflows/     # CI: install, test, build, deploy to GitHub Pages
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for the contribution workflow and [SECURITY.md](SECURITY.md) for security guidance.

## License

Distributed under the [MIT License](LICENSE).
