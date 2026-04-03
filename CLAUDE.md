# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Reveal.js slide deck for teaching PHP 8.2 fundamentals, bundled with Vite and using Prism.js for syntax highlighting. Deployed to GitHub Pages via a workflow on push to `main`.

## Commands

- `npm run dev` — start Vite dev server (HMR enabled)
- `npm run build` — production build to `public/` directory
- `npm run preview` — preview the production build locally

There are no tests or linting configured.

## Architecture

- **`index.html`** — app shell; loads `src/main.js` as a module.
- **`src/main.js`** — imports all slide sections as raw HTML strings (`?raw` Vite imports), injects them into `.slides`, initializes Reveal.js, and triggers Prism.js highlighting on `ready`/`slidechanged` events.
- **`src/sections/##-name.html`** — each file is a self-contained `<section>` (or nested `<section>` for vertical slides) representing one topic. Numbered prefix controls ordering. To add/reorder slides, create/rename files here and update the imports and `sections` array in `main.js`.
- **`src/styles/styles.css`** — custom dark theme with CSS variables (`--bg-deep`, `--accent-teal`, etc.), Reveal overrides, Prism overrides, and utility classes (`.cols`, `.compare`, `.best-practice`, `.warning-box`, `.hl-*` highlight helpers).
- **`src/fonts/`** — local Outfit (body) and JetBrains Mono (headings/code) variable fonts, imported via CSS files in `src/styles/fonts/`.

## Vite Config

- `base` path is set via `BASE_PATH` env var (used by the GitHub Pages deploy workflow).
- `publicDir: false` — no static public directory.
- Build output goes to `public/` (not the default `dist/`).

## Slide Authoring Conventions

- Code blocks use Prism.js language classes: `language-php`, `language-html`, `language-bash`.
- Callout boxes: `.best-practice` and `.warning-box` classes auto-generate labeled headers via CSS `::before`.
- Layout: `.cols` for side-by-side flex layout, `.compare` for two-column grid comparisons.
- Text highlight spans: `.hl-amber`, `.hl-teal`, `.hl-pink`, `.hl-blue`, `.hl-green`, `.hl-purple`, `.hl-red`.
- Reveal deck is configured at 940×720 with `hash: true` and `slideNumber: 'c/t'`.
