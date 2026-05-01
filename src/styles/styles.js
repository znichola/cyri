// Shared style tokens — Neo Brutalism edition

export const colors = {
  text:          "#000",
  textMuted:     "#333",
  textFaint:     "#555",
  textDim:       "#777",
  border:        "#000",
  track:         "#000",
  accent:        "#FFE034",   // primary yellow punch
  accentAlt:     "#C1FF72",   // lime green for correct
  accentWrong:   "#FF6B6B",   // raw red for wrong

  correctBg:     "#C1FF72",
  correctText:   "#000",
  correctBorder: "#000",

  wrongBg:       "#FF6B6B",
  wrongText:     "#000",
  wrongBorder:   "#000",
};

export const styles = {
  wrap: {
    fontFamily: "'DM Mono', 'Courier New', monospace",
    maxWidth: 480,
    margin: "0 auto",
    padding: "2rem 1.5rem",
    minHeight: "100vh",
    boxSizing: "border-box",
    background: "#FFFEF0",    // warm off-white base
  },

  // Progress bar — thick, hard-edged
  progressTrack: {
    height: 8,
    background: "#fff",
    border: "2px solid #000",
    borderRadius: 0,
    marginBottom: "2.5rem",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    background: colors.accent,
    borderRadius: 0,
    transition: "width 0.4s ease",
  },

  // Word display
  wordDisplay: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  cyrillicWord: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 2,
    fontSize: 56,
    fontFamily: "Georgia, serif",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textShadow: "3px 3px 0px #000",   // hard drop shadow
  },
  cyrillicLetter: {
    display: "inline-block",
    transition: "color 0.2s",
  },
  letterHighlight: {
    color: "#000",
    background: colors.accent,
    paddingBottom: 2,
    paddingLeft: 3,
    paddingRight: 3,
    outline: "2px solid #000",
  },
  letterDim: {
    color: colors.textDim,
  },
  letterGap: {
    color: "transparent",
    borderBottom: `4px solid #000`,
    minWidth: "0.6em",
  },
  meaning: {
    fontSize: 13,
    color: colors.textFaint,
    marginTop: 10,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },

  // Prompt
  promptLabel: {
    fontSize: 11,
    color: "#000",
    textAlign: "center",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontWeight: 700,
    marginBottom: "1.25rem",
    background: colors.accent,
    border: "2px solid #000",
    padding: "6px 12px",
    display: "inline-block",
    boxShadow: "3px 3px 0 #000",
  },

  // Choice buttons — chunky, offset shadow
  choicesGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: "1.5rem",
  },
  choiceBtn: {
    background: "#fff",
    border: "2px solid #000",
    borderRadius: 0,
    padding: "1rem",
    fontSize: 22,
    fontFamily: "'DM Mono', 'Courier New', monospace",
    fontWeight: 700,
    color: "#000",
    cursor: "pointer",
    transition: "transform 0.08s, box-shadow 0.08s",
    textAlign: "center",
    letterSpacing: "0.04em",
    boxShadow: "4px 4px 0 #000",
    // active state handled in component: translate(2px,2px), shadow 2px 2px 0 #000
  },
  choiceBtnCorrect: {
    borderColor: "#000",
    background:  colors.correctBg,
    color:       "#000",
    boxShadow:   "4px 4px 0 #000",
  },
  choiceBtnWrong: {
    borderColor: "#000",
    background:  colors.wrongBg,
    color:       "#000",
    boxShadow:   "4px 4px 0 #000",
  },

  // Feedback line
  feedback: {
    textAlign: "center",
    fontSize: 12,
    height: 24,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontWeight: 700,
    marginBottom: "1.5rem",
    color: "transparent",
  },
  feedbackCorrect: { color: colors.correctText },
  feedbackWrong:   { color: colors.wrongText },

  // Stats footer
  statsRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 11,
    color: "#000",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    borderTop: "2px solid #000",
    paddingTop: "0.75rem",
  },

  // Mode switcher tabs
  modeTabs: {
    display: "flex",
    gap: 8,
    marginBottom: "2rem",
  },
  modeTab: {
    flex: 1,
    padding: "0.5rem",
    fontSize: 11,
    fontFamily: "'DM Mono', 'Courier New', monospace",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontWeight: 700,
    background: "#fff",
    border: "2px solid #000",
    borderRadius: 0,
    color: "#000",
    cursor: "pointer",
    boxShadow: "3px 3px 0 #000",
    transition: "transform 0.08s, box-shadow 0.08s",
  },
  modeTabActive: {
    background: "#000",
    borderColor: "#000",
    color: colors.accent,
    boxShadow: "none",
    transform: "translate(3px, 3px)",
  },

  // End screen
  endScreen: {
    textAlign: "center",
    paddingTop: "3rem",
  },
  endScore: {
    fontSize: 72,
    fontWeight: 900,
    color: "#000",
    textShadow: "5px 5px 0 " + colors.accent,
    marginBottom: 4,
    lineHeight: 1,
  },
  endScoreLabel: {
    fontSize: 11,
    color: "#000",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    fontWeight: 700,
    marginBottom: "0.5rem",
  },
  endSubtitle: {
    fontSize: 12,
    color: colors.textFaint,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "2rem",
  },
  restartBtn: {
    background: colors.accent,
    color: "#000",
    border: "2px solid #000",
    borderRadius: 0,
    padding: "0.85rem 2.5rem",
    fontFamily: "'DM Mono', 'Courier New', monospace",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    boxShadow: "4px 4px 0 #000",
    transition: "transform 0.08s, box-shadow 0.08s",
    // active: translate(2px,2px), shadow 2px 2px 0 #000
  },
};