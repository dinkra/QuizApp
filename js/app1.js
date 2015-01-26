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
		},
		{
			questionText : 'What was the name of Stannis Baratheon\'s assault on King\'s Landing in the penultimate episode of season two?',
			answers : ['The Battle of King\'s Landing', 'The Battle of Blackwater Bay', 'The Battle of the Baratheons'],
			rightAnswer: 1
		},
		{
			questionText : 'What does Harrenhal prisoner Jaqen H\'ghar promise Arya after she saves his life?',
			answers : ['A chest of gold', 'A new sword', 'To kill three people of her choosing'],
			rightAnswer: 2
		},
		{
			questionText : 'Which Ironborn heir captures Winterfell while Robb Stark is fighting the Lannisters?',
			answers : ['Yara Greyjoy', 'Theon Greyjoy', 'Rick Stark'],
			rightAnswer: 1
		},
		{
			questionText : 'What is the name of the so-called King Beyond the Wall, the leader of the Wildings?',
			answers : ['Mance Rayder', 'Jeor Mormont', 'Qhorin Halfhand'],
			rightAnswer: 0
		},
		{
			questionText : 'What unusual deity does Melisandre, the Red Priestess, follow?',
			answers : ['The Lord of Fire', 'The Lord of Light', 'The Old Gods'],
			rightAnswer: 1
		},
		{
			questionText : 'What is the name of a person that can enter the minds of animals?',
			answers : ['A sellsword', 'Grand Maester', 'A warg'],
			rightAnswer: 2
		},
		{
			questionText : 'What name was given to the wedding between Edmure Tully and Roslin Frey that resulted in the massacre of most of the Stark family?',
			answers : ['The Red Wedding', 'The Purple Wedding', 'The Black Wedding'],
			rightAnswer: 0
		},
		{
			questionText : 'What was the name of the Stark ancestral sword that was melted down by Tywin Lannister in the first episode of season four?',
			answers : ['Fire', 'Ice', 'Wolf'],
			rightAnswer: 1
		},
		{
			questionText : 'What was in the ceremonial pie at the Purple Wedding?',
			answers : ['A dozen doves', 'A dozen pigeons', 'A dozen pheasants'],
			rightAnswer: 0
		},
		{
			questionText : 'Why does Daenerys banish Ser Jorah Mormont from Meereen?',
			answers : ['Because he refused to kill the slavers', 'Because he had been spying on her for Robert Baratheon', 'Because he had been sending letters to Tywin Lannister'],
			rightAnswer: 1
		}

	];


	// Function for creating any right answers
	function printQuestion(q) {
		$('.questionText').text(q.questionText);
		$('#answers').empty();
		for (var i = 0; i < q.answers.length; i++) {
			var a = $('<li id="answer' + i + '" class="answers"></li>');
			a.text(q.answers[i]);
			$('#answers').append(a);
		};
	}

	var score = 0;
	var quest = -1;
	var bingo = 0;
	$('.right-wrong').hide();

	// START QUIZ and OK buttons behavor
	$('#ok').on('click', function() {
		quest++;
		$('.right-wrong').hide();

		if (quest == questions.length) {
			$('#your-score').show();
			$('#your-score').text('Your score is ' + bingo + ' of ' + quest);
			$('#ok').hide();
		} else {
			printQuestion(questions[quest]);
			$(this).hide();
			$('.quiz-number').text(quest + 1);
			console.log('Quest1 ' + quest);
		}
		
	});

	// Choosing right answer
	$('ul').on('click','li', function() {
			var text = questions[quest].answers[questions[quest].rightAnswer];
			console.log(text);
			//console.log($(this).text());
			if ($(this).text() == text) {
					$('#right').show();
					$('#right').text($(this).text() + ' is right answer');
					bingo++;
					$('#quiz-score').text(bingo);
					console.log($(this).text());
			}  else {
					$('#wrong').show();
					$('#wrong').text($(this).text() + ' is wrong answer');
					console.log($(this).text());
			}
			$('#ok').show();
			$('#ok').text('OK');
			$('.answers').remove();
			console.log('Quest2 ' + quest);
	});


});








