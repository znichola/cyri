// DrillShell — shared layout wrapper used by both drill modes.
// Handles: progress bar, choice buttons, feedback line, stats row, end screen.
// Each mode passes its own word display as children.

import "../styles/styles.css";
import { SESSION_SIZE, scoreLabel } from "../logic/game";

export function ProgressBar({ idx, done }) {
  const pct = done ? 100 : (idx / SESSION_SIZE) * 100;
  return (
    <div className="progress-track">
      <div className="progress-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}

export function ChoicesGrid({ choices, answered, selectedChoice, correctAnswer, onChoice }) {
  return (
    <div className="choices-grid">
      {choices.map((ch) => {
        let btnClass = "choice-btn";
        if (answered) {
          if (ch === correctAnswer)       btnClass += " choice-btn-correct";
          else if (ch === selectedChoice) btnClass += " choice-btn-wrong";
        }
        return (
          <button
            key={ch}
            className={btnClass}
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
  let feedbackClass = "feedback";
  if (correct) feedbackClass += " feedback-correct";
  if (wrong)   feedbackClass += " feedback-wrong";
  return (
    <div className={feedbackClass}>
      {answered ? `${card.cyrillicLetter} = ${card.latinLetter}` : ""}
    </div>
  );
}

export function StatsRow({ correctCount, idx }) {
  return (
    <div className="stats-row">
      <span>{correctCount} correct</span>
      <span>{idx + 1} / {SESSION_SIZE}</span>
    </div>
  );
}

export function EndScreen({ correctCount, onRestart }) {
  return (
    <div className="end-screen">
      <div className="end-score">{correctCount}/{SESSION_SIZE}</div>
      <div className="end-score-label">{scoreLabel(correctCount, SESSION_SIZE)}</div>
      <p className="end-subtitle">letters covered this session</p>
      <button className="restart-btn" onClick={onRestart}>New session</button>
    </div>
  );
}
