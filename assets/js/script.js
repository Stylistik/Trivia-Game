var time = 6;
var intervalId;
var qAndA =[];


// =============================


$("#start-btn").on("click", function startClicked() {

    clearInterval(intervalId);
    intervalId = setInterval(timer, 1000);

    $("#start-btn").hide();
    $(".container").show();

})

function timer() {
    time--;
    $("#timer").text(time);
    if (time === 0) {
    clearInterval(intervalId);
    }
}

function score() {
    
}
