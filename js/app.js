
$(document).ready(function() {
    function hotorcold() {  
        var mysteryNumber = parseInt((Math.random() * 100) + 1);
        console.log(mysteryNumber);
    
        $('#userinput').submit(function(e) {
            e.preventDefault();
            var guess = parseInt($('#userGuess').val(), 10);
            if (guess === NaN) {
                alert('Please input a number.');
            }
            else {
                function sameNumberCheck() {
                    var guesses = [];
                    if (guesses.indexOf(guess) === -1) {
                        guesses.push(guess);   
                        function validNumberProcess() {
                            var counter = 0;
                            counter++;
                            var diff = Math.abs(guess - mysteryNumber);
                            $('#count').text(counter)
                            $('#guessList').append('<li>' + ($('#userGuess').val()) + '</li>'); 
                            if (guess === mysteryNumber) {
                                $('#feedback').text('You won!  Click new game to play again!');
                                $('#guessButton').css({"visibility":"hidden"});
                            }
                            else if (diff > 50) {
                                $('#feedback').text('Cold!');
                            }
                            else if (diff > 30) {
                                $('#feedback').text('Warm!');
                            }
                            else if (diff > 10) {
                                $('#feedback').text('Hot!');
                            }
                            else if (diff > 5) {
                                $('#feedback').text('Very hot!');
                            }
                            else {
                                $('#feedback').text('Fire!');
                            }
                        }
                    }
                    else { 
                    alert('You have already guessed that number.');
                    }
                }
            }
            
            $('#userGuess').val('');
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

    $('.new').click(function() {
        console.log('new game.');
        $('#guessList').empty();
        hotorcold();
    });

    hotorcold();

});




    



    

  









    
