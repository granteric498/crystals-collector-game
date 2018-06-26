var randomNumber = "";
var totalNumber = 0;
var wins = 0;
var losses = 0;
var images = [
    $("#blue-crystal"), 
    $("#green-crystal"), 
    $("#purple-crystal"), 
    $("#white-crystal")
];
var imagesValue = [];

window.onload = function() {
    // Math.floor(Math.random()*(max-min+1)+min)

    // Randomizing the randomly generated number for the user
    randomNumber = Math.floor(Math.random()*102) + 19;
    $("#randomNumber").html(randomNumber);
    
    // Adding a value to each picture
    $.each(images, function(i, value) {
        value = Math.floor(Math.random()*12) + 1;
        imagesValue[i] = value;
    });
};

// Clicking on picture will add value to Total Number
$.each(images, function(i, value) {
    images[i].on("click", function(e) {
        totalNumber = totalNumber + imagesValue[i];
        $("#totalNumber").html(totalNumber);

        // When you lose:
        if (Number(totalNumber) > Number(randomNumber)) {
            $("#result").html("You lose!");
            losses++;
            $("#losses").html("Losses: " + losses);

            // Randomizes Random Number again.
            randomNumber = Math.floor(Math.random()*102) + 19;
            $("#randomNumber").html(randomNumber);
        
            // Resets the total number back to 0
            totalNumber = 0;
            $("#totalNumber").html(totalNumber);

            // Resets the values for each picture
            imagesValue = [];
            $.each(images, function(i, value) {
                value = Math.floor(Math.random()*12) + 1;
                imagesValue[i] = value;
            });
        };

        // When you win:
        if (Number(totalNumber) === Number(randomNumber)) {
            $("#result").html("You win!");
            wins++;
            $("#wins").html("Wins: " + wins);

            // Randomizes random number
            randomNumber = Math.floor(Math.random()*102) + 19;
            $("#randomNumber").html(randomNumber);
        
            // Resets the total number back to 0
            totalNumber = 0;
            $("#totalNumber").html(totalNumber);

            // Resets the values for each picture
            imagesValue = [];
            $.each(images, function(i, value) {
                value = Math.floor(Math.random()*12) + 1;
                imagesValue[i] = value;
            });
        };
    });
});
