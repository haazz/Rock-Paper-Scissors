function chcekInput(playerInput) {
	if (typeof playerInput !== 'string') {
		return null;
	}
	
	let str = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
	if (str === "Rock" || str ==="Scissors" || str === "Paper") {
		return str;
	}
	return null;
}

function getComputerChoice() {
	rand = Math.floor(Math.random() * 3);
	if (rand == 0) {
		return "Rock";
	}
	else if (rand == 1) {
		return "Paper"
	}
	else {
		return "Scissors"
	}
}

function playRound() {
	let computerSelection = getComputerChoice();
	let playerSelection = prompt("Enter Rock, Scissors or Paper");

	playerSelection = chcekInput(playerSelection);
	if (playerSelection === null) {
		return null;
	}
	if (playerSelection === computerSelection) {
		console.log("Draw! " + playerSelection + " and " + computerSelection + " tied.");
		return 0;
	}
	else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
		(playerSelection === "Paper" && computerSelection === "Rock") ||
		(playerSelection === "Scissors" && computerSelection === "Paper")) {
		console.log("You win! " + playerSelection + " beats " + computerSelection);
		return 1;
	}	
	else {
		console.log("You lose! " + computerSelection + " beats " + playerSelection);
		return 2;
	}
}

function game(numOfRounds) {
	let result;
	let playerScore = 0;
	let computerScore = 0;

	for(let i = 0; i < numOfRounds; i++) {
		result = playRound();
		if (result === null) {
			console.log("It is wrong answer.\n Please enter Rock, Paper, or Scissors.\n");
			i--;
			continue;
		}
		else if (result === 1) {
			playerScore++;
		}
		else if (result === 2) {
			computerScore++;
		}
		console.log("\nSCORE\nPlayer: " + playerScore + " VS Computer: " + computerScore + "\n");
	}
	if (playerScore > computerScore) {
		console.log("\nCongraturation!\nYou win this game!!!\n");
	}
	else if (playerScore === computerScore) {
		console.log("\nYou play well.\nThe computer was a hard game too.\n");
	}
	else {
		console.log("\nYou lose.\nTry again! (Refresh the website.)\n");
	}
}

let numOfRounds = parseInt(prompt("Enter number of rounds to play (1~10)"));

if (numOfRounds >= 1 && numOfRounds <= 10) {
	console.log("Play " + numOfRounds + " rounds!\n")
	game(numOfRounds);
}
else {
	console.log("Wrong answer. \nIf you want to try again, refresh the website\n");
}