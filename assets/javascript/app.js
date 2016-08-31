//timer for 10 questions can be 120 seconds or 12 seconds per question

var number = 120;

$('#start').on('click', start);
$('#stop').on('click', stop);
$("input[type=radio]").attr('disabled', true);
$("#quiz").hide();

function start() {

	$("input:radio").each(function(i) {
       this.checked = false;
		});
	$("input[type=radio]").attr('disabled', false);
	var number = 120;
	counter = setInterval(decrement, 1000);
	$('#start').attr('disabled', true);
	$('#quiz').show();
}

function decrement() {
	number--;
	$('#timer').html(number);
	$('#luck').html("GOOD LUCK!");
		if (number === 0) {
			clearInterval(counter);
			alert("The time is up! Let's see how you scored!");
			stop();	
    
		}
}

function stop() {
	number = 120;
	$('#start').attr("disabled", false);
	$("input[type=radio]").attr('disabled', true);
	clearInterval(counter);
	
}


var numberOfQuestions = 10; //number of questions in the game
var numberOfChoices = 3; // number of choices for each question
var answers = new Array(10); // this array will hold all correct answers

answers[0] = "Two years";
answers[1] = "True";
answers[2] = "Every hour.";
answers[3] = "shoplifter";
answers[4] = "the White House";
answers[5] = "True";
answers[6] = "144,000";
answers[7] = "higher";
answers[8] = "working really hard";
answers[9] = "cubes";

var getScore = function(form){
	var score = 0;
	var currentElement;
	var currentSelection;

	for (i=0; i<numberOfQuestions; i++) {
		currentElement = i*numberOfChoices;

			for (j=0; j<numberOfChoices; j++) {
				currentSelection = form.elements[currentElement + j];
					if (currentSelection.checked) {
							if (currentSelection.value == answers[i]) {
								 score++;
								 break;
							}
					}
		}
	}
	score = Math.round(score/numberOfQuestions*100);
	form.percentage.value = score + "%";
	var correctAnswers="";

	for (i=1; i<=numberOfQuestions; i++) {
		correctAnswers += i + "." + answers[i-1] +"\r\n";
	}
	form.solutions.value = correctAnswers;

	clearInterval(counter);
};

