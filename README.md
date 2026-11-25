# Next.js Portfolio Checkpoint

A portfolio website built with Next.js (App Router).

## Steps I did

1. **Getting started**: created the project with Next.js. The structure has an `app` folder (pages and layout), a `components` folder and a `public` folder for images.
2. **Styling and images**: used a global stylesheet (`app/globals.css`), a CSS module for the navigation (`Nav.module.css`) and a CSS module for the projects grid. Images are shown with the `next/image` component.
3. **Page-based routing**: each folder in `app` with a `page.js` file becomes a route: `/` (home), `/about`, `/projects` and `/contact`. Navigation uses `next/link`.
4. **Server-side rendering**: pages are rendered on the server by default in the App Router.

## Run the project

    npm install
    npm run dev

Then open http://localhost:3000.

## Build

    npm run build
    npm start
