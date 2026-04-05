const WINNING_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // 横
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // 縦
  [0, 4, 8], [2, 4, 6],             // 斜め
];

let board = Array(9).fill(null);
let currentPlayer = 'X';
let gameOver = false;

const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const resetBtn = document.getElementById('reset');

cells.forEach(cell => {
  cell.addEventListener('click', () => handleClick(Number(cell.dataset.index)));
});

resetBtn.addEventListener('click', resetGame);

function handleClick(index) {
  if (gameOver || board[index]) return;

  board[index] = currentPlayer;
  render();

  const winnerPattern = checkWinner();
  if (winnerPattern) {
    status.textContent = `${currentPlayer} の勝ち！`;
    highlightWinner(winnerPattern);
    gameOver = true;
    cells.forEach(c => c.disabled = true);
    return;
  }

  if (checkDraw()) {
    status.textContent = '引き分け！';
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  status.textContent = `${currentPlayer} の番です`;
}

function checkWinner() {
  for (const pattern of WINNING_PATTERNS) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return pattern;
    }
  }
  return null;
}

function checkDraw() {
  return board.every(cell => cell !== null);
}

function highlightWinner(pattern) {
  pattern.forEach(i => cells[i].classList.add('winner'));
}

function render() {
  cells.forEach((cell, i) => {
    cell.textContent = board[i] ?? '';
    cell.className = 'cell';
    if (board[i]) cell.classList.add(board[i].toLowerCase());
    if (board[i]) cell.disabled = true;
  });
}

function resetGame() {
  board = Array(9).fill(null);
  currentPlayer = 'X';
  gameOver = false;
  status.textContent = 'X の番です';
  cells.forEach(cell => {
    cell.textContent = '';
    cell.className = 'cell';
    cell.disabled = false;
  });
}
