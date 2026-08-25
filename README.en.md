# 🌧️ Acid Rain - JP Edition (산성비 - 일어판)

[🇰🇷 한국어](./README.md) | **🇺🇸 English**

A typing game where you score points by typing the **Korean meaning** of **Japanese words** falling from the top of the screen.
Guess the meaning before a word hits the bottom to keep your lives!

> Just a fun little side project — please enjoy it with an open mind :>

## 🎮 How to Play

1. On the intro screen, set the **game time (seconds)** and **difficulty**.
2. Press `시작하기` (Start) to begin.
3. Japanese words fall from the top. Type the meaning **in Korean**, then press `Enter` or the `입력` (Submit) button.
4. A correct answer gives +1 score; missing a word costs 1 life.
5. The game ends when time runs out or all lives are lost.

## ✨ Features

- ⏱ **Configurable time limit** — set directly in seconds on the intro screen
- ⚙ **3 difficulty levels** — affect fall speed and how many words appear at once
  | Difficulty | Spawn interval | Speed | Max on screen |
  |------------|---------------|-------|---------------|
  | Easy (easy) | 2.2s | ×0.8 | 3 |
  | Normal (normal) | 1.8s | ×1.0 | 4 |
  | Hard (hard) | 1.4s | ×1.2 | 5 |
- ❤️ **Lives system** — start with 5, lose one for each missed word
- 🏆 **Best score saved** — persisted in the browser via `localStorage`
- ❌ **Review wrong answers** — after the game, check missed words (Japanese / correct answer / your input)
- 📚 **69 word entries** — basic Japanese vocabulary (greetings, emotions, places, verbs, etc.)

## 🛠 Tech Stack

- **Vanilla JavaScript / HTML / CSS** — no frameworks, build tools, or dependencies
- Data: `assets/words.json`
- Storage: browser `localStorage`

## 📁 Project Structure

```
.
├── index.html          # Intro (start) screen
├── game.html           # Gameplay screen
├── css/
│   ├── base.css        # Shared styles (fonts, background)
│   ├── intro.css       # Intro screen styles
│   ├── game.css        # Game screen styles
│   └── modal.css       # Result / wrong-answer / info modal styles
├── js/
│   ├── intro.js        # Save settings and navigate to the game screen
│   └── game.js         # Game logic (falling words, judging, score, modals)
└── assets/
    ├── words.json      # Japanese-Korean word data
    ├── bg.gif          # Background image
    └── *.ttf           # Korean/Japanese fonts
```

## 🚀 Running Locally

Because `words.json` is loaded via `fetch`, the game must be **served through a static server**.
(Opening it directly with `file://` will fail to load the words.)

**Using VS Code Live Server**
1. Install the `Live Server` extension
2. Right-click `index.html` → `Open with Live Server`

**Using a simple local server**
```bash
# Python 3
python -m http.server 5501

# or Node
npx serve
```
Then open `http://localhost:5501` in your browser.

## 🌐 Deployment

Can be deployed directly on any static host such as GitHub Pages.
(All paths are relative, so it works correctly under a project subpath too.)

## 👤 Author

- **이다연 (Dayeon Lee)**
- 📧 Email: develu0825@gmail.com
- 💼 LinkedIn: [develu825](https://www.linkedin.com/in/develu825/)

> Please send bug reports and suggestions to the email above.
