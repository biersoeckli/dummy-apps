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
