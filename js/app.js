
$(document).ready(function() {
    
    var counter = 0;
    var guesses = [];
    var mysteryNumber;
    var guess;

    function validNumberProcess() {
        counter++;
        console.log(counter);
        var diff = Math.abs(guess - mysteryNumber);
        $('#count').text(counter);
        $('#guessList').append('<li>' + ($('#userGuess').val()) + '</li>'); 
        if (guess === mysteryNumber) {
            $('#feedback').text('You won!  Click new game to play again!');
            $('#guessButton').css({"visibility":"hidden"});
        }
        else if (diff > 20) {
            $('#feedback').text('Cold!');
        }
        else if (diff > 19) {
            $('#feedback').text('Warm!');
        }
        else if (diff > 9) {
            $('#feedback').text('Hot!');
        }
        else if (diff > 4) {
            $('#feedback').text('Very hot!');
        }
        else {
            $('#feedback').text('Fire!');
        }
    }

    function sameNumberCheck() {
        if (guesses.indexOf(guess) === -1) {
            guesses.push(guess);   
            validNumberProcess();
        }
        else { 
            alert('You have already guessed that number.');
            console.log('Same number guess');
        }
    }

    function hotorcold() {  
        mysteryNumber = parseInt((Math.random() * 100) + 1);
        console.log(mysteryNumber);
    
        $('#userinput').submit(function(e) {
            e.preventDefault();
            guess = parseInt($('#userGuess').val(), 10);
            if (isNaN(guess)) {
                alert('not a number');
            }
            else if (guess > 100 || guess < 0) {
                alert('please enter number between 0 and 100')
            }
            else {
                sameNumberCheck();
            }           
            $('#userGuess').val('');
        });
    }

    /*--- Display information modal box ---*/
    $(".what").click(function(){
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
        $(".overlay").fadeOut(1000);
    });

    $('.new').click(function() {
        location.reload();
    });

    hotorcold();

});




    



    

  









    
