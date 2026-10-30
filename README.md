# du-recreate

An unofficial editorial redesign concept for the University of Delhi website, built with Next.js and React in TypeScript as a student portfolio project. It is not affiliated with, maintained by, or endorsed by the University of Delhi. The redesign does not establish official university services or backend capabilities.

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

## Page structure and source

The TypeScript/JSX page entrypoint composes a Header, Hero, several home-page sections, and a Footer. The listed sections are Issue Index, Heritage, Stats, Word Band, Academics, Campus, Notices, and Admissions. The entrypoint imports its UI from `@/components/...` modules. The supplied entrypoint does not show the section implementations, user interactions, persistence, or external requests, so inspect the relevant component source before describing or changing those details.

Application pages and components are under `src/`. The repository root also contains `package.json`, `next.config.ts`, `postcss.config.mjs`, and `tsconfig.json`. Check `package.json` and `next.config.ts` when changing scripts or project settings.

## Publishing and troubleshooting

No deployment provider, deployment configuration, or output directory is documented. Verify a publishing environment’s settings against the project configuration and actual build result rather than assuming an output format. Keep secrets out of tracked files; values exposed to client-side code are visible in the browser. If a page or asset is missing, inspect its source, imports, and referenced paths. A declared check script is not evidence that it passed.