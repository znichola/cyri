// LetterDrill — Mode 1
// Shows a full Cyrillic word with one letter highlighted.
// User taps the correct Latin equivalent from 4 choices.

import { styles } from "../styles/styles";
import { getWordChars } from "../logic/game";
import { ChoicesGrid, FeedbackLine, StatsRow } from "./DrillShell";

export function LetterDrill({ card, choices, answered, selectedChoice, correctCount, idx, onChoice }) {
  const chars = getWordChars(card);

  return (
    <>
      <div style={styles.wordDisplay}>
        <div style={styles.cyrillicWord}>
          {chars.map(({ char, highlighted }, i) => (
            <span
              key={i}
              style={{
                ...styles.cyrillicLetter,
                ...(highlighted ? styles.letterHighlight : styles.letterDim),
              }}
            >
              {char}
            </span>
          ))}
        </div>
        <div style={styles.meaning}>{card.meaning}</div>
      </div>

      <div style={styles.promptLabel}>
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
