# du-recreate

An unofficial editorial redesign concept for the University of Delhi website, built with Next.js and React in TypeScript as a student portfolio project. It is not affiliated with, maintained by, or endorsed by the University of Delhi. The redesign concept does not establish official university services or backend capabilities.

## Run locally

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

Create a production build with `npm run build`. The package also provides `npm start` to serve the production build; create the build first if production start fails.

The package scripts include these development checks:

```sh
npm run lint
npm run typecheck
```

These commands are documented here, not reported as having been run.

## Source and configuration

Application pages and components are under `src/`; locate the relevant source before making a change. The repository root also contains `package.json`, `next.config.ts`, `postcss.config.mjs`, and `tsconfig.json`. Check `package.json` and `next.config.ts` when changing scripts, build behavior, or project settings.

Do not put secrets in tracked source or configuration files. Values exposed to client-side code are visible in the browser. The project description does not establish a backend or data-collection flow; inspect `src/` and the actual configuration before making claims about one.

## Publishing and troubleshooting

The supplied repository details do not establish a deployment provider, deployment configuration, or output directory. For a publishing environment, verify its project root, build settings, and output expectations against `package.json`, `next.config.ts`, and the actual build result rather than assuming a static output directory.

If a page or asset is missing, inspect the relevant source under `src/`, its imports, and referenced paths. Use the browser Console and Network panel to investigate errors and failed requests. If an npm check fails, compare its script in `package.json` with the command output; the presence of a script is not evidence that it passed.

- `src/` — application source.
- `package.json` — dependencies and declared scripts.
- `next.config.ts` — Next.js configuration.