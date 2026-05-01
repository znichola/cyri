// App — top-level orchestrator
// Manages: active mode, session state, answer flow, mode switching.
// Renders the correct drill component based on active mode.

import { useState, useEffect } from "react";
import "./styles/styles.css";
import { buildSession, buildChoices, isCorrect, SESSION_SIZE } from "./logic/game";
import { ProgressBar, EndScreen } from "./components/DrillShell";
import { LetterDrill } from "./components/LetterDrill";
import { WordGap, buildCyrillicChoices } from "./components/WordGap";

const MODES = [
  { id: "letter", label: "Letter drill" },
  { id: "wordgap", label: "Word gap" },
];

function useSession(mode) {
  const [session, setSession]             = useState(() => buildSession());
  const [idx, setIdx]                     = useState(0);
  const [correctCount, setCorrectCount]   = useState(0);
  const [answered, setAnswered]           = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [choices, setChoices]             = useState([]);
  const [done, setDone]                   = useState(false);

  const card = session[idx];

  // Rebuild choices whenever the card or mode changes
  useEffect(() => {
    if (!card) return;
    setChoices(mode === "wordgap" ? buildCyrillicChoices(card) : buildChoices(card));
    setAnswered(false);
    setSelectedChoice(null);
  }, [idx, session, mode]);

  function handleChoice(choice) {
    if (answered) return;
    setAnswered(true);
    setSelectedChoice(choice);
    if (isCorrect(
      mode === "wordgap" ? { ...card, latinLetter: card.cyrillicLetter } : card,
      choice
    )) {
      setCorrectCount((c) => c + 1);
    }
    setTimeout(() => {
      if (idx + 1 >= SESSION_SIZE) setDone(true);
      else setIdx((i) => i + 1);
    }, 900);
  }

  function restart() {
    setSession(buildSession());
    setIdx(0);
    setCorrectCount(0);
    setAnswered(false);
    setSelectedChoice(null);
    setDone(false);
  }

  return { card, choices, answered, selectedChoice, correctCount, idx, done, handleChoice, restart };
}

export default function App() {
  const [mode, setMode] = useState("letter");
  const { card, choices, answered, selectedChoice, correctCount, idx, done, handleChoice, restart } =
    useSession(mode);

  function switchMode(newMode) {
    setMode(newMode);
    restart();
  }

  return (
    <div className="wrap">
      <ProgressBar idx={idx} done={done} />

      {/* Mode tabs */}
      <div className="mode-tabs">
        {MODES.map((m) => (
          <button
            key={m.id}
            className={mode === m.id ? "mode-tab mode-tab-active" : "mode-tab"}
            onClick={() => switchMode(m.id)}
          >
            {m.label}
          </button>
        ))}
      </div>

      {done ? (
        <EndScreen correctCount={correctCount} onRestart={restart} />
      ) : mode === "letter" ? (
        <LetterDrill
          card={card}
          choices={choices}
          answered={answered}
          selectedChoice={selectedChoice}
          correctCount={correctCount}
          idx={idx}
          onChoice={handleChoice}
        />
      ) : (
        <WordGap
          card={card}
          choices={choices}
          answered={answered}
          selectedChoice={selectedChoice}
          correctCount={correctCount}
          idx={idx}
          onChoice={handleChoice}
        />
      )}
    </div>
  );
}
