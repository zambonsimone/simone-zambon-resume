# Simone Zambon Resume

The resume webapp showcasing Simone Zambon profile, projects and experience as a software developer.

**Live site:** https://simone-zambon-resume.dev

---

## About

Simone is a software developer with a proven experience of 5+ years in frontend development and an interest in backend and mobile development.

---

## Tech Stack

- **React** with **TypeScript**
- **HTML** for structuring UI content
- **SCSS** for styling
- **Webpack** for building, bundling, code splitting
- **Cypress** for integration testing
- **Jest** for unit testing
- **ESLint** for linting and strict coding style rules
- **Node** for devops and developing the backend server
- **Netlify** for deploying

---

## Project Structure

```
netlify/
├── functions/          # Netlify serverless functions
cypress/
├── e2e/                # Integration tests and utils
├── fixtures/           # JSON data to stub http calls
└── interceptors/       # Objects containing Cypress interceptors
server/                 # Data used by/for the backend server
src/
├── api/                # Data used to perform/handle HTTP calls
├── components/         # React Components (common and specific)
├── hooks/              # React Hooks
├── i18next/            # Multilingual support
├── routes/             # Page components and paths
├── utils/              # Reusable helper functions
├── index.tsx           # App entry point
├── commons.scss        # Common SCSS variables
├── constants.ts        # Common TS constants
├── font.scss           # SCSS font values
├── metrics.scss        # SCSS sizing and spaces values
├── mixins.scss         # SCSS mixins
└── types.scss          # Global TS types
cypress.config.ts       # Cypress config file
jest.config.ts          # Jest config file
netlify.toml            # Netlify config file
webpack.config.js       # Webpack config file to be extended
webpack.config.dev.js   # Webpack config file for dev environment
webpack.config.prod.js  # Webpack config file for prod environment
```

---

## Core Features

- Fully responsive design across devices
- Intuitive navigation across sections
- Contact form with validation and message/error handling
- Multilingual support (English / Italian / Norwegian)
- Fast loading and optimized performance
- Accessibility

---

## Available Scripts
    
- `npm run start` – Starts local development server with dev env variables and webpack config 
- `npm run start:prod` – Starts local development server with prod env variables and webpack config 
- `npm run build` – Builds the app for Netlify prod environment
- `npm run build:prod` – Builds the app for local prod environment
- `npm run build:dev` – Builds the app for local dev environment
- `npm run server:dev` – Run Express NodeJS backend server with dev env variables  
- `npm run server:prod` – Run Express NodeJS backend server with prod env variables  
- `npm run test` – Run Jest test
- `npm run cy:open` – Open Cypress dashboard

---

## Installation & Local Development

```bash
git clone https://github.com/zambonsimone/simone-zambon-resume.git
cd simone-zambon-resume
npm install
npm run server:dev (or server:prod)
npm run start (or start:prod)
```

Visit `http://localhost:8080` to preview the site live.

---

## License

MIT © Simone Zambon – Feel free to reuse or adapt this template for personal use.

---

## Author

**Simone Zambon**  
Showcasing web developing expertise 
- [simone-zambon-resume.dev](https://simone-zambon-resume.dev)
- [LinkedIn](https://www.linkedin.com/in/simone-zambon-2ab164169/)
- [GitHub](https://github.com/zambonsimone)