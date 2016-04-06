
$(document).ready(function() {
		
		var mysteryNumber = parseInt((Math.random() * 100) + 1);
		console.log(mysteryNumber);
		var counter = 0;

		$('#userinput').submit(function(e) {
			e.preventDefault();
			counter++;
			$('#count').text(counter)
			$('#guessList').append('<li>' + ($('#userGuess').val()) + '</li>');
			var guess = parseInt($('#userGuess').val(), 10);
				if (guess === mysteryNumber) {
					$('#feedback').text('You won!  Click new game to play again!');
					$('#guessButton').css({"visibility":"hidden"});
				}
				else if (guess < (mysteryNumber - 30) && guess > (mysteryNumber + 30)) {
					$('#feedback').text('Cold!');
				}
				else if (guess < (mysteryNumber - 20) && guess > (mysteryNumber + 20)) {
					$('#feedback').text('Warm!');
				}
				else if (guess < (mysteryNumber - 10) && guess > (mysteryNumber + 10)) {
					$('#feedback').text('Hot!');
				}
				else if (guess < (mysteryNumber - 5) && guess > (mysteryNumber + 5)) {
					$('#feedback').text('Very hot!');
				}
				else {
					$('#feedback').text('Extremely hot!');
				}
		
			$('#userGuess').val('');
		})

function newGame() {
		$('.new').click(function() {
		var mysteryNumber = parseInt((Math.random() * 100) + 1);
		console.log(mysteryNumber);
		var counter = 0;

		$('#userinput').submit(function(e) {
			e.preventDefault();
			counter++;
			$('#count').text(counter)
			$('#guessList').append('<li>' + ($('#userGuess').val()) + '</li>');
			var guess = parseInt($('#userGuess').val(), 10);
				if (guess === mysteryNumber) {
					$('#feedback').text('You won!  Click new game to play again!');
					$('#guessButton').css({"visibility":"hidden"});
				}
				else if (guess < (mysteryNumber - 30) && guess > (mysteryNumber + 30)) {
					$('#feedback').text('Cold!');
				}
				else if (guess < (mysteryNumber - 20) && guess > (mysteryNumber + 20)) {
					$('#feedback').text('Warm!');
				}
				else if (guess < (mysteryNumber - 10) && guess > (mysteryNumber + 10)) {
					$('#feedback').text('Hot!');
				}
				else if (guess < (mysteryNumber - 5) && guess > (mysteryNumber + 5)) {
					$('#feedback').text('Very hot!');
				}
				else {
					$('#feedback').text('Extremely hot!');
				}
		
			$('#userGuess').val('');
		})
		})
	}

});



/*$('.new').click(function() {
			$('#feedback, #userGuess, #guessButton, #count').reset();
		})*/


	



	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  









	
