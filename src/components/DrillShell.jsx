// DrillShell — shared layout wrapper used by both drill modes.
// Handles: progress bar, choice buttons, feedback line, stats row, end screen.
// Each mode passes its own word display as children.

import { styles } from "../styles/styles";
import { SESSION_SIZE, scoreLabel } from "../logic/game";

export function ProgressBar({ idx, done }) {
  const pct = done ? 100 : (idx / SESSION_SIZE) * 100;
  return (
    <div style={styles.progressTrack}>
      <div style={{ ...styles.progressFill, width: `${pct}%` }} />
    </div>
  );
}

export function ChoicesGrid({ choices, answered, selectedChoice, correctAnswer, onChoice }) {
  return (
    <div style={styles.choicesGrid}>
      {choices.map((ch) => {
        let btnStyle = { ...styles.choiceBtn };
        if (answered) {
          if (ch === correctAnswer)       btnStyle = { ...btnStyle, ...styles.choiceBtnCorrect };
          else if (ch === selectedChoice) btnStyle = { ...btnStyle, ...styles.choiceBtnWrong };
        }
        return (
          <button
            key={ch}
            style={btnStyle}
            onClick={() => onChoice(ch)}
            disabled={answered}
          >
            {ch}
          </button>
        );
      })}
    </div>
  );
}

export function FeedbackLine({ answered, selectedChoice, card }) {
  const correct = answered && selectedChoice === card.latinLetter;
  const wrong   = answered && selectedChoice !== card.latinLetter;
  return (
    <div style={{
      ...styles.feedback,
      ...(correct ? styles.feedbackCorrect : {}),
      ...(wrong   ? styles.feedbackWrong   : {}),
    }}>
      {answered ? `${card.cyrillicLetter} = ${card.latinLetter}` : ""}
    </div>
  );
}

export function StatsRow({ correctCount, idx }) {
  return (
    <div style={styles.statsRow}>
      <span>{correctCount} correct</span>
      <span>{idx + 1} / {SESSION_SIZE}</span>
    </div>
  );
}

export function EndScreen({ correctCount, onRestart }) {
  return (
    <div style={styles.endScreen}>
      <div style={styles.endScore}>{correctCount}/{SESSION_SIZE}</div>
      <div style={styles.endScoreLabel}>{scoreLabel(correctCount, SESSION_SIZE)}</div>
      <p style={styles.endSubtitle}>letters covered this session</p>
      <button style={styles.restartBtn} onClick={onRestart}>New session</button>
    </div>
  );
}
