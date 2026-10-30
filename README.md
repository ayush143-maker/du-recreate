# du-recreate

An unofficial editorial redesign concept for the University of Delhi website, built with Next.js and React in TypeScript as a student portfolio project. It is not affiliated with, maintained by, or endorsed by the University of Delhi. This redesign concept does not establish official university services or backend capabilities.

## Project files

The root contains `src/`, `package.json`, `next.config.ts`, `postcss.config.mjs`, and `tsconfig.json`. Development, build, and check commands are defined in `package.json`.

## Run locally

Install dependencies and start the Next.js development server:

```sh
npm install
npm run dev
```

Create a production build with `npm run build`. The package also provides `npm start` to serve the production build; create the build first if production start fails.

## Development checks

The package scripts include these checks:

```sh
npm run lint
npm run typecheck
```

Use `npm run build` to check whether a production build can be created. These commands are documented, not reported as having been run.

## Troubleshooting

These are diagnostic steps, not verified results:

1. Start the app using the documented development command and open the local address it prints. Locate the relevant page or component under `src/`; the root files do not name a specific page entry.
2. If the page or an asset is missing, inspect imports and references from the relevant source file. Preserve relative paths when moving files, or update the references to match their new locations.
3. Inspect the browser Console for errors and the Network panel for failed requests, unexpected redirects, or resources that do not load.
4. Confirm each required local asset exists at the path referenced by the source. Review remote URLs separately as network-dependent resources; do not confuse a failed remote request with a missing local file.
5. If a documented npm check fails, compare the script in `package.json` with its output; do not infer a successful check from its presence in this README.

## Configuration and data handling

Review `next.config.ts` and existing package configuration before changing project settings. Do not put secrets in tracked source or configuration files. No `.env.example` is listed among the root files; if a template is added, document only variables the project actually uses, use placeholders, and keep real credentials in appropriate untracked local configuration. Values exposed to client-side code are visible in the browser; check source and configuration before deciding whether a value can remain server-side.

The repository description does not establish a backend, data-collection flow, or production service. Avoid documenting one or making data-handling claims without checking `src/` and the actual configuration.

## Browser and platform review checklist

These are review steps, not verified compatibility results. Record browsers, versions, devices, and findings separately.

- [ ] Run the app and review the page or component affected by the change under `src/`.
- [ ] Check current stable browsers relevant to the app and its intended audience; include desktop and mobile browsers where applicable.
- [ ] Inspect the developer console for errors and warnings. Use the Network panel to check failed requests, redirects, and resources that do not load.
- [ ] Follow local image, font, stylesheet, script, and other asset imports or URLs from the relevant source. Confirm local paths resolve and remote requests are intentional.
- [ ] Review the rendered page at narrow mobile and wide desktop viewport sizes for clipping, horizontal overflow, awkward wrapping, and usability. Where possible, also check an actual mobile device.
- [ ] Follow visible navigation and calls to action, and review destinations or responses against the implementation. Do not infer official university services or backend capabilities.
- [ ] Recheck institutional references and the independent-redesign disclaimer after changing page content.

## Accessibility review checklist

Review the rendered page after changes and record findings separately; these are future checks, not verified results:

- Navigate visible content and navigation using a keyboard. Check that interactive elements are reachable and operable, with visible focus.
- Check that links, buttons, and other controls have meaningful labels.
- Review text and control contrast, including text over images and at narrow viewport sizes.
- Check image alternatives in relevant components: provide useful alternatives for informative images and avoid redundant descriptions for decorative images.
- If transitions or animation are present, check that motion is reduced when the user requests reduced motion.

## Personalizing the redesign

The application source is under `src/`; locate the relevant page or component before changing visible copy or styling. Inspect the source tree for asset files and imports before replacing or adding images. Preserve import paths and relative asset references when moving files, and update references deliberately if locations change. For project-level settings, review `next.config.ts` and the existing package scripts.