let round = 1;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const roundBoard = document.createElement('div');
const scoreBoard = document.createElement('div');
const resultBoard = document.createElement('div');

roundBoard.textContent = 'Round ' + round;
scoreBoard.textContent = 'Player: ' + playerScore + ' VS ' + 'Computer: ' + computerScore;
display.appendChild(roundBoard);
display.appendChild(scoreBoard);
display.appendChild(resultBoard);

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		playRound(button.className);
		round++;
		roundBoard.textContent = 'Round ' + round;
		scoreBoard.textContent = 'Player: ' + playerScore + ' VS ' + 'Computer: ' + computerScore;
		checkGameScore();
	});
});

function getComputerChoice() {
	rand = Math.floor(Math.random() * 3);
	if (rand == 0) {
		return "rock";
	}
	else if (rand == 1) {
		return "paper"
	}
	else {
		return "scissors"
	}
}

function playRound(playerSelection) {
	let computerSelection = getComputerChoice();
	let result;

	if (playerSelection === computerSelection) {
		result = "Draw! " + playerSelection + " and " + computerSelection + " tied.";
	}
	else if ((playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")) {
		result = "You win! " + playerSelection + " beats " + computerSelection;
		playerScore++;
	}	
	else {
		result = "You lose! " + computerSelection + " beats " + playerSelection;
		computerScore++;
	}
	resultBoard.textContent = result;
	console.log(result);
}

function checkGameScore() {
	let result;
	
	if (computerScore >= 5 || playerScore >= 5) {
		if (playerScore > computerScore) {
			console.log("\nCongraturation!\nYou win this game!!!\n");
		}
		else if (playerScore === computerScore) {
			console.log("\nYou play well.\nThe computer was a hard game too.\n");
		}
		else {
			console.log("\nYou lose.\nTry again! (Refresh the website.)\n");
		}
		playerScore = 0;
		computerScore = 0;
		round = 1;
		resultBoard.textContent = '';
	}
	
	
}

