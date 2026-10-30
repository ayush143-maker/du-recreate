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

## Manual review checklist

Use these actions when reviewing a change; this checklist is separate from the development commands and does not report completed results or measured performance.

- [ ] Start the development server using the documented command and open the page it serves. Locate the relevant page or component under `src/` when reviewing a change.
- [ ] Follow visible navigation and calls to action, and review their destinations or responses against the implementation. Do not infer official university services or backend capabilities from the redesign.
- [ ] Inspect image, audio, video, font, and script references and imports in the relevant source files. Check that each local asset path resolves to an existing file.
- [ ] Check that referenced assets are used by the application; remove files only after confirming they are not referenced elsewhere. Consider whether large media is necessary before adding it, without treating this checklist as a performance measurement.
- [ ] Review external font or script URLs in the source. Confirm that each dependency is intentional and still used, and document its purpose if it is part of the interface.
- [ ] Review the page at narrow and wide viewport sizes. Check content, navigation, and media for visibility and usability.
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