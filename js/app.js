
$(document).ready(function() {
	(function pickNumber() {
  		var mysteryNumber = parseInt((Math.random() * 100) + 1);
  		console.log(mysteryNumber);
  	})();



});

function newGame() {
		$('.new').click(function() {
			$('.game').empty();
		})
	}




	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  









	
