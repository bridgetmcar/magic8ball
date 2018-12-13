$(document).ready(function(){
var magic8ball = {};

var answers =  ["It is certain", "It is decidedly so", "Without a doubt", "Yes - definitely", "You may rely on it",
"As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy", "try again", "Ask again later",
"Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];



var randomNumber = Math.random();
var randomNumberAnswers = randomNumber * answers.length;
var randomIndex = Math.floor(randomNumberAnswers);
magic8ball.randomAnswer = answers[randomIndex];
$("#answer").text(magic8ball.randomAnswer);


magic8ball.question = "Will I become a Javascript expert?";

var onClick = function () {
    $("#answer").hide();
  	var question = prompt("Ask Me a Yes/No question");
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    $("#8ball").effect("shake");
    $("#answer").fadeIn(4000);
	//this line?
	magic8ball.askQuestion(question);
	};

$("#answer").hide();
$("#questionButton").click(onClick);
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");


/**magic8ball.announceAnswer = function () {
		console.log("The answer to " + this.question + " is " + this.randomAnswer);};
magic8ball.announceAnswer();**/

});
