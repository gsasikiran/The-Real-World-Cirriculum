# The Real World Cirricullum

A simple, deployable website to teach practical real-world skills that many people never learn in school.

## Site Structure

- `index.html`: Homepage with all learning tracks
- `topics/`: Separate page per topic (one file per topic)
- `topic.html`: Legacy dynamic topic fallback page
- `topics-data.js`: Shared dataset for all topics, levels, concepts, terminology, references, and quizzes
- `script.js`: Homepage renderer
- `topic.js`: Topic detail renderer shared by all topic pages
   - Includes level paths, concepts, terminology, references, guidance, and quiz scoring
- `icons/`: SVG favicons for the homepage and each topic page
- `styles.css`: Shared styling

## Topics Included

- Personal finance
- Law for daily life
- Personal safety and self-defence
- Health and first aid
- Communication and negotiation
- Career and work literacy
- Digital literacy and cyber safety
- Home and life administration
- Cooking and eating
- Calling and handling emergency situations

## Run Locally

Because this is a static site, you can open `index.html` directly in a browser.

Recommended local environment setup:

```bash
npm install
npm run dev
```

Then open `http://localhost:8080`.

Alternative local server (without npm):

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy Option 1 (Recommended): GitHub Pages via Actions

This repo now includes an automated workflow at `.github/workflows/deploy-pages.yml`.

1. Push this folder to a GitHub repository.
2. In GitHub, open `Settings -> Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main` and wait for the workflow to finish.
5. Your site will be available at:
   - `https://<your-username>.github.io/<repo-name>/`

See `DEPLOYMENT.md` for a quick rollout checklist and fallback option.

## Deploy Option 2: Netlify

1. Create a Netlify account.
2. Click `Add new site -> Deploy manually`.
3. Drag and drop this project folder.
4. Netlify will generate a live URL instantly.
5. Optional: connect a custom domain in `Site settings`.

## Suggested Next Features

- Search and filters by skill level
- Progress tracker across all topics
- Downloadable templates (budget sheet, legal checklist)
- Contact form or feedback section
