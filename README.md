# du-recreate

An unofficial editorial redesign concept for the University of Delhi website, built with Next.js and React in TypeScript as a student portfolio project. It is not affiliated with, maintained by, or endorsed by the University of Delhi. This redesign concept does not establish any official university services or backend capabilities.

## Project files

The root contains `src/`, `package.json`, `next.config.ts`, `postcss.config.mjs`, and `tsconfig.json`. The development, build, and check commands are defined in the scripts in `package.json`.

## Run locally

Install dependencies and start the Next.js development server:

```sh
npm install
npm run dev
```

Create a production build with:

```sh
npm run build
```

The package also provides `npm start` to serve the production build. Create the build first if the production start fails.

## Development checks

Review changes in the development server and run the available checks:

```sh
npm run lint
npm run typecheck
```

Use `npm run build` to check that a production build can be created. Keep the project clearly labelled as an independent redesign, and check institutional references when editing.