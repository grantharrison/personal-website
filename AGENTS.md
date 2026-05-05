# AGENTS.md

Guidance for Codex and other coding agents working in this repository.

## Project Overview

This is a compact personal portfolio website built with Create React App. The app uses React 18, React Router, Tailwind CSS, Headless UI, and Heroicons.

The main user-facing pages are:

- Home: introduction/about content
- Projects: portfolio project descriptions
- Resume: work experience and education

The app is deployed as a static single-page app, with `public/_redirects` providing Netlify-style route fallback.

## Key Files

- `src/index.js`: React root setup and `BrowserRouter`
- `src/App.js`: top-level layout and route definitions
- `src/shared/Header/Header.tsx`: shared desktop/mobile navigation
- `src/components/Home/Home.tsx`: home page
- `src/components/Projects/Projects.tsx`: projects page
- `src/components/Resume/Resume.tsx`: resume page
- `src/index.css`: Tailwind imports and global font helpers
- `tailwind.config.js`: Tailwind content configuration
- `public/_redirects`: SPA fallback route config
- `package.json`: scripts and dependencies

## Commands

Use npm for this project.

```bash
npm start
npm run build
npm test
npm run format
```

`npm start` runs the local CRA dev server. `npm run build` creates a production build.

## Source Structure

Components live under `src/components/<ComponentName>/` with a `.tsx` component file, a colocated CSS file, and a generated-looking test file. Shared components live under `src/shared/`.

Although several component files use `.tsx`, the repo currently does not include a `tsconfig.json`, and the main entry files are JavaScript. Treat this as a CRA app with mixed JS/TSX conventions unless the task explicitly asks to complete the TypeScript migration.

## Routing

Routes are defined in `src/App.js`:

- `/` renders `Home`
- `/projects` renders `Projects`
- `/resume` renders `Resume`

When adding pages, update `src/App.js` and the `navigation` array in `src/shared/Header/Header.tsx`. Keep SPA deployment behavior in mind; `public/_redirects` should continue routing all paths to `index.html`.

## Styling

The app uses Tailwind utility classes heavily, plus small component-specific CSS files. Global font helpers are defined in `src/index.css`:

- `.code`
- `.name`

Before adding new styling patterns, prefer existing Tailwind conventions and the colocated CSS pattern already used by `Home`, `Projects`, `Resume`, and `Header`.

Prettier settings:

- 2-space indentation
- no semicolons
- single quotes
- trailing commas where valid in ES5

## Tests

Testing Library is installed and test files exist beside components. Some tests appear stale or generated: several expect `data-testid` attributes that the current components do not render, and `src/App.test.js` still checks for default CRA text.

If changing component behavior, either update the related tests to reflect actual rendered content or note why tests were not run.

## Build Artifacts

The repository currently contains checked-in generated output under `build/` and `dist/`. Do not edit generated build files by hand. If a task requires refreshed production assets, run the build command and let the generated files change naturally.

## Implementation Notes

- Keep changes small and aligned with the existing component structure.
- Avoid unrelated refactors, especially around the JS/TSX mix, unless requested.
- Use React Router components correctly; internal navigation should use router-aware links, while external destinations such as Medium can remain normal anchors.
- Preserve the static deployment setup unless the deployment target changes.
- Prefer accessible markup for navigation, buttons, and mobile menu interactions.
