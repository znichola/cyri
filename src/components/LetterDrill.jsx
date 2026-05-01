// LetterDrill — Mode 1
// Shows a full Cyrillic word with one letter highlighted.
// User taps the correct Latin equivalent from 4 choices.

import "../styles/styles.css";
import { getWordChars } from "../logic/game";
import { ChoicesGrid, FeedbackLine, StatsRow } from "./DrillShell";

export function LetterDrill({ card, choices, answered, selectedChoice, correctCount, idx, onChoice }) {
  const chars = getWordChars(card);

  return (
    <>
      <div className="word-display">
        <div className="cyrillic-word">
          {chars.map(({ char, highlighted }, i) => (
            <span
              key={i}
              className={highlighted ? "cyrillic-letter letter-highlight" : "cyrillic-letter letter-dim"}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="meaning">{card.meaning}</div>
      </div>

      <div className="prompt-label">
        What is the latin equivalent of the highlighted letter?
      </div>

      <ChoicesGrid
        choices={choices}
        answered={answered}
        selectedChoice={selectedChoice}
        correctAnswer={card.latinLetter}
        onChoice={onChoice}
      />

      <FeedbackLine answered={answered} selectedChoice={selectedChoice} card={card} />

      <StatsRow correctCount={correctCount} idx={idx} />
    </>
  );
}
