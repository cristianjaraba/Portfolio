# Jaraba Portfolio

Personal portfolio of Cristian Jaraba, built as a single page Angular
application with a separate legal notice page.

## Tech stack

- Angular 22 (standalone components, signals, reactive forms)
- TypeScript 6
- SCSS with shared variables and mixins
- Vitest for unit tests

## Requirements

- Node.js 20.19+, 22.12+ or 24+
- npm 11+

## Getting started

```bash
npm install
npm start
```

The dev server opens `http://localhost:4200/` and reloads on every change.

## Scripts

| Script | Description |
| --- | --- |
| `npm start` | Start the dev server and open the browser |
| `npm run build` | Production build into `dist/` |
| `npm run watch` | Development build that rebuilds on change |
| `npm test` | Run the unit tests once |

## Routes

| Path | Page | Content |
| --- | --- | --- |
| `/` | `Home` | Hero, about me, skills, projects and contact |
| `/imprint` | `Imprint` | Legal notice, linked from the footer and the contact form |

## Project structure

```
src/
  app/
    core/          Interfaces and services shared across features
    features/      Sections of the portfolio (hero, about me, skills, ...)
    layout/        Header and footer
    pages/         Routed pages composing the sections
    shared/        Reusable presentational components
  assets/          Icons and screenshots
  styles/          Global stylesheet, variables, mixins and fonts
```

The root component only renders the router outlet and the footer. Each page
composes the feature sections it needs, so a section can be reused on more
than one page.

Project data lives in `ProjectService`. The projects section and the project
dialog share the selected project through a signal on that service, which
lets the dialog cycle through the list on its own.

## Code conventions

- No source file exceeds 300 lines; larger stylesheets are split into
  partials, as in `hero.scss` and `_hero-base.scss`.
- TypeScript is documented with JSDoc in English. Templates and stylesheets
  carry no comments; names and structure carry the intent instead.
- Stylesheets follow BEM style class names and are mobile first, with the
  media queries grouped at the end of the file.
- Design tokens are defined in `src/styles/_variables.scss` and reusable
  blocks in `src/styles/_mixins.scss`.

## Tests

```bash
npm test
```

Every component has a smoke test asserting it is created. Components using
`RouterLink` get the router providers through `provideRouter([])`.

## Contact form

The contact form is validated with Angular reactive forms. Instead of extra
error labels, each field shows its validation hint inside its own
placeholder. Submitting currently resets the form; sending the message to a
backend is not wired up yet.
