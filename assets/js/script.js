var time = 60;
var intervalId;
var correct = 0;
var answers = ["Baseball", "Cassius Clay", "A pig", "Scooby Doo", "42", "7", "Venus", "Giraffe", "Steven Spielberg", "Red"];


// ====================================================================================

$("#start-btn").on("click", startClicked);

$("#finish-btn").on("click", finishClicked);

// ====================================================================================

function startClicked() {

    clearInterval(intervalId);
    intervalId = setInterval(timer, 1000);
    $("#start-btn").hide();
    $(".container").show();
};

function timer() {
    time--;
    $("#timer").text(time);
    if (time === 0) {
        clearInterval(intervalId);
        score();
    }
}

function score() {
    for (let i = 0; i < answers.length; i++) {
        if ($(`input[name = "q${i}"]:checked`).val() === answers[i]) {
            correct++;
        }
    };
    var scoreDiv = $("<div>");
    scoreDiv.addClass("card text-white bg-primary");
    scoreDiv.append("<h1 class = 'text-center'>Score</h1>");
    scoreDiv.append(`<h4 class = 'text-center'>${correct}0 %</h4>`);

    $(".container").html(scoreDiv);
};

function finishClicked() {
    clearInterval(intervalId);
    score();
}



