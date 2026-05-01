# Cyri

## Calude

Intialised with this claude prompt [prompt](https://claude.ai/share/83333b63-fb12-473a-bbb2-3b64dd0c8f96)

## drill-styles

> **Neo Brutalist design tokens for the drill component system.**  
> Hard edges. Yellow punches. Zero apologies.

---

## What's in here

A single shared token file — `styles.ts` — that exports two objects used across all drill components:

- **`colors`** — the full palette: base, accents, correct/wrong states
- **`styles`** — every inline style definition in the UI, from the progress bar down to the restart button

Keeping all visual decisions in one place means restyling the entire app is a one-file job.

---

## Design language

This system uses **Neo Brutalism** — raw, high-contrast, and physically tactile.

| Principle | In practice |
|---|---|
| Hard borders | `2px solid #000` everywhere, `border-radius: 0` |
| Offset shadows | `4px 4px 0 #000` — no blur, no spread |
| High contrast | Pure black on warm off-white (`#FFFEF0`) |
| Colour as signal | Yellow = accent, Lime = correct, Red = wrong |
| Uppercase type | `text-transform: uppercase` + wide `letter-spacing` |
| Physical press feel | Active states: `translate(2px, 2px)` + reduced shadow |

---

## Palette

```
#FFFEF0   Warm off-white      Base background
#FFE034   Yellow              Primary accent, progress fill, buttons
#C1FF72   Lime green          Correct answer state
#FF6B6B   Raw red             Wrong answer state
#000000   Black               All borders, text, shadows
```

---

## Usage

Import what you need:

```ts
import { colors, styles } from './styles';

// Inline styles
<div style={styles.wrap}>
  <div style={styles.progressTrack}>
    <div style={{ ...styles.progressFill, width: `${progress}%` }} />
  </div>
</div>

// Compose states
<button
  style={{
    ...styles.choiceBtn,
    ...(isCorrect && styles.choiceBtnCorrect),
    ...(isWrong   && styles.choiceBtnWrong),
  }}
>
  {option}
</button>
```

---

## Active / press states

The token file cannot express `:active` pseudo-states — handle these in component logic:

```ts
const [pressed, setPressed] = useState(false);

<button
  style={{
    ...styles.choiceBtn,
    ...(pressed && {
      transform: 'translate(2px, 2px)',
      boxShadow: '2px 2px 0 #000',
    }),
  }}
  onMouseDown={() => setPressed(true)}
  onMouseUp={()   => setPressed(false)}
/>
```

The same pattern applies to `restartBtn` and `modeTab`.

---

## Token reference

### `colors`

| Token | Value | Used for |
|---|---|---|
| `text` | `#000` | Primary text, borders |
| `textMuted` | `#333` | Secondary text |
| `textFaint` | `#555` | Tertiary / metadata |
| `textDim` | `#777` | Dimmed letters |
| `border` | `#000` | All borders |
| `accent` | `#FFE034` | Progress, prompt label, restart button |
| `accentAlt` | `#C1FF72` | Correct state background |
| `accentWrong` | `#FF6B6B` | Wrong state background |
| `correctBg/Border/Text` | lime / black / black | Correct choice button |
| `wrongBg/Border/Text` | red / black / black | Wrong choice button |

### `styles` — key entries

| Key | Element |
|---|---|
| `wrap` | Outermost container |
| `progressTrack` / `progressFill` | Top progress bar |
| `cyrillicWord` | Large word display |
| `letterHighlight` | Stressed letter marker |
| `promptLabel` | "Pick the stress" label pill |
| `choicesGrid` / `choiceBtn` | 2-column answer grid |
| `choiceBtnCorrect` / `choiceBtnWrong` | Answer feedback states |
| `feedback` / `feedbackCorrect` / `feedbackWrong` | Inline feedback line |
| `modeTabs` / `modeTab` / `modeTabActive` | Mode switcher |
| `statsRow` | Bottom score/streak row |
| `endScore` / `restartBtn` | End screen |

---

## What's not covered here

These files would need updates to complete a full reskin:

- **Component files** — for `:active` press handlers and hover effects
- **`global.css` / `index.css`** — `body` background, font import for `DM Mono`
- **`promptLabel` wrapper** — currently styled as `inline-block`; the component's container element may need `text-align: center` to centre it

---

## Font

The system uses **DM Mono** as its monospace face, with `Georgia` for the large Cyrillic word display.

```html
<link
  href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500;700&display=swap"
  rel="stylesheet"
/>
```