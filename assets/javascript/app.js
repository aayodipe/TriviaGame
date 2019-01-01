// Array of objects of questions and answer

// need to fix bug in line 108
let questionArray = [
	{
		question: 'Which of the following collision avoidance systems helps airplanes avoid colliding with each other?',
		correct_answer: 'TCAS',
		incorrect_answers: ['GPWS', 'OCAS', 'TAWS'],
	},

	{
		correct_answer: 'Mike',
		incorrect_answers: ['Matthew', 'Mark', 'Max'],
		question: 'What name represents the letter M in the NATO phonetic alphabet?',
	},
	{
		correct_answer: 'A Tight Rope',
		incorrect_answers: ['Broken Glass', 'Balls', 'The Moon'],
		question: 'What does a funambulist walk on?',
	},
	{
		correct_answer: 'Octagon',
		incorrect_answers: ['Hexagon', 'Circle', 'Triangle'],
		question: 'What geometric shape is generally used for stop signs?',
	},
	{
		correct_answer: 'Brazil',
		incorrect_answers: ['China', 'South Korea', 'United States of America'],
		question: 'Which country, not including Japan, has the most people of japanese decent?',
	},
	{
		correct_answer: 'Metropolitan Line',
		incorrect_answers: ['Circle Line', 'Bakerloo Line', 'Victoria Line'],
		question: 'What was the first ever London Underground line to be built?',
	},
	{
		correct_answer: '7',
		incorrect_answers: ['8', '9', '10'],
		question: 'How many colors are there in a rainbow?',
	},
	{
		correct_answer: 'Kentucky Fried Chicken',
		incorrect_answers: ['Kentucky Fresh Cheese', 'Kibbled Freaky Cow', 'Kiwi Food Cut'],
		question: 'What do the letters of the fast food chain KFC stand for?',
	},
	{
		correct_answer: 'Richard Branson',
		incorrect_answers: ['Alan Sugar', 'Donald Trump', 'Bill Gates'],
		question:
			'Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ',
	},
	{
		correct_answer: 'Skin',
		incorrect_answers: ['Heart', 'large Intestine', 'Liver'],
		question: 'What is the largest organ of the human body?',
	},
];
$(document).ready(function() {
	//array of current question
	let start = 0;
	let score = 0;
	let pos = 0;
	let lastQuestion = questionArray.length;
	let pickedquestion;
	let currentQueAndAns = [];
	let allAnswersArray = [];
	let correctAnswerArr = [];

	/*
                Section A
     In this section, I randomly pick a number and  push it into a currentQueAndAns array
     */
	//generating random question without repeat

	function randomQuestion() {
		for (var i = 0; i < lastQuestion; i++) {
			let randomIndex = Math.floor(Math.random() * (lastQuestion - start) + start);
			pickedquestion = questionArray[randomIndex];
			questionArray[randomIndex] = questionArray[start];
			//populate the randomly picked question
			questionArray[start] = pickedquestion;
			currentQueAndAns.push(pickedquestion);

			//increment start
			start++;
		}
	}
	randomQuestion();
	//question start

	function renderQuestion() {
		//updating the question number
		$('.question-num').text(`Question:${pos + 1} of ${lastQuestion}`);

		console.log(currentQueAndAns);

		//hold correct answer
		correctAnswerArr = [currentQueAndAns[pos].correct_answer];
		console.log(correctAnswerArr[0]);

		//holds all answers
		//pos is the index of the current question
		let allAnswersArray = [
			currentQueAndAns[pos].correct_answer,
			currentQueAndAns[pos].incorrect_answers[0],
			currentQueAndAns[pos].incorrect_answers[1],
			currentQueAndAns[pos].incorrect_answers[2],
		];
		console.log(allAnswersArray);
		//shuffle all answer
		allAnswersArray.sort(function() {
			return Math.random() - 0.5;
		});
		console.log(allAnswersArray);

		//update the html
		//This place  has a bug that need to be fix. the value is stattic in contratary to what i expected.
		$('#currentquestion').text(currentQueAndAns[pos].question);
		$('#answer1').text(allAnswersArray[0]);
		$('#answer2').text(allAnswersArray[1]);
		$('#answer3').text(allAnswersArray[2]);
		$('#answer4').text(allAnswersArray[3]);
		//  adds a input attr with the answer as a value in order to use "indexof" to check the answer against useranswer
		$('#answer1').attr('value', allAnswersArray[0]);
		$('#answer2').attr('value', allAnswersArray[1]);
		$('#answer3').attr('value', allAnswersArray[2]);
		$('#answer4').attr('value', allAnswersArray[3]);
	}
	renderQuestion();

	$('#submit-button').on('click', function() {
		var optionChecked = document.querySelector('input[type=radio]:checked');
		//check if option is checked
		if (!optionChecked) {
			alert('Please select an option');
			return;
		}
		//check for correct answer
		let optionPicked = optionChecked.value;
		console.log(optionPicked);

		if (correctAnswerArr[0].indexOf(optionPicked) !== -1) {
			score += 2;

			alert('Good job! Correct answer is ' + optionPicked);

			console.log(score);
		} else {
			alert('Oh no!, Correct answer is ' + correctAnswerArr[0]);
		}

		optionChecked.checked = false;
		//hide the page after last question
		if (pos == lastQuestion - 1) {
			$('#time-left').text(`Time Up!`);
			$('#currentquestion').css('display', 'none');
			$('.mainDiv').html(`<h1>THANKS FOR TAKING THE TEST</h1>
                    <br>
                    Your Score is ${score} over ${lastQuestion}
                `);
			$('.answer').html('');
		}
		pos++;
		renderQuestion();
		console.log(pos);
	});

	// $(".next").on("click", randomQuestion)

	//set timer
	function startTimer(duration) {
		let timer = duration,
			minutes,
			seconds;
		setInterval(function() {
			minutes = parseInt(timer / 60);
			seconds = parseInt(timer % 60);
			minutes = minutes < 10 ? '0' + minutes : minutes;
			seconds = seconds < 10 ? '0' + seconds : seconds;
			let disPlayTimer = `${minutes}:${seconds}  `;
			$('#time-left').text(`Time Left: ${disPlayTimer}`);
			if (timer < 90) {
				$('#time-left').css('color', 'red');
			} else {
				$('#time-left').css('color', 'green');
			}
			if (timer < 0) {
				/*
                    The timer is set to 5 minutes. At the beinning the timer is green in color but when it remain one seconds, it changes color to red.                   
                    
                    */
				$('#time-left').text(`Time Up!`);
				$('#currentquestion').css(`display, none`);
				$('.mainDiv').html(`<h1>THANKS FOR TAKING THE TEST</h1>
                    <br>
                    Your Score is ${score} over ${lastQuestion * 2}
                    `);
				$('.answer').html('');
			}
			timer--;
		}, 1000);
	}

	startTimer(150);
});
