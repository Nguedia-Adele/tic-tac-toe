var currentPlayer = 1, token="", moves = 0, line = 0, score1 = 0, score2 = 0, draws=0;

/*function game(){
	while(moves<10 && line!=1){
		setToken(id);
	}
}*/

function setToken(id) {
	if (moves<9 && line != 1) {
		if (currentPlayer == 1 ) {
				token="X";
				currentPlayer+=1;
				document.getElementById("turns").innerHTML = "Player 2's turn";
				moves += 1;
			} else if (currentPlayer==2) {
				token="O";
				currentPlayer-=1;
				document.getElementById("turns").innerHTML = "Player 1's turn";
				moves += 1;
			}
		document.getElementById(id).innerHTML = token;
		document.getElementById("outcome").innerHTML = moves;
		checkLine();
	} else if (moves == 9 && line != 1) {
		draws += 1;
		alert("DRAW!");
		document.getElementById("draws").innerHTML = draws;
		//moves = 0;
		reset();
	}
}

function checkLine() {
	var btn1 = document.getElementById("G1").innerHTML;
	var btn2 = document.getElementById("G2").innerHTML;
	var btn3 = document.getElementById("G3").innerHTML;
	var btn4 = document.getElementById("G4").innerHTML;
	var btn5 = document.getElementById("G5").innerHTML;
	var btn6 = document.getElementById("G6").innerHTML;
	var btn7 = document.getElementById("G7").innerHTML;
	var btn8 = document.getElementById("G8").innerHTML;
	var btn9 = document.getElementById("G9").innerHTML;

	//Player 1 wins
	if (btn1 == "X" && btn2 == "X" && btn3 == "X") {
		line = 1;
		score1 += 1;
		alert("Player 1 wins!");
		document.getElementById("score1").innerHTML = score1;
		moves = 0;
		reset();

	}
	if (btn4 == "X" && btn5 == "X" && btn6 == "X") {
		line = 1;
		score1 += 1;
		alert("Player 1 wins!");
		document.getElementById("score1").innerHTML = score1;
		reset();
	}
	if (btn7 == "X" && btn8 == "X" && btn9 == "X") {
		line = 1;
		score1 += 1
		alert("Player 1 wins!");
		document.getElementById("score1").innerHTML = score1;
		reset();
	}
	if (btn1 == "X" && btn4 == "X" && btn7 == "X") {
		line = 1;
		score1 += 1;
		alert("Player 1 wins!");
		document.getElementById("score1").innerHTML = score1;
		reset();
	}
	if (btn1 == "X" && btn5 == "X" && btn9 == "X") {
		line = 1;
		score1 += 1;
		alert("Player 1 wins!");
		document.getElementById("score1").innerHTML = score1;
		reset();
	}
	if (btn3 == "X" && btn5 == "X" && btn7 == "X") {
		line = 1;
		score1 += 1;
		alert("Player 1 wins!");
		document.getElementById("score1").innerHTML = score1;
		reset();
	}
	if (btn2 == "X" && btn5 == "X" && btn8 == "X") {
		line = 1;
		score1 += 1;
		alert("Player 1 wins!");
		document.getElementById("score1").innerHTML = score1;
		reset();
	}
	if (btn3 == "X" && btn6 == "X" && btn9 == "X") {
		line = 1;
		score1 += 1;
		alert("Player 1 wins!");
		document.getElementById("score1").innerHTML = score1;
		reset();
	}

	//Player 2 wins
	if (btn1 == "O" && btn2 == "O" && btn3 == "O") {
		line = 1;
		score2 += 1;
		alert("Player 2 wins!");
		document.getElementById("score2").innerHTML = score2;
		reset();

	}
	if (btn4 == "O" && btn5 == "O" && btn6 == "O") {
		line = 1;
		score2 += 1;
		alert("Player 2 wins!");
		document.getElementById("score2").innerHTML = score2;
		reset();
	}
	if (btn7 == "O" && btn8 == "O" && btn9 == "O") {
		line = 1;
		score2 += 1
		alert("Player 2 wins!");
		document.getElementById("score2").innerHTML = score2;
		reset();
	}
	if (btn1 == "O" && btn4 == "O" && btn7 == "O") {
		line = 1;
		score2 += 1;
		alert("Player 2 wins!");
		document.getElementById("score2").innerHTML = score2;
		reset();
	}
	if (btn1 == "O" && btn5 == "O" && btn9 == "O") {
		line = 1;
		score2 += 1;
		alert("Player 2 wins!");
		document.getElementById("score2").innerHTML = score2;
		reset();
	}
	if (btn3 == "O" && btn5 == "O" && btn7 == "O") {
		line = 1;
		score2 += 1;
		alert("Player 2 wins!");
		document.getElementById("score2").innerHTML = score2;
		reset();
	}
	if (btn2 == "O" && btn5 == "O" && btn8 == "O") {
		line = 1;
		score2 += 1;
		alert("Player 2 wins!");
		document.getElementById("score2").innerHTML = score2;
		reset();
	}
	if (btn3 == "O" && btn6 == "O" && btn9 == "O") {
		line = 1;
		score2 += 1;
		alert("Player 2 wins!");
		document.getElementById("score2").innerHTML = score2;
		reset();
	}
	
}

function reset(){
	document.getElementById("G1").innerHTML = "";
	document.getElementById("G2").innerHTML = "";
	document.getElementById("G3").innerHTML = "";
	document.getElementById("G4").innerHTML = "";
	document.getElementById("G5").innerHTML = "";
	document.getElementById("G6").innerHTML = "";
	document.getElementById("G7").innerHTML = "";
	document.getElementById("G8").innerHTML = "";
	document.getElementById("G9").innerHTML = "";

	moves = 0;
	document.getElementById("outcome").innerHTML = "";

	console.log("done");

	/*
	var x = document.getElementById("gameBoard");
	var y = x.getElementsByTagName("button");
	y.innerHTML = "";
	*/
}