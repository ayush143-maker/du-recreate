# du-recreate

An unofficial editorial redesign concept for the University of Delhi website, built with Next.js and React in TypeScript as a student portfolio project. It is not affiliated with, maintained by, or endorsed by the University of Delhi. This redesign concept does not establish official university services or backend capabilities.

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

## Configuration and data handling

Review `next.config.ts` and the existing package configuration before changing project settings. Do not put secret values in tracked source or configuration files. No `.env.example` is listed among the root files; if a template is added, document only the variables the project actually uses, use placeholder values, and keep real credentials in an appropriate untracked local configuration. Do not assume that a variable is private merely because its name suggests it is: values exposed to client-side code are visible in the browser. Check the relevant source and configuration before deciding whether a value can remain server-side or is delivered to the client.

The repository description does not establish a backend, data-collection flow, or production service. Avoid documenting one or making data-handling claims without checking the implementation in `src/` and the actual configuration.

## Browser and platform review checklist

These are review steps, not verified compatibility results. Record the browsers, versions, devices, and findings separately; this README does not claim that testing has been completed.

- [ ] Run the app and review the page or component affected by the change. Locate it and its dependencies under `src/`.
- [ ] Check the experience in current stable browsers relevant to the Next.js and React app and its intended audience. Include desktop and mobile browsers where applicable; do not infer support for browsers or devices that were not checked.
- [ ] In each browser, inspect the developer console for errors and warnings related to the page. Use the Network panel to check failed requests, unexpected redirects, and resources that do not load.
- [ ] Follow local image, font, stylesheet, script, and other asset imports or URLs from the relevant source. Confirm local paths resolve from the files that use them, including after moving files. Review remote asset requests for correct URLs and intentional use; distinguish a failed remote request from a missing local file.
- [ ] Review the rendered page at narrow mobile and wide desktop viewport sizes. Check content, navigation, and media for clipping, horizontal overflow, awkward wrapping, and usability. Where possible, also check on an actual mobile device rather than treating viewport emulation as device testing.
- [ ] Follow visible navigation and calls to action, and review their destinations or responses against the implementation. Do not infer official university services or backend capabilities from the redesign.
- [ ] Recheck institutional references and the independent-redesign disclaimer after changing page content.

## Accessibility review checklist

Review the rendered page after changes and record findings separately. These are future checks, not verified results:

- Navigate visible page content and navigation using a keyboard. Check that every interactive element is reachable and operable, and that focus is visibly indicated.
- Check that links, buttons, and other controls have meaningful labels that describe their purpose.
- Review text and control contrast across the page, including text over images and at narrow viewport sizes.
- Check image alternatives in the relevant components: provide useful text alternatives for informative images and avoid redundant descriptions for decorative images.
- If transitions or other animation are present, check that motion is reduced when the user requests reduced motion.

## Personalizing the redesign

The application source is under `src/`; locate the relevant page or component before changing visible copy or styling. Inspect the actual source tree for existing asset files and imports before replacing or adding images. Preserve import paths and relative asset references when moving files, and update references deliberately if a file's location changes. For project-level settings, review `next.config.ts` and the existing package scripts rather than assuming configuration options.