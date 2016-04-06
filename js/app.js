
$(document).ready(function() {
	
	var mysteryNumber = parseInt((Math.random() * 100) + 1);
	console.log(mysteryNumber);

	$('#userinput').submit(function(e) {
		e.preventDefault();
		$('#guessList').append('<li>' + ($('#userGuess').val()) + '</li>');
		var shoot = parseInt($('#userGuess').val());
			if (shoot === mysteryNumber) {
				$('#feedback').text('You won!  Click new game to play again!');
			}
			else {
				$('#feedback').text('Cold!');
			}
	
		
		$('#userGuess').val('');
	})


});

/*var clicks = 0;
function linkClick() {
    document.getElementById('clicked').value = ++clicks;
}*/

/*function newGame() {
		$('.new').click(function() {
			$('.game').empty();
		})
	}*/




	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  









	
