// WordGap — Mode 2
// Shows a Cyrillic word with one letter replaced by a blank "_".
// User taps the correct Cyrillic letter (not Latin) that fills the gap.

import { styles } from "../styles/styles";
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
  const chars = getWordGapChars(card);

  return (
    <>
      <div style={styles.wordDisplay}>
        <div style={styles.cyrillicWord}>
          {chars.map(({ char, isGap }, i) => (
            <span
              key={i}
              style={{
                ...styles.cyrillicLetter,
                ...(isGap ? styles.letterGap : styles.letterDim),
              }}
            >
              {isGap ? "\u00A0\u00A0" : char}
            </span>
          ))}
        </div>
        <div style={styles.meaning}>{card.meaning}</div>
      </div>

      <div style={styles.promptLabel}>
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
      <div style={{
        ...styles.feedback,
        ...(answered && selectedChoice === card.cyrillicLetter ? styles.feedbackCorrect : {}),
        ...(answered && selectedChoice !== card.cyrillicLetter ? styles.feedbackWrong   : {}),
      }}>
        {answered ? `${card.cyrillicLetter} = ${card.latinLetter}` : ""}
      </div>

      <StatsRow correctCount={correctCount} idx={idx} />
    </>
  );
}
