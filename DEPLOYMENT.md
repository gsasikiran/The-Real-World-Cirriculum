# Deployment Plan (Cheapest + Accessible)

## Recommended Option: GitHub Pages (Free)

Why this is best for this project:
- Zero hosting cost for a static website.
- Good global availability through GitHub's CDN.
- HTTPS is automatic.
- Auto-deploy on every push to `main` (workflow included in this repo).

## One-Time Setup (5 minutes)

1. Push this project to a GitHub repository.
2. Open repository settings.
3. Go to `Settings -> Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Ensure your default branch is `main`.
6. Push any commit to trigger deployment.

Your site URL will be:
- `https://<username>.github.io/<repository>/`

## Update Flow

1. Edit files locally.
2. Commit and push to `main`.
3. GitHub Actions redeploys automatically.

## Accessibility Checklist (Minimum)

Before each release:
- Verify keyboard navigation on home and topic pages.
- Confirm color contrast for text and buttons.
- Ensure topic icon images keep empty `alt` only when decorative.
- Validate heading order (`h1 -> h2 -> h3`).

## Backup Free Option

If GitHub Pages is unavailable in your network, use Netlify free plan:
- Drag-and-drop deploy or connect GitHub repo.
- Similar zero-cost workflow for this static site.
