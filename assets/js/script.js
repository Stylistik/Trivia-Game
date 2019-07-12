var time = 60;


// =============================

setInterval(() => {
    timer()
}, 1000);

function timer() {
    time--;
 $("#timer").text(time);
}