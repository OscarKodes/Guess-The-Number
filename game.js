
let num = Math.floor(Math.random() * 100) + 1;
let tries = 0;

$(document).on("keydown", function(event) {
	if (event.key === "Enter") {
		getUsersNum();
	}
});

$(".submit-button").on("click", function(){

	getUsersNum();
});

function getUsersNum() {

	let userNum = Number($("#user-num").val());

	$("#user-num").val("")

	if (!userNum || userNum > 100 || userNum < 0) {

		alert("Please enter a number from 1 to 100")
	}

	else {
		tries++;

		let pElementsArr = document.querySelectorAll(".num-log p");

		pElementsArr[9].remove();

		checkNum(userNum);
	}
}

function checkNum(userNum) {

	if (userNum > num) {

		let recordNum = userNum + " is too high. Guess lower.";
		$(".num-log").prepend("<p>" + recordNum + "</p>");
		blink();
	}

	else if (userNum < num) {

		let recordNum = userNum + " is too low. Guess higher.";
		$(".num-log").prepend("<p>" + recordNum + "</p>");
		blink();
	}

	else {

		alert("Congratulations! You got it in " + tries + " attempt(s)!");
		location.reload();
	}

}

function blink() {

	$(".num-log p:first-of-type").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}