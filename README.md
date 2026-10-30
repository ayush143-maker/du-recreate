# du-recreate

An unofficial editorial redesign concept for the University of Delhi website, built with Next.js and React in TypeScript as a student portfolio project. It is not affiliated with, maintained by, or endorsed by the University of Delhi. This repository describes a website redesign concept; it does not establish any official University of Delhi services or backend capabilities.

## Project files

The root contains the `src/` directory and these files: `package.json`, `next.config.ts`, `postcss.config.mjs`, and `tsconfig.json`. The documented development, build, and check commands are provided through the scripts in `package.json`.

## Run locally

Install dependencies and start the Next.js development server:

    npm install
    npm run dev

Create a production build with:

    npm run build

The package also provides `npm start` to serve the production build. If the production start fails, create the build first with `npm run build`.

## Development checks

After making changes, review them in the development server and run the repository's available checks:

    npm run lint
    npm run typecheck

Use `npm run build` to check that a production build can be created. Keep the project clearly labelled as an independent redesign and check institutional references when editing.