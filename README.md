# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# MovieExplorer

MovieExplorer is a small React app for browsing TV shows. The home page introduces the site, while the shows page loads titles from the [TVMaze API](https://www.tvmaze.com/api) and lets you search by name.

## What it includes

- A landing page at `/`
- A shows listing page at `/shows`
- Search by show title
- Responsive cards with posters, ratings, and release years
- A details modal with the poster, summary, genres, status, and runtime
- Vercel routing support for refreshing the `/shows` page directly

## Getting started

You'll need Node.js installed on your computer. From the project folder, install the dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will print the local URL in the terminal. Open it in a browser and use the "Browse movies" button to visit the shows page.

## Useful commands

```bash
npm run dev      # Start the development server
npm run lint     # Check the project for lint errors
npm run build    # Create a production build
npm run preview  # Preview the production build locally
```

## API

The shows page uses these TVMaze endpoints:

- `GET https://api.tvmaze.com/shows` for the initial list
- `GET https://api.tvmaze.com/search/shows?q=:query` for searches

No API key is needed.

## Deploying to Vercel

This project can be deployed as a Vite site on Vercel. Import the repository, and Vercel should detect the build settings automatically:

- Build command: `npm run build`
- Output directory: `dist`

The `vercel.json` file rewrites requests to `index.html`, which allows React Router to handle direct visits and refreshes on `/shows`.
