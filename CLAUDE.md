# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## AI Assistant Behavior

This is a Frontend Mentor learning challenge. See [AGENTS.md](./AGENTS.md) for required behavior guidelines — act as a mentor who guides rather than solves, discusses trade-offs, and avoids writing complete solutions.

## Running the Project

No build step. Open HTML files directly in a browser, or use a local dev server to avoid CORS issues when fetching `data.json`:

```
npx serve starter-code
# or
python -m http.server --directory starter-code
```

## Project Structure

All work happens inside `starter-code/`. The root directory contains challenge assets (design preview, README) that are not part of the deliverable.

**Pages:**
- `index.html` — Home page (hero, feature highlights, CTA)
- `recipes.html` — Recipe listing with search and time filters
- `recipe.html` — Individual recipe detail (loaded dynamically by slug)
- `about.html` — Static about/mission page

**Data:** `data.json` — 8 recipes, each with: `id`, `title`, `slug`, `image` (`large`/`small`), `overview`, `servings`, `prepMinutes`, `cookMinutes`, `ingredients[]`, `instructions[]`

**Fonts:** Nunito and Nunito Sans variable fonts in `assets/fonts/` (or link from Google Fonts)

## Architecture Notes

**Recipe detail routing:** `recipe.html` has no data in the HTML — it must read a slug or ID from the URL (e.g. `?slug=lentil-spinach-soup`), fetch `data.json`, find the matching recipe, and render it dynamically.

**Search and filtering on `recipes.html`:** Filters operate on the in-memory array fetched from `data.json`. Filter by max `prepMinutes`, max `cookMinutes`, and by matching `title` or `ingredients[]` entries against a search string.

**Responsive images:** Each recipe has `image.large` and `image.small` — use `<picture>`/`srcset` for art direction.

**Using React framework and scss :** Module scripts (`type="module"`) are fine for splitting JS across files.
