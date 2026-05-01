// WordGap — Mode 2
// Shows a Cyrillic word with one letter replaced by a blank "_".
// User taps the correct Cyrillic letter (not Latin) that fills the gap.

import { useState } from "react";
import "../styles/styles.css";
import { getWordGapChars, shuffle } from "../logic/game";
import { ChoicesGrid, FeedbackLine, StatsRow } from "./DrillShell";

// For WordGap the choices are Cyrillic letters, not Latin.
// We build them from the card on the fly.
export function buildCyrillicChoices(card) {
  // Wrong choices are stored as Latin in the DB — we need Cyrillic alternatives.
  // Use the card's cyrillicLetter as the correct answer;
  // generate 3 Cyrillic distractors from the same confusable set.
  const CYRILLIC_POOL = ["А","Б","В","Г","Д","Е","Ж","З","И","Ј","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Ћ","Ђ","Љ","Њ","Џ"];
  const distractors = CYRILLIC_POOL
    .filter(l => l !== card.cyrillicLetter)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  return shuffle([card.cyrillicLetter, ...distractors]);
}

export function WordGap({ card, choices, answered, selectedChoice, correctCount, idx, onChoice }) {
  const [hintShown, setHintShown] = useState(false);
  const chars = getWordGapChars(card);

  return (
    <>
      <div className="word-display">
        <div className="cyrillic-word">
          {chars.map(({ char, isGap }, i) => (
            <span
              key={i}
              className={isGap ? "cyrillic-letter letter-gap" : "cyrillic-letter letter-dim"}
            >
              {isGap ? "\u00A0\u00A0" : char}
            </span>
          ))}
        </div>
        <div className="hint-cont">
          {hintShown && <div className="meaning">{card.meaning}</div>}
          <button className="hint-btn" onClick={() => setHintShown(!hintShown)}>
            {hintShown ? "Hide" : "Hint"}
          </button>
        </div>
      </div>

      <div className="prompt-label">
        Which Cyrillic letter fills the gap?
      </div>

      <ChoicesGrid
        choices={choices}
        answered={answered}
        selectedChoice={selectedChoice}
        correctAnswer={card.cyrillicLetter}
        onChoice={onChoice}
      />

      {/* WordGap feedback shows Cyrillic = Latin mapping */}
      {(() => {
        let feedbackClass = "feedback";
        if (answered && selectedChoice === card.cyrillicLetter) feedbackClass += " feedback-correct";
        if (answered && selectedChoice !== card.cyrillicLetter) feedbackClass += " feedback-wrong";
        return (
          <div className={feedbackClass}>
            {answered ? `${card.cyrillicLetter} = ${card.latinLetter}` : ""}
          </div>
        );
      })()}

      <StatsRow correctCount={correctCount} idx={idx} />
    </>
  );
}
