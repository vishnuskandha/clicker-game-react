# Contributing to Memory Match Game

Thanks for taking the time to contribute! This project is a memory matching game built with React and GSAP.

## Getting Started

1. Fork the repository.
2. Clone your fork:
   ```bash
   git clone https://github.com/<your-username>/clicker-game-react.git
   cd clicker-game-react
   ```
3. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
4. Create a feature branch:
   ```bash
   git checkout -b feat/your-feature
   ```

## Development

- Run the dev server with `npm start` (hot reload at `http://localhost:3000`).
- Use functional components with hooks, matching the existing code style.
- Use GSAP for animations and keep them short and responsive (under ~0.5s).
- Before committing, run the checks below.

## Checks

```bash
npm run build
CI=true npm test -- --watchAll=false
```

The CI pipeline runs install, tests, and the production build on every pull request.

## Pull Request Process

1. Write clear, descriptive commit messages (e.g. `feat: add difficulty levels`).
2. Update the README if your change affects usage or setup.
3. Add or update tests for new behavior.
4. Ensure build and tests pass locally, then open a pull request against `main`.

## Reporting Bugs

Open an issue and include:

- Browser and version
- Steps to reproduce
- Expected vs. actual behavior
- Screenshots or a short screen recording if applicable

## License

By contributing, you agree that your contributions are licensed under the [MIT License](LICENSE).
