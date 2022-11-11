const boxes = [];
let score = [];
let player = 0;
let counter = 0;
const img = [
  'url("https://i.kym-cdn.com/entries/icons/facebook/000/022/875/Screen_Shot_2017-05-03_at_12.14.21_PM.jpg")',
  'url("https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fdorksideoftheforce.com%2Ffiles%2F2020%2F11%2Fanakin-episode-3-850x560.jpg")',
];
const playerO = "Obiwan";
const playerX = "Anakin";

const resetBtn = document.querySelector("#reset");
const playeTurn = document.querySelector("#turn");
player === 0
  ? (playeTurn.innerText = "Player : " + playerO)
  : (playeTurn.innerText = "Player : " + playerX);

for (let i = 0; i < 9; i++) {
  const element = document.querySelector(`[id='${i}']`);
  boxes.push(element);
}
resetBtn.onclick = () => reset();
boxes.forEach((box) => {
  box.onclick = () => clickHandler(box);
});

function clickHandler(box) {
  //   console.log("click");
  //   console.log(box.style);
  //   console.log(player);
  //   console.log(img[player]);

  //set style
  box.style.background = img[player];
  box.style.backgroundSize = "cover";
  box.onclick = "";
  //ending turn
  //   console.log(boxes.indexOf(box));
  score[boxes.indexOf(box)] = player;
  //   console.log(score);
  counter += 1;
  console.log(counter);
  isFinish();
  player === 0 ? (player = 1) : (player = 0);
  player === 0
    ? (playeTurn.innerText = "Player : " + playerO)
    : (playeTurn.innerText = "Player : " + playerX);
}

function isFinish() {
  //xxx
  //
  //
  if (score[0] === player && score[1] === player && score[2] === player) {
    endGame();
  }
  //
  //xxx
  //
  else if (score[3] === player && score[4] === player && score[5] === player) {
    endGame();
  }
  //
  //
  //xxx
  else if (score[6] === player && score[7] === player && score[8] === player) {
    endGame();
  }

  //x
  //x
  //x
  else if (score[0] === player && score[3] === player && score[6] === player) {
    endGame();
  }
  // x
  // x
  // x
  else if (score[1] === player && score[4] === player && score[7] === player) {
    endGame();
  }
  //  x
  //  x
  //  x
  else if (score[2] === player && score[5] === player && score[8] === player) {
    endGame();
  }
  //x
  // x
  //  x
  else if (score[0] === player && score[4] === player && score[8] === player) {
    endGame();
  }
  //  x
  // x
  //x
  else if (score[2] === player && score[4] === player && score[6] === player) {
    endGame();
  } else if (counter == 9) {
    alert("Tie in Tic-tac-toe but no tie in Star Wars");
  } else {
    console.log("game is not done yet");
  }
}

function reset() {
  score = [];
  counter = 0;
  player = 0;
  player === 0
    ? (playeTurn.innerText = "Player : " + playerO)
    : (playeTurn.innerText = "Player : " + playerX);

  boxes.forEach((box) => {
    box.style.background = "white";
    box.onclick = () => clickHandler(box);
  });
}

function sumArray(arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function endGame() {
  alert(
    player === 0
      ? "Player : " + playerO + " win"
      : "Player : " +
          playerX +
          " win but " +
          playerO +
          " still have the high ground."
  );
  boxes.forEach((box) => {
    box.onclick = () => "";
  });
}
