# Repository Guidelines

## Project Structure & Module Organization

This repository is a Hexo 8 blog. Site-wide settings live in `_config.yml`; Anzhiyu settings are in `_config.anzhiyu.yml`. Write posts and pages under `source/` (posts use `source/_posts/*.md`), and use `scaffolds/` for templates. The `themes/anzhiyu` directory is a Git submodule containing Pug layouts, Stylus, JavaScript, and assets. `public/` is generated and ignored. GitHub Pages automation is in `.github/workflows/pages.yml`.

## Build, Test, and Development Commands

Run `npm ci` after checkout to install lockfile-pinned dependencies.

- `npm run server` starts Hexo’s local preview server with live regeneration.
- `npm run clean` removes Hexo’s generated cache and output.
- `npm run build` generates the site into `public/`.
- `npx hexo clean && npm run build` mirrors the clean build used by CI.

There is no unit-test or lint command. Before submitting changes, run a clean build and inspect affected pages with `npm run server`. Pushing to `main` triggers Pages; `npm run deploy` exists but the root deployment type is unset.

## Coding Style & Naming Conventions

Use UTF-8 Markdown with YAML front matter. Name posts in lowercase or kebab-case (for example, `source/_posts/hello-world.md`) and match existing front-matter keys. Use two-space YAML indentation and preserve surrounding Pug, Stylus, and JavaScript style. Keep edits focused; do not hand-edit generated `public/` or `db.json`.

## Testing Guidelines

Build validation is the test gate: a clean `hexo generate` must complete without errors. Check changed pages, navigation, asset paths, and responsive rendering locally. Add representative content checks when changing theme tags or rendering behavior.

## Commit & Pull Request Guidelines

Existing commits use short Chinese summaries (for example, `修复` and `添加自动部署`) rather than a formal prefix. Follow that concise style, state the user-visible change, and keep unrelated changes separate. Pull requests should describe affected content, configuration, or theme behavior; include validation commands and screenshots for visual changes; link issues when applicable; and call out submodule or deployment impact.

## Configuration & Security

Do not commit API keys, analytics secrets, comment credentials, or private URLs in `_config*.yml` or theme files. Keep personal overrides local. When updating Anzhiyu, commit the theme change first, then update the submodule pointer here and verify the root build.
