$( document ).ready(function(){

var randomNumb = getRandNumber(19,120)
var RedNumber = getRandNumber(1,12);
var OrangeNumber = getRandNumber(1,12);
var GreenNumber = getRandNumber(1,12);
var BlueNumber = getRandNumber(1,12);
var PlayerScore = 0;
var wins = 0;
var losses = 0;
$("#wins").text(wins);
$("#losses").text(losses);
$("#RandNumb").text(randomNumb);
$("#playerScore").text(PlayerScore);



function getRandNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function ResetGame() {

 randomNumb = getRandNumber(19,120)
 RedNumber = getRandNumber(1,12);
 OrangeNumber = getRandNumber(1,12);
 GreenNumber = getRandNumber(1,12);
 BlueNumber = getRandNumber(1,12);
 PlayerScore = 0;

 


$("#RandNumb").text(randomNumb);
$("#playerScore").text(PlayerScore);


 }

 function checkWL() {


    
if (randomNumb===PlayerScore) {
    
    wins++;
    $("#status").html("<h3>You Won !!</h3>");
    $("#wins").text(wins);
    ResetGame();
    
    
}

else if (PlayerScore > randomNumb) {
    
    losses++;
    $("#status").html("<h3>You Lose !!</h3>");
    $("#losses").text(losses);
    ResetGame();
    
    


}

}




$('#blue').on('click', function(){

    PlayerScore += BlueNumber ;
    $("#playerScore").text(PlayerScore);
    if (randomNumb===PlayerScore || PlayerScore > randomNumb ) {checkWL();}
    

});

$('#red').on('click', function(){

    PlayerScore += RedNumber ;
    $("#playerScore").text(PlayerScore);
    if (randomNumb===PlayerScore || PlayerScore > randomNumb ) {checkWL();}
    

});

$('#orange').on('click', function(){

    PlayerScore += OrangeNumber ;
    $("#playerScore").text(PlayerScore);
    if (randomNumb===PlayerScore || PlayerScore > randomNumb ) {checkWL();}
    

});

$('#green').on('click', function(){

    PlayerScore += GreenNumber ;
    $("#playerScore").text(PlayerScore);
    if (randomNumb===PlayerScore || PlayerScore > randomNumb ) {checkWL();}
    

});

// function checkWL() {

// if (randomNumb===PlayerScore) {
    
//     wins++;
//     $("#status").html(<h3>You Won !!</h3>);
//     $("#wins").text(wins);
//     ResetGame();
// }

// if (randomNumb<PlayerScore) {
    
//     losses++;
//     $("#status").html(<h3>You Lose !!</h3>);
//     $("#losses").text(losses);
//     ResetGame();
// }

// }


// $("#playerScore").on("click", "#blue", function() {

// BlueNumber = parselInt(BlueNumber) + $("#playerScore").text();

// });









});