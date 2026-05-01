import { useState, useEffect, useCallback } from "react";

const CARDS = [
  { word: "МЛЕКО", meaning: "milk", highlight: 0, cyrillicLetter: "М", latinLetter: "M", wrong: ["N", "B", "P"] },
  { word: "ВОДА", meaning: "water", highlight: 0, cyrillicLetter: "В", latinLetter: "V", wrong: ["B", "F", "W"] },
  { word: "ХЛЕБ", meaning: "bread", highlight: 0, cyrillicLetter: "Х", latinLetter: "H", wrong: ["X", "K", "G"] },
  { word: "РИБА", meaning: "fish", highlight: 0, cyrillicLetter: "Р", latinLetter: "R", wrong: ["P", "L", "N"] },
  { word: "КУЋА", meaning: "house", highlight: 0, cyrillicLetter: "К", latinLetter: "K", wrong: ["C", "G", "Q"] },
  { word: "ШКОЛА", meaning: "school", highlight: 2, cyrillicLetter: "О", latinLetter: "O", wrong: ["U", "A", "I"] },
  { word: "ЗИМА", meaning: "winter", highlight: 0, cyrillicLetter: "З", latinLetter: "Z", wrong: ["S", "J", "X"] },
  { word: "ЗЕМЉА", meaning: "earth", highlight: 3, cyrillicLetter: "Љ", latinLetter: "LJ", wrong: ["L", "NJ", "DŽ"] },
  { word: "ШУМА", meaning: "forest", highlight: 0, cyrillicLetter: "Ш", latinLetter: "Š", wrong: ["S", "CH", "Ž"] },
  { word: "ЖЕНА", meaning: "woman", highlight: 0, cyrillicLetter: "Ж", latinLetter: "Ž", wrong: ["Z", "Š", "DŽ"] },
  { word: "ЧАША", meaning: "glass/cup", highlight: 0, cyrillicLetter: "Ч", latinLetter: "Č", wrong: ["C", "Ć", "Š"] },
  { word: "ЋУП", meaning: "jug", highlight: 0, cyrillicLetter: "Ћ", latinLetter: "Ć", wrong: ["C", "Č", "T"] },
  { word: "ЂАК", meaning: "pupil", highlight: 0, cyrillicLetter: "Ђ", latinLetter: "Đ", wrong: ["D", "DŽ", "J"] },
  { word: "НОГЕ", meaning: "legs", highlight: 0, cyrillicLetter: "Н", latinLetter: "N", wrong: ["M", "H", "R"] },
  { word: "ЈАБУКА", meaning: "apple", highlight: 0, cyrillicLetter: "Ј", latinLetter: "J", wrong: ["Y", "I", "G"] },
  { word: "ИГРА", meaning: "game", highlight: 0, cyrillicLetter: "И", latinLetter: "I", wrong: ["E", "Y", "J"] },
  { word: "БРАТ", meaning: "brother", highlight: 0, cyrillicLetter: "Б", latinLetter: "B", wrong: ["V", "P", "F"] },
  { word: "СЕСТРА", meaning: "sister", highlight: 0, cyrillicLetter: "С", latinLetter: "S", wrong: ["Z", "Š", "C"] },
  { word: "ДЛАН", meaning: "palm", highlight: 0, cyrillicLetter: "Д", latinLetter: "D", wrong: ["Đ", "T", "G"] },
  { word: "ЛИСТ", meaning: "leaf", highlight: 0, cyrillicLetter: "Л", latinLetter: "L", wrong: ["LJ", "R", "N"] },
  { word: "ФАРМА", meaning: "farm", highlight: 0, cyrillicLetter: "Ф", latinLetter: "F", wrong: ["V", "PH", "B"] },
  { word: "ГОРЕ", meaning: "mountains", highlight: 0, cyrillicLetter: "Г", latinLetter: "G", wrong: ["K", "H", "J"] },
  { word: "ТРАВА", meaning: "grass", highlight: 0, cyrillicLetter: "Т", latinLetter: "T", wrong: ["D", "Đ", "C"] },
  { word: "УВО", meaning: "ear", highlight: 0, cyrillicLetter: "У", latinLetter: "U", wrong: ["O", "V", "W"] },
  { word: "ЦВЕТ", meaning: "flower", highlight: 0, cyrillicLetter: "Ц", latinLetter: "C", wrong: ["S", "Č", "Z"] },
  { word: "ЏЕП", meaning: "pocket", highlight: 0, cyrillicLetter: "Џ", latinLetter: "DŽ", wrong: ["Đ", "Ž", "Č"] },
  { word: "ПЕВАЊЕ", meaning: "singing", highlight: 0, cyrillicLetter: "П", latinLetter: "P", wrong: ["B", "F", "R"] },
  { word: "АУТО", meaning: "car", highlight: 0, cyrillicLetter: "А", latinLetter: "A", wrong: ["E", "O", "U"] },
  { word: "EЛЕН", meaning: "deer", highlight: 0, cyrillicLetter: "Е", latinLetter: "E", wrong: ["A", "I", "O"] },
  { word: "ЕЊЕ", meaning: "teaching", highlight: 1, cyrillicLetter: "Њ", latinLetter: "NJ", wrong: ["N", "LJ", "M"] },
];

const SESSION_SIZE = 10;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildSession() {
  return shuffle(CARDS).slice(0, SESSION_SIZE);
}

export default function CyrillicDrill() {
  const [session, setSession] = useState(() => buildSession());
  const [idx, setIdx] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [choices, setChoices] = useState([]);
  const [done, setDone] = useState(false);

  const card = session[idx];

  useEffect(() => {
    if (card) {
      setChoices(shuffle([card.latinLetter, ...card.wrong]));
      setAnswered(false);
      setSelectedChoice(null);
    }
  }, [idx, session]);

  const handleChoice = useCallback((choice) => {
    if (answered) return;
    setAnswered(true);
    setSelectedChoice(choice);
    const isCorrect = choice === card.latinLetter;
    if (isCorrect) setCorrectCount((c) => c + 1);

    setTimeout(() => {
      if (idx + 1 >= SESSION_SIZE) {
        setDone(true);
      } else {
        setIdx((i) => i + 1);
      }
    }, 900);
  }, [answered, card, idx]);

  const restart = () => {
    setSession(buildSession());
    setIdx(0);
    setCorrectCount(0);
    setAnswered(false);
    setSelectedChoice(null);
    setDone(false);
  };

  const progress = done ? 100 : (idx / SESSION_SIZE) * 100;

  if (done) {
    const pct = Math.round((correctCount / SESSION_SIZE) * 100);
    const msg = pct === 100 ? "Perfect session" : pct >= 70 ? "Solid work" : "Keep going";
    return (
      <div style={styles.wrap}>
        <div style={{ ...styles.progressTrack, marginBottom: "2.5rem" }}>
          <div style={{ ...styles.progressFill, width: "100%" }} />
        </div>
        <div style={styles.endScreen}>
          <div style={styles.endScore}>{correctCount}/{SESSION_SIZE}</div>
          <div style={styles.endScoreLabel}>{msg}</div>
          <p style={styles.endSubtitle}>letters covered this session</p>
          <button style={styles.restartBtn} onClick={restart}>New session</button>
        </div>
      </div>
    );
  }

  const isCorrect = answered && selectedChoice === card.latinLetter;
  const isWrong = answered && selectedChoice !== card.latinLetter;

  return (
    <div style={styles.wrap}>
      <div style={styles.progressTrack}>
        <div style={{ ...styles.progressFill, width: `${progress}%` }} />
      </div>

      <div style={styles.wordDisplay}>
        <div style={styles.cyrillicWord}>
          {[...card.word].map((ch, i) => (
            <span
              key={i}
              style={{
                ...styles.cyrillicLetter,
                ...(i === card.highlight ? styles.highlight : styles.dim),
              }}
            >
              {ch}
            </span>
          ))}
        </div>
        <div style={styles.meaning}>{card.meaning}</div>
      </div>

      <div style={styles.promptLabel}>
        What is the latin equivalent of the highlighted letter?
      </div>

      <div style={styles.choicesGrid}>
        {choices.map((ch) => {
          const isThis = ch === selectedChoice;
          const isCorrectBtn = ch === card.latinLetter;
          let btnStyle = { ...styles.choiceBtn };
          if (answered) {
            if (isCorrectBtn) btnStyle = { ...btnStyle, ...styles.choiceBtnCorrect };
            else if (isThis) btnStyle = { ...btnStyle, ...styles.choiceBtnWrong };
          }
          return (
            <button
              key={ch}
              style={btnStyle}
              onClick={() => handleChoice(ch)}
              disabled={answered}
            >
              {ch}
            </button>
          );
        })}
      </div>

      <div
        style={{
          ...styles.feedback,
          ...(isCorrect ? styles.feedbackCorrect : {}),
          ...(isWrong ? styles.feedbackWrong : {}),
        }}
      >
        {answered ? `${card.cyrillicLetter} = ${card.latinLetter}` : ""}
      </div>

      <div style={styles.statsRow}>
        <span>{correctCount} correct</span>
        <span>{idx + 1} / {SESSION_SIZE}</span>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    fontFamily: "'DM Mono', 'Courier New', monospace",
    maxWidth: 480,
    margin: "0 auto",
    padding: "2rem 1.5rem",
    minHeight: "100vh",
    boxSizing: "border-box",
  },
  progressTrack: {
    height: 3,
    background: "#e5e5e5",
    borderRadius: 2,
    marginBottom: "2.5rem",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    background: "#111",
    borderRadius: 2,
    transition: "width 0.4s ease",
  },
  wordDisplay: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  cyrillicWord: {
    display: "flex",
    justifyContent: "center",
    gap: 2,
    fontSize: 56,
    fontFamily: "Georgia, serif",
    fontWeight: 600,
    letterSpacing: "0.06em",
  },
  cyrillicLetter: {
    display: "inline-block",
    transition: "color 0.2s",
  },
  highlight: {
    color: "#111",
    borderBottom: "3px solid #111",
    paddingBottom: 2,
  },
  dim: {
    color: "#bbb",
  },
  meaning: {
    fontSize: 13,
    color: "#999",
    marginTop: 8,
    letterSpacing: "0.05em",
  },
  promptLabel: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
    letterSpacing: "0.08em",
    marginBottom: "1.25rem",
  },
  choicesGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    marginBottom: "1.5rem",
  },
  choiceBtn: {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: 12,
    padding: "1rem",
    fontSize: 22,
    fontFamily: "'DM Mono', 'Courier New', monospace",
    fontWeight: 500,
    color: "#111",
    cursor: "pointer",
    transition: "background 0.1s, transform 0.1s",
    textAlign: "center",
    letterSpacing: "0.04em",
  },
  choiceBtnCorrect: {
    borderColor: "#1D9E75",
    background: "#E1F5EE",
    color: "#0F6E56",
  },
  choiceBtnWrong: {
    borderColor: "#E24B4A",
    background: "#FCEBEB",
    color: "#A32D2D",
  },
  feedback: {
    textAlign: "center",
    fontSize: 13,
    height: 20,
    letterSpacing: "0.05em",
    marginBottom: "1.5rem",
    color: "transparent",
  },
  feedbackCorrect: {
    color: "#0F6E56",
  },
  feedbackWrong: {
    color: "#A32D2D",
  },
  statsRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 12,
    color: "#aaa",
    letterSpacing: "0.05em",
  },
  endScreen: {
    textAlign: "center",
    paddingTop: "3rem",
  },
  endScore: {
    fontSize: 56,
    fontWeight: 500,
    color: "#111",
    marginBottom: 4,
  },
  endScoreLabel: {
    fontSize: 13,
    color: "#888",
    letterSpacing: "0.1em",
    marginBottom: "0.5rem",
  },
  endSubtitle: {
    fontSize: 13,
    color: "#aaa",
    marginBottom: "2rem",
  },
  restartBtn: {
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "0.75rem 2rem",
    fontFamily: "'DM Mono', 'Courier New', monospace",
    fontSize: 14,
    cursor: "pointer",
    letterSpacing: "0.05em",
  },
};