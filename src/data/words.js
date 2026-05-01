// Serbian Cyrillic word database
// Each entry covers one letter of the alphabet.
//
// Fields:
//   word           — Serbian word in Cyrillic
//   meaning        — English translation
//   highlight      — index of the letter being taught (0-based)
//   cyrillicLetter — the Cyrillic letter at that position
//   latinLetter    — correct Latin equivalent
//   wrong          — 3 plausible distractors (Latin)

export const WORDS = [
  { word: "АУТО",    meaning: "car",       highlight: 0, cyrillicLetter: "А", latinLetter: "A",  wrong: ["E", "O", "U"] },
  { word: "БРАТ",    meaning: "brother",   highlight: 0, cyrillicLetter: "Б", latinLetter: "B",  wrong: ["V", "P", "F"] },
  { word: "ЦВЕТ",    meaning: "flower",    highlight: 0, cyrillicLetter: "Ц", latinLetter: "C",  wrong: ["S", "Č", "Z"] },
  { word: "ДЛАН",    meaning: "palm",      highlight: 0, cyrillicLetter: "Д", latinLetter: "D",  wrong: ["Đ", "T", "G"] },
  { word: "ЕЛЕН",    meaning: "deer",      highlight: 0, cyrillicLetter: "Е", latinLetter: "E",  wrong: ["A", "I", "O"] },
  { word: "ФАРМА",   meaning: "farm",      highlight: 0, cyrillicLetter: "Ф", latinLetter: "F",  wrong: ["V", "PH", "B"] },
  { word: "ГОРЕ",    meaning: "mountains", highlight: 0, cyrillicLetter: "Г", latinLetter: "G",  wrong: ["K", "H", "J"] },
  { word: "ХЛЕБ",    meaning: "bread",     highlight: 0, cyrillicLetter: "Х", latinLetter: "H",  wrong: ["X", "K", "G"] },
  { word: "ИГРА",    meaning: "game",      highlight: 0, cyrillicLetter: "И", latinLetter: "I",  wrong: ["E", "Y", "J"] },
  { word: "ЈАБУКА",  meaning: "apple",     highlight: 0, cyrillicLetter: "Ј", latinLetter: "J",  wrong: ["Y", "I", "G"] },
  { word: "КУЋА",    meaning: "house",     highlight: 0, cyrillicLetter: "К", latinLetter: "K",  wrong: ["C", "G", "Q"] },
  { word: "ЛИСТ",    meaning: "leaf",      highlight: 0, cyrillicLetter: "Л", latinLetter: "L",  wrong: ["LJ", "R", "N"] },
  { word: "МЛЕКО",   meaning: "milk",      highlight: 0, cyrillicLetter: "М", latinLetter: "M",  wrong: ["N", "B", "P"] },
  { word: "НОГЕ",    meaning: "legs",      highlight: 0, cyrillicLetter: "Н", latinLetter: "N",  wrong: ["M", "H", "R"] },
  { word: "ШКОЛА",   meaning: "school",    highlight: 2, cyrillicLetter: "О", latinLetter: "O",  wrong: ["U", "A", "I"] },
  { word: "ПЕВАЊЕ",  meaning: "singing",   highlight: 0, cyrillicLetter: "П", latinLetter: "P",  wrong: ["B", "F", "R"] },
  { word: "РИБА",    meaning: "fish",      highlight: 0, cyrillicLetter: "Р", latinLetter: "R",  wrong: ["P", "L", "N"] },
  { word: "СЕСТРА",  meaning: "sister",    highlight: 0, cyrillicLetter: "С", latinLetter: "S",  wrong: ["Z", "Š", "C"] },
  { word: "ТРАВА",   meaning: "grass",     highlight: 0, cyrillicLetter: "Т", latinLetter: "T",  wrong: ["D", "Đ", "C"] },
  { word: "УВО",     meaning: "ear",       highlight: 0, cyrillicLetter: "У", latinLetter: "U",  wrong: ["O", "V", "W"] },
  { word: "ВОДА",    meaning: "water",     highlight: 0, cyrillicLetter: "В", latinLetter: "V",  wrong: ["B", "F", "W"] },
  { word: "ЗЕМЉА",   meaning: "earth",     highlight: 3, cyrillicLetter: "Љ", latinLetter: "LJ", wrong: ["L", "NJ", "DŽ"] },
  { word: "ЗИМА",    meaning: "winter",    highlight: 0, cyrillicLetter: "З", latinLetter: "Z",  wrong: ["S", "J", "X"] },
  { word: "ЖЕНА",    meaning: "woman",     highlight: 0, cyrillicLetter: "Ж", latinLetter: "Ž",  wrong: ["Z", "Š", "DŽ"] },
  { word: "ШУМА",    meaning: "forest",    highlight: 0, cyrillicLetter: "Ш", latinLetter: "Š",  wrong: ["S", "CH", "Ž"] },
  { word: "ЧАША",    meaning: "glass/cup", highlight: 0, cyrillicLetter: "Ч", latinLetter: "Č",  wrong: ["C", "Ć", "Š"] },
  { word: "ЋУП",     meaning: "jug",       highlight: 0, cyrillicLetter: "Ћ", latinLetter: "Ć",  wrong: ["C", "Č", "T"] },
  { word: "ЂАК",     meaning: "pupil",     highlight: 0, cyrillicLetter: "Ђ", latinLetter: "Đ",  wrong: ["D", "DŽ", "J"] },
  { word: "ЏЕП",     meaning: "pocket",    highlight: 0, cyrillicLetter: "Џ", latinLetter: "DŽ", wrong: ["Đ", "Ž", "Č"] },
  { word: "ЕЊЕМ",    meaning: "teaching",  highlight: 1, cyrillicLetter: "Њ", latinLetter: "NJ", wrong: ["N", "LJ", "M"] },
];
