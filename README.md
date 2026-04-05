# 三目並べ (Tic-Tac-Toe)

A simple two-player Tic-Tac-Toe game built with vanilla HTML, CSS, and JavaScript. The UI is in Japanese.

## How to Play

1. Open `index.html` in a browser — no build step or server required.
2. Players take turns clicking cells on the 3×3 grid.
3. **X always goes first** (shown in red). **O** is shown in blue.
4. The first player to get three in a row (horizontally, vertically, or diagonally) wins.
5. Winning cells are highlighted in yellow.
6. If all 9 cells are filled with no winner, the game ends in a draw.
7. Click **もう一度** ("Play again") to reset the board.

## File Structure

| File | Description |
|------|-------------|
| `index.html` | Game markup — 3×3 grid of `<button>` elements plus a status line and reset button |
| `style.css` | Layout and visual styling (CSS Grid for the board, color-coded X/O, winner highlight) |
| `script.js` | Game logic — turn management, win/draw detection, board rendering |

## Game Logic (script.js)

- **State**: a 9-element array (`board`) tracks `'X'`, `'O'`, or `null` for each cell.
- **Win detection**: checks all 8 winning patterns (3 rows, 3 columns, 2 diagonals).
- **Draw detection**: the board is a draw when all cells are filled and no winner was found.
- **Reset**: restores the board array, re-enables all cells, and sets the turn back to X.
