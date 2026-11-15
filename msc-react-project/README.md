# MSC — Marketing Support Consultancy

A responsive React website concept for a marketing consultancy. It was created as a learning project for the New Horizon React JS practical assignment.

## Features
- Home, About, Services and Contact pages
- Client-side navigation with React Router
- Reusable service cards using props
- Service list rendered with JavaScript `.map()` and searchable with `useState`
- Responsive mobile navigation using `useState`
- Controlled contact form with required-field and email validation
- Responsive layout using CSS Grid, Flexbox and media queries

## Technologies
- React and JavaScript
- Vite
- React Router
- HTML and CSS

## Installation
1. Install Node.js (LTS) from https://nodejs.org/.
2. Open this folder in Visual Studio Code.
3. Open the VS Code terminal.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local address printed in the terminal (usually `http://localhost:5173`).

## Production build
Run `npm run build`. Vite creates the production website in the `dist` folder.

## Important notes before submission
- The contact form currently validates input in the browser and displays a demo success message. It does not send or store messages. A backend or form service is needed for real message delivery.
- The email address and telephone number on the Contact page are sample details. Replace them with approved contact details before publishing.
- Review the text, personalise the project, and make sure you can explain the code. The assignment is an individual practical project.

## Suggested deployment
Import the GitHub repository into Netlify or Vercel. Use `npm run build` as the build command and `dist` as the publish/output directory.
