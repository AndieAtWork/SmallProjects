// setTimeout(function() {
//     document.getElementById("frame1").remove();
//     document.getElementById("frame2").style.display = "flex";
// }, 2000);

// setTimeout(function() {
//     document.getElementById("frame2").remove();
//     document.getElementById("frame3").style.display = "block";
// }, 4000);

// setTimeout(function() {
//     document.getElementById("frame3").remove();
//     document.getElementById("frame4").style.display = "block";
// }, 6000);

// setTimeout(function() {
//     document.getElementById("frame4").remove();
//     document.getElementById("frame5").style.display = "block";
// }, 8000);

// setTimeout(function() {
//     document.getElementById("frame5").remove();
//     document.getElementById("frame6").style.display = "flex";
// }, 10000);

// setTimeout(function() {
//     document.getElementById("frame6-skull").remove();
//     document.getElementById("frame6-text").style.display = "block";
// }, 11000);

// setTimeout(function() {
//     document.getElementById("frame6").remove();
//     document.getElementById("frame7").style.display = "flex";
// }, 12000);

// setTimeout(function() {
//     document.getElementById("frame7").remove();
//     document.getElementById("frame8").style.display = "flex";
// }, 14000);

// setTimeout(function() {
//     document.getElementById("frame8").remove();
//     document.getElementById("frame9").style.display = "flex";
// }, 16000);

setTimeout(function() {
    document.getElementById("frame1").remove();
    document.getElementById("frame2").remove();
    document.getElementById("frame3").remove();
    document.getElementById("frame4").remove();
    document.getElementById("frame5").remove();
    document.getElementById("frame6").remove();
    document.getElementById("frame7").remove();
    document.getElementById("frame8").remove();
    document.getElementById("frame9").remove();

    document.getElementById("frame10").style.display = "flex";
    document.getElementById("frame10-over-frame").style.display = "block";
    document.getElementById("heart1").style.display = "block";
}, 2000);

setTimeout(function() {
    document.getElementById("heart2").style.display = "block";
}, 2500);

setTimeout(function() {
    document.getElementById("heart3").style.display = "block";
}, 3000);

setTimeout(function() {
    document.getElementById("heart4").style.display = "block";
    document.getElementById("frame10-over-frame").remove();
}, 3500);
setTimeout(function() {
    document.getElementById("heart5").style.display = "block";
}, 4000);
setTimeout(function() {
    document.getElementById("heart6").style.display = "block";
}, 4500);

setTimeout(function() {
    var hearts = document.getElementsByClassName("frame10-heart")
    var heartsArray = Array.from(hearts);
    heartsArray.forEach(function(element) {
      element.remove();
    });
    document.getElementById("frame10").remove();

    document.getElementById("frame11").style.display = "flex";
}, 5000);

setTimeout(function() {
    document.getElementById("frame11-text").remove();
    document.getElementById("frame11-text2").style.display = "block";
}, 6000);

setTimeout(function() {
    document.getElementById("frame11").remove();
    document.getElementById("frame12").style.display = "flex";
    document.getElementById("frame12-over-frame").style.display = "flex";
    document.getElementById("frame12-hearts").style.display = "block";
}, 6250);

setTimeout(function() {
    document.getElementById("frame12-hearts").remove();
    document.getElementById("frame12").remove();
    document.getElementById("frame12-over-frame").remove();
}, 7250);



