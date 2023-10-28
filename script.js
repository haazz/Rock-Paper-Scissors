let round = 1;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const roundBoard = document.createElement('p');
const scoreBoard = document.createElement('p');
const resultBoard = document.createElement('p');

roundBoard.textContent = 'Round ' + round;
roundBoard.className = 'roundBoard';
scoreBoard.textContent = 'Player: ' + playerScore + ' VS ' + 'Computer: ' + computerScore;
scoreBoard.className = 'scoreBoard';
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
		resultBoard.style.color = 'green';
	}
	else if ((playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")) {
		result = "You win! " + playerSelection + " beats " + computerSelection;
		resultBoard.style.color = 'blue';
		playerScore++;
	}	
	else {
		result = "You lose! " + computerSelection + " beats " + playerSelection;
		resultBoard.style.color = 'red';
		computerScore++;
	}
	resultBoard.textContent = result;
	console.log(result);
}

function checkGameScore() {
	let finalResult;
	
	if (computerScore >= 5 || playerScore >= 5) {
		if (playerScore > computerScore) {
			finalResult = "\nCongraturation!\nYou win this game!!!\n";
		}
		else if (playerScore === computerScore) {
			finalResult = "\nDraw!\nThe computer was a hard game too.\nTry again!\n";
		}
		else {
			finalResult = "\nYou lose.\nTry again!\n";
		}
		alert(finalResult);
		console.log(finalResult);
		playerScore = 0;
		computerScore = 0;
		round = 1;
		resultBoard.textContent = '';
	}
}

