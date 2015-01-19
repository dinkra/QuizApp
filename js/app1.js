$(document).ready(function(){

	// Array of questions, which consisits from: 
	//     property 'questionText'(string, text of my question); 
	//     property 'answers'(array, texts of my answers);
	//     property 'rightAnswer'(number, element of array 'answers' which is right answer)
	var questions = [
		{
			questionText : 'Who pushed young Bran Stark out of the window in season one, resulting in his paralysis from the waist down?',
			answers : ['Tyrion Lannister', 'Theon Greyjoy', 'Jamie Lannister'],
			rightAnswer: 2
		},
		{
			questionText : 'What was the name of Daenerys\' power-hungry brother, who arranged her marriage to Dothraki warlord Khal Drogo?',
			answers : ['Prince Viserys Targaryen', 'Ramsey Bolton', 'Petyr Baelish'],
			rightAnswer: 0
		},
		{
			questionText : 'The Stark children (and Jon Snow) adopt six orphaned direwolf cubs in season one - Grey Wind, Lady, Ghost, Shaggydog, Summer and...?',
			answers : ['Gendry', 'Nymeria', 'Nessie'],
			rightAnswer: 1
		},
		{
			questionText : 'What was the name of the witch burned alive by Daenerys on the funeral pyre of Khal Drogo?',
			answers : ['Myrcella Baratheon', 'Pyatt Pree', 'Mirri Maz Duur'],
			rightAnswer: 2
		},
		{
			questionText : 'What was the name of the sinister castle where Arya and Gendry were held prisoner in season two?',
			answers : ['Harrenhal', 'Casterly Rock', 'Moat Cailin'],
			rightAnswer: 0
		}

	];

	function consoleQuestion(q) {
		console.log(q.questionText);
		for (var i = 0; i < q.answers.length; i++) {
			var text = 'Answer ' + i + ' : ' + q.answers[i];
			if (i == q.rightAnswer) {
				console.log(text + ' - right answer');
			} else {
				console.log(text);
			}
		};
	}

	function printQuestion(q) {
		$('.questionText').append('<h2>' + q.questionText + '</h2>');
		for (var i = 0; i < q.answers.length; i++) {
			var text = '<li>Answer ' + i + ' : ' + q.answers[i];
			if (i == q.rightAnswer) {
				$('.answers').append(text + '</li>');
			} else {
				$('.answers').append(text + '</li>');
			}
		};
	}


	console.log(questions[0].rightAnswer);
	
	for (var i = 0; i < questions.length; i++) {
		consoleQuestion(questions[i]);
		//printQuestion(questions[i]);
	};

	printQuestion(questions[0]);

	// $('li').on('click', function() {
	// 	$(this).text('Yep');
	// });

	$('li').on('click', function() {
		if ($(this).text() == questions[0].answers[questions[0].rightAnswer]) {
			$('li').remove();
			$('.answers').append('<li>' + $(this).text() + ' is right answer' + '</li>');
		} else {
			$('li').remove();
			$('.answers').append('<li>' + $(this).text() + ' is wrong answer' + '</li>');
		}
	});


});








