# Portfolio website

A static portfolio and Markdown blog built with Astro. The production site is
published to the `gh-pages` branch. Work and drafts stay on `main`.

## Setup

```console
devenv shell
npm install
dev
```

Edit personal details and projects in `src/data/site.ts`. Replace
`public/avatar.svg` with a photo and update the image path in the two Astro
files that reference it.

Add posts to `src/content/blog`. A post with `draft: true` is visible during
local development and excluded from production builds.

## Deploy

Push `main`. The GitHub Actions workflow builds the site and publishes only the
generated `dist` directory to `gh-pages`. In the repository Pages settings,
select **Deploy from a branch**, then choose `gh-pages` and `/ (root)`.

The defaults assume `https://fcoelhomrc.github.io/`. Set the repository
variables `SITE_URL` and `BASE_PATH` if the final address differs. Update
`public/robots.txt` at the same time.

Set `PUBLIC_PLAUSIBLE_DOMAIN` as a repository variable to enable optional
Plausible analytics. Leave it unset for no tracking script.
