var randresult;
var loss = 0;
var win = 0;
var randomNum
var previous = 0;

var startGame = function (){

    $(".crystals").empty();

    var images = [
            "http://www.crystalclearintentions.co.nz/wp-content/uploads/crystals.jpg",
            "https://www.colourbox.com/preview/4545062-red-crystal.jpg",
            "https://beadage.net/wp-content/uploads/2015/08/blue-zircon-crystal-gemstone-300x300.jpg",
            "https://images.vector-images.com/clp5/189566/clp3465421.jpg"];
    
    randresult=Math.floor(Math.random()  * 101) + 19;
    
    $("#result").html("Winning Number: " + randresult);

    for(var i = 0; i < 4; i++){

        var randomNum = Math.floor(Math.random() * 11) +1;
    
        var crystal = $("<div>");
            crystal.attr({
                "class": "crystal",
                "data-rand": randomNum
            });

            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size" : "cover"

            });

            

        $(".crystals").append(crystal);

    }

    $("#previous").html("Your Score! " + previous);
}

startGame();


$(document).on("click", ".crystal", function(){
    
    var result;

    var num = parseInt($(this).attr("data-rand"));

    previous += num;

    $("#previous").html("Players Score! " + previous);

    if (previous > randresult){
    
        loss ++;
        
        $("#lost").html("Losses " + loss);
        
        previous = 0;
        
        startGame();
    }
    else if(previous === randresult){
    
        win++;

        $("#win").html("Wins " + win);

        previous = 0;

        startGame();

    }


});