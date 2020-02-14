const oppenentOptions = ["Rock", "Paper", "Scissors"];

let updateHighscore = () => {
  if (
    Number(document.querySelector("#pointValue").innerHTML) >
    Number(document.querySelector("#highScoreValue").innerHTML)
  ) {
    document.querySelector("#highScoreValue").innerHTML = Number(
      document.querySelector("#pointValue").innerHTML
    );
  }
};

let selectRock = () => {
  let integer = Math.floor(Math.random() * 3);
  let opponent = oppenentOptions[integer];
  if (opponent == "Scissors") {
    document.querySelector("#pointValue").innerHTML =
      Number(document.querySelector("#pointValue").innerHTML) + 1;
  } else if (opponent == "Paper") {
    document.querySelector("#pointValue").innerHTML =
      Number(document.querySelector("#pointValue").innerHTML) - 1;
  }

  let opponentChoice = document.querySelectorAll("#opponent > div")[integer];

  document.querySelectorAll("#opponent > div").forEach(option => {
    if (option.classList.contains("hidden") == false) {
      option.classList.add("hidden");
    }
  });
  opponentChoice.classList.remove("hidden");
  updateHighscore();
};

let selectPaper = () => {
  let integer = Math.floor(Math.random() * 3);
  let opponent = oppenentOptions[integer];
  if (opponent == "Rock") {
    document.querySelector("#pointValue").innerHTML =
      Number(document.querySelector("#pointValue").innerHTML) + 1;
  } else if (opponent == "Scissors") {
    document.querySelector("#pointValue").innerHTML =
      Number(document.querySelector("#pointValue").innerHTML) - 1;
  }
  let opponentChoice = document.querySelectorAll("#opponent > div")[integer];

  document.querySelectorAll("#opponent > div").forEach(option => {
    if (option.classList.contains("hidden") == false) {
      option.classList.add("hidden");
    }
  });
  opponentChoice.classList.remove("hidden");
  updateHighscore();
};

let selectScissors = () => {
  let integer = Math.floor(Math.random() * 3);
  let opponent = oppenentOptions[integer];
  if (opponent == "Paper") {
    document.querySelector("#pointValue").innerHTML =
      Number(document.querySelector("#pointValue").innerHTML) + 1;
  } else if (opponent == "Rock") {
    document.querySelector("#pointValue").innerHTML =
      Number(document.querySelector("#pointValue").innerHTML) - 1;
  }
  let opponentChoice = document.querySelectorAll("#opponent > div")[integer];

  document.querySelectorAll("#opponent > div").forEach(option => {
    if (option.classList.contains("hidden") == false) {
      option.classList.add("hidden");
    }
  });
  opponentChoice.classList.remove("hidden");
  updateHighscore();
};
