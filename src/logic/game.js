import { WORDS } from "../data/words";

export const SESSION_SIZE = 10;

// Fisher-Yates shuffle — returns a new array, never mutates
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Pick SESSION_SIZE random cards from the word list
export function buildSession() {
  return shuffle(WORDS).slice(0, SESSION_SIZE);
}

// Shuffle the 4 choices (correct + 3 wrong) for a card
export function buildChoices(card) {
  return shuffle([card.latinLetter, ...card.wrong]);
}

// Check if an answer is correct
export function isCorrect(card, choice) {
  return choice === card.latinLetter;
}

// Score summary label
export function scoreLabel(correct, total) {
  const pct = Math.round((correct / total) * 100);
  if (pct === 100) return "Perfect session";
  if (pct >= 70)   return "Solid work";
  return "Keep going";
}

// Build the word display for LetterDrill:
// Returns array of { char, highlighted } for each character in the word
export function getWordChars(card) {
  return [...card.word].map((char, i) => ({
    char,
    highlighted: i === card.highlight,
  }));
}

// Build the word display for WordGap:
// Returns array of { char, isGap } — the highlighted letter is replaced with "_"
export function getWordGapChars(card) {
  return [...card.word].map((char, i) => ({
    char: i === card.highlight ? "_" : char,
    isGap: i === card.highlight,
  }));
}
