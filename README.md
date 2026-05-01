# Cyri

A minimal flashcard app for learning the Serbian Cyrillic alphabet. Built for heritage learners who already speak Serbian and want to connect the sounds they know to the written Cyrillic script.


## Calude

Intialised with this claude prompt [prompt](https://claude.ai/share/83333b63-fb12-473a-bbb2-3b64dd0c8f96)


## How it works

Two drill modes, each taking about 5–10 minutes:

**Letter drill** — a full Serbian word is shown in Cyrillic with one letter highlighted. Tap its Latin equivalent from four choices.

**Word gap** — a Serbian word is shown with one letter missing. Tap the correct Cyrillic letter that fills the gap.

Both modes draw from a pool of 30 common Serbian words, each anchored to one letter of the alphabet. Sessions are shuffled and capped at 10 cards.

## Running locally

```bash
npm install
npm run dev
```

## Project structure

```
src/
├── App.jsx                  # orchestrator: mode tabs, session state
├── data/
│   └── words.js             # Serbian word database (30 entries)
├── logic/
│   └── game.js              # shuffle, session building, answer checking
├── styles/
│   └── styles.js            # shared style tokens
└── components/
    ├── DrillShell.jsx        # shared UI: progress bar, choices, end screen
    ├── LetterDrill.jsx       # mode 1
    └── WordGap.jsx           # mode 2
```

## Extending the word list

Each entry in `src/data/words.js` follows this shape:

```js
{
  word: "ШУМА",          // Serbian word in Cyrillic
  meaning: "forest",     // English translation
  highlight: 0,          // index of the letter being taught
  cyrillicLetter: "Ш",   // Cyrillic letter at that position
  latinLetter: "Š",      // correct Latin equivalent
  wrong: ["S", "CH", "Ž"] // 3 plausible distractors
}
```

Wrong choices should be letters that are visually or phonetically similar to the correct answer — this is what makes the drill useful rather than trivial.

## Deploying

Pushes to `main` deploy automatically to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

Live at: `https://znichola.github.io/cyri/`