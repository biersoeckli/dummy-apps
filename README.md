# QuickStack Dummy Apps

This repository contains minimal **dummy applications**, one per supported front-end framework.
They are used for **automated tests in [biersoeckli/QuickStack](https://github.com/biersoeckli/QuickStack)**:
each app is deployed with QuickStack to verify that the deployment pipeline works for the
corresponding framework.

Every app is a bare starter project that renders a single page with the text:

> This is a QuickStack Demo Application using &lt;Framework&gt;

## Purpose

- Verify that QuickStack can build and deploy each supported framework.
- Provide deterministic, dependency-light fixtures for automated deployment tests.
- Keep one canonical project per framework so regressions are easy to spot.

These apps are intentionally minimal and **not** intended for production use.

## Apps

| Folder                     | Framework     | Stack / Version                                  | Dev command      | Default port |
| -------------------------- | ------------- | ------------------------------------------------ | ---------------- | ------------ |
| [`nextjs/`](./nextjs)       | Next.js       | Next.js 16.3.5, App Router, TypeScript           | `npm run dev`    | 3000         |
| [`react/`](./react)         | React         | React 19.3.0, Vite 8.3.0, TypeScript            | `npm run dev`    | 5173         |
| [`angular/`](./angular)     | Angular       | Angular 22.1.6 (CLI 22.1.8), TypeScript          | `npm start`      | 4200         |
| [`nuxt/`](./nuxt)           | Nuxt          | Nuxt 4.5.2, Vue 3, TypeScript                    | `npm run dev`    | 3000         |
| [`astro/`](./astro)         | Astro         | Astro 7.3.2, TypeScript                          | `npm run dev`    | 4321         |
| [`sveltekit/`](./sveltekit) | SvelteKit     | SvelteKit 2.70.3, Svelte 5.57.0, TypeScript      | `npm run dev`    | 5173         |

## Running an app locally

```bash
# pick a framework folder
cd react

# install dependencies
npm install

# start the dev server
npm run dev
```

Each app can also be built for production with `npm run build` (Angular: `npm run build` / `ng build`).

## Repository structure

```text
dummy-apps/
├── nextjs/       # Next.js 16 (App Router)
├── react/        # React 19 + Vite 8
├── angular/      # Angular 22
├── nuxt/         # Nuxt 4
├── astro/        # Astro 7
├── sveltekit/    # SvelteKit 2 / Svelte 5
└── README.md
```

Each framework folder is a standalone project with its own `package.json`, tooling and `README.md`.
Dependencies are managed with `npm` and are not committed (`node_modules/` is ignored in every app).

## Adding a new framework

1. Create a new subfolder named after the framework.
2. Scaffold a minimal starter app with the framework's current official CLI.
3. Make the start page render `This is a QuickStack Demo Application using <Framework>`.
4. Ensure `npm run build` passes.
5. Add a `README.md` in the subfolder and add the app to the table above.
