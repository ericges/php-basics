# PHP Basics

`php-basics` is a slide deck for teaching PHP 8.2 fundamentals. It is built with [Reveal.js](https://revealjs.com/) and bundled with Vite, with syntax highlighting provided by Prism.js.

## What It Covers

The presentation includes sections on:

- what PHP is
- creating a first PHP file
- variables and syntax
- debugging
- `echo`, `print`, and `die`
- strings
- control flow
- functions
- arrays
- forms and superglobals
- templating syntax

## Getting Started

### Requirements

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Vite will start a local dev server. Open the URL it prints in your browser to view the slides.

## Project Structure

```text
.
├── index.html
├── package.json
├── src
│   ├── main.js
│   ├── styles.css
│   └── sections/
```

- `index.html` loads the app shell and fonts.
- `src/main.js` imports each slide section and mounts the Reveal.js deck.
- `src/styles.css` contains the presentation theme and Reveal overrides.
- `src/sections/*.html` contains the deck content, split by topic.

## Editing the Deck

Each topic lives in its own HTML partial under `src/sections`.

To add or reorder slides:

1. Create or update a file in `src/sections/`.
2. Import it in `src/main.js`.
3. Add it to the `sections` array in the correct order.

Code samples use Prism.js language classes such as `language-php`, `language-html`, and `language-bash`.

## Tech Stack

- Vite
- Reveal.js
- Prism.js

## Build Output

Production files are generated in `public/` after running:

```bash
npm run build
```
