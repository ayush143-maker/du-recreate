# du-recreate

An unofficial editorial redesign concept for the University of Delhi website, built with Next.js and React in TypeScript as a student portfolio project. It is not affiliated with, maintained by, or endorsed by the University of Delhi. This redesign concept does not establish official university services or backend capabilities.

## Project files

The root contains `src/`, `package.json`, `next.config.ts`, `postcss.config.mjs`, and `tsconfig.json`. Application pages and components are under `src/`; locate the relevant source before making a change. Development, build, and check commands are defined in `package.json`.

## Run locally

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

Create a production build with `npm run build`. The package also provides `npm start` to serve the production build; create the build first if production start fails.

## Development checks

The package scripts include:

```sh
npm run lint
npm run typecheck
```

These commands are documented, not reported as having been run.

## Troubleshooting

- Start the app with the development command and open the local address it prints. Locate the relevant page or component under `src/`.
- If a page or asset is missing, inspect imports and references from the relevant source file. Preserve relative paths when moving files, or update references to match their new locations.
- Use the browser Console and Network panel to inspect errors, failed requests, redirects, and resources that do not load.
- Confirm each required local asset exists at the path referenced by the source. Review remote URLs separately from local files.
- If an npm check fails, compare its script in `package.json` with the output. Do not infer a successful check from its presence here.

## Configuration and data handling

Review `next.config.ts` and existing package configuration before changing project settings. Do not put secrets in tracked source or configuration files. No `.env.example` is listed among the root files; if a template is added, document only variables the project actually uses, use placeholders, and keep real credentials in untracked local configuration. Values exposed to client-side code are visible in the browser.

The repository description does not establish a backend or data-collection flow. Check `src/` and the actual configuration before making claims about one.

## Contributor handoff

Keep changes scoped to the relevant page, component, asset, or configuration. Preserve filenames and relative imports or asset references; if a file moves, update its references deliberately. In the handoff, briefly describe what changed and identify affected files. Before publishing, manually review the rendered change and relevant source. Report checks as run only when they have actually been run; a checklist is not a test result.

## Manual review checklist

These are review steps, not verified compatibility results:

- [ ] Run the app and review the page or component affected by the change under `src/`.
- [ ] Check the developer console and Network panel for errors, failed requests, redirects, or missing resources.
- [ ] Follow local asset imports and URLs from the relevant source; verify local paths and confirm remote requests are intentional.
- [ ] Review narrow mobile and wide desktop viewport sizes for clipping, overflow, wrapping, and usability.
- [ ] Follow visible navigation and calls to action, and compare destinations or responses with the implementation.
- [ ] Recheck institutional references and the independent-redesign disclaimer after changing page content.
- [ ] Review the change summary and README claims before publishing.