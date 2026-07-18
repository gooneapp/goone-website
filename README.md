
## goone-website/README.md

# GoOne Public Website

**Description:** This is the marketing website for GoOne, built with [Next.js](https://nextjs.org/) (or React). It provides information about the platform and links to download the mobile apps.  
**Tagline:** One App. One Community. Unlimited Opportunities.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](#) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](#)

## Table of Contents

- [Quick Start](#quick-start)  
- [Architecture](#architecture)  
- [Folder Structure](#folder-structure)  
- [Scripts](#scripts)  
- [Environment Variables](#environment-variables)  
- [Building & Testing](#building--testing)  
- [CI/CD](#cicd)  
- [Deployment](#deployment)  
- [Accessibility](#accessibility)  
- [Contributing](#contributing)  
- [Issue Templates](#issue-templates)  
- [Security](#security)  
- [License](#license)  
- [Maintainers & Contacts](#maintainers--contacts)  
- [ADR & Docs](#adr--docs)  
- [Design](#design)

## Quick Start

1. **Prerequisites:** Node.js (14+), Yarn.  
2. **Install:**  
   ```bash
   git clone https://github.com/your-org/goone-website.git
   cd goone-website
   yarn install
   ```  
3. **Environment:** Copy `.env.example` (if any) to `.env`. Example: `NEXT_PUBLIC_API_URL` for linking the backend or test data.  
4. **Run (Dev):**  
   ```bash
   yarn dev
   ```  
   This starts the Next.js development server on `http://localhost:3000`.  
5. **Build:**  
   ```bash
   yarn build
   yarn start
   ```  
   (for production preview at `localhost:3000`).  

## Architecture

The website is a static or server-side rendered site. It fetches content from markdown/Headless CMS or the GoOne Backend API for dynamic parts. Diagram:

```mermaid
graph LR
    Visitor[User] -->|HTTPS| NextJS[Website (Next.js)]
    NextJS -->|API Calls| API[GoOne Backend API]
```

This shows the browser loading pages and the site fetching data from the API or CMS.

## Folder Structure

```
goone-website/
├── pages/       # Next.js pages (e.g., index.js, about.js)
├── components/  # UI components (Header, Footer, Layout)
├── public/      # Static assets (images, favicon)
├── styles/      # CSS/SASS files
├── .env.example
├── package.json
└── README.md
```

## Scripts

- `yarn dev` – Run Next.js in development (with fast refresh).  
- `yarn build` – Build production assets.  
- `yarn start` – Start server (after build).  
- `yarn lint` – Lint code (ESLint).  
- `yarn test` – Run tests (e.g. Jest for any React components).  

## Environment Variables

Example (`.env.example`):

```env
NEXT_PUBLIC_API_URL=https://api.goone.example
```

Any variable exposed to the browser must be prefixed (e.g. `NEXT_PUBLIC_`). Document accordingly.

## Building & Testing

- Development: `yarn dev`.  
- Production: `yarn build && yarn start`.  
- Testing: Use Jest and React Testing Library: `yarn test`. (Or Cypress for end-to-end.)  

Ensure pages render without errors. Aim for SEO best practices (meta tags, etc.).

## CI/CD

Set up GitHub Actions to run on push/PR. Example:

```yaml
name: Website CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '16' }
      - run: yarn install
      - run: yarn lint
      - run: yarn test
      - run: yarn build
```

Optionally, deploy on merge to `main` (e.g., Vercel/GitHub Pages). Document the workflow and triggers.

## Deployment

This site can be hosted on Vercel, Netlify, or any static hosting. Describe the steps (e.g. connect the repo, set build command to `yarn build`, publish to `/out`). If using Docker/Nginx, provide a `Dockerfile` example:

```Dockerfile
# Node base image
FROM node:16-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
```

Note where it is deployed (e.g. `https://goone.example.com`). 

## Accessibility

The website should be responsive and accessible (see WCAG guidelines). Use alt-text for images, semantic HTML, and ensure keyboard navigation works. Mention any audits (e.g. Lighthouse score).

## Contributing

Add new pages or content via pull request. The website is mostly static, so content changes may need a workflow. See main CONTRIBUTING guidelines.

## Issue Templates

Use the same templates. For example, an “Issue with Website” template can prompt for browser/OS info.

## Security

Ensure no secrets in code. Only public API endpoints are used (no sensitive client keys). Enable HTTPS. If CMS integrations are used, secure their endpoints.

## License

MIT License (see [LICENSE](../LICENSE)).

## Maintainers & Contacts

- **Frontend Lead:** Kelly Web (kelly@example.com)  
- **Marketing Team:** Marketing Team (marketing@example.com)  

## ADR & Docs

This repo has minimal architecture, but link to any ADRs related to tech choice (e.g. Next.js vs static). General docs in [goone-docs](../goone-docs).

## Design

Website designs (branding, landing pages) on Figma: [GoOne Website Designs](https://www.figma.com/GoOne-Website) (TODO link).

---

*End of Website README.*  