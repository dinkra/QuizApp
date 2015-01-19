
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	
  	var countGuess = 0;

  	//reset all fields
  	function newGame() {
  		$('#count').text('0');
  		$('#feedback').text('Make your Guess!');
  		$('#guessList').empty();
  		$("#userGuess").val("");
  		rightNumber = secretNumber (1, 100);

  	}	

  	//random number from 1 to 100
  	function secretNumber (min, max) {
  		return Math.round(Math.random() * (max - min) + min);
  	} 
	
	var rightNumber = secretNumber (1, 100);
	//var guessNumber = $('#userGuess').val();

	//feedback about telling users if they’re getting “hotter” or “colder”
  	function feedback (rightNumber, guessNumber) {
  		var diff = Math.abs(rightNumber - guessNumber);
  		console.log(diff);
  		countGuess++;
  		$('#count').text(countGuess);
  		if (diff == 0) {
  			$('#feedback').text('Right Guess!!!');
  			//console.log(diff);
  		} else if (diff > 75) {
  			$('#feedback').text('Very Cold');
  			//console.log(diff);
  		} else if (diff > 20) {
  			$('#feedback').text('Cold');
  			//console.log(diff);
  		} else if (diff > 10) {
  			$('#feedback').text('Hot');
  			//console.log(diff);
  		} else {
  			$('#feedback').text('Very Hot');
  			//console.log(diff);
  		}
  	}

  	//add numbers which user already submitted
  	function guessList (n) {
  		if ((n >= 0)&(n < 100)) {
  			$('#guessList').append('<li>' + n + '</li>');
  		};
  	}
	
  	//to prevent submit enter input(to stop reloading page)
	$("form").submit(function(e) {
    	e.preventDefault();
	});

	//when user clicks button
	$('#guessButton').on('click', function() {
  		
  		console.log(rightNumber);
  		var guessNumber = $('#userGuess').val();
  		feedback (rightNumber, guessNumber);
  		guessList (guessNumber);
  		$("#userGuess").val('');

	});

	////when user press enter
	$("#userGuess").keyup(function (enter) {
        if (enter.keyCode == 13) {
            
            console.log(rightNumber);
  			var guessNumber = $('#userGuess').val();
  			feedback (rightNumber, guessNumber);
  			guessList (guessNumber);
  			$("#userGuess").val('');
        }
    });

	//call New Game function by clicking link
	$('.new').on('click', function() {
  		newGame();

	});

});