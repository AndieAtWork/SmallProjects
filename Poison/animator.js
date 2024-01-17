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
    document.getElementById("frame10AddOn").style.display = "block";
    document.getElementById("frame10Hearts").style.display = "block";
}, 2000);

setTimeout(function() {
    console.log("heart")
    var html =  '<div class="col-lg-12 heart-container" style="height: 100%;">'+
                    '<img id="heart1" class="hearts" src="imgs/heart1.png">' +
                '</div>';
    document.getElementById("frame10Hearts").innerHTML = document.getElementById("frame10Hearts").innerHTML + html;
}, 3000);
setTimeout(function() {
    console.log("heart")
    var html =  '<div class="col-lg-12 heart-container" style="height: 100%;">'+
                    '<img id="heart2" class="hearts" src="imgs/heart2.png">' +
                '</div>';
                document.getElementById("frame10Hearts").innerHTML = document.getElementById("frame10Hearts").innerHTML + html;
}, 4000);
setTimeout(function() {
    console.log("heart")
    var html =  '<div class="col-lg-12 heart-container" style="height: 100%;">'+
                    '<img id="heart3" class="hearts" src="imgs/heart1.png">' +
                '</div>';
                document.getElementById("frame10Hearts").innerHTML = document.getElementById("frame10Hearts").innerHTML + html;
}, 5000);
setTimeout(function() {
    console.log("heart")
    var html =  '<div class="col-lg-12 heart-container" style="height: 100%;">'+
                    '<img id="heart4" class="hearts" src="imgs/heart2.png">' +
                '</div>';
                document.getElementById("frame10Hearts").innerHTML = document.getElementById("frame10Hearts").innerHTML + html;
}, 6000);
